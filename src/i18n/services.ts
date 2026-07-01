import type { Lang } from "./ui";

export type PillarId = "automation" | "data" | "ai";

export interface Pillar {
  id: PillarId;
  title: string;
  summary: string;
  items: string[];
}

export const servicesContent: Record<
  Lang,
  { title: string; intro: string; pillars: Pillar[] }
> = {
  sk: {
    title: "Naše služby",
    intro:
      "Spájame skúsenosti z priemyselnej automatizácie s modernou prácou s dátami a umelou inteligenciou — od opravy výrobnej linky až po prehľadné dáta a AI riešenia.",
    pillars: [
      {
        id: "automation",
        title: "Priemyselná automatizácia a údržba",
        summary:
          "Návrh, stavba, opravy a údržba automatizovaných liniek — programovanie PLC a diagnostika elektrických a snímačových porúch.",
        items: [
          "Návrh a stavba automatizovaných liniek na mieru podľa požiadaviek zákazníka",
          "Opravy a servis automatizovaných výrobných liniek",
          "Programovanie a modernizácia PLC (Siemens, Mitsubishi, Hitachi, Schneider)",
          "Diagnostika elektrických porúch a snímačov",
          "Pneumatické systémy a elektroinštalácie",
        ],
      },
      {
        id: "data",
        title: "Dáta a vizualizácia",
        summary:
          "Zber dát z výroby a strojov premieňame na grafy, prehľadové dashboardy a reporty pre okamžitý prehľad o prevádzke.",
        items: [
          "Zber dát zo strojov a snímačov (SCADA – Promotic, WinCC)",
          "Dátové pipeline a spracovanie (Azure, Databricks, SQL)",
          "Dashboardy, grafy a reporty v reálnom čase",
          "Sledovanie výkonu liniek, kvality a OEE",
        ],
      },
      {
        id: "ai",
        title: "AI riešenia",
        summary:
          "Umelá inteligencia nad vašimi dátami — chatboty, asistenti a inteligentná automatizácia na mieru.",
        items: [
          "Chatboty a AI asistenti na mieru",
          "Inteligentné vyhľadávanie nad firemnými dátami",
          "Automatizácia procesov pomocou AI",
          "Integrácia AI a jazykových modelov",
        ],
      },
    ],
  },
  en: {
    title: "Our services",
    intro:
      "We combine hands-on industrial automation experience with modern data and AI work — from fixing a production line to clear data and AI solutions.",
    pillars: [
      {
        id: "automation",
        title: "Industrial automation & maintenance",
        summary:
          "Design, build, repair and maintenance of automation lines — PLC programming and electrical/sensor diagnostics.",
        items: [
          "Design and build of custom automation lines to customer requirements",
          "Repairs and servicing of automated production lines",
          "PLC programming and retrofits (Siemens, Mitsubishi, Hitachi, Schneider)",
          "Electrical fault and sensor diagnostics",
          "Pneumatic systems and electrical installations",
        ],
      },
      {
        id: "data",
        title: "Data & visualization",
        summary:
          "We turn machine and production data into graphs, dashboards and reports for real-time insight into your operations.",
        items: [
          "Data collection from machines and sensors (SCADA – Promotic, WinCC)",
          "Data pipelines and processing (Azure, Databricks, SQL)",
          "Real-time dashboards, graphs and reports",
          "Monitoring of line performance, quality and OEE",
        ],
      },
      {
        id: "ai",
        title: "AI solutions",
        summary:
          "AI on top of your data — custom chatbots, assistants and intelligent automation.",
        items: [
          "Custom chatbots and AI assistants",
          "Intelligent search over your company data",
          "Process automation powered by AI",
          "Integration of AI and language models",
        ],
      },
    ],
  },
};
