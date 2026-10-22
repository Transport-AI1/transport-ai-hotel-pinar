
"use client";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";
import { useState } from "react";
import VoiceflowWidget from "./components/VoiceflowWidget";
import { openVoiceflowChat } from "./components/voiceflow-control";

const official = "https://hotelboutiquepinar.es";

const photos = {
  exterior:
    "https://hotelboutiquepinar.es/wp-content/uploads/Tulipan-4-1.jpg",
  pool:
    "https://hotelboutiquepinar.es/wp-content/uploads/Patio-de-hotel-con-piscina-turquesa.jpg",
  jacuzzi:
    "https://hotelboutiquepinar.es/wp-content/uploads/hotel-boutique-pinar-mimosa-2e.jpg",
  bedroom:
    "https://hotelboutiquepinar.es/wp-content/uploads/Peonia05-copia.jpg",
  bedroomTwo:
    "https://hotelboutiquepinar.es/wp-content/uploads/hotel-pinar-Olympia-j-1.jpg",
  suite:
    "https://hotelboutiquepinar.es/wp-content/uploads/hotel-pinar-cuenca-Pinar-Dalia-d-1.jpg",
};

const suites = [
  {
    name: "Magnolia",
    detail: "Piscina privada · Bañera de diseño",
    description:
      "Una suite luminosa con piscina privada y una bañera de diseño para disfrutar del tiempo sin mirar el reloj.",
    href: `${official}/suite-magnolia/`,
    image: photos.bedroom,
  },
  {
    name: "Mimosa",
    detail: "Jacuzzi · Terraza · Piscina",
    description:
      "Un espacio íntimo que combina jacuzzi, chimenea y conexión con el jardín privado.",
    href: `${official}/suite-mimosa/`,
    image: photos.jacuzzi,
  },
  {
    name: "Jazmín",
    detail: "Jacuzzi · Terraza privada",
    description:
      "Un refugio de diseño con jacuzzi interior y una atmósfera pensada para desconectar.",
    href: `${official}/suite-jazmin/`,
    image: photos.bedroomTwo,
  },
];

const faqs = [
  {
    q: "¿Dónde está situado Hotel Boutique Pinar?",
    a: "Se encuentra en Camino de la Pernala, Jábaga, Cuenca, en un entorno natural rodeado de pinos.",
  },
  {
    q: "¿Todas las suites tienen piscina privada?",
    a: "Las prestaciones varían según el alojamiento. El hotel dispone de suites con piscina privada y otras con jacuzzi interior. Consulta la ficha oficial de cada habitación.",
  },
  {
    q: "¿El desayuno está incluido?",
    a: "El hotel indica que el desayuno está incluido en la reserva y se sirve en la habitación.",
  },
  {
    q: "¿Cómo consulto precios y disponibilidad?",
    a: "Puedes abrir el asistente virtual para preparar tu consulta o acceder a la web oficial para comprobar las condiciones de reserva.",
  },
];

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="overflow-hidden bg-[#f7f5f0] text-[#252921]">
      <VoiceflowWidget />

      {/* Barra de navegación */}
      <header className="relative z-40 bg-[#f7f5f0]">
        <div className="mx-auto flex h-[82px] max-w-[1600px] items-center justify-between px-5 sm:px-9 lg:px-16">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="font-serif text-4xl italic leading-none text-[#58654b]">
              P.
            </span>
            <span className="border-l border-[#b9b3a5] pl-3">
              <span className="block text-[11px] tracking-[0.22em]">
                HOTEL BOUTIQUE
              </span>
              <span className="mt-1 block text-[9px] tracking-[0.52em] text-[#777667]">
                PINAR
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-[12px] tracking-wide lg:flex">
            <a className="hover:text-[#8c7959]" href="#hotel">
              El hotel
            </a>
            <a className="hover:text-[#8c7959]" href="#suites">
              Suites
            </a>
            <a className="hover:text-[#8c7959]" href="#experiencia">
              La experiencia
            </a>
            <a className="hover:text-[#8c7959]" href="#preguntas">
              Información
            </a>
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <button
              onClick={openVoiceflowChat}
              className="text-[12px] transition hover:text-[#8c7959]"
            >
              Asistente virtual
            </button>
            <a
              href={official}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#303c2e] px-5 py-3.5 text-[11px] tracking-wide text-white transition hover:bg-[#465541]"
            >
              CONSULTAR ESTANCIA <ArrowUpRight size={15} />
            </a>
          </div>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={mobileMenu ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenu ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {mobileMenu && (
          <nav className="absolute left-0 right-0 top-full flex flex-col border-t border-black/10 bg-[#f7f5f0] px-6 py-4 shadow-xl lg:hidden">
            {[
              ["El hotel", "#hotel"],
              ["Suites", "#suites"],
              ["La experiencia", "#experiencia"],
              ["Información", "#preguntas"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenu(false)}
                className="border-b border-black/10 py-4 text-sm"
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenu(false);
                openVoiceflowChat();
              }}
              className="mt-4 bg-[#303c2e] px-5 py-4 text-sm text-white"
            >
              Consultar estancia
            </button>
          </nav>
        )}
      </header>

      {/* Portada */}
      <section
        id="inicio"
        className="relative isolate flex min-h-[680px] items-end bg-[#28352a] text-white sm:min-h-[760px] lg:min-h-[calc(100svh-82px)]"
      >
        <img
          src={photos.exterior}
          alt="Espacio exterior y piscina privada del Hotel Boutique Pinar"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#172019]/75 via-[#172019]/35 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#172019]/65 via-transparent to-[#172019]/10" />

        <div className="mx-auto w-full max-w-[1600px] px-6 pb-16 pt-28 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
          <div className="max-w-4xl">
            <p className="mb-8 flex items-center gap-4 text-[10px] tracking-[0.32em] text-[#e5d6b9] sm:text-xs">
              <span className="h-px w-12 bg-[#e5d6b9]" />
              JÁBAGA · CUENCA · ESPAÑA
            </p>

            <h1 className="font-serif text-[4rem] font-normal leading-[0.94] tracking-[-0.045em] sm:text-7xl lg:text-[clamp(76px,9vw,142px)]">
              El lujo de
              <span className="block italic text-[#e5d6b9]">
                parar.
              </span>
            </h1>

            <div className="mt-8 grid gap-7 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-md text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
                Un refugio entre pinos, suites privadas y pequeños detalles
                que convierten una escapada en tiempo para ti.
              </p>
              <a
                href="#hotel"
                className="inline-flex w-fit items-center gap-4 border-b border-white/60 pb-3 text-[11px] tracking-[0.16em] transition hover:border-[#e5d6b9] hover:text-[#e5d6b9]"
              >
                DESCUBRIR PINAR <ArrowDown size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden text-[10px] tracking-[0.22em] text-white/70 md:block">
          UNA ESTANCIA A TU PROPIO RITMO
        </div>
      </section>

      {/* Introducción editorial */}
      <section id="hotel" className="px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="mb-6 text-[10px] tracking-[0.28em] text-[#8d795b]">
              UNA IDEA DE HOSPITALIDAD
            </p>
            <h2 className="font-serif text-4xl font-normal leading-[1.12] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Fuera, el pinar.
              <span className="mt-2 block italic text-[#7d8972]">
                Dentro, tu mundo.
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-2xl text-base leading-8 text-[#686b60]">
              Hotel Boutique Pinar propone otra manera de alojarse cerca de
              Cuenca: espacios independientes, personalidad propia y
              privacidad para disfrutar sin prisas.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#77786d]">
              Cada suite ofrece una experiencia diferente. Piscina privada,
              jacuzzi, bañera de diseño o chimenea, según el alojamiento.
            </p>
            <a
              href={`${official}/hotel/`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-3 border-b border-[#303c2e]/30 pb-2 text-xs tracking-wide hover:text-[#8d795b]"
            >
              CONOCE EL HOTEL <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Galería asimétrica */}
        <div className="mx-auto mt-16 grid max-w-[1400px] grid-cols-12 gap-3 sm:mt-24 sm:gap-5">
          <div className="col-span-12 sm:col-span-7">
            <img
              src={photos.pool}
              alt="Piscina exterior del Hotel Boutique Pinar"
              loading="lazy"
              className="h-[300px] w-full object-cover sm:h-[490px] lg:h-[620px]"
            />
          </div>
          <div className="col-span-7 sm:col-span-5 sm:mt-24">
            <img
              src={photos.jacuzzi}
              alt="Interior con jacuzzi de una estancia del hotel"
              loading="lazy"
              className="h-[220px] w-full object-cover sm:h-[350px] lg:h-[440px]"
            />
            <p className="mt-4 text-[9px] tracking-[0.23em] text-[#77786d] sm:mt-6 sm:text-[10px]">
              ESPACIOS PARA DESCONECTAR
            </p>
          </div>
          <div className="col-span-5 sm:col-span-4 sm:-mt-20">
            <img
              src={photos.bedroomTwo}
              alt="Dormitorio de una estancia del Hotel Boutique Pinar"
              loading="lazy"
              className="h-[180px] w-full object-cover sm:h-[300px] lg:h-[360px]"
            />
          </div>
          <div className="col-span-7 flex items-end sm:col-span-8 sm:pb-8 sm:pl-8">
            <div className="max-w-xl">
              <span className="font-serif text-3xl italic text-[#7d8972] sm:text-5xl">
                Menos ruido.
              </span>
              <p className="mt-3 max-w-md text-sm leading-7 text-[#77786d] sm:mt-5 sm:text-base">
                Más intimidad, tiempo y pequeños momentos que se disfrutan
                mejor cuando no hay ninguna prisa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suites */}
      <section id="suites" className="bg-[#ebe8df] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <p className="mb-6 text-[10px] tracking-[0.28em] text-[#8d795b]">
                TU ESPACIO PRIVADO
              </p>
              <h2 className="font-serif text-4xl font-normal tracking-[-0.04em] sm:text-5xl lg:text-7xl">
                Elige cómo
                <span className="italic text-[#7d8972]"> desconectar.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#686b60]">
              Cada habitación tiene su propia identidad. Descubre algunas de
              las opciones y consulta sus detalles en la web del hotel.
            </p>
          </div>

          <div className="mt-14 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-x-8">
            {suites.map((suite, index) => (
              <article
                key={suite.name}
                className={index === 1 ? "lg:mt-16" : ""}
              >
                <a
                  href={suite.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block overflow-hidden"
                >
                  <img
                    src={suite.image}
                    alt={`Fotografía publicada por Hotel Boutique Pinar; consulta la ficha de ${suite.name} para ver sus imágenes y prestaciones exactas`}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                  <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f5f0] text-[#303c2e] transition group-hover:bg-[#303c2e] group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
                <div className="mt-6 flex items-start justify-between gap-3 border-b border-[#303c2e]/20 pb-5">
                  <div>
                    <p className="mb-2 text-[9px] tracking-[0.18em] text-[#8d795b]">
                      {suite.detail}
                    </p>
                    <h3 className="font-serif text-3xl sm:text-4xl">
                      Suite {suite.name}
                    </h3>
                  </div>
                  <span className="pt-1 font-serif text-sm text-[#8d795b]">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#686b60]">
                  {suite.description}
                </p>
                <a
                  href={suite.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-3 text-[10px] tracking-[0.14em] transition hover:text-[#8d795b]"
                >
                  EXPLORAR SUITE <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-16 border-t border-[#303c2e]/20 pt-7 sm:mt-20 sm:flex sm:items-center sm:justify-between">
            <p className="max-w-xl text-xs leading-6 text-[#77786d]">
              Fotografías de la web oficial. Consulta cada ficha para
              comprobar las características exactas de cada alojamiento.
            </p>
            <a
              href={`${official}/habitaciones-hotel/`}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-3 bg-[#303c2e] px-6 py-4 text-[10px] tracking-[0.15em] text-white transition hover:bg-[#465541] sm:mt-0"
            >
              VER TODAS LAS HABITACIONES <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section id="experiencia" className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[700px]">
          <img
            src={photos.suite}
            alt="Espacio interior con jacuzzi de una habitación del hotel"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center bg-[#303c2e] px-7 py-16 text-white sm:px-12 sm:py-24 lg:px-16 xl:px-24">
          <div className="max-w-xl">
            <p className="mb-6 text-[10px] tracking-[0.28em] text-[#d9c5a1]">
              DETALLES QUE HACEN LA ESTANCIA
            </p>
            <h2 className="font-serif text-4xl font-normal leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              No hace falta
              <span className="block italic text-[#d9c5a1]">
                ir más lejos.
              </span>
            </h2>
            <p className="mt-7 text-sm leading-8 text-white/70 sm:text-base">
              Desayuno servido en la habitación, conexión Wi-Fi, aparcamiento
              gratuito y espacios privados que cambian según la suite.
              Todo pensado para que la estancia tenga su propio ritmo.
            </p>
            <button
              onClick={openVoiceflowChat}
              className="mt-9 inline-flex items-center gap-4 border border-white/35 px-6 py-4 text-xs tracking-wide transition hover:bg-white/10"
            >
              ENCUENTRA TU ESTANCIA <MessageCircle size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* Reserva */}
      <section className="px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-24">
          <div>
            <p className="mb-6 text-[10px] tracking-[0.28em] text-[#8d795b]">
              TU PRÓXIMA ESCAPADA
            </p>
            <h2 className="font-serif text-4xl font-normal leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              El tiempo
              <span className="block italic text-[#7d8972]">
                es tuyo.
              </span>
            </h2>
            <p className="mt-7 max-w-lg text-sm leading-8 text-[#686b60] sm:text-base">
              Cuéntanos qué tienes en mente. El asistente virtual te ayudará
              a orientar tu consulta y encontrar la información adecuada
              antes de reservar.
            </p>
            <button
              onClick={openVoiceflowChat}
              className="mt-9 inline-flex items-center gap-4 bg-[#303c2e] px-7 py-5 text-xs tracking-wide text-white transition hover:bg-[#465541]"
            >
              HABLAR CON EL ASISTENTE <ArrowRight size={17} />
            </button>
          </div>

          <div className="relative">
            <img
              src={photos.exterior}
              alt="Piscina privada en Hotel Boutique Pinar"
              loading="lazy"
              className="aspect-[5/4] w-full object-cover"
            />
            <a
              href={official}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-0 right-0 flex max-w-[90%] items-center gap-5 bg-[#f7f5f0] p-5 sm:p-7"
            >
              <span>
                <span className="block text-[9px] tracking-[0.2em] text-[#8d795b]">
                  HOTEL BOUTIQUE PINAR
                </span>
                <span className="mt-2 block font-serif text-xl sm:text-2xl">
                  Consultar reserva
                </span>
              </span>
              <ArrowUpRight size={21} />
            </a>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section id="preguntas" className="border-t border-black/10 px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="mb-6 text-[10px] tracking-[0.28em] text-[#8d795b]">
              INFORMACIÓN
            </p>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              Antes de tu visita.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#77786d]">
              Si necesitas información concreta sobre una habitación o tu
              estancia, puedes consultar al asistente.
            </p>
            <button
              onClick={openVoiceflowChat}
              className="mt-7 inline-flex items-center gap-3 text-xs tracking-wide hover:text-[#8d795b]"
            >
              PREGUNTAR AL ASISTENTE <ArrowRight size={15} />
            </button>
          </div>

          <div className="border-t border-black/15">
            {faqs.map((faq, index) => (
              <div key={faq.q} className="border-b border-black/15">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  className="flex w-full items-center justify-between gap-5 py-6 text-left sm:py-7"
                >
                  <span className="font-serif text-lg sm:text-xl">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <p className="max-w-2xl pb-7 text-sm leading-7 text-[#77786d]">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#252f25] px-6 py-9 text-white sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="font-serif text-4xl italic text-[#d9c5a1]">
              P.
            </span>
            <span className="border-l border-white/20 pl-3">
              <span className="block text-[10px] tracking-[0.2em]">
                HOTEL BOUTIQUE
              </span>
              <span className="mt-1 block text-[9px] tracking-[0.45em] text-[#d9c5a1]">
                PINAR
              </span>
            </span>
          </a>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/70">
            <a
              href={`${official}/contacto/`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Contacto
            </a>
            <a
              href={`${official}/galeria/`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Galería oficial
            </a>
            <a
              href={official}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Web oficial <ArrowUpRight className="ml-1 inline" size={13} />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-[1400px] border-t border-white/15 pt-5 text-[10px] leading-6 text-white/45 sm:flex sm:justify-between">
          <p>Jábaga · Cuenca · España</p>
          <p className="mt-2 sm:mt-0">
            Demo de presentación desarrollada por Transport AI.
          </p>
        </div>
      </footer>

      {/* Voiceflow: se conserva la integración existente */}
      <button
        onClick={openVoiceflowChat}
        aria-label="Abrir asistente virtual"
        className="fixed bottom-5 right-5 z-30 flex items-center gap-3 rounded-full bg-[#303c2e] px-5 py-4 text-sm text-white shadow-xl transition hover:bg-[#465541]"
      >
        <MessageCircle size={19} />
        <span>¿Te ayudo?</span>
        <span className="h-2 w-2 rounded-full bg-[#c7d6ad]" />
      </button>
    </main>
  );
}
