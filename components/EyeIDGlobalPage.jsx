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

  gray: "bg-gray-200",
  lilac: "#ebe5ff",
  btn: "#c6b8ff",
  btnHover: "#b8a9ff",
  gradFrom: "#d9caff",
  gradVia: "#c9ffe7",
  gradTo: "#b4a7ff",
};

function PurpleButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm border border-transparent"
      style={{ backgroundColor: COLORS.btn }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = COLORS.btnHover)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = COLORS.btn)
      }
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

  const terminal = [
    { icon: <Cpu className="w-4 h-4" />, label: "Android OS 11" },
    { icon: <Wifi className="w-4 h-4" />, label: "Wi-Fi / 4G / BT" },
    { icon: <Battery className="w-4 h-4" />, label: "8h" },
    { icon: <CreditCard className="w-4 h-4" />, label: "Payment card module" },
    { icon: <Fingerprint className="w-4 h-4" />, label: "NFC / biometrics" },
    { icon: <ShieldCheck className="w-4 h-4" />, label: "CE / PCI" },
  ];

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
    <div className={`min-h-screen ${COLORS.gray} text-slate-900`}>
      <Head>
        <title>EYEID Global — biometric payments</title>
        <meta
          name="description"
          content="EYE ID — proprietary biometric payment ecosystem (face + iris). Faster, safer and more convenient payments."
        />
        <meta property="og:title" content="EYEID Global — biometric payments" />
        <meta property="og:description" content="Proprietary biometric payment ecosystem (face + iris)." />
        <meta property="og:" content="/icons/og-.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      {/* HEADER */}
      <header className="sticky top-0 z-30 backdrop-blur bg-gray-200/80 border-b">
        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            < src="/eyeid-logo.svg" alt="EYEID Global" width={36} height={36} priority />
            <span className="font-semibold">EYEID Global</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#ecosystem">Ekosystem</a>
            <a href="#why">Dlaczego EYE ID</a>
            <a href="#strategy">Go-to-market</a>
            <a href="#terminal">eyePOS</a>
            <a href="#zone">EYE ID Zone</a>
            <a href="#awards">Nagrody</a>
            <a href="#contact">Kontakt</a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "pl" ? "en" : "pl")}
              className="rounded-2xl border px-3 py-2 text-xs hover:shadow-sm"
            >
              {lang.toUpperCase()}
            </button>
            <PurpleButton href="#contact">
              Skontaktuj się <ArrowRight className="w-4 h-4" />
            </PurpleButton>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="py-16" style={{ backgroundColor: COLORS.lilac }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 {...fadeUp} className="text-4xl md:text-6xl font-bold tracking-tight">
              EYE ID
            </motion.h1>
            <p className="mt-4 text-slate-600 max-w-xl">
              Własny ekosystem płatności biometrycznych — bezpieczniejszy, szybszy i wygodniejszy niż tradycyjne metody.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                <ShieldCheck className="w-4 h-4" /> Bezpieczeństwo by design
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                <Globe2 className="w-4 h-4" /> Global ready
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                <Rocket className="w-4 h-4" /> Frictionless UX
              </span>
            </div>
          </div>
          <motion.div {...fadeUp} className="relative">
            <Image
              src={heroEye}
              alt="Biometry hero"
              width={1400}
              height={1000}
              className="w-full rounded-3xl shadow-2xl object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* TERMINAL */}
      <section id="terminal" className="py-16" style={{ backgroundColor: COLORS.lilac }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            {...fadeUp}
            className="relative flex justify-center items-center rounded-3xl shadow-2xl p-6"
            style={{
              backgroundImage: `linear-gradient(135deg, ${COLORS.gradFrom}, ${COLORS.gradVia}, ${COLORS.gradTo})`,
            }}
          >
            <Image
  src={eyeposImg}
  alt="EYE ID eyepos terminal"
  width={1000}
  height={750}
  className="rounded-3xl object-contain w-full h-auto"
  priority
/>

            />
          </motion.div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Innowacyjny terminal eyepos
            </h2>
            <p className="text-slate-600 mt-1">Nowa generacja urządzeń płatniczych.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {terminal.map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl border p-3 bg-gray-200 flex items-center gap-2 text-sm"
                >
                  {s.icon}
                  {s.label}
                </div>
              ))}
            </div>

            <blockquote className="mt-6 rounded-2xl border p-5 bg-gray-200 text-sm italic">
              Funkcje terminala pozwalają obsłużyć więcej klientów, zachowując bezpieczeństwo i wygodę.
            </blockquote>
          </div>
        </div>
      </section>

      {/* (opcjonalnie: inne sekcje dodamy później — najpierw dowieziemy obraz i kolor) */}

      <footer className="border-t py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} EYEID Global. All rights reserved.
      </footer>
    </div>
  );
}
