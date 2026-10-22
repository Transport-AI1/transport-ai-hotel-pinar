"use client";

import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BedDouble,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Coffee,
  Heart,
  Menu,
  MessageCircle,
  Send,
  Sparkles,
  Waves,
  X,
} from "lucide-react";

type Message = { role: "assistant" | "user"; text: string };

const quickQuestions = [
  "¿Qué servicios ofrece el hotel?",
  "¿Hay habitaciones con jacuzzi?",
  "¿Puedo venir con mi mascota?",
  "¿Cómo puedo reservar?",
];

function getReply(question: string) {
  const q = question.toLowerCase();

  if (q.includes("mascota") || q.includes("perro") || q.includes("animal")) {
    return "¡Buena pregunta! La política sobre mascotas debe confirmarse directamente con el hotel, ya que puede variar según la habitación y las condiciones de la estancia. ¿Quieres que te indique cómo contactar con el equipo?";
  }
  if (q.includes("jacuzzi") || q.includes("piscina") || q.includes("suite")) {
    return "El hotel puede ofrecer distintas opciones de alojamiento y servicios especiales. Para confirmar qué suites incluyen jacuzzi o piscina privada y sus condiciones, lo mejor es consultar la ficha de la habitación o contactar con el equipo. Esta demo no consulta disponibilidad real.";
  }
  if (q.includes("desayuno") || q.includes("comida") || q.includes("café")) {
    return "El desayuno y los posibles extras dependen de las condiciones de la estancia. Puedo orientarte, pero el horario, el precio y si se sirve en la habitación deben confirmarse con el hotel antes de reservar.";
  }
  if (q.includes("horario") || q.includes("llegada") || q.includes("check") || q.includes("entrada")) {
    return "Los horarios de entrada y salida deben confirmarse con el establecimiento, especialmente si necesitas llegar antes o más tarde de lo habitual. El equipo podrá indicarte las opciones disponibles.";
  }
  if (q.includes("reserv") || q.includes("disponibilidad") || q.includes("fecha") || q.includes("precio")) {
    return "¡Te ayudamos con tu estancia! Para confirmar precios, fechas y disponibilidad reales, contacta directamente con el hotel a través de sus canales oficiales. Este asistente es una demostración y todavía no está conectado al motor de reservas.";
  }
  if (q.includes("persona") || q.includes("equipo") || q.includes("contact")) {
    return "Por supuesto. Si tu consulta requiere confirmación del hotel, te recomendamos contactar directamente con su equipo. En una integración real, este asistente podría facilitar el canal de contacto acordado y derivar consultas que necesiten atención humana.";
  }
  return "Puedo ayudarte con preguntas sobre habitaciones, servicios, desayuno, horarios y reservas. Ten en cuenta que esta es una demo conceptual: para no darte información incorrecta, las condiciones concretas deben confirmarse con el equipo del hotel.";
}

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "¡Hola! 👋 Soy el asistente virtual de Hotel Boutique Pinar en esta demo de Transport AI. ¿En qué puedo ayudarte con tu próxima estancia?",
    },
  ]);

  const chatLabel = useMemo(
    () => (messages.length > 1 ? "Continuar conversación" : "Hablar con el asistente"),
    [messages.length],
  );

  function sendMessage(text: string) {
    const clean = text.trim();
    if (!clean) return;
    setMessages((current) => [
      ...current,
      { role: "user", text: clean },
      { role: "assistant", text: getReply(clean) },
    ]);
    setInput("");
    setChatOpen(true);
  }

  return (
    <main>
      <div className="demo-banner">
        <Sparkles size={14} />
        <span>DEMOSTRACIÓN CONCEPTUAL · DESARROLLADA POR TRANSPORT AI</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Hotel Boutique Pinar, inicio">
          <span className="brand-mark">P</span>
          <span className="brand-copy">
            <strong>HOTEL BOUTIQUE PINAR</strong>
            <small>UNA ESTANCIA PARA RECORDAR</small>
          </span>
        </a>
        <button
          className="mobile-toggle"
          aria-label={mobileMenu ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={mobileMenu ? "nav nav-open" : "nav"}>
          <a href="#experiencia" onClick={() => setMobileMenu(false)}>La experiencia</a>
          <a href="#servicios" onClick={() => setMobileMenu(false)}>Servicios</a>
          <a href="#preguntas" onClick={() => setMobileMenu(false)}>Preguntas frecuentes</a>
          <button className="nav-cta" onClick={() => setChatOpen(true)}>
            <MessageCircle size={16} /> Consultar al asistente
          </button>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-image" role="img" aria-label="Suite boutique con piscina privada y vegetación">
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <p className="eyebrow"><span /> UN REFUGIO PARA DESCONECTAR</p>
          <h1>Tu próxima escapada empieza <em>aquí.</em></h1>
          <p className="hero-description">
            Descubre una experiencia pensada para bajar el ritmo, cuidar los detalles y disfrutar de cada momento.
          </p>
          <div className="hero-actions">
            <button className="button button-light" onClick={() => setChatOpen(true)}>
              Pregunta al asistente <ArrowRight size={17} />
            </button>
            <a className="text-link" href="#experiencia">Descubrir la experiencia <ArrowDownRight size={17} /></a>
          </div>
          <div className="hero-note"><Sparkles size={15} /> ¿Tienes dudas? Nuestro asistente virtual puede orientarte.</div>
        </div>
        <div className="hero-side-note">HOSPITALIDAD · CALMA · DETALLES</div>
      </section>

      <section className="intro section" id="experiencia">
        <div className="intro-label"><span>01</span> LA EXPERIENCIA</div>
        <div className="intro-main">
          <p className="eyebrow">MÁS QUE UNA ESTANCIA</p>
          <h2>Pequeños detalles.<br /><em>Grandes recuerdos.</em></h2>
          <p className="intro-copy">
            Una escapada especial se construye con comodidad, tranquilidad y respuestas claras. Explora los servicios y utiliza el asistente para resolver tus dudas antes de organizar la visita.
          </p>
          <button className="underlined-button" onClick={() => setChatOpen(true)}>Resuelve tus dudas <ArrowRight size={17} /></button>
        </div>
        <div className="intro-image image-lounge">
          <div className="image-caption"><span>01 / 03</span><strong>Tiempo para ti</strong></div>
        </div>
      </section>

      <section className="services section" id="servicios">
        <div className="section-heading">
          <div><p className="eyebrow">UNA ESTANCIA A TU MEDIDA</p><h2>Momentos que <em>se disfrutan.</em></h2></div>
          <p>Consulta con el asistente cualquier duda sobre los servicios, las condiciones de estancia o cómo dar el siguiente paso.</p>
        </div>
        <div className="service-grid">
          <article className="service-card">
            <div className="service-image service-suite" />
            <div className="service-meta"><span>01 / ALOJAMIENTO</span><BedDouble size={19} /></div>
            <h3>Suites con encanto</h3>
            <p>Encuentra la opción que mejor encaje con tu idea de escapada.</p>
            <button onClick={() => sendMessage("¿Qué habitaciones y suites hay disponibles?")}>Consultar habitaciones <ArrowRight size={15} /></button>
          </article>
          <article className="service-card">
            <div className="service-image service-water" />
            <div className="service-meta"><span>02 / RELAX</span><Waves size={19} /></div>
            <h3>Momentos de bienestar</h3>
            <p>Pregunta por las opciones con jacuzzi, piscina privada y sus condiciones.</p>
            <button onClick={() => sendMessage("¿Hay habitaciones con jacuzzi o piscina privada?")}>Consultar opciones <ArrowRight size={15} /></button>
          </article>
          <article className="service-card">
            <div className="service-image service-breakfast" />
            <div className="service-meta"><span>03 / DETALLES</span><Coffee size={19} /></div>
            <h3>Detalles especiales</h3>
            <p>Infórmate sobre desayuno, extras y servicios para preparar tu visita.</p>
            <button onClick={() => sendMessage("¿Cómo funciona el desayuno y qué extras hay?")}>Consultar servicios <ArrowRight size={15} /></button>
          </article>
        </div>
        <p className="accuracy-note"><Check size={15} /> La información concreta sobre servicios y condiciones debe confirmarse con el hotel.</p>
      </section>

      <section className="assistant-promo">
        <div className="promo-decoration"><Sparkles size={28} /></div>
        <p className="eyebrow">ESTAMOS AQUÍ PARA AYUDARTE</p>
        <h2>Tu escapada, con respuestas <em>al instante.</em></h2>
        <p>Pregunta por habitaciones, servicios o reservas. El asistente te orientará y te indicará cuándo necesitas confirmación del equipo.</p>
        <button className="button button-dark" onClick={() => setChatOpen(true)}>{chatLabel} <ArrowRight size={17} /></button>
        <span className="promo-footnote"><Clock3 size={14} /> Asistente de demostración · Sin conexión a reservas reales</span>
      </section>

      <section className="faq section" id="preguntas">
        <div className="faq-title"><p className="eyebrow">ANTES DE TU VISITA</p><h2>Preguntas <em>frecuentes.</em></h2><p>¿No encuentras tu respuesta? Pregúntale al asistente.</p><button className="underlined-button" onClick={() => setChatOpen(true)}>Abrir asistente <ArrowRight size={17} /></button></div>
        <div className="faq-list">
          {[
            ["¿Cómo puedo consultar disponibilidad?", "El asistente puede orientarte, pero las fechas, tarifas y disponibilidad reales deben confirmarse en el canal oficial de reservas del hotel."],
            ["¿Puedo solicitar un horario especial de llegada?", "Las solicitudes especiales dependen de las condiciones del establecimiento. El equipo del hotel debe confirmar si puede atenderlas."],
            ["¿Dónde consulto la política de mascotas?", "La política de mascotas debe confirmarse directamente con el hotel antes de reservar."],
            ["¿Puedo pedir desayuno o algún extra?", "Pregunta al asistente por las opciones y confirma con el equipo del hotel los precios, horarios y condiciones aplicables."],
          ].map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={17} /></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark">P</span><span className="brand-copy"><strong>HOTEL BOUTIQUE PINAR</strong><small>UNA ESTANCIA PARA RECORDAR</small></span></a>
        <p>Experiencia web conceptual para presentación privada.</p>
        <a href="https://transport-ai-web.vercel.app/" target="_blank" rel="noreferrer">Tecnología por Transport AI <ArrowRight size={14} /></a>
      </footer>

      <button className="chat-launcher" aria-label="Abrir asistente virtual" onClick={() => setChatOpen(true)}>
        <MessageCircle size={22} /><span>¿Te ayudamos?</span>
      </button>

      {chatOpen && (
        <div className="chat-panel" role="dialog" aria-modal="false" aria-label="Asistente virtual de Hotel Boutique Pinar">
          <div className="chat-header">
            <div className="assistant-avatar"><Sparkles size={18} /></div>
            <div className="chat-header-copy"><strong>Asistente Pinar</strong><span><i /> Disponible en esta demo</span></div>
            <button className="chat-close" aria-label="Cerrar asistente" onClick={() => setChatOpen(false)}><X size={20} /></button>
          </div>
          <div className="chat-demo-alert">DEMO · No consulta disponibilidad ni realiza reservas reales.</div>
          <div className="chat-messages" aria-live="polite">
            {messages.map((message, index) => (
              <div className={`chat-message ${message.role}`} key={`${index}-${message.role}`}>
                {message.text}
              </div>
            ))}
            {messages.length === 1 && <div className="quick-questions">{quickQuestions.map((question) => <button key={question} onClick={() => sendMessage(question)}>{question} <ArrowRight size={13} /></button>)}</div>}
          </div>
          <form className="chat-form" onSubmit={(event) => { event.preventDefault(); sendMessage(input); }}>
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Escribe tu pregunta..." aria-label="Escribe tu pregunta" />
            <button aria-label="Enviar mensaje" type="submit" disabled={!input.trim()}><Send size={18} /></button>
          </form>
          <div className="chat-powered">Una demo de atención inteligente · <strong>Transport AI</strong></div>
        </div>
      )}
      <div className="floating-heart" aria-hidden="true"><Heart size={16} /></div>
      <div className="date-tag" aria-hidden="true"><CalendarDays size={15} /> TU PRÓXIMA ESCAPADA</div>
    </main>
  );
}
