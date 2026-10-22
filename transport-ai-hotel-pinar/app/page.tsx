
"use client";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  Check,
  ChevronDown,
  Coffee,
  Flame,
  Heart,
  MapPin,
  Menu,
  MessageCircle,
  ParkingCircle,
  Sparkles,
  Waves,
  Wifi,
  X,
} from "lucide-react";
import { useState } from "react";
import VoiceflowWidget from "./components/VoiceflowWidget";
import { openVoiceflowChat } from "./components/voiceflow-control";

const photos = {
  hero: "https://hotelboutiquepinar.es/wp-content/uploads/Tulipan-4-1.jpg",
  pool: "https://hotelboutiquepinar.es/wp-content/uploads/Patio-de-hotel-con-piscina-turquesa.jpg",
  mimosa:
    "https://hotelboutiquepinar.es/wp-content/uploads/hotel-boutique-pinar-mimosa-2e.jpg",
  bedroom:
    "https://hotelboutiquepinar.es/wp-content/uploads/hotel-pinar-Olympia-j-1.jpg",
  peonia:
    "https://hotelboutiquepinar.es/wp-content/uploads/Peonia05-copia.jpg",
  dalia:
    "https://hotelboutiquepinar.es/wp-content/uploads/hotel-pinar-cuenca-Pinar-Dalia-d-1.jpg",
};

const suites = [
  {
    name: "Suite Mimosa",
    category: "JACUZZI · TERRAZA",
    description:
      "Una suite con jacuzzi en la habitación y terraza para disfrutar de una escapada íntima.",
    image: photos.mimosa,
    alt: "Interior de una suite del Hotel Boutique Pinar con jacuzzi",
    link: "https://hotelboutiquepinar.es/suite-mimosa/",
  },
  {
    name: "Suite Magnolia",
    category: "PISCINA PRIVADA",
    description:
      "Una estancia con bañera de diseño y piscina privada para disfrutar del descanso con intimidad.",
    image: photos.peonia,
    alt: "Dormitorio luminoso de una suite del Hotel Boutique Pinar",
    link: "https://hotelboutiquepinar.es/suite-magnolia/",
  },
  {
    name: "Suite Dalia",
    category: "JACUZZI · CHIMENEA",
    description:
      "Un espacio acogedor con jacuzzi interior y una decoración cálida.",
    image: photos.dalia,
    alt: "Jacuzzi interior en una habitación del Hotel Boutique Pinar",
    link: "https://hotelboutiquepinar.es/suite-dalia/",
  },
];

const faqs = [
  {
    question: "¿Dónde se encuentra Hotel Boutique Pinar?",
    answer:
      "El hotel está en Camino de la Pernala, Jábaga, Cuenca, en una finca rodeada de pinos y a pocos minutos de la ciudad.",
  },
  {
    question: "¿Qué incluyen las habitaciones?",
    answer:
      "Según la información publicada por el hotel, las habitaciones ofrecen distintas características según la suite, como piscina privada, jacuzzi, terraza o chimenea. Consulta la ficha de cada alojamiento para conocer sus detalles.",
  },
  {
    question: "¿El desayuno está incluido?",
    answer:
      "Sí. El hotel indica que el desayuno está incluido en la reserva y se sirve en la habitación.",
  },
  {
    question: "¿Hay aparcamiento y Wi-Fi?",
    answer:
      "El hotel anuncia aparcamiento gratuito y conexión Wi-Fi.",
  },
  {
    question: "¿Cómo puedo consultar precios y disponibilidad?",
    answer:
      "Puedes abrir el asistente virtual para preparar tu consulta o visitar el canal de reservas oficial. Los precios y la disponibilidad deben confirmarse antes de reservar.",
  },
];

const services = [
  {
    icon: Coffee,
    title: "Desayuno en la habitación",
    description: "Empieza el día sin prisas.",
  },
  {
    icon: Waves,
    title: "Piscina privada",
    description: "Privacidad en las suites que disponen de ella.",
  },
  {
    icon: Flame,
    title: "Chimenea",
    description: "Un ambiente cálido en los alojamientos equipados.",
  },
  {
    icon: ParkingCircle,
    title: "Parking gratuito",
    description: "Aparcamiento para tu estancia.",
  },
  {
    icon: Wifi,
    title: "Conexión Wi-Fi",
    description: "Conectividad durante tu visita.",
  },
  {
    icon: BedDouble,
    title: "Servicio de habitaciones",
    description: "Comodidad sin salir de tu alojamiento.",
  },
];

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const bookingUrl = "https://hotelboutiquepinar.es/";

  function closeMenu() {
    setMobileMenu(false);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#faf8f4] text-[#252b24]">
      <VoiceflowWidget />

      {/* Barra superior */}
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-[#28372c] px-4 py-2.5 text-center text-[10px] tracking-[0.18em] text-white sm:text-xs">
        <MapPin size={13} />
        JÁBAGA · CUENCA · ESPAÑA
        <span className="hidden text-white/40 sm:inline">|</span>
        <span className="text-[#d9c29d]">
          UN REFUGIO ENTRE PINOS
        </span>
      </div>

      {/* Navegación */}
      <header className="relative z-40 border-b border-black/[0.06] bg-[#faf8f4]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a
            href="#inicio"
            className="group flex items-center gap-3"
            aria-label="Hotel Boutique Pinar, inicio"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b7a17c] text-[#52654e]">
              <span className="font-serif text-2xl italic">P</span>
            </div>
            <div>
              <span className="block font-serif text-lg leading-tight tracking-[0.06em] sm:text-xl">
                HOTEL BOUTIQUE
              </span>
              <span className="mt-1 block text-[9px] tracking-[0.48em] text-[#8d7959]">
                P I N A R
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-[13px] lg:flex xl:gap-9">
            <a href="#experiencia" className="transition hover:text-[#8d7959]">
              El hotel
            </a>
            <a href="#suites" className="transition hover:text-[#8d7959]">
              Suites
            </a>
            <a href="#servicios" className="transition hover:text-[#8d7959]">
              Servicios
            </a>
            <a href="#entorno" className="transition hover:text-[#8d7959]">
              El entorno
            </a>
            <a href="#preguntas" className="transition hover:text-[#8d7959]">
              Preguntas frecuentes
            </a>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={openVoiceflowChat}
              className="inline-flex items-center gap-2 border border-[#344638]/25 px-4 py-3 text-xs transition hover:border-[#344638] hover:bg-[#344638]/5"
            >
              <MessageCircle size={15} />
              Consultar al asistente
            </button>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#29392d] px-5 py-3 text-xs text-white transition hover:bg-[#435744]"
            >
              Reservar <ArrowUpRight size={15} />
            </a>
          </div>

          <button
            aria-label={mobileMenu ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenu}
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-11 w-11 items-center justify-center border border-black/10 lg:hidden"
          >
            {mobileMenu ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {mobileMenu && (
          <nav className="absolute left-0 right-0 top-full flex flex-col gap-0 border-t border-black/10 bg-[#faf8f4] px-6 py-3 shadow-xl lg:hidden">
            {[
              ["El hotel", "#experiencia"],
              ["Suites", "#suites"],
              ["Servicios", "#servicios"],
              ["El entorno", "#entorno"],
              ["Preguntas frecuentes", "#preguntas"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="border-b border-black/[0.06] py-4 text-sm"
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => {
                closeMenu();
                openVoiceflowChat();
              }}
              className="mt-4 flex items-center justify-center gap-2 bg-[#29392d] px-5 py-4 text-sm text-white"
            >
              <MessageCircle size={17} />
              Hablar con el asistente
            </button>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 border border-[#29392d]/25 px-5 py-4 text-sm"
            >
              Consultar la web oficial <ArrowUpRight size={16} />
            </a>
          </nav>
        )}
      </header>

      {/* Portada fotográfica */}
      <section
        id="inicio"
        className="relative isolate flex min-h-[650px] items-end overflow-hidden bg-[#26372d] text-white sm:min-h-[720px] lg:min-h-[790px]"
      >
        <div className="absolute inset-0 -z-20">
          <img
            src={photos.hero}
            alt="Piscina privada y bungalow del Hotel Boutique Pinar en Jábaga"
            fetchPriority="high"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#152319]/85 via-[#1c2a20]/50 to-[#1c2a20]/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#152319]/70 via-transparent to-[#152319]/15" />

        <div className="mx-auto w-full max-w-[1400px] px-6 pb-16 pt-24 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3 text-[10px] tracking-[0.3em] text-[#e6d4b6] sm:text-xs">
              <span className="h-px w-10 bg-[#e6d4b6]" />
              BIO-LUXURY HOTEL · CUENCA
            </div>

            <h1 className="font-serif text-[3.5rem] font-normal leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-[6.5rem]">
              Tu refugio.
              <span className="mt-2 block italic text-[#e6d4b6]">
                Tu propio ritmo.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
              Entre pinos, agua y silencio. Descubre un hotel de suites
              privadas cerca de Cuenca, diseñado para disfrutar de una
              escapada sin prisas.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={openVoiceflowChat}
                className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#e4d0ad] px-7 text-sm font-medium text-[#27382c] transition hover:bg-white"
              >
                Encuentra tu suite <ArrowRight size={17} />
              </button>
              <a
                href="#suites"
                className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/60 px-7 text-sm text-white transition hover:bg-white/10"
              >
                Descubrir Pinar <ArrowDown size={16} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/90 sm:text-sm">
              <span className="flex items-center gap-2">
                <Check size={15} className="text-[#e4d0ad]" />
                Suites privadas
              </span>
              <span className="flex items-center gap-2">
                <Check size={15} className="text-[#e4d0ad]" />
                Desayuno incluido
              </span>
              <span className="flex items-center gap-2">
                <Check size={15} className="text-[#e4d0ad]" />
                Entorno natural
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-[10px] tracking-[0.25em] text-white/80 md:flex">
          <span>DESCUBRE EL HOTEL</span>
          <span className="h-px w-12 bg-white/60" />
          <span>01 / 04</span>
        </div>
      </section>

      {/* Introducción */}
      <section id="experiencia" className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1250px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <p className="mb-5 text-[10px] tracking-[0.3em] text-[#8d7959] sm:text-xs">
              UNA FORMA DIFERENTE DE DESCANSAR
            </p>
            <h2 className="font-serif text-4xl font-normal leading-[1.1] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              La naturaleza
              <span className="block italic text-[#7e8b72]">
                marca el ritmo.
              </span>
            </h2>
            <p className="mt-7 text-sm leading-8 text-[#6d7168] sm:text-base">
              En Hotel Boutique Pinar, cada suite tiene su propia
              personalidad. La privacidad, los espacios exteriores y los
              pequeños detalles invitan a dejar atrás la rutina y disfrutar
              de una estancia a tu manera.
            </p>
            <p className="mt-4 text-sm leading-8 text-[#6d7168] sm:text-base">
              El hotel se encuentra en una finca rodeada de pinos, cerca de
              Cuenca. Un punto de partida para desconectar, descubrir el
              entorno y regresar a tu propio espacio.
            </p>
            <a
              href="https://hotelboutiquepinar.es/hotel/"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#29392d]/35 pb-2 text-sm transition hover:text-[#8d7959]"
            >
              Conoce el hotel <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="relative pb-7 pl-0 sm:pl-7">
            <img
              src={photos.pool}
              alt="Piscina exterior privada en Hotel Boutique Pinar"
              loading="lazy"
              className="aspect-[5/4] w-full object-cover"
            />
            <div className="absolute -bottom-1 left-4 max-w-[245px] bg-[#e9e4d8] p-5 sm:left-0 sm:max-w-[280px] sm:p-7">
              <p className="font-serif text-2xl italic text-[#354637] sm:text-3xl">
                Un lugar para parar.
              </p>
              <p className="mt-2 text-xs leading-6 text-[#707469]">
                Privacidad, descanso y naturaleza cerca de Cuenca.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suites reales */}
      <section id="suites" className="bg-[#efede5] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-5 text-[10px] tracking-[0.3em] text-[#8d7959] sm:text-xs">
                ENCUENTRA TU ESPACIO
              </p>
              <h2 className="font-serif text-4xl font-normal leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Cada suite,
                <span className="italic text-[#7e8b72]"> una historia.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#6d7168] sm:text-base">
              Piscina privada, jacuzzi, bañera de diseño o chimenea:
              descubre algunas de las opciones del hotel y encuentra la que
              mejor encaja con tu escapada.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {suites.map((suite, index) => (
              <article
                key={suite.name}
                className="group min-w-0 bg-[#faf8f4]"
              >
                <a
                  href={suite.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Más información sobre ${suite.name}`}
                  className="relative block overflow-hidden"
                >
                  <img
                    src={suite.image}
                    alt={suite.alt}
                    loading="lazy"
                    className="aspect-[4/4.2] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-5 top-5 bg-[#faf8f4]/95 px-3 py-2 text-[9px] tracking-[0.18em] text-[#394a3a] sm:left-6">
                    {suite.category}
                  </span>
                  <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#faf8f4] text-[#29392d] transition group-hover:bg-[#29392d] group-hover:text-white">
                    <ArrowUpRight size={19} />
                  </span>
                </a>

                <div className="p-6 sm:p-8">
                  <div className="mb-4 flex items-center justify-between text-[10px] tracking-[0.2em] text-[#8d7959]">
                    <span>HOTEL BOUTIQUE PINAR</span>
                    <span>0{index + 1}</span>
                  </div>
                  <h3 className="font-serif text-3xl font-normal">
                    {suite.name}
                  </h3>
                  <p className="mt-4 min-h-[72px] text-sm leading-7 text-[#6d7168]">
                    {suite.description}
                  </p>
                  <a
                    href={suite.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 flex items-center justify-between border-t border-black/10 pt-5 text-sm transition hover:text-[#8d7959]"
                  >
                    Ver información oficial <ArrowRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-[#29392d]/15 pt-7 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-xs leading-6 text-[#77786e]">
              Las características varían según la suite. Consulta la ficha
              oficial para verificar sus prestaciones y condiciones.
            </p>
            <a
              href="https://hotelboutiquepinar.es/habitaciones-hotel/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-3 bg-[#29392d] px-6 py-4 text-sm text-white transition hover:bg-[#435744]"
            >
              Ver todas las suites <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Imagen y frase editorial */}
      <section className="grid bg-[#29392d] text-white lg:grid-cols-2">
        <div className="relative min-h-[360px] overflow-hidden sm:min-h-[470px] lg:min-h-[650px]">
          <img
            src={photos.bedroom}
            alt="Dormitorio de una suite del Hotel Boutique Pinar"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center px-7 py-16 sm:px-12 sm:py-20 lg:px-16 xl:px-24">
          <div className="max-w-xl">
            <p className="mb-6 text-[10px] tracking-[0.3em] text-[#e4d0ad] sm:text-xs">
              EL PLACER DE NO TENER PRISA
            </p>
            <h2 className="font-serif text-4xl font-normal leading-tight tracking-[-0.025em] sm:text-5xl lg:text-6xl">
              Menos ruido.
              <span className="mt-2 block italic text-[#e4d0ad]">
                Más momentos.
              </span>
            </h2>
            <p className="mt-7 text-sm leading-8 text-white/70 sm:text-base">
              Despierta con calma, disfruta del desayuno en tu habitación y
              dedica el día a lo que te apetezca. Aquí la experiencia se
              construye con tiempo, espacio y pequeños detalles.
            </p>
            <button
              onClick={openVoiceflowChat}
              className="mt-9 inline-flex items-center gap-3 border border-white/35 px-6 py-4 text-sm transition hover:bg-white/10"
            >
              Ayúdame a elegir <MessageCircle size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1250px]">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-5 text-[10px] tracking-[0.3em] text-[#8d7959] sm:text-xs">
              TODO EN SU SITIO
            </p>
            <h2 className="font-serif text-4xl font-normal tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Detalles que importan.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#6d7168] sm:text-base">
              Comodidades para que disfrutes de tu estancia con tranquilidad.
            </p>
          </div>

          <div className="grid border-l border-t border-[#29392d]/15 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="border-b border-r border-[#29392d]/15 p-7 transition hover:bg-[#efede5] sm:p-9 lg:p-10"
                >
                  <Icon
                    size={27}
                    strokeWidth={1.3}
                    className="mb-7 text-[#8d7959]"
                  />
                  <h3 className="font-serif text-2xl">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#6d7168]">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Entorno */}
      <section id="entorno" className="bg-[#e9e5da] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1250px] gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20">
          <div className="relative">
            <img
              src={photos.hero}
              alt="Piscina privada y zona exterior del Hotel Boutique Pinar"
              loading="lazy"
              className="aspect-[5/4] w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#faf8f4] px-4 py-3 text-xs text-[#29392d] sm:bottom-6 sm:left-6">
              <MapPin size={15} />
              Jábaga, Cuenca
            </div>
          </div>

          <div>
            <p className="mb-5 text-[10px] tracking-[0.3em] text-[#8d7959] sm:text-xs">
              MUCHO POR DESCUBRIR
            </p>
            <h2 className="font-serif text-4xl font-normal leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Cuenca, a tu manera.
            </h2>
            <p className="mt-7 text-sm leading-8 text-[#6d7168] sm:text-base">
              Desde Pinar puedes explorar el patrimonio de Cuenca y descubrir
              paisajes naturales de la provincia. El hotel también propone
              actividades para conocer el entorno según la temporada y tus
              preferencias.
            </p>
            <a
              href="https://hotelboutiquepinar.es/"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#29392d]/35 pb-2 text-sm transition hover:text-[#8d7959]"
            >
              Descubrir actividades <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Llamada a la acción */}
      <section className="relative isolate overflow-hidden bg-[#29392d] px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url("${photos.pool}")` }}
        />
        <div className="absolute inset-0 -z-10 bg-[#1b2a20]/75" />
        <div className="mx-auto flex max-w-[1250px] flex-col gap-9 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-5 text-[10px] tracking-[0.3em] text-[#e4d0ad] sm:text-xs">
              TU ESCAPADA EMPIEZA AQUÍ
            </p>
            <h2 className="font-serif text-4xl font-normal leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              ¿Qué tipo de estancia te imaginas?
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-8 text-white/75 sm:text-base">
              Cuéntanos qué estás buscando. El asistente virtual puede
              orientarte y ayudarte a preparar una consulta sobre tu estancia.
            </p>
          </div>
          <button
            onClick={openVoiceflowChat}
            className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#e4d0ad] px-7 py-5 text-sm font-medium text-[#29392d] transition hover:bg-white"
          >
            Hablar con el asistente <MessageCircle size={18} />
          </button>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section id="preguntas" className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1250px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-5 text-[10px] tracking-[0.3em] text-[#8d7959] sm:text-xs">
              INFORMACIÓN ÚTIL
            </p>
            <h2 className="font-serif text-4xl font-normal leading-tight tracking-[-0.035em] sm:text-5xl">
              Antes de venir.
            </h2>
            <p className="mt-6 text-sm leading-8 text-[#6d7168] sm:text-base">
              Resuelve las dudas más habituales y, si necesitas información
              concreta sobre una habitación o tu reserva, pregunta al
              asistente virtual.
            </p>
            <button
              onClick={openVoiceflowChat}
              className="mt-8 inline-flex items-center gap-3 border-b border-[#29392d]/35 pb-2 text-sm transition hover:text-[#8d7959]"
            >
              Hacer otra consulta <ArrowRight size={17} />
            </button>
          </div>

          <div className="border-t border-[#29392d]/15">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="border-b border-[#29392d]/15">
                <button
                  className="flex w-full items-center justify-between gap-5 py-6 text-left sm:py-7"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span className="font-serif text-lg sm:text-xl">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={19}
                    className={`shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <p className="max-w-2xl pb-6 text-sm leading-7 text-[#6d7168] sm:pb-7">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pie */}
      <footer className="bg-[#202e24] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-9 md:flex-row md:items-center">
            <a href="#inicio" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9c29d] text-[#d9c29d]">
                <span className="font-serif text-2xl italic">P</span>
              </div>
              <div>
                <span className="block font-serif text-lg tracking-[0.06em]">
                  HOTEL BOUTIQUE
                </span>
                <span className="mt-1 block text-[9px] tracking-[0.48em] text-[#d9c29d]">
                  P I N A R
                </span>
              </div>
            </a>

            <div className="flex flex-col gap-3 text-sm text-white/75 sm:flex-row sm:gap-7">
              <a
                href="https://hotelboutiquepinar.es/contacto/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                Contacto
              </a>
              <a
                href="https://hotelboutiquepinar.es/habitaciones-hotel/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                Todas las suites
              </a>
              <a
                href="https://hotelboutiquepinar.es/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                Web oficial <ArrowUpRight className="ml-1 inline" size={14} />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-5 pt-7 text-xs leading-6 text-white/50 sm:flex-row sm:items-end">
            <div>
              <p>Jábaga · Cuenca · España</p>
              <p className="mt-1">Fotografías: web oficial de Hotel Boutique Pinar.</p>
            </div>
            <p className="max-w-xl sm:text-right">
              Demo de presentación desarrollada por Transport AI. Las
              consultas a través del asistente no constituyen una reserva
              confirmada.
            </p>
          </div>
        </div>
      </footer>

      {/* Asistente flotante: Voiceflow */}
      <button
        onClick={openVoiceflowChat}
        aria-label="Abrir asistente virtual"
        className="fixed bottom-5 right-5 z-30 flex items-center gap-3 rounded-full bg-[#29392d] px-5 py-4 text-sm text-white shadow-[0_8px_30px_rgba(0,0,0,0.22)] transition hover:bg-[#435744]"
      >
        <MessageCircle size={20} />
        <span>¿Te ayudo?</span>
        <span className="h-2 w-2 rounded-full bg-[#c6d5a9]" />
      </button>
    </main>
  );
}
