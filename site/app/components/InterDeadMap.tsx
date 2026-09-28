import type { Locale } from "../site-types";

type LocalizedText = string | Record<Locale, string>;

type ResourceNode = {
  label: LocalizedText;
  href?: string;
  path?: string;
  note?: LocalizedText;
  children?: ResourceNode[];
};

type ResourceSection = {
  number: string;
  title: LocalizedText;
  nodes: ResourceNode[];
};

const text = (en: string, uk: string, ru: string, ja: string): Record<Locale, string> => ({
  en,
  uk,
  ru,
  ja,
});

const sections: ResourceSection[] = [
  {
    number: "00",
    title: text("Zhovten Games / project record", "Zhovten Games / картка проєкту", "Zhovten Games / карточка проекта", "Zhovten Games / プロジェクト記録"),
    nodes: [
      { label: "InterDead", path: "/projects/interdead/" },
    ],
  },
  {
    number: "01",
    title: text("Public InterDead interface", "Публічний інтерфейс InterDead", "Публичный интерфейс InterDead", "InterDead 公開インターフェース"),
    nodes: [
      { label: text("Main site / NIRO IN NOIR", "Головний сайт / NIRO IN NOIR", "Главный сайт / NIRO IN NOIR", "メインサイト / NIRO IN NOIR"), href: "https://interdead.phantom-draft.com/" },
      { label: "About / Echo of an Unfading Memory", href: "https://interdead.phantom-draft.com/about/" },
      { label: "NOIR", note: text("application artifact / prototype surface", "артефакт застосунку / поверхня прототипу", "артефакт приложения / поверхность прототипа", "アプリケーション成果物 / プロトタイプ画面"), href: "https://noir.phantom-draft.com/" },
    ],
  },
  {
    number: "02",
    title: text("Canon / Worldbuilding", "Канон / світобудова", "Канон / миростроительство", "カノン / ワールドビルディング"),
    nodes: [
      { label: "InterDead Wiki — Fandom", href: "https://interdead.fandom.com/wiki/InterDead_Wiki" },
      { label: "InterDead Reference Library", href: "https://github.com/Zhovten-Games/InterDeadReferenceLibrary" },
    ],
  },
  {
    number: "03",
    title: text("Source code / GitHub", "Вихідний код / GitHub", "Исходный код / GitHub", "ソースコード / GitHub"),
    nodes: [
      { label: "Zhovten Games", href: "https://github.com/Zhovten-Games" },
      { label: "InterDeadIT", note: text("public site / meta-verse entry point", "публічний сайт / точка входу до метавсесвіту", "публичный сайт / точка входа в метавселенную", "公開サイト / メタバースへの入口"), href: "https://github.com/Zhovten-Games/InterDeadIT" },
      { label: "InterDeadProto", note: text("narrative-driven interface prototype", "прототип наративного інтерфейсу", "прототип нарративного интерфейса", "物語主導型インターフェース・プロトタイプ"), href: "https://github.com/Zhovten-Games/InterDeadProto" },
      { label: "InterDeadCore", note: text("game engine", "ігровий рушій", "игровой движок", "ゲームエンジン"), href: "https://github.com/Zhovten-Games/InterDeadCore" },
      { label: "InterDead Reference Library", note: text("public documentation / research / references", "публічна документація / дослідження / джерела", "публичная документация / исследования / источники", "公開文書 / 研究 / 参考資料"), href: "https://github.com/Zhovten-Games/InterDeadReferenceLibrary" },
    ],
  },
  {
    number: "04",
    title: "Research",
    nodes: [
      { label: "InterDead Reference Library / research", href: "https://github.com/Zhovten-Games/InterDeadReferenceLibrary/tree/main/research" },
      {
        label: "Canon Horror Series",
        children: [
          { label: "Language as Infection" },
          { label: "After the Nuclear Strike" },
          { label: "When Disaster Becomes Environment" },
          { label: "Viruses and Bioweapons" },
        ],
      },
      { label: "Leibniz 1666 / Dissertatio de arte combinatoria", note: text("companion research notes", "супровідні дослідницькі нотатки", "сопутствующие исследовательские заметки", "関連研究ノート") },
      { label: "Brain Anatomy / Information Flow", note: text("companion research notes", "супровідні дослідницькі нотатки", "сопутствующие исследовательские заметки", "関連研究ノート") },
      { label: "Literate / Prompt-Literate methodology", href: "https://github.com/Zhovten-Games/literate-programming" },
    ],
  },
  {
    number: "05",
    title: "Community / Media",
    nodes: [
      { label: "Discord", href: "https://discord.gg/vAWYg3jFEp" },
      { label: "Telegram — INTER{🤙🏻💀}DEAD / NIRO IN NOIR", href: "https://t.me/inter_dead" },
      { label: "YouTube — NIRO IN NOIR", href: "https://www.youtube.com/@inter_dead" },
      { label: "Fandom", href: "https://interdead.fandom.com/wiki/InterDead_Wiki" },
    ],
  },
  {
    number: "06",
    title: text("Zhovten Games / external platforms", "Zhovten Games / зовнішні платформи", "Zhovten Games / внешние площадки", "Zhovten Games / 外部プラットフォーム"),
    nodes: [
      { label: "itch.io", href: "https://zhovten-games.itch.io/" },
      { label: "GitHub", href: "https://github.com/Zhovten-Games" },
      { label: "Facebook", href: "https://www.facebook.com/interdead" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/zhovten-games/" },
      { label: "Instagram", href: "https://www.instagram.com/zhovtengames/" },
    ],
  },
  {
    number: "07",
    title: "Legal / Governance",
    nodes: [
      { label: "Terms of Use", href: "https://interdead.phantom-draft.com/pages/terms-of-use/" },
      { label: "Privacy Policy", href: "https://interdead.phantom-draft.com/pages/privacy-policy/" },
      { label: "AI Usage & Generative Technologies Policy", href: "https://interdead.phantom-draft.com/pages/ai-policy/" },
    ],
  },
];

function localized(value: LocalizedText, locale: Locale): string {
  return typeof value === "string" ? value : value[locale];
}

function localePath(locale: Locale, path: string): string {
  return locale === "en" ? path : `/${locale}${path}`;
}

function ResourceList({ locale, nodes }: { locale: Locale; nodes: ResourceNode[] }) {
  return (
    <ul className="zg-resource-tree">
      {nodes.map((node) => {
        const label = localized(node.label, locale);
        const href = node.path ? localePath(locale, node.path) : node.href;
        const external = Boolean(href?.startsWith("http"));
        return (
          <li key={`${label}-${href ?? "text"}`}>
            {href ? (
              <a
                href={href}
                rel={external ? "noopener noreferrer" : undefined}
                target={external ? "_blank" : undefined}
              >
                {label}
              </a>
            ) : (
              <span>{label}</span>
            )}
            {node.note ? <small>{localized(node.note, locale)}</small> : null}
            {node.children ? <ResourceList locale={locale} nodes={node.children} /> : null}
          </li>
        );
      })}
    </ul>
  );
}

const mapTitles: Record<Locale, string> = {
  en: "Public project map",
  uk: "Публічна карта проєкту",
  ru: "Публичная карта проекта",
  ja: "公開プロジェクトマップ",
};

export function InterDeadMap({ locale }: { locale: Locale }) {
  return (
    <section aria-labelledby="interdead-map-title" className="zg-resource-map">
      <h2 id="interdead-map-title">{mapTitles[locale]}</h2>
      {sections.map((section) => (
        <section className="zg-resource-map__section" key={section.number}>
          <h3>
            <span>{`${section.number}.`}</span> {localized(section.title, locale)}
          </h3>
          <ResourceList locale={locale} nodes={section.nodes} />
        </section>
      ))}
    </section>
  );
}
