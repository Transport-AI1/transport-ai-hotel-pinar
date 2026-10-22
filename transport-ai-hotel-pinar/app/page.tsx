"use client";

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
  Sparkles,
  Waves,
  X,
} from "lucide-react";
import { useState } from "react";
import VoiceflowWidget from "./components/VoiceflowWidget";
import { openVoiceflowChat } from "./components/voiceflow-control";

const suites = [
  {
    number: "01",
    name: "Suite Jacuzzi",
    description:
      "Una estancia íntima para desconectar, relajarse y disfrutar de una experiencia especial.",
    features: ["Jacuzzi interior", "Desayuno incluido", "Suite privada"],
    icon: Waves,
  },
  {
    number: "02",
    name: "Suite Piscina Privada",
    description:
      "Un espacio pensado para disfrutar de privacidad, tranquilidad y una escapada diferente.",
    features: ["Piscina privada", "Desayuno incluido", "Entorno natural"],
    icon: BedDouble,
  },
  {
    number: "03",
    name: "Escapada Romántica",
    description:
      "Una propuesta para parejas que buscan una experiencia especial lejos de la rutina.",
    features: ["Privacidad", "Ambiente acogedor", "Atención personalizada"],
    icon: Heart,
  },
];

const faqs = [
  {
    question: "¿Dónde se encuentra el hotel?",
    answer:
      "Hotel Boutique Pinar se encuentra en Jábaga, cerca de Cuenca, en un entorno natural ideal para desconectar.",
  },
  {
    question: "¿El desayuno está incluido?",
    answer:
      "La información disponible indica que el desayuno está incluido y se sirve en la habitación.",
  },
  {
    question: "¿Hay conexión Wi-Fi y aparcamiento?",
    answer:
      "Sí. El hotel ofrece Wi-Fi gratuito y aparcamiento privado.",
  },
  {
    question: "¿Cómo puedo consultar disponibilidad y precios?",
    answer:
      "Puedes utilizar el asistente virtual para preparar una solicitud de reserva. Los precios y la disponibilidad definitiva deben confirmarse con el hotel.",
  },
];

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  function goToSuites() {
    document
      .getElementById("suites")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f6f1] text-[#26372e]">
      <VoiceflowWidget />

      <div className="bg-[#26372e] px-4 py-2 text-center text-xs tracking-[0.15em] text-white sm:text-sm">
        UNA ESCAPADA PARA DESCONECTAR · JÁBAGA, CUENCA
      </div>

      <header className="relative z-20 border-b border-[#26372e]/10 bg-[#f8f6f1]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <a href="#" className="leading-tight">
            <span className="block font-serif text-2xl tracking-wide">
              HOTEL BOUTIQUE
            </span>
            <span className="mt-1 block text-center text-[10px] tracking-[0.42em]">
              PINAR
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a className="transition hover:text-[#a17d52]" href="#experiencia">
              La experiencia
            </a>
            <a className="transition hover:text-[#a17d52]" href="#suites">
              Suites
            </a>
            <a className="transition hover:text-[#a17d52]" href="#servicios">
              Servicios
            </a>
            <a className="transition hover:text-[#a17d52]" href="#preguntas">
              Preguntas frecuentes
            </a>
          </nav>

          <button
            onClick={openVoiceflowChat}
            className="hidden items-center gap-2 bg-[#26372e] px-5 py-3 text-sm text-white transition hover:bg-[#405647] md:flex"
          >
            Consultar estancia
            <ArrowRight size={16} />
          </button>

          <button
            aria-label={mobileMenu ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMobileMenu(!mobileMenu)}
            className="p-2 md:hidden"
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenu && (
          <nav className="flex flex-col gap-4 border-t border-[#26372e]/10 px-6 py-5 md:hidden">
            <a href="#experiencia" onClick={() => setMobileMenu(false)}>
              La experiencia
            </a>
            <a href="#suites" onClick={() => setMobileMenu(false)}>
              Suites
            </a>
            <a href="#servicios" onClick={() => setMobileMenu(false)}>
              Servicios
            </a>
            <a href="#preguntas" onClick={() => setMobileMenu(false)}>
              Preguntas frecuentes
            </a>
            <button
              onClick={() => {
                setMobileMenu(false);
                openVoiceflowChat();
              }}
              className="flex items-center justify-center gap-2 bg-[#26372e] px-5 py-3 text-white"
            >
              Consultar estancia <ArrowRight size={16} />
            </button>
          </nav>
        )}
      </header>

      <section className="relative flex min-h-[650px] items-center bg-[#35483a] text-white md:min-h-[760px]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#18251d]/90 via-[#26372e]/65 to-[#26372e]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18251d]/50 to-transparent" />
          <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(#ffffff_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-8 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-xs tracking-[0.3em] text-[#e4cba6] sm:text-sm">
              <span className="h-px w-10 bg-[#e4cba6]" />
              DESCANSO · NATURALEZA · PRIVACIDAD
            </p>

            <h1 className="max-w-3xl font-serif text-5xl leading-[1.08] sm:text-6xl md:text-8xl">
              Tu refugio para
              <span className="block italic text-[#e4cba6]">
                desconectar.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
              Descubre una escapada íntima en plena naturaleza, con suites
              privadas y detalles pensados para disfrutar sin prisas.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={openVoiceflowChat}
                className="inline-flex items-center justify-center gap-3 bg-[#e4cba6] px-7 py-4 font-medium text-[#26372e] transition hover:bg-white"
              >
                Planificar mi estancia
                <ArrowRight size={18} />
              </button>

              <button
                onClick={goToSuites}
                className="inline-flex items-center justify-center gap-3 border border-white/50 px-7 py-4 transition hover:bg-white/10"
              >
                Descubrir las suites
                <ArrowDownRight size={18} />
              </button>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 text-sm text-white/85">
              <span className="flex items-center gap-2">
                <Check size={16} className="text-[#e4cba6]" />
                Desayuno en la habitación
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-[#e4cba6]" />
                Wi-Fi gratuito
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-[#e4cba6]" />
                Aparcamiento privado
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 hidden items-center gap-3 text-xs tracking-[0.25em] text-white/70 md:flex">
          <span>01</span>
          <span className="h-px w-12 bg-white/50" />
          <span>DESCUBRE PINAR</span>
        </div>
      </section>

      <section id="experiencia" className="px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center md:gap-20">
          <div>
            <p className="mb-5 text-xs tracking-[0.3em] text-[#98774e]">
              UN LUGAR PARA TI
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              Menos ruido.
              <span className="block italic text-[#98774e]">
                Más momentos.
              </span>
            </h2>

            <p className="mt-7 leading-8 text-[#647168]">
              A veces, lo que necesitas es alejarte de la rutina. Hotel
              Boutique Pinar ofrece un entorno natural cerca de Cuenca para
              descansar, disfrutar de la intimidad y dedicar tiempo a lo
              verdaderamente importante.
            </p>

            <p className="mt-4 leading-8 text-[#647168]">
              Tanto si buscas una escapada en pareja como unos días de
              tranquilidad, descubre una experiencia que invita a bajar el
              ritmo y disfrutar de cada instante.
            </p>

            <button
              onClick={openVoiceflowChat}
              className="mt-8 inline-flex items-center gap-3 border-b border-[#26372e] pb-2 text-sm transition hover:text-[#98774e]"
            >
              Encuentra tu escapada ideal <ArrowRight size={17} />
            </button>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-[#d8d8c7] p-5 sm:p-8">
              <div className="flex h-full flex-col justify-between border border-[#26372e]/25 p-6 sm:p-10">
                <div className="flex items-center gap-3">
                  <Sparkles size={22} />
                  <span className="text-xs tracking-[0.25em]">
                    UNA EXPERIENCIA DIFERENTE
                  </span>
                </div>

                <div>
                  <p className="font-serif text-4xl italic sm:text-5xl">
                    Respira.
                  </p>
                  <p className="mt-2 font-serif text-4xl italic sm:text-5xl">
                    Descansa.
                  </p>
                  <p className="mt-2 font-serif text-4xl italic text-[#98774e] sm:text-5xl">
                    Disfruta.
                  </p>
                </div>

                <p className="max-w-xs text-sm leading-7 text-[#526156]">
                  Tu próxima escapada empieza con una conversación.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 hidden bg-[#26372e] p-5 text-white sm:block md:-left-6 md:p-7">
              <p className="font-serif text-3xl italic">Pinar</p>
              <p className="mt-1 text-xs tracking-[0.2em]">JÁBAGA · CUENCA</p>
            </div>
          </div>
        </div>
      </section>

      <section id="suites" className="bg-[#eeece4] px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs tracking-[0.3em] text-[#98774e]">
                DESCUBRE TU ESPACIO
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl">
                Una estancia a tu medida.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[#647168]">
              Explora las experiencias disponibles y consulta con nuestro
              asistente qué opción encaja mejor con tu escapada.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {suites.map((suite) => {
              const Icon = suite.icon;

              return (
                <article
                  key={suite.number}
                  className="group flex flex-col border border-[#26372e]/10 bg-[#f8f6f1] p-7 transition hover:-translate-y-1 hover:shadow-xl sm:p-9"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-xs tracking-[0.25em] text-[#98774e]">
                      EXPERIENCIA {suite.number}
                    </span>
                    <Icon
                      size={25}
                      strokeWidth={1.3}
                      className="text-[#98774e]"
                    />
                  </div>

                  <div className="mb-7 flex aspect-[5/3] items-center justify-center bg-[#dcded2]">
                    <Icon
                      size={64}
                      strokeWidth={0.8}
                      className="text-[#526156] transition group-hover:scale-110"
                    />
                  </div>

                  <h3 className="font-serif text-2xl">{suite.name}</h3>
                  <p className="mt-4 min-h-20 leading-7 text-[#647168]">
                    {suite.description}
                  </p>

                  <ul className="mt-5 space-y-3 border-t border-[#26372e]/10 pt-5 text-sm text-[#526156]">
                    {suite.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check size={15} className="text-[#98774e]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={openVoiceflowChat}
                    className="mt-8 flex items-center justify-between border-t border-[#26372e]/10 pt-5 text-left text-sm transition hover:text-[#98774e]"
                  >
                    Consultar esta opción <ArrowRight size={17} />
                  </button>
                </article>
              );
            })}
          </div>

          <p className="mt-7 text-xs leading-6 text-[#647168]">
            Las opciones anteriores son una presentación orientativa de la
            demo. Confirma con el hotel el nombre exacto de cada suite, sus
            características, tarifas y disponibilidad.
          </p>
        </div>
      </section>

      <section id="servicios" className="px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-xs tracking-[0.3em] text-[#98774e]">
              PEQUEÑOS DETALLES
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl">
              Todo pensado para descansar.
            </h2>
            <p className="mt-5 leading-7 text-[#647168]">
              Comodidad y privacidad para que puedas centrarte en disfrutar
              de tu estancia.
            </p>
          </div>

          <div className="grid gap-px bg-[#26372e]/10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-[#f8f6f1] p-8 text-center">
              <Coffee className="mx-auto mb-5 text-[#98774e]" size={29} />
              <h3 className="font-serif text-xl">Desayuno incluido</h3>
              <p className="mt-3 text-sm leading-6 text-[#647168]">
                Desayuno servido en la habitación.
              </p>
            </div>

            <div className="bg-[#f8f6f1] p-8 text-center">
              <Waves className="mx-auto mb-5 text-[#98774e]" size={29} />
              <h3 className="font-serif text-xl">Espacios privados</h3>
              <p className="mt-3 text-sm leading-6 text-[#647168]">
                Opciones con jacuzzi interior o piscina privada.
              </p>
            </div>

            <div className="bg-[#f8f6f1] p-8 text-center">
              <Sparkles className="mx-auto mb-5 text-[#98774e]" size={29} />
              <h3 className="font-serif text-xl">Entorno natural</h3>
              <p className="mt-3 text-sm leading-6 text-[#647168]">
                Una ubicación para alejarse del ritmo diario.
              </p>
            </div>

            <div className="bg-[#f8f6f1] p-8 text-center">
              <BedDouble className="mx-auto mb-5 text-[#98774e]" size={29} />
              <h3 className="font-serif text-xl">Comodidad</h3>
              <p className="mt-3 text-sm leading-6 text-[#647168]">
                Wi-Fi gratuito y aparcamiento privado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#26372e] px-6 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-9 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs tracking-[0.3em] text-[#e4cba6]">
              TU PRÓXIMA ESCAPADA
            </p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              ¿Empezamos a planificarla?
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-white/70">
              Cuéntanos qué fechas tienes en mente y qué tipo de estancia
              buscas. El asistente te ayudará a preparar tu solicitud.
            </p>
          </div>

          <button
            onClick={openVoiceflowChat}
            className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#e4cba6] px-7 py-4 font-medium text-[#26372e] transition hover:bg-white"
          >
            Hablar con el asistente <MessageCircle size={18} />
          </button>
        </div>
      </section>

      <section id="preguntas" className="px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <p className="mb-4 text-xs tracking-[0.3em] text-[#98774e]">
              PREGUNTAS FRECUENTES
            </p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Resolvemos tus dudas.
            </h2>
            <p className="mt-5 leading-7 text-[#647168]">
              ¿Necesitas algo más específico? Pregunta directamente al
              asistente virtual.
            </p>
            <button
              onClick={openVoiceflowChat}
              className="mt-7 inline-flex items-center gap-3 border-b border-[#26372e] pb-2 text-sm hover:text-[#98774e]"
            >
              Hacer una consulta <ArrowRight size={17} />
            </button>
          </div>

          <div className="border-t border-[#26372e]/15">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="border-b border-[#26372e]/15">
                <button
                  className="flex w-full items-center justify-between gap-5 py-6 text-left"
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  aria-expanded={openFaq === index}
                >
                  <span className="font-serif text-lg sm:text-xl">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <p className="max-w-2xl pb-6 leading-7 text-[#647168]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#26372e]/10 bg-[#eeece4] px-6 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-2xl">Hotel Boutique Pinar</p>
            <p className="mt-1 text-sm text-[#647168]">Jábaga · Cuenca</p>
          </div>

          <button
            onClick={openVoiceflowChat}
            className="inline-flex items-center gap-2 text-sm hover:text-[#98774e]"
          >
            <MessageCircle size={17} />
            Consulta con el asistente
          </button>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-[#26372e]/10 pt-5 text-xs leading-6 text-[#647168]">
          Demo de presentación desarrollada por Transport AI. Las solicitudes
          de esta demostración no constituyen una reserva confirmada.
        </div>
      </section>

      <button
        onClick={openVoiceflowChat}
        aria-label="Abrir asistente virtual"
        className="fixed bottom-5 right-5 z-30 flex items-center gap-3 rounded-full bg-[#26372e] px-5 py-4 text-sm text-white shadow-xl transition hover:bg-[#405647]"
      >
        <MessageCircle size={21} />
        <span>¿Te ayudo?</span>
      </button>
    </main>
  );
}
