export function openVoiceflowChat() {
  if (typeof window === "undefined") return;

  const voiceflow = (
    window as Window & {
      voiceflow?: {
        chat?: {
          open?: () => void;
        };
      };
    }
  ).voiceflow;

  if (voiceflow?.chat?.open) {
    voiceflow.chat.open();
  } else {
    console.warn(
      "Voiceflow todavía está cargando. Inténtalo de nuevo en unos segundos."
    );
  }
}
