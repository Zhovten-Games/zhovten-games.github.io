import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBuildIdentity, PUBLIC_SOURCE_URL } from "./build-identity";
import { InterDeadMap } from "./components/InterDeadMap";
import { LogArchive } from "./components/LogArchive";
import {
  SiteInteractions,
  type InteractionLabels,
  type NavigationItem,
} from "./components/SiteInteractions";
import { Markdown } from "./markdown";
import { getContent, getPublishedLocales } from "./site-content";
import type { Author, Locale, Post, Project } from "./site-types";

export const SITE_ORIGIN = "https://zhovten.games";

const localeNames: Record<Locale, string> = {
  en: "English",
  uk: "Українська",
  ru: "Русский",
  ja: "日本語",
};

const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  uk: "uk_UA",
  ru: "ru_RU",
  ja: "ja_JP",
};

const englishLabels = {
  home: "Home",
  blog: "Blog",
  projects: "Projects",
  authors: "Authors",
  about: "About",
  contact: "Contact",
  governance: "Governance",
  menu: "MENU",
  enter: "ENTER LOG",
  journal: "GO TO JOURNAL",
  preview: "WINDOW",
  read: "READ",
  close: "Close",
  loading: "Loading…",
  loadError: "The post preview could not be loaded.",
  openFullPage: "Open the full post page",
  back: "Back to blog",
  date: "Date",
  categories: "Categories",
  tags: "Tags",
  author: "Author",
  logType: "Log type",
  logStatus: "Log status",
  all: "All",
  category: "Category",
  type: "Type",
  sort: "Sort",
  newest: "Newest",
  oldest: "Oldest",
  title: "Title A–Z",
  noEntries: "No matching entries.",
  external: "Read external source",
  status: "Status",
  skills: "Skills",
  languages: "Languages",
  tools: "Tools",
  studioLog: "Studio Log",
  language: "Language",
  licensing: "Licensing",
  studio: "Studio",
  role: "Role",
  primaryNavigation: "Primary navigation",
  repositoryOrder: "Repository order",
  releasedGames: "Released games · GrandMA Studios",
  developmentGames: "Games in development",
  contributionPeriod: "Contribution period",
  technology: "Technology",
  projectReference: "Open public reference",
  build: "Build",
  publicSource: "Public source",
  publicProfiles: "Public team profiles",
  personalTelegram: "Personal Telegram channel",
  itTrackTitle: "IT development is a separate track",
  itTrackBody: "The studio’s IT development experience is intentionally excluded from this list of game projects. It is presented on the IRON CREED about page.",
  itTrackLink: "Open IRON CREED",
  governanceDescription: "Code Constitution, development legislation, and licensing map.",
  governanceIntro: "This site applies the Code Constitution through a project Founding Profile and a site-specific Development Regulation. The Constitution and shared licensing policy are pinned as Git submodules.",
  governanceStatus: "The project-specific acts are publication candidates pending human ratification by the studio founders.",
  licensingMap: "Licensing map",
  licenseEditorial: "Original editorial materials: CC BY-SA 4.0.",
  licenseCode: "Original code, tests, schemas, configuration, and reusable templates: MIT.",
  licenseBrand: "Names, logos, trademarks, and visual identity: all rights reserved.",
  licenseThirdParty: "Third-party materials retain their upstream terms.",
};

const labelsByLocale: Record<Locale, typeof englishLabels> = {
  en: englishLabels,
  uk: {
    home: "Головна",
    blog: "Журнал",
    projects: "Проєкти",
    authors: "Автори",
    about: "Про студію",
    contact: "Контакти",
    governance: "Управління",
    menu: "МЕНЮ",
    enter: "ВІДКРИТИ ЖУРНАЛ",
    journal: "ДО ЖУРНАЛУ",
    preview: "У ВІКНІ",
    read: "ЧИТАТИ",
    close: "Закрити",
    loading: "Завантаження…",
    loadError: "Не вдалося завантажити попередній перегляд запису.",
    openFullPage: "Відкрити повну сторінку запису",
    back: "Назад до журналу",
    date: "Дата",
    categories: "Категорії",
    tags: "Теги",
    author: "Автор",
    logType: "Тип запису",
    logStatus: "Статус запису",
    all: "Усі",
    category: "Категорія",
    type: "Тип",
    sort: "Сортування",
    newest: "Найновіші",
    oldest: "Найстаріші",
    title: "Назва А–Я",
    noEntries: "Відповідних записів немає.",
    external: "Відкрити зовнішнє джерело",
    status: "Статус",
    skills: "Компетенції",
    languages: "Мови",
    tools: "Інструменти",
    studioLog: "Журнал студії",
    language: "Мова",
    licensing: "Ліцензування",
    studio: "Студія",
    role: "Роль",
    primaryNavigation: "Основна навігація",
    repositoryOrder: "Порядок репозиторію",
    releasedGames: "Випущені ігри · GrandMA Studios",
    developmentGames: "Ігри в розробці",
    contributionPeriod: "Період роботи",
    technology: "Технологія",
    projectReference: "Відкрити публічний матеріал",
    build: "Збірка",
    publicSource: "Публічний код",
    publicProfiles: "Публічні профілі команди",
    personalTelegram: "Особистий канал у Telegram",
    itTrackTitle: "ІТ-розробка — окремий напрям",
    itTrackBody: "Досвід студії в ІТ-розробці навмисно не включено до цього переліку ігрових проєктів. Його представлено на сторінці про IRON CREED.",
    itTrackLink: "Відкрити IRON CREED",
    governanceDescription: "Кодекс Конституції, регламент розробки та карта ліцензування.",
    governanceIntro: "Сайт застосовує Кодекс Конституції через установчий профіль проєкту та спеціальний Регламент розробки. Конституцію і спільну політику ліцензування закріплено як Git-сабмодулі.",
    governanceStatus: "Проєктні акти є кандидатами цієї публікації та очікують на людську ратифікацію засновниками студії.",
    licensingMap: "Карта ліцензування",
    licenseEditorial: "Оригінальні редакційні матеріали: CC BY-SA 4.0.",
    licenseCode: "Оригінальний код, тести, схеми, конфігурація та повторно використовувані шаблони: MIT.",
    licenseBrand: "Назви, логотипи, торговельні марки та візуальна ідентичність: усі права захищено.",
    licenseThirdParty: "Матеріали третіх сторін зберігають умови першоджерел.",
  },
  ru: {
    home: "Главная",
    blog: "Журнал",
    projects: "Проекты",
    authors: "Авторы",
    about: "О студии",
    contact: "Контакты",
    governance: "Управление",
    menu: "МЕНЮ",
    enter: "ОТКРЫТЬ ЖУРНАЛ",
    journal: "В ЖУРНАЛ",
    preview: "В ОКНЕ",
    read: "ЧИТАТЬ",
    close: "Закрыть",
    loading: "Загрузка…",
    loadError: "Не удалось загрузить запись в окне.",
    openFullPage: "Открыть полную страницу записи",
    back: "Назад к журналу",
    date: "Дата",
    categories: "Категории",
    tags: "Теги",
    author: "Автор",
    logType: "Тип записи",
    logStatus: "Статус записи",
    all: "Все",
    category: "Категория",
    type: "Тип",
    sort: "Сортировка",
    newest: "Сначала новые",
    oldest: "Сначала старые",
    title: "Название А–Я",
    noEntries: "Подходящих записей нет.",
    external: "Открыть внешний источник",
    status: "Статус",
    skills: "Компетенции",
    languages: "Языки",
    tools: "Инструменты",
    studioLog: "Журнал студии",
    language: "Язык",
    licensing: "Лицензирование",
    studio: "Студия",
    role: "Роль",
    primaryNavigation: "Основная навигация",
    repositoryOrder: "Порядок репозитория",
    releasedGames: "Выпущенные игры · GrandMA Studios",
    developmentGames: "Игры в разработке",
    contributionPeriod: "Период работы",
    technology: "Технология",
    projectReference: "Открыть публичный материал",
    build: "Сборка",
    publicSource: "Публичный код",
    publicProfiles: "Публичные профили команды",
    personalTelegram: "Личный канал в Telegram",
    itTrackTitle: "ИТ-разработка — отдельное направление",
    itTrackBody: "Опыт студии в ИТ-разработке намеренно не включён в этот список игровых проектов. Он представлен на странице об IRON CREED.",
    itTrackLink: "Открыть IRON CREED",
    governanceDescription: "Кодекс Конституции, регламент разработки и карта лицензирования.",
    governanceIntro: "Сайт применяет Кодекс Конституции через учредительный профиль проекта и специальный Регламент разработки. Конституция и общая политика лицензирования закреплены как Git-субмодули.",
    governanceStatus: "Проектные акты являются кандидатами этой публикации и ожидают человеческой ратификации основателями студии.",
    licensingMap: "Карта лицензирования",
    licenseEditorial: "Оригинальные редакционные материалы: CC BY-SA 4.0.",
    licenseCode: "Оригинальный код, тесты, схемы, конфигурация и повторно используемые шаблоны: MIT.",
    licenseBrand: "Названия, логотипы, товарные знаки и визуальная идентичность: все права защищены.",
    licenseThirdParty: "Материалы третьих сторон сохраняют исходные условия.",
  },
  ja: {
    home: "ホーム",
    blog: "ログ",
    projects: "プロジェクト",
    authors: "著者",
    about: "スタジオ情報",
    contact: "お問い合わせ",
    governance: "ガバナンス",
    menu: "メニュー",
    enter: "ログを開く",
    journal: "ログへ",
    preview: "ウィンドウ",
    read: "読む",
    close: "閉じる",
    loading: "読み込み中…",
    loadError: "ログのプレビューを読み込めませんでした。",
    openFullPage: "ログの全ページを開く",
    back: "ログ一覧へ戻る",
    date: "日付",
    categories: "カテゴリー",
    tags: "タグ",
    author: "著者",
    logType: "ログ種別",
    logStatus: "公開状態",
    all: "すべて",
    category: "カテゴリー",
    type: "種別",
    sort: "並び順",
    newest: "新しい順",
    oldest: "古い順",
    title: "タイトル順",
    noEntries: "該当する記録はありません。",
    external: "外部資料を開く",
    status: "状態",
    skills: "スキル",
    languages: "言語",
    tools: "ツール",
    studioLog: "スタジオログ",
    language: "言語",
    licensing: "ライセンス",
    studio: "スタジオ",
    role: "担当",
    primaryNavigation: "メインナビゲーション",
    repositoryOrder: "リポジトリ規範",
    releasedGames: "リリース済みゲーム · GrandMA Studios",
    developmentGames: "開発中のゲーム",
    contributionPeriod: "担当期間",
    technology: "技術",
    projectReference: "公開資料を開く",
    build: "ビルド",
    publicSource: "公開ソース",
    publicProfiles: "チームの公開プロフィール",
    personalTelegram: "個人 Telegram チャンネル",
    itTrackTitle: "IT開発は別の領域です",
    itTrackBody: "スタジオのIT開発経験は、このゲームプロジェクト一覧から意図的に分離しています。詳細はIRON CREEDの紹介ページに掲載しています。",
    itTrackLink: "IRON CREEDを開く",
    governanceDescription: "Code Constitution、開発規程、ライセンスマップ。",
    governanceIntro: "このサイトは、プロジェクト設立プロファイルとサイト固有の開発規程を通じて Code Constitution を適用します。Constitution と共通ライセンスポリシーは Git サブモジュールとして固定されています。",
    governanceStatus: "プロジェクト固有の規程は公開候補であり、スタジオ設立者による人間の批准を待っています。",
    licensingMap: "ライセンスマップ",
    licenseEditorial: "独自の編集コンテンツ：CC BY-SA 4.0。",
    licenseCode: "独自のコード、テスト、スキーマ、設定、再利用可能なテンプレート：MIT。",
    licenseBrand: "名称、ロゴ、商標、ビジュアルアイデンティティ：すべての権利を留保。",
    licenseThirdParty: "第三者資料には上流の利用条件が引き続き適用されます。",
  },
};

function ui(locale: Locale) {
  return labelsByLocale[locale];
}

function navigationItems(locale: Locale): NavigationItem[] {
  const l = ui(locale);
  return [
    [l.home, "/"],
    [l.blog, "/blog/"],
    [l.projects, "/projects/"],
    [l.about, "/about/"],
    [l.authors, "/authors/"],
    [l.contact, "/contact/"],
    [l.governance, "/governance/"],
  ].map(([label, href]) => ({ label, href: localePath(locale, href) }));
}

function interactionLabels(locale: Locale): InteractionLabels {
  const l = ui(locale);
  return {
    close: l.close,
    loadError: l.loadError,
    loading: l.loading,
    menu: l.menu,
    openFullPage: l.openFullPage,
    primaryNavigation: l.primaryNavigation,
  };
}

export function localePath(locale: Locale, path = "/"): string {
  if (locale === "en") return path;
  return path === "/" ? "/" + locale + "/" : "/" + locale + path;
}

function absolute(locale: Locale, path: string): string {
  return new URL(localePath(locale, path), SITE_ORIGIN).toString();
}

function alternateUrls(path: string): Record<string, string> {
  const available = getPublishedLocales();
  const urls = Object.fromEntries(
    available.map((locale) => [locale, absolute(locale, path)]),
  );

  urls["x-default"] = available.includes("uk")
    ? absolute("uk", path)
    : absolute("en", path);

  return urls;
}

type PageDescriptor = {
  title: string;
  description: string;
  path: string;
  kind: string;
  post?: Post;
  project?: Project;
  author?: Author;
};

function pageDescriptor(locale: Locale, segments: string[]): PageDescriptor | null {
  const content = getContent(locale);
  const [section, slug] = segments;

  if (!section) {
    return {
      title: content.pages.homeTitle,
      description: content.pages.homeDescription,
      path: "/",
      kind: "home",
    };
  }
  if (section === "blog" && !slug) {
    return {
      title: content.pages.blogTitle,
      description: content.pages.blogDescription,
      path: "/blog/",
      kind: "blog",
    };
  }
  if (section === "blog" && slug) {
    const post = content.posts.find((item) => item.slug === slug);
    if (!post) return null;
    return {
      title: post.title,
      description: post.description,
      path: "/blog/" + slug + "/",
      kind: "post",
      post,
    };
  }
  if (section === "projects" && !slug) {
    return {
      title: content.pages.projectsTitle,
      description: content.pages.projectsDescription,
      path: "/projects/",
      kind: "projects",
    };
  }
  if (section === "projects" && slug) {
    const project = content.projects.find((item) => item.slug === slug);
    if (!project) return null;
    return {
      title: project.title,
      description: project.description,
      path: "/projects/" + slug + "/",
      kind: "project",
      project,
    };
  }
  if (section === "authors" && !slug) {
    return {
      title: content.pages.authorsTitle,
      description: content.pages.authorsTitle,
      path: "/authors/",
      kind: "authors",
    };
  }
  if (section === "authors" && slug) {
    const author = content.authors.find((item) => item.slug === slug);
    if (!author) return null;
    return {
      title: author.name,
      description: author.description,
      path: "/authors/" + slug + "/",
      kind: "author",
      author,
    };
  }
  if (section === "about" && !slug) {
    return {
      title: content.pages.aboutTitle,
      description: content.pages.aboutDescription,
      path: "/about/",
      kind: "about",
    };
  }
  if (section === "contact" && !slug) {
    return {
      title: content.pages.contactTitle,
      description: content.pages.contactDescription,
      path: "/contact/",
      kind: "contact",
    };
  }
  if (section === "governance" && !slug) {
    const l = ui(locale);
    return {
      title: l.governance,
      description: l.governanceDescription,
      path: "/governance/",
      kind: "governance",
    };
  }
  return null;
}

export function buildMetadata(locale: Locale, segments: string[]): Metadata {
  const descriptor = pageDescriptor(locale, segments);
  if (!descriptor) return {};

  const canonical = absolute(locale, descriptor.path);
  const projectImage = descriptor.kind === "project" ? descriptor.project?.imageUrl : undefined;
  const socialImages = descriptor.kind === "project"
    ? projectImage
      ? [{
          url: projectImage,
          width: 480,
          height: 360,
          alt: descriptor.project?.imageAlt ?? descriptor.title,
        }]
      : []
    : [{
        url: SITE_ORIGIN + "/og.png",
        width: 1200,
        height: 630,
        alt: "Zhovten Games — Metal Under Tension",
      }];
  return {
    metadataBase: new URL(SITE_ORIGIN),
    title:
      descriptor.kind === "home"
        ? descriptor.title
        : descriptor.title + " | Zhovten Games",
    description: descriptor.description,
    alternates: {
      canonical,
      languages: alternateUrls(descriptor.path),
    },
    openGraph: {
      type: descriptor.kind === "post" ? "article" : "website",
      title: descriptor.title,
      description: descriptor.description,
      url: canonical,
      siteName: "Zhovten Games",
      locale: openGraphLocales[locale],
      alternateLocale: getPublishedLocales()
        .filter((item) => item !== locale)
        .map((item) => openGraphLocales[item]),
      images: socialImages,
    },
    twitter: {
      card: descriptor.kind === "project" && !projectImage ? "summary" : "summary_large_image",
      title: descriptor.title,
      description: descriptor.description,
      images: socialImages.map((image) => image.url),
    },
    icons: {
      icon: [
        { url: "/favicon.png", type: "image/png", sizes: "512x512" },
        { url: "/favicon.ico", type: "image/x-icon" },
      ],
      shortcut: "/favicon.ico",
      apple: "/favicon.png",
    },
    other: {
      "codex-preview": "development",
    },
  };
}

function LanguageLinks({ locale, path }: { locale: Locale; path: string }) {
  const available = getPublishedLocales();
  return (
    <nav className="zg-language-nav" aria-label={ui(locale).language}>
      {available.map((item) => (
        <a
          aria-current={item === locale ? "page" : undefined}
          href={localePath(item, path)}
          key={item}
          hrefLang={item}
        >
          {localeNames[item]}
        </a>
      ))}
    </nav>
  );
}

function Header({ locale, path }: { locale: Locale; path: string }) {
  const l = ui(locale);
  const items = navigationItems(locale);

  return (
    <header className="site-header">
      <a className="site-mark" href={localePath(locale, "/")}>Zhovten Games</a>
      <nav aria-label={l.primaryNavigation}>
        <ul>
          {items.map((item) => (
            <li key={item.href}><a href={item.href}>{item.label}</a></li>
          ))}
        </ul>
      </nav>
      <LanguageLinks locale={locale} path={path} />
    </header>
  );
}

function Footer({ locale }: { locale: Locale }) {
  const l = ui(locale);
  const build = getBuildIdentity();
  return (
    <footer className="site-footer">
      <p>© 2026 Zhovten Games</p>
      <nav className="site-footer__socials" aria-label="Zhovten Games social networks">
        <a href="https://www.linkedin.com/company/zhovten-games/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Zhovten-Games" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://zhovten-games.itch.io/" target="_blank" rel="noopener noreferrer">itch.io</a>
        <a href="https://discord.gg/vAWYg3jFEp" target="_blank" rel="noopener noreferrer">Discord</a>
      </nav>
      <p>
        <a href={localePath(locale, "/governance/")}>{l.licensing}</a>
        {" · "}CC BY-SA 4.0{" · "}MIT{" · "}{l.licenseBrand}
      </p>
      <p className="site-footer__build">
        {l.build}:{" "}
        <a
          href={PUBLIC_SOURCE_URL}
          rel="noopener noreferrer"
          target="_blank"
          title={`${l.publicSource}: ${build.label}`}
        >
          {build.label}
        </a>
      </p>
    </footer>
  );
}

function AuthorNames({
  slugs,
  authors,
}: {
  slugs: string[];
  authors: Author[];
}) {
  const names = Object.fromEntries(authors.map((author) => [author.slug, author.name]));
  return <>{slugs.map((slug) => names[slug] ?? slug).join(", ")}</>;
}

function LogList({
  posts,
  authors,
  locale,
  limit,
}: {
  posts: Post[];
  authors: Author[];
  locale: Locale;
  limit?: number;
}) {
  const l = ui(locale);
  const sorted = [...posts].sort((left, right) => right.date.localeCompare(left.date));
  const selected = limit ? sorted.slice(0, limit) : sorted;
  return (
    <ul className="zg-log-list" data-reveal-group>
      {selected.map((post) => (
        <li className="zg-log-card" data-reveal-card key={post.slug}>
          <header className="zg-log-card__header">
            <h2 className="zg-log-card__title">
              <a href={localePath(locale, "/blog/" + post.slug + "/")}>{post.title}</a>
            </h2>
            <p className="zg-log-card__date">{post.date}</p>
          </header>
          <p>{post.description}</p>
          <div className="zg-log-card__meta">
            <p className="zg-log-card__meta-row">
              <span className="zg-log-card__meta-label">{l.authors}:</span>{" "}
              <AuthorNames slugs={post.authors} authors={authors} />
            </p>
            <p className="zg-log-card__meta-row">
              <span className="zg-log-card__meta-label">{l.logType}:</span> {post.type}
            </p>
          </div>
          <div className="zg-log-card__actions">
            <button
              aria-controls="zg-modal-root"
              aria-haspopup="dialog"
              data-modal-open="post"
              data-post-title={post.title}
              data-post-url={localePath(locale, "/blog/" + post.slug + "/")}
              type="button"
            >
              [ {l.preview} ]
            </button>
            <a href={localePath(locale, "/blog/" + post.slug + "/")}>[ {l.read} ]</a>
          </div>
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  const l = ui(locale);
  const href = localePath(locale, "/projects/" + project.slug + "/");
  return (
    <li className="zg-project-card" data-reveal-card>
      {project.imageUrl && (
        <a className="zg-project-card__media" href={href}>
          {/* YouTube supplies the explicit portfolio thumbnail URL. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={project.imageAlt ?? project.title}
            height="360"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            src={project.imageUrl}
            width="480"
          />
        </a>
      )}
      <div className="zg-project-card__body">
        <p className="zg-kicker">{project.kind}</p>
        <h3><a href={href}>{project.title}</a></h3>
        {project.period && (
          <p className="zg-project-card__meta">
            <span>{l.contributionPeriod}:</span> {project.period}
          </p>
        )}
        {project.role && <p className="zg-project-card__meta">{project.role}</p>}
        <p>{project.description}</p>
        {project.skills?.length ? (
          <p className="zg-project-card__meta">
            <span>{l.skills}:</span> {project.skills.join(", ")}
          </p>
        ) : null}
      </div>
    </li>
  );
}

function JsonLd({ value }: { value: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(value) }}
    />
  );
}

export function SitePage({ locale, segments }: { locale: Locale; segments: string[] }) {
  const content = getContent(locale);
  const descriptor = pageDescriptor(locale, segments);
  if (!descriptor) notFound();
  const path = descriptor.path;
  const l = ui(locale);
  const canonical = absolute(locale, path);

  if (descriptor.kind === "home") {
    return (
      <>
        <main className="is-home">
          <section className="zg-hero zg-panel">
            <div className="zg-leaf-layer" aria-hidden="true">
              <div className="zg-leaf zg-leaf--metal" />
              <div className="zg-leaf zg-leaf--live" />
            </div>
            <div className="zg-hero__inner">
              <h1 data-type-target="short">{content.pages.homeTitle}</h1>
              <p data-type-target>{content.pages.tagline}</p>
              <div className="zg-hero__actions" data-reveal-target>
                <button
                  aria-controls="zg-modal-root"
                  aria-haspopup="dialog"
                  className="zg-hero__menu-trigger"
                  data-modal-open="menu"
                  type="button"
                >
                  [ {l.menu} ]
                </button>
                <a className="zg-hero__anchor" href="#latest-logs">[ {l.enter} ]</a>
              </div>
              <LanguageLinks locale={locale} path="/" />
            </div>
          </section>
          <section id="latest-logs" className="zg-log-section zg-panel zg-panel--log">
            <h2>{content.pages.latest}</h2>
            <LogList posts={content.posts} authors={content.authors} locale={locale} limit={6} />
            <p className="zg-log-section__more">
              <a className="zg-journal-link" href={localePath(locale, "/blog/")}>
                [ {l.journal} ]
              </a>
            </p>
          </section>
        </main>
        <Footer locale={locale} />
        <SiteInteractions
          labels={interactionLabels(locale)}
          navigation={navigationItems(locale)}
        />
        <JsonLd value={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Zhovten Games",
          url: canonical,
        }} />
      </>
    );
  }

  return (
    <>
      <Header locale={locale} path={path} />
      <main>
        {descriptor.kind === "blog" && (
          <section className="zg-panel zg-panel--log">
            <h1>{content.pages.blogTitle}</h1>
            <p className="zg-section-intro">{content.pages.blogDescription}</p>
            <LogArchive
              posts={content.posts}
              authors={content.authors}
              locale={locale}
              labels={{
                all: l.all,
                category: l.category,
                type: l.type,
                author: l.author,
                sort: l.sort,
                newest: l.newest,
                oldest: l.oldest,
                title: l.title,
                noEntries: l.noEntries,
                preview: l.preview,
                read: l.read,
                authors: l.authors,
                categories: l.categories,
                tags: l.tags,
                logType: l.logType,
                logStatus: l.logStatus,
              }}
            />
          </section>
        )}
        {descriptor.kind === "post" && descriptor.post && (
          <article className="zg-post zg-panel" data-post-content data-reveal-group>
            <p className="zg-kicker" data-reveal-target>{descriptor.post.type}</p>
            <h1 data-type-target="short">{descriptor.post.title}</h1>
            <p data-type-target>{descriptor.post.description}</p>
            <div className="zg-meta zg-control-panel" data-reveal-target>
              <p><span className="zg-meta-label">{l.date}:</span> {descriptor.post.date}</p>
              <p><span className="zg-meta-label">{l.authors}:</span>{" "}
                <AuthorNames slugs={descriptor.post.authors} authors={content.authors} />
              </p>
              <p><span className="zg-meta-label">{l.categories}:</span>{" "}
                {descriptor.post.categories.join(", ")}
              </p>
              <p><span className="zg-meta-label">{l.tags}:</span> {descriptor.post.tags.join(", ")}</p>
            </div>
            <Markdown locale={locale}>{descriptor.post.body}</Markdown>
            {descriptor.post.externalUrl && (
              <p data-reveal-target><a href={descriptor.post.externalUrl} target="_blank" rel="noopener noreferrer">
                {l.external}
              </a></p>
            )}
            <p data-reveal-target><a href={localePath(locale, "/blog/")}>{l.back}</a></p>
            <JsonLd value={{
              "@context": "https://schema.org",
              "@type": "Article",
              headline: descriptor.post.title,
              description: descriptor.post.description,
              datePublished: descriptor.post.date,
              author: descriptor.post.authors.map((slug) => ({
                "@type": "Person",
                name: content.authors.find((author) => author.slug === slug)?.name ?? slug,
              })),
              publisher: { "@type": "Organization", name: "Zhovten Games" },
              mainEntityOfPage: canonical,
              inLanguage: locale,
            }} />
            <JsonLd value={{
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: content.pages.homeTitle, item: absolute(locale, "/") },
                { "@type": "ListItem", position: 2, name: content.pages.blogTitle, item: absolute(locale, "/blog/") },
                { "@type": "ListItem", position: 3, name: descriptor.post.title, item: canonical },
              ],
            }} />
          </article>
        )}
        {descriptor.kind === "projects" && (
          <section className="zg-panel zg-projects-page">
            <h1>{content.pages.projectsTitle}</h1>
            <p>{content.pages.projectsDescription}</p>
            {([
              ["released", l.releasedGames],
              ["development", l.developmentGames],
              ["tool", l.tools],
            ] as const).map(([section, title]) => {
              const projects = content.projects.filter((project) => project.section === section);
              if (!projects.length) return null;
              return (
                <section className="zg-project-section" id={"projects-" + section} key={section}>
                  <h2>{title}</h2>
                  <ul className="zg-project-grid">
                    {projects.map((project) => (
                      <ProjectCard key={project.slug} locale={locale} project={project} />
                    ))}
                  </ul>
                </section>
              );
            })}
            <section className="zg-projects-external-track">
              <h2>{l.itTrackTitle}</h2>
              <p>{l.itTrackBody}</p>
              <p>
                <a
                  href={locale === "uk"
                    ? "https://web.zhovten.games/uk/pages/about"
                    : "https://web.zhovten.games/en/pages/about"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {l.itTrackLink}
                </a>
              </p>
            </section>
          </section>
        )}
        {descriptor.kind === "project" && descriptor.project && (
          <article className="zg-panel zg-project-detail">
            <p className="zg-kicker">{descriptor.project.kind}</p>
            <h1>{descriptor.project.title}</h1>
            <p>{descriptor.project.description}</p>
            {descriptor.project.imageUrl && descriptor.project.externalUrl && (
              <a
                className="zg-project-detail__media"
                href={descriptor.project.externalUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {/* YouTube supplies the explicit portfolio thumbnail URL. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={descriptor.project.imageAlt ?? descriptor.project.title}
                  height="360"
                  referrerPolicy="strict-origin-when-cross-origin"
                  src={descriptor.project.imageUrl}
                  width="480"
                />
                <span>[ {l.projectReference} ]</span>
              </a>
            )}
            <div className="zg-project-detail__meta zg-control-panel">
              {descriptor.project.period && (
                <p><strong>{l.contributionPeriod}:</strong> {descriptor.project.period}</p>
              )}
              {descriptor.project.skills?.length ? (
                <p><strong>{l.skills}:</strong> {descriptor.project.skills.join(", ")}</p>
              ) : null}
              {descriptor.project.technology && (
                <p><strong>{l.technology}:</strong> {descriptor.project.technology}</p>
              )}
              {descriptor.project.studio && <p><strong>{l.studio}:</strong> {descriptor.project.studio}</p>}
              {descriptor.project.role && <p><strong>{l.role}:</strong> {descriptor.project.role}</p>}
            </div>
            <Markdown locale={locale}>{descriptor.project.body}</Markdown>
            {descriptor.project.slug === "interdead" ? <InterDeadMap locale={locale} /> : null}
            {descriptor.project.ownership && (
              <p className="zg-project-detail__ownership">{descriptor.project.ownership}</p>
            )}
            {descriptor.project.externalUrl && (
              <p><a href={descriptor.project.externalUrl} target="_blank" rel="noopener noreferrer">
                {l.projectReference}
              </a></p>
            )}
          </article>
        )}
        {descriptor.kind === "authors" && (
          <section className="zg-panel">
            <h1>{content.pages.authorsTitle}</h1>
            <ul className="zg-project-grid">
              {content.authors.map((author) => (
                <li className="zg-project-card" data-reveal-card key={author.slug}>
                  <h2><a href={localePath(locale, "/authors/" + author.slug + "/")}>{author.name}</a></h2>
                  <p>{author.role}</p>
                  <p>{author.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
        {descriptor.kind === "author" && descriptor.author && (
          <article className="zg-profile zg-panel">
            <h1>{descriptor.author.name}</h1>
            <p>{descriptor.author.role}</p>
            <p>{descriptor.author.description}</p>
            <p><strong>{l.status}:</strong> {descriptor.author.status}</p>
            <Markdown locale={locale}>{descriptor.author.body}</Markdown>
            <section className="zg-profile__links">
              <h2>{l.publicProfiles}</h2>
              <ul>
                {descriptor.author.profileLinks.map((link) => {
                  const label = link.kind === "telegram"
                    ? l.personalTelegram
                    : link.kind === "linkedin"
                      ? "LinkedIn"
                      : link.kind === "orcid"
                        ? "ORCID"
                        : "GitHub";
                  return (
                    <li key={link.url}>
                      <a href={link.url} rel="noopener noreferrer" target="_blank">{label}</a>
                    </li>
                  );
                })}
              </ul>
            </section>
            <div className="zg-profile__groups">
              {[
                ["skills", l.skills],
                ["languages", l.languages],
                ["tools", l.tools],
              ].map(([key, label]) => (
                <section className="zg-profile__group" key={key}>
                  <h2>{label}</h2>
                  <ul>
                    {descriptor.author?.[key as "skills" | "languages" | "tools"].map((item) => {
                      const external = /^https?:\/\//.test(item);
                      return (
                        <li key={item}>
                          {external ? (
                            <a href={item} target="_blank" rel="noopener noreferrer">
                              {item.replace(/^https?:\/\//, "")}
                            </a>
                          ) : item}
                        </li>
                      );
                    })}
                  </ul>
                </section>
              ))}
            </div>
            <section className="zg-log-section zg-panel--log">
              <h2>{l.studioLog}</h2>
              <LogList
                posts={content.posts.filter((post) => post.authors.includes(descriptor.author!.slug))}
                authors={content.authors}
                locale={locale}
              />
            </section>
          </article>
        )}
        {descriptor.kind === "about" && (
          <article className="zg-panel">
            <h1>{content.pages.aboutTitle}</h1>
            <Markdown locale={locale}>{content.pages.aboutBody}</Markdown>
          </article>
        )}
        {descriptor.kind === "contact" && (
          <article className="zg-panel">
            <h1>{content.pages.contactTitle}</h1>
            <Markdown locale={locale}>{content.pages.contactBody}</Markdown>
            <p><a href="mailto:sam@zhovten.games">sam@zhovten.games</a></p>
            <p><a href="mailto:oksana@zhovten.games">oksana@zhovten.games</a></p>
          </article>
        )}
        {descriptor.kind === "governance" && (
          <article className="zg-panel">
            <p className="zg-kicker">{l.repositoryOrder}</p>
            <h1>{l.governance}</h1>
            <p><strong>{l.governanceStatus}</strong></p>
            <p>{l.governanceIntro}</p>
            <h2>{l.licensingMap}</h2>
            <ul>
              <li>{l.licenseEditorial}</li>
              <li>{l.licenseCode}</li>
              <li>{l.licenseBrand}</li>
              <li>{l.licenseThirdParty}</li>
            </ul>
            <p>
              <a href="https://github.com/FOP-Oksana-Dubinetska/code-constitution">
                Code Constitution
              </a>
              {" · "}
              <a href="https://github.com/FOP-Oksana-Dubinetska/repository-licensing-policy">
                Repository Licensing Policy
              </a>
            </p>
            <p>
              {l.publicSource}:{" "}
              <a href={PUBLIC_SOURCE_URL} rel="noopener noreferrer" target="_blank">
                {getBuildIdentity().label}
              </a>
            </p>
          </article>
        )}
      </main>
      <Footer locale={locale} />
      <SiteInteractions
        labels={interactionLabels(locale)}
        navigation={navigationItems(locale)}
      />
    </>
  );
}
