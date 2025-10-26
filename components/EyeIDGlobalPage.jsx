import React, { useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { dict } from "@/components/i18n";
import {
  ShieldCheck,
  Fingerprint,
  Smartphone,
  Globe2,
  CreditCard,
  Cpu,
  Wifi,
  Battery,
  Award,
  Building2,
  Rocket,
  ArrowRight,
} from "lucide-react";

// Globalne kolory używane w całym komponencie
const COLORS = {
  pageGray: "bg-gray-200",
  cardGray: "bg-gray-200",
  lilac: "#ebe5ff",
  btn: "#c6b8ff",
  btnHover: "#b8a9ff",
  gradFrom: "#d9caff",
  gradVia: "#c9ffe7",
  gradTo: "#b4a7ff",
};

// Prostokątny przycisk w fiolecie
function PurpleButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm border border-transparent"
      style={{ backgroundColor: COLORS.btn }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.btnHover)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.btn)}
    >
      {children}
    </a>
  );
}

export default function EyeIDGlobalPage() {
  const [lang, setLang] = useState("pl");
  const t = dict[lang];
  const prefersReducedMotion = useReducedMotion();

  const features = useMemo(
    () => [
      { icon: <Fingerprint className="w-5 h-5" />, title: t.features[0].t, desc: t.features[0].d },
      { icon: <Smartphone className="w-5 h-5" />, title: t.features[1].t, desc: t.features[1].d },
      { icon: <CreditCard className="w-5 h-5" />, title: t.features[2].t, desc: t.features[2].d },
    ],
    [t]
  );

  const terminal = useMemo(
    () => [
      { icon: <Cpu className="w-4 h-4" />, label: "Android OS 11" },
      { icon: <Wifi className="w-4 h-4" />, label: "Wi-Fi / 4G / BT" },
      { icon: <Battery className="w-4 h-4" />, label: "8h" },
      { icon: <CreditCard className="w-4 h-4" />, label: "Payment card module" },
      { icon: <Fingerprint className="w-4 h-4" />, label: "NFC / biometrics" },
      { icon: <ShieldCheck className="w-4 h-4" />, label: "CE / PCI" },
    ],
    []
  );

  const awards = ["Cashless.pl", "Forbes", "myCompany", "StartUp", "European Fintech", "PFR"];
  const partners = ["VISA", "Worldline", "STRIPE", "ITCARD", "fido", "iBeta"];

  const fadeUp = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
      };

  return (
    <div className={`min-h-screen ${COLORS.pageGray} text-slate-900`}>
      <Head>
        <title>EYEID Global — biometric payments</title>
        <meta
          name="description"
          content="EYE ID — proprietary biometric payment ecosystem (face + iris). Faster, safer and more convenient payments."
        />
        <meta property="og:title" content="EYEID Global — biometric payments" />
        <meta property="og:description" content="Proprietary biometric payment ecosystem (face + iris)." />
        <meta property="og:image" content="/icons/og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      {/* HEADER */}
      <header className="sticky top-0 z-30 backdrop-blur bg-gray-200/80 border-b" role="navigation" aria-label="Główna nawigacja">
        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/eyeid-logo.svg" alt="EYEID Global" width={36} height={36} priority />
            <span className="font-semibold">EYEID Global</span>
          </div>

          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#ecosystem" className="hover:opacity-80">{t.nav.ecosystem}</a>
            <a href="#why" className="hover:opacity-80">{t.nav.why}</a>
            <a href="#strategy" className="hover:opacity-80">{t.nav.strategy}</a>
            <a href="#terminal" className="hover:opacity-80">{t.nav.terminal}</a>
            <a href="#zone" className="hover:opacity-80">{t.nav.zone}</a>
            <a href="#awards" className="hover:opacity-80">{t.nav.awards}</a>
            <a href="#contact" className="hover:opacity-80">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "pl" ? "en" : "pl")}
              className="rounded-2xl border px-3 py-2 text-xs hover:shadow-sm"
              aria-label="Zmień język"
            >
              {lang.toUpperCase()}
            </button>
            <PurpleButton href="#contact">
              {t.nav.cta} <ArrowRight className="w-4 h-4" />
            </PurpleButton>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="py-16 bg-[#ebe5ff]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 {...fadeUp} className="text-4xl md:text-6xl font-bold tracking-tight">
              {t.hero.title}
            </motion.h1>
            <p className="mt-4 text-slate-600 max-w-xl">{t.hero.lead}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                <ShieldCheck className="w-4 h-4" /> {t.badges.sec}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                <Globe2 className="w-4 h-4" /> {t.badges.global}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                <Rocket className="w-4 h-4" /> {t.badges.ux}
              </span>
            </div>
          </div>

          <motion.div {...fadeUp} className="relative">
            <Image
              src="/brand/hero-eye.jpg"
              alt="Biometry hero"
              width={1400}
              height={1000}
              className="w-full rounded-3xl shadow-2xl object-cover"
              unoptimized
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* EKOSYSTEM */}
      <section id="ecosystem" className="py-16 bg-[#ebe5ff]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">{t.ecosystem.title}</h2>
          <p className="text-slate-600 mt-1 max-w-2xl">{t.ecosystem.p}</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className={`rounded-2xl border p-6 ${COLORS.cardGray}`}>
                <div className="flex items-center gap-2 font-medium">{f.icon}{f.title}</div>
                <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="py-16 bg-[#ebe5ff]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div className={`rounded-3xl border p-8 ${COLORS.cardGray}`}>
            <h3 className="text-xl font-semibold">{t.why.aTitle}</h3>
            <p className="text-slate-600 mt-2">{t.why.aText}</p>
            <ul className="space-y-2 mt-4 text-sm text-slate-700 list-disc pl-5">
              {t.why.list.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>

          <div className={`rounded-3xl border p-8 ${COLORS.cardGray}`}>
            <h3 className="text-xl font-semibold">{t.why.bTitle}</h3>
            <p className="text-slate-600 mt-2">{t.why.bText}</p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              {t.why.cards.map((x) => (
                <div key={x} className={`rounded-xl border p-4 ${COLORS.cardGray}`}>{x}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGY */}
      <section id="strategy" className="py-16 bg-[#ebe5ff]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">{t.strategy.title}</h2>
          <p className="text-slate-600 mt-1">{t.strategy.p}</p>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
            <div className={`rounded-2xl border p-6 ${COLORS.cardGray}`}>
              <h4 className="font-medium">User journey</h4>
              <ol className="mt-3 space-y-2 text-sm list-decimal pl-5">
                {t.strategy.user.map((x, i) => <li key={i}>{x}</li>)}
              </ol>
            </div>

            <div className={`rounded-2xl border p-6 ${COLORS.cardGray}`}>
              <h4 className="font-medium">Merchant journey</h4>
              <ol className="mt-3 space-y-2 text-sm list-decimal pl-5">
                {t.strategy.merch.map((x, i) => <li key={i}>{x}</li>)}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* TERMINAL */}
      <section id="terminal" className="py-16 bg-[#ebe5ff]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            {...(prefersReducedMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 10 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.6 },
                })}
            className="relative flex justify-center items-center rounded-3xl shadow-2xl p-6 bg-gradient-to-br"
            style={{ backgroundImage: `linear-gradient(135deg, ${COLORS.gradFrom}, ${COLORS.gradVia}, ${COLORS.gradTo})` }}
          >
            <Image
              src="/worline-eyepos.jpeg"   // plik w /public
              alt="EYE ID eyepos terminal"
              width={1000}
              height={750}
              className="rounded-3xl object-contain w-full h-auto"
              unoptimized
              priority
            />
          </motion.div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">{t.terminal.title}</h2>
            <p className="text-slate-600 mt-1">-</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {terminal.map((s, i) => (
                <div key={i} className={`rounded-xl border p-3 ${COLORS.cardGray} flex items-center gap-2 text-sm`}>
                  {s.icon}
                  {s.label}
                </div>
              ))}
            </div>

            <blockquote className={`mt-6 rounded-2xl border p-5 ${COLORS.cardGray} text-sm italic`}>
              {t.terminal.q}
            </blockquote>
          </div>
        </div>
      </section>

      {/* ZONE */}
      <section id="zone" className="py-16 bg-[#ebe5ff]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">{t.zone.title}</h2>
          <p className="text-slate-600 mt-1 max-w-2xl">{t.zone.p}</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
            {t.zone.cards.map((x) => (
              <div key={x} className={`rounded-2xl border p-6 ${COLORS.cardGray}`}>
                <h4 className="font-medium">{x}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section id="awards" className="py-16 bg-[#ebe5ff]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">{t.awards}</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {awards.map((a) => (
              <div key={a} className={`rounded-xl border ${COLORS.cardGray} p-4 text-sm flex items-center justify-center gap-2`}>
                <Award className="w-4 h-4" />
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-16 bg-[#ebe5ff]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">{t.partners}</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {partners.map((p) => (
              <div key={p} className={`rounded-xl border ${COLORS.cardGray} p-4 text-sm flex items-center justify-center`}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 bg-[#ebe5ff]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold">{t.contact.title}</h2>
            <p className="text-slate-600 mt-1">{t.contact.p}</p>
            <div className="mt-6 text-sm text-slate-700 space-y-1">
              <div>
                <Building2 className="inline w-4 h-4 mr-2" />
                {t.contact.hq}
              </div>
              <div>
                {t.contact.email}: <a href="mailto:office@eyeidglobal.com" className="underline">office@eyeidglobal.com</a>
              </div>
              <div>
                {t.contact.site}: <a href="https://www.eyeidglobal.com" className="underline">www.eyeidglobal.com</a>
              </div>
            </div>
          </div>

          <div className={`rounded-3xl border p-6 ${COLORS.cardGray}`}>
            <form className="grid gap-3" onSubmit={(e) => e.preventDefault()} aria-label="Formularz kontaktowy">
              <input className="rounded-2xl border px-4 py-3" placeholder="Imię i nazwisko / Full name" />
              <input className="rounded-2xl border px-4 py-3" placeholder="E-mail" type="email" />
              <textarea className="rounded-2xl border px-4 py-3 min-h-[120px]" placeholder="W czym możemy pomóc? / How can we help?" />
              <PurpleButton href="#contact">Wyślij / Send</PurpleButton>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} EYEID Global. {t.footer}
      </footer>
    </div>
  );
}

