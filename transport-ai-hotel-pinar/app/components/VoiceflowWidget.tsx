"use client";

import { useEffect } from "react";

type VoiceflowChat = {
  load: (config: {
    verify: { projectID: string };
    url: string;
    voice: { url: string };
    environmentID: string;
    versionVariant: string;
  }) => void;
  open: () => void;
};

declare global {
  interface Window {
    voiceflow?: {
      chat: VoiceflowChat;
    };
  }
}

export function openVoiceflowChat() {
  window.voiceflow?.chat?.open();
}

export default function VoiceflowWidget() {
  useEffect(() => {
    let cancelled = false;

    const loadChat = () => {
      if (cancelled || !window.voiceflow?.chat) return;

      window.voiceflow.chat.load({
        verify: {
          projectID: "6ae0a2f3962ce80b363e1a8c",
        },
        url: "https://general-runtime.voiceflow.com",
        voice: {
          url: "https://runtime-api.voiceflow.com",
        },
        environmentID: "main",
        versionVariant: "published",
      });
    };

    const existingScript = document.querySelector(
      'script[data-voiceflow-widget="true"]',
    );

    if (existingScript) {
      if (window.voiceflow?.chat) {
        loadChat();
      } else {
        existingScript.addEventListener("load", loadChat, {
          once: true,
        });
      }

      return () => {
        cancelled = true;
        existingScript.removeEventListener("load", loadChat);
      };
    }

    const script = document.createElement("script");
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.type = "text/javascript";
    script.async = true;
    script.dataset.voiceflowWidget = "true";
    script.onload = loadChat;

    document.body.appendChild(script);

    return () => {
      cancelled = true;
      script.onload = null;
    };
  }, []);

  return null;
}
