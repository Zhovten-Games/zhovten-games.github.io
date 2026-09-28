import type { Locale } from "../site-types";

export const POLICY_DATE = "2026-09-28";
export const policySlugs = ["ai-policy", "licensing", "privacy-policy", "terms-of-use"] as const;
export type PolicySlug = (typeof policySlugs)[number];
export type Policy = { slug: PolicySlug; title: string; description: string; body: string };
type PolicyText = Omit<Policy, "slug">;

export const policyLabels: Record<Locale, { title: string; intro: string; effective: string }> = {
  en: { title: "Studio policies", intro: "How Zhovten Games uses AI, licenses published work, handles site data, and defines the terms for using this website.", effective: "Effective date" },
  uk: { title: "Політики студії", intro: "Як Zhovten Games використовує ШІ, ліцензує опубліковані матеріали, обробляє дані сайту та визначає умови його використання.", effective: "Дата набрання чинності" },
  ru: { title: "Политики студии", intro: "Как Zhovten Games использует ИИ, лицензирует опубликованные материалы, обрабатывает данные сайта и определяет условия его использования.", effective: "Дата вступления в силу" },
  ja: { title: "スタジオのポリシー", intro: "Zhovten Games における AI の利用、公開資料のライセンス、サイトのデータ処理、利用条件について。", effective: "施行日" },
};

const policies: Record<Locale, Record<PolicySlug, PolicyText>> = {
  en: {
    "ai-policy": {
      title: "AI Usage Policy",
      description: "The role of AI-assisted tools in the creative, research, and engineering work of Zhovten Games.",
      body: `## 1. Our position

Zhovten Games openly uses lawful computational tools, including OpenAI GPT models, in creative work, research, and software development.

## 2. Areas of use

AI-assisted tools may support ideas, drafts, editing, prototyping, code, research, localization, verification, and automation. The tools used can change as our working methods develop.

## 3. Human responsibility

People retain responsibility for direction, selection, editing, integration, verification, and publication. Model output is a candidate until reviewed under the applicable project rules. Assistance does not remove the obligation to check facts, attribution, rights, and implementation.

## 4. This website

The studio journal, project catalogue, and author pages publish reviewed material. The site has no AI chat or free-text AI input and does not call an external model when a visitor reads a page. AI used to prepare a publication is distinct from a live service processing visitor input.

## 5. Authorship and rights

Using AI tools does not grant visitors or third parties rights to studio names, logos, characters, worlds, or other reserved material. Reuse of published work follows the [licensing map](/governance/licensing/) and any notice attached to the particular material.

## 6. Provider terms and changes

Use of OpenAI and other providers remains subject to their applicable terms and policies. We revise this page if our actual use of AI or the website’s behavior changes. Questions can be sent through [Contact](/contact/).`,
    },
    licensing: {
      title: "Licensing",
      description: "The licensing map for Zhovten Games editorial content, website code, brand assets, and third-party materials.",
      body: `## 1. Scope and default map

This page explains the website repository’s [LICENSE.md](https://github.com/Zhovten-Games/zhovten-games.github.io/blob/main/site/LICENSE.md). It applies Repository Licensing Policy 1.0.0, pinned at commit 6e4c2627717c079827ed4aa9044a5346b3ea3ddb.

- Original articles, prose, documentation, publication sources, and non-brand editorial materials: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- Original code, scripts, tests, examples, reusable schemas, configuration, and templates: [MIT](https://opensource.org/license/mit).
- Names, logos, trademarks, brand assets, and visual identity, including the studio social-preview image: no license granted; all rights reserved.
- Third-party materials and dependencies: their original licenses and notices.

This is a map by material and location, not a choice of two licenses for everything. Linking to a game, research archive, repository, or external portfolio does not place that entire work under this website’s license.

## 2. Specific notices

File-level, subtree, or material-specific notices govern their stated scope. A license shown on a Zenodo record governs that archived edition. The website has no project-specific licensing overrides. Local notices cannot weaken mandatory third-party terms.

## 3. Order of precedence

1. Mandatory third-party terms and notices.
2. File-level notices and SPDX identifiers.
3. Subtree licenses and material-specific terms.
4. Explicit project-specific overrides, if adopted.
5. The default map above.

## 4. Attribution

For CC BY-SA 4.0 material, credit its authors, identify the work, link to the canonical page or DOI and the license, and indicate changes. Adaptations must follow the license’s ShareAlike requirements. MIT copies must preserve the copyright and permission notice.

## 5. Brand and external work

Publication does not authorize use of the Zhovten Games or IRONCREED identity as evidence of endorsement, partnership, or official origin. Characters, fictional worlds, and game assets receive no license merely by appearing on this site. Portfolio records for other studios describe credited contributions; rights remain with the respective holders.

## 6. Public source and releases

The website’s public source is [Zhovten-Games/zhovten-games.github.io/site](https://github.com/Zhovten-Games/zhovten-games.github.io/tree/main/site). The footer identifies the current build. [Release records](https://github.com/Zhovten-Games/zhovten-games.github.io/tree/main/releases) connect publications to the canonical Sites commit and public projection. The Constitution and licensing policy remain separately pinned submodules with their own notices; inclusion does not relicense them.

## 7. Questions

For permissions outside the applicable license, use [Contact](/contact/). This operational map is not legal advice; complex ownership, jurisdiction, and third-party questions require appropriate legal review.`,
    },
    "privacy-policy": {
      title: "Privacy Policy",
      description: "Data handling on the Zhovten Games website, browser behavior, and external infrastructure.",
      body: `## 1. Who we are

Zhovten Games operates this studio website at zhovten.games. It publishes a journal, project catalogue, author profiles, and policies in English, Ukrainian, Russian, and Japanese. This policy describes this website; linked games and services have their own policies.

## 2. Application data

The website application has no visitor registration, comments, contact form, visitor database, analytics, advertising profiles, or AI input. Reading a page does not send visitor text to an external language model. Archive filters, sorting, and previews operate in the browser; opening a preview requests the corresponding page from this site.

## 3. Browser storage

Application code does not set cookies or use localStorage or sessionStorage. Filters and open windows use temporary page state. The browser may retain ordinary page history and cached resources under its own settings. Hosting or security infrastructure can apply its own technical mechanisms independently of application code.

## 4. Infrastructure and logs

Hosting and security providers may process IP addresses, request URLs, browser information, timestamps, and diagnostic or security logs to deliver and protect the service. Their applicable terms govern that processing. We do not claim that network access creates no technical records or promise a retention period we do not control.

## 5. External images and links

Some game portfolio pages and cards load thumbnails directly from YouTube’s image service. Loading them sends a network request, including ordinary connection information, to that provider even without following the video link. The site does not embed a YouTube player. Following GitHub, Zenodo, ORCID, LinkedIn, itch.io, Discord, Telegram, or other external links is subject to those services’ policies.

## 6. Contact messages

Email links open your mail application; the website does not submit a form. If you contact us by email or an external platform, the recipient and service receive the information you choose to send so that they can handle your request. Please send only information needed for the inquiry.

## 7. Rights and contact

Depending on applicable law, you may have rights to access, correct, delete, restrict, or object to processing of personal data actually held by the relevant operator. Contact the studio through [Contact](/contact/) or [LinkedIn](https://www.linkedin.com/company/zhovten-games/). Requests concerning a separate provider may need to be addressed to that provider.

## 8. Changes

Adding accounts, analytics, forms, external AI processing, or server-side visitor storage requires a prior review of this policy and the project rules. The revised policy and effective date will appear here.`,
    },
    "terms-of-use": {
      title: "Terms of Use",
      description: "Conditions for access, permitted use, external resources, and responsibility on the Zhovten Games website.",
      body: `## 1. Acceptance and scope

By using the Zhovten Games website, you agree to these terms. If they are unacceptable to you, discontinue use. These terms cover this website; a linked game, repository, platform, or service may have separate terms.

## 2. Purpose of the site

The site presents the studio journal, research, development notes, project catalogue, and author profiles in four languages. It may discuss horror, war, violence, and other themes intended for a mature audience. Project plans, prototypes, features, and routes may change; a development note is not a promise of a release or service.

## 3. Intellectual property

Reuse follows [Licensing](/governance/licensing/) and the notices attached to individual works. Access does not transfer ownership of names, logos, characters, fictional worlds, or other reserved material. External portfolio records do not imply ownership of another studio’s products.

## 4. Permitted use

You may read the site, follow public links, and reuse licensed material under its applicable terms. Do not bypass access controls, attack infrastructure, generate malicious or excessive automated traffic, impersonate the studio or its authors, or claim someone else’s work as your own. These conditions do not remove permissions already granted by an applicable open license or mandatory law.

## 5. Research and experimental work

Research notes, prototypes, code examples, archive filters, and previews are provided as available. They require independent assessment before practical use and are not medical, legal, or other professional advice. Attribution and publication dates identify the relevant source or edition; older posts may describe earlier project states.

## 6. External services

GitHub, Zenodo, ORCID, LinkedIn, InterDead, itch.io, and other linked resources are operated under their own terms. Zhovten Games does not control the continued availability or behavior of third-party services. Information about external requests is available in [Privacy](/governance/privacy-policy/).

## 7. Warranties and responsibility

The website is provided without a guarantee of uninterrupted availability, freedom from errors, or suitability for a particular purpose. To the extent permitted by applicable law, Zhovten Games is not liable for indirect loss, lost profit, or decisions based solely on experimental site content. Nothing in these terms excludes rights or liability that applicable law does not allow to be excluded.

## 8. Changes and contact

Revised terms and their effective date are published here. Questions and reports can be sent through [Contact](/contact/) or the [studio LinkedIn page](https://www.linkedin.com/company/zhovten-games/).`,
    },
  },
  uk: {
    "ai-policy": {
      title: "Політика використання ШІ",
      description: "Роль ШІ-асистованих інструментів у творчій, дослідницькій та інженерній роботі Zhovten Games.",
      body: `## 1. Наша позиція

Zhovten Games відкрито використовує законні обчислювальні інструменти, включно з моделями OpenAI GPT, у творчості, дослідженнях і розробці програмного забезпечення.

## 2. Сфери використання

ШІ-асистовані інструменти можуть допомагати з ідеями, чернетками, редагуванням, прототипуванням, кодом, дослідженнями, локалізацією, перевірками й автоматизацією. Набір інструментів може змінюватися разом із робочими методами.

## 3. Людська відповідальність

За напрям, відбір, редагування, інтеграцію, перевірку та публікацію відповідають люди. Результат моделі залишається кандидатом до перевірки за правилами відповідного проєкту. Допомога інструментів не скасовує перевірки фактів, атрибуції, прав і реалізації.

## 4. Цей сайт

Журнал студії, каталог проєктів і профілі авторів містять перевірені матеріали. Сайт не має ШІ-чату чи вільного введення для ШІ й не викликає зовнішню модель під час читання сторінки. Використання ШІ для підготовки публікації відрізняється від сервісу, що обробляє введення відвідувача наживо.

## 5. Авторство та права

Застосування ШІ не надає відвідувачам або третім особам прав на назви, логотипи, персонажів, світи студії чи інші захищені матеріали. Повторне використання публікацій регулюють [ліцензійна карта](/governance/licensing/) та повідомлення конкретного матеріалу.

## 6. Умови постачальників і зміни

Використання OpenAI та інших постачальників підпорядковується їхнім чинним умовам і політикам. Ми оновлюємо цю сторінку, якщо змінюється фактичне застосування ШІ або поведінка сайту. Звернення можна надіслати через [Контакти](/contact/).`,
    },
    licensing: {
      title: "Ліцензування",
      description: "Ліцензійна карта редакційних матеріалів Zhovten Games, коду сайту, брендингу та сторонніх матеріалів.",
      body: `## 1. Область і типова карта

Ця сторінка пояснює [LICENSE.md](https://github.com/Zhovten-Games/zhovten-games.github.io/blob/main/site/LICENSE.md) репозиторію сайту. Вона застосовує Repository Licensing Policy 1.0.0, закріплену на commit 6e4c2627717c079827ed4aa9044a5346b3ea3ddb.

- Оригінальні статті, проза, документація, публікаційні джерела та редакційні матеріали без брендингу: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- Оригінальний код, скрипти, тести, приклади, багаторазові схеми, конфігурація та шаблони: [MIT](https://opensource.org/license/mit).
- Назви, логотипи, торговельні марки, бренд-активи та візуальна ідентичність, включно із зображенням прев’ю студії: ліцензія не надається; усі права збережено.
- Сторонні матеріали й залежності: їхні вихідні ліцензії та повідомлення.

Це карта за типом і розташуванням матеріалу, а не вибір двох ліцензій для всього. Посилання на гру, дослідницький архів, репозиторій або зовнішнє портфоліо не поширює ліцензію сайту на весь відповідний твір.

## 2. Спеціальні повідомлення

Файлові, підкаталогові або матеріал-специфічні повідомлення регулюють зазначену область. Ліцензія в записі Zenodo визначає умови архівованої редакції. Сайт не має проєктних ліцензійних винятків. Локальні повідомлення не можуть послабити обов’язкові сторонні умови.

## 3. Порядок пріоритету

1. Обов’язкові сторонні умови та повідомлення.
2. Файлові повідомлення й ідентифікатори SPDX.
3. Ліцензії підкаталогів і спеціальні умови матеріалів.
4. Явні проєктні винятки, якщо їх буде прийнято.
5. Типова карта вище.

## 4. Атрибуція

Для CC BY-SA 4.0 вкажіть авторів і назву, посилання на канонічну сторінку або DOI та ліцензію, позначте зміни. Похідні редакції мають виконувати умови ShareAlike. Копії MIT-коду повинні зберігати copyright і permission notice.

## 5. Бренд і зовнішні роботи

Публікація не дозволяє використовувати ідентичність Zhovten Games або IRONCREED як доказ схвалення, партнерства чи офіційного походження. Персонажі, вигадані світи та ігрові активи не отримують ліцензії лише через появу на сайті. Портфоліо інших студій описує внесок авторів; права залишаються у відповідних власників.

## 6. Публічний код і випуски

Публічний код сайту: [Zhovten-Games/zhovten-games.github.io/site](https://github.com/Zhovten-Games/zhovten-games.github.io/tree/main/site). Футер ідентифікує поточну збірку. [Звіти про випуски](https://github.com/Zhovten-Games/zhovten-games.github.io/tree/main/releases) пов’язують публікації з канонічним Sites-комітом і публічною проєкцією. Конституція та ліцензійна політика залишаються окремо закріпленими сабмодулями з власними повідомленнями; включення не змінює їхніх ліцензій.

## 7. Звернення

Для дозволів поза межами відповідної ліцензії використовуйте [Контакти](/contact/). Ця операційна карта не є юридичною консультацією; складні питання власності, юрисдикції та сторонніх прав потребують належної правової перевірки.`,
    },
    "privacy-policy": {
      title: "Політика конфіденційності",
      description: "Обробка даних на сайті Zhovten Games, поведінка браузера та зовнішня інфраструктура.",
      body: `## 1. Хто ми

Zhovten Games підтримує сайт студії zhovten.games. Тут публікуються журнал, каталог проєктів, профілі авторів і політики англійською, українською, російською та японською. Ця політика описує цей сайт; пов’язані ігри та сервіси мають власні політики.

## 2. Дані застосунку

Застосунок не має реєстрації відвідувачів, коментарів, контактної форми, бази даних відвідувачів, аналітики, рекламного профілювання чи введення для ШІ. Читання сторінки не надсилає текст відвідувача зовнішній мовній моделі. Фільтри, сортування та прев’ю архіву працюють у браузері; відкриття прев’ю запитує відповідну сторінку цього сайту.

## 3. Зберігання у браузері

Код застосунку не встановлює cookies і не використовує localStorage чи sessionStorage. Фільтри й відкриті вікна використовують тимчасовий стан сторінки. Браузер може зберігати звичайну історію та кеш за власними налаштуваннями. Хостингова й захисна інфраструктура можуть застосовувати власні технічні механізми незалежно від коду застосунку.

## 4. Інфраструктура та журнали

Постачальники хостингу й захисту можуть обробляти IP-адреси, URL запитів, інформацію про браузер, часові мітки та діагностичні або захисні журнали для доставки й захисту сервісу. Таку обробку регулюють їхні умови. Ми не стверджуємо, що мережевий доступ не залишає технічних записів, і не обіцяємо строків зберігання, яких не контролюємо.

## 5. Зовнішні зображення та посилання

Деякі сторінки й картки ігрового портфоліо завантажують мініатюри безпосередньо із сервісу зображень YouTube. Завантаження надсилає постачальнику мережевий запит зі звичайними даними з’єднання навіть без переходу до відео. Сайт не вбудовує програвач YouTube. Перехід на GitHub, Zenodo, ORCID, LinkedIn, itch.io, Discord, Telegram чи інші ресурси регулюється їхніми політиками.

## 6. Звернення

Поштові посилання відкривають вашу поштову програму; сайт не надсилає форму. Якщо ви звертаєтеся електронною поштою або через зовнішню платформу, одержувач і сервіс отримують надіслану вами інформацію для опрацювання звернення. Надсилайте лише необхідні для нього дані.

## 7. Права та контакт

Залежно від застосовного права ви можете мати права на доступ, виправлення, видалення, обмеження чи заперечення щодо обробки даних, які фактично має відповідний оператор. Зв’язатися зі студією можна через [Контакти](/contact/) або [LinkedIn](https://www.linkedin.com/company/zhovten-games/). Питання до окремого постачальника можуть вимагати звернення саме до нього.

## 8. Зміни

Додавання облікових записів, аналітики, форм, зовнішньої обробки ШІ або серверного зберігання даних відвідувачів потребує попереднього перегляду цієї політики й правил проєкту. Оновлена редакція та дата набрання чинності з’являться тут.`,
    },
    "terms-of-use": {
      title: "Умови використання",
      description: "Умови доступу, дозволене використання, зовнішні ресурси та відповідальність на сайті Zhovten Games.",
      body: `## 1. Прийняття та область дії

Користуючись сайтом Zhovten Games, ви погоджуєтеся з цими умовами. Якщо вони неприйнятні, припиніть користування. Умови стосуються цього сайту; пов’язана гра, репозиторій, платформа чи сервіс можуть мати окремі умови.

## 2. Призначення сайту

Сайт представляє журнал студії, дослідження, записи про розробку, каталог проєктів і профілі авторів чотирма мовами. Матеріали можуть стосуватися горору, війни, насильства та інших тем для дорослої аудиторії. Плани, прототипи, функції та маршрути можуть змінюватися; запис про розробку не є обіцянкою випуску або послуги.

## 3. Інтелектуальна власність

Повторне використання регулюють [Ліцензування](/governance/licensing/) та повідомлення окремих творів. Доступ не передає власність на назви, логотипи, персонажів, вигадані світи чи інші захищені матеріали. Зовнішнє портфоліо не означає володіння продуктами іншої студії.

## 4. Дозволене використання

Можна читати сайт, переходити за публічними посиланнями й використовувати ліцензовані матеріали за відповідними умовами. Заборонено обходити контроль доступу, атакувати інфраструктуру, створювати зловмисний чи надмірний автоматизований трафік, видавати себе за студію або авторів чи привласнювати чужі роботи. Ці умови не скасовують дозволів, уже наданих відкритою ліцензією або обов’язковим правом.

## 5. Дослідження й експериментальні роботи

Дослідницькі нотатки, прототипи, приклади коду, фільтри та прев’ю надаються в наявному стані. Перед практичним використанням потрібна незалежна оцінка; вони не є медичною, юридичною чи іншою професійною консультацією. Атрибуція та дати визначають джерело або редакцію; давні публікації можуть описувати попередні стани проєкту.

## 6. Зовнішні сервіси

GitHub, Zenodo, ORCID, LinkedIn, InterDead, itch.io та інші ресурси діють за власними умовами. Zhovten Games не контролює подальшу доступність чи поведінку сторонніх сервісів. Інформацію про зовнішні запити наведено в [Політиці конфіденційності](/governance/privacy-policy/).

## 7. Гарантії та відповідальність

Сайт надається без гарантії безперервної доступності, відсутності помилок чи придатності для певної мети. У межах застосовного права Zhovten Games не відповідає за непрямі збитки, втрачений прибуток або рішення, засновані лише на експериментальних матеріалах сайту. Умови не виключають прав або відповідальності, які закон не дозволяє виключати.

## 8. Зміни та контакт

Оновлені умови й дата набрання чинності публікуються тут. Питання та повідомлення можна надіслати через [Контакти](/contact/) або [LinkedIn студії](https://www.linkedin.com/company/zhovten-games/).`,
    },
  },
  ru: {
    "ai-policy": {
      title: "Политика использования ИИ",
      description: "Роль инструментов с поддержкой ИИ в творческой, исследовательской и инженерной работе Zhovten Games.",
      body: `## 1. Наша позиция

Zhovten Games открыто использует законные вычислительные инструменты, включая модели OpenAI GPT, в творчестве, исследованиях и разработке программного обеспечения.

## 2. Области использования

Инструменты с поддержкой ИИ могут помогать с идеями, черновиками, редактированием, прототипами, кодом, исследованиями, локализацией, проверками и автоматизацией. Набор инструментов может меняться вместе с рабочими методами.

## 3. Ответственность людей

За направление, отбор, редактирование, интеграцию, проверку и публикацию отвечают люди. Результат модели остаётся кандидатом до проверки по правилам соответствующего проекта. Помощь инструментов не отменяет проверки фактов, атрибуции, прав и реализации.

## 4. Этот сайт

Журнал студии, каталог проектов и профили авторов содержат проверенные материалы. На сайте нет ИИ-чата или свободного ввода для ИИ; при чтении страницы внешняя модель не вызывается. Использование ИИ при подготовке публикации отличается от сервиса, обрабатывающего ввод посетителя в реальном времени.

## 5. Авторство и права

Применение ИИ не предоставляет посетителям или третьим лицам прав на названия, логотипы, персонажей, миры студии или другие защищённые материалы. Повторное использование публикаций регулируют [лицензионная карта](/governance/licensing/) и уведомления конкретного материала.

## 6. Условия поставщиков и изменения

Использование OpenAI и других поставщиков подчиняется их применимым условиям и политикам. Мы обновляем страницу при изменении фактического использования ИИ или поведения сайта. Обращения можно отправить через [Контакты](/contact/).`,
    },
    licensing: {
      title: "Лицензирование",
      description: "Лицензионная карта редакционных материалов Zhovten Games, кода сайта, брендинга и сторонних материалов.",
      body: `## 1. Область и типовая карта

Эта страница поясняет [LICENSE.md](https://github.com/Zhovten-Games/zhovten-games.github.io/blob/main/site/LICENSE.md) репозитория сайта. Она применяет Repository Licensing Policy 1.0.0, закреплённую на commit 6e4c2627717c079827ed4aa9044a5346b3ea3ddb.

- Оригинальные статьи, проза, документация, источники публикаций и редакционные материалы без брендинга: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- Оригинальный код, скрипты, тесты, примеры, многоразовые схемы, конфигурация и шаблоны: [MIT](https://opensource.org/license/mit).
- Названия, логотипы, товарные знаки, брендовые ресурсы и визуальная идентичность, включая изображение превью студии: лицензия не предоставляется; все права сохранены.
- Сторонние материалы и зависимости: их исходные лицензии и уведомления.

Это карта по типу и расположению материала, а не выбор двух лицензий для всего. Ссылка на игру, исследовательский архив, репозиторий или внешнее портфолио не распространяет лицензию сайта на всё соответствующее произведение.

## 2. Специальные уведомления

Уведомления файла, подкаталога или конкретного материала регулируют указанную область. Лицензия записи Zenodo определяет условия архивированной редакции. У сайта нет проектных лицензионных исключений. Локальные уведомления не могут ослаблять обязательные сторонние условия.

## 3. Порядок приоритета

1. Обязательные сторонние условия и уведомления.
2. Файловые уведомления и идентификаторы SPDX.
3. Лицензии подкаталогов и специальные условия материалов.
4. Явные проектные исключения, если они будут приняты.
5. Типовая карта выше.

## 4. Атрибуция

Для CC BY-SA 4.0 укажите авторов и название, ссылку на каноническую страницу или DOI и лицензию, обозначьте изменения. Производные редакции должны соблюдать ShareAlike. Копии MIT-кода должны сохранять copyright и permission notice.

## 5. Бренд и внешние работы

Публикация не разрешает использовать идентичность Zhovten Games или IRONCREED как доказательство одобрения, партнёрства или официального происхождения. Персонажи, вымышленные миры и игровые ресурсы не получают лицензию только вследствие появления на сайте. Портфолио других студий описывает вклад авторов; права остаются у соответствующих владельцев.

## 6. Публичный код и выпуски

Публичный код сайта: [Zhovten-Games/zhovten-games.github.io/site](https://github.com/Zhovten-Games/zhovten-games.github.io/tree/main/site). Футер обозначает текущую сборку. [Отчёты о выпусках](https://github.com/Zhovten-Games/zhovten-games.github.io/tree/main/releases) связывают публикации с каноническим Sites-коммитом и публичной проекцией. Конституция и лицензионная политика остаются отдельно закреплёнными субмодулями со своими уведомлениями; включение не меняет их лицензий.

## 7. Обращения

Для разрешений за пределами применимой лицензии используйте [Контакты](/contact/). Эта операционная карта не является юридической консультацией; сложные вопросы собственности, юрисдикции и сторонних прав требуют надлежащей правовой проверки.`,
    },
    "privacy-policy": {
      title: "Политика конфиденциальности",
      description: "Обработка данных на сайте Zhovten Games, поведение браузера и внешняя инфраструктура.",
      body: `## 1. Кто мы

Zhovten Games поддерживает сайт студии zhovten.games. Здесь публикуются журнал, каталог проектов, профили авторов и политики на английском, украинском, русском и японском. Эта политика описывает данный сайт; связанные игры и сервисы имеют свои политики.

## 2. Данные приложения

В приложении нет регистрации посетителей, комментариев, контактной формы, базы данных посетителей, аналитики, рекламного профилирования или ввода для ИИ. Чтение страницы не отправляет текст посетителя внешней языковой модели. Фильтры, сортировка и превью архива работают в браузере; открытие превью запрашивает соответствующую страницу этого сайта.

## 3. Хранение в браузере

Код приложения не устанавливает cookies и не использует localStorage или sessionStorage. Фильтры и открытые окна используют временное состояние страницы. Браузер может сохранять обычную историю и кеш согласно своим настройкам. Хостинговая и защитная инфраструктура могут применять собственные технические механизмы независимо от кода приложения.

## 4. Инфраструктура и журналы

Поставщики хостинга и защиты могут обрабатывать IP-адреса, URL запросов, сведения о браузере, временные метки и диагностические или защитные журналы для доставки и защиты сервиса. Такую обработку регулируют их условия. Мы не утверждаем, что сетевой доступ не оставляет технических записей, и не обещаем сроков хранения, которые не контролируем.

## 5. Внешние изображения и ссылки

Некоторые страницы и карточки игрового портфолио загружают миниатюры напрямую из сервиса изображений YouTube. Загрузка отправляет поставщику сетевой запрос с обычными данными соединения даже без перехода к видео. Сайт не встраивает проигрыватель YouTube. Переход на GitHub, Zenodo, ORCID, LinkedIn, itch.io, Discord, Telegram или другие ресурсы регулируется их политиками.

## 6. Обращения

Почтовые ссылки открывают вашу почтовую программу; сайт не отправляет форму. Если вы обращаетесь по электронной почте или через внешнюю платформу, получатель и сервис получают отправленную вами информацию для обработки обращения. Передавайте только необходимые для него данные.

## 7. Права и контакт

В зависимости от применимого права вы можете иметь права на доступ, исправление, удаление, ограничение или возражение против обработки данных, фактически имеющихся у соответствующего оператора. Связаться со студией можно через [Контакты](/contact/) или [LinkedIn](https://www.linkedin.com/company/zhovten-games/). Вопросы к отдельному поставщику могут требовать обращения непосредственно к нему.

## 8. Изменения

Добавление учётных записей, аналитики, форм, внешней обработки ИИ или серверного хранения данных посетителей требует предварительного пересмотра этой политики и правил проекта. Новая редакция и дата вступления в силу появятся здесь.`,
    },
    "terms-of-use": {
      title: "Условия использования",
      description: "Условия доступа, разрешённое использование, внешние ресурсы и ответственность на сайте Zhovten Games.",
      body: `## 1. Принятие и область действия

Используя сайт Zhovten Games, вы соглашаетесь с этими условиями. Если они неприемлемы, прекратите использование. Условия относятся к этому сайту; связанная игра, репозиторий, платформа или сервис могут иметь отдельные условия.

## 2. Назначение сайта

Сайт представляет журнал студии, исследования, записи о разработке, каталог проектов и профили авторов на четырёх языках. Материалы могут затрагивать хоррор, войну, насилие и другие темы для взрослой аудитории. Планы, прототипы, функции и маршруты могут меняться; запись о разработке не является обещанием выпуска или услуги.

## 3. Интеллектуальная собственность

Повторное использование регулируют [Лицензирование](/governance/licensing/) и уведомления отдельных произведений. Доступ не передаёт собственность на названия, логотипы, персонажей, вымышленные миры или другие защищённые материалы. Внешнее портфолио не означает владения продуктами другой студии.

## 4. Разрешённое использование

Можно читать сайт, переходить по публичным ссылкам и использовать лицензированные материалы на соответствующих условиях. Запрещено обходить контроль доступа, атаковать инфраструктуру, создавать вредоносный или чрезмерный автоматизированный трафик, выдавать себя за студию или авторов и присваивать чужие работы. Эти условия не отменяют разрешений, уже предоставленных открытой лицензией или обязательным правом.

## 5. Исследования и экспериментальные работы

Исследовательские заметки, прототипы, примеры кода, фильтры и превью предоставляются в имеющемся состоянии. Перед практическим использованием нужна независимая оценка; они не являются медицинской, юридической или иной профессиональной консультацией. Атрибуция и даты определяют источник или редакцию; старые публикации могут описывать предыдущие состояния проекта.

## 6. Внешние сервисы

GitHub, Zenodo, ORCID, LinkedIn, InterDead, itch.io и другие ресурсы действуют по собственным условиям. Zhovten Games не контролирует дальнейшую доступность или поведение сторонних сервисов. Информация о внешних запросах приведена в [Политике конфиденциальности](/governance/privacy-policy/).

## 7. Гарантии и ответственность

Сайт предоставляется без гарантии непрерывной доступности, отсутствия ошибок или пригодности для определённой цели. В пределах применимого права Zhovten Games не отвечает за косвенные убытки, упущенную прибыль или решения, основанные только на экспериментальных материалах сайта. Условия не исключают прав или ответственности, которые закон не позволяет исключать.

## 8. Изменения и контакт

Новые условия и дата вступления в силу публикуются здесь. Вопросы и сообщения можно отправить через [Контакты](/contact/) или [LinkedIn студии](https://www.linkedin.com/company/zhovten-games/).`,
    },
  },
  ja: {
    "ai-policy": {
      title: "AI 利用ポリシー",
      description: "Zhovten Games の創作、研究、エンジニアリングにおける AI 支援ツールの役割。",
      body: `## 1. 基本方針

Zhovten Games は、OpenAI GPT モデルを含む合法的な計算ツールを、創作、研究、ソフトウェア開発で利用していることを公表しています。

## 2. 利用範囲

AI 支援ツールは、発想、草稿、編集、試作、コード、研究、翻訳、検証、自動化を支援する場合があります。利用するツールは作業方法の発展に応じて変わります。

## 3. 人間の責任

方針、選定、編集、統合、検証、公開の責任は人間が負います。モデルの出力は、該当プロジェクトの規則に従って確認されるまで候補です。ツールの支援を受けても、事実、帰属、権利、実装を確認する義務はなくなりません。

## 4. このウェブサイト

スタジオのログ、プロジェクト一覧、著者ページには確認済みの資料を掲載します。AI チャットや自由入力の AI フォームはなく、閲覧時に外部モデルを呼び出しません。公開資料の準備に AI を使うことと、訪問者の入力をリアルタイムで処理するサービスは別です。

## 5. 著作者と権利

AI の利用は、スタジオの名称、ロゴ、キャラクター、世界観、その他の権利留保資料について、訪問者や第三者に権利を与えません。公開資料の再利用には、[ライセンスマップ](/governance/licensing/)と各資料の告知が適用されます。

## 6. 提供者の条件と変更

OpenAI などの利用には各提供者の適用条件とポリシーが適用されます。実際の AI 利用やサイトの動作が変わった場合、このページを更新します。質問は[お問い合わせ](/contact/)からお寄せください。`,
    },
    licensing: {
      title: "ライセンス",
      description: "Zhovten Games の編集資料、サイトのコード、ブランド資産、第三者資料のライセンスマップ。",
      body: `## 1. 対象と標準マップ

このページはサイトリポジトリの [LICENSE.md](https://github.com/Zhovten-Games/zhovten-games.github.io/blob/main/site/LICENSE.md) を説明します。コミット 6e4c2627717c079827ed4aa9044a5346b3ea3ddb に固定した Repository Licensing Policy 1.0.0 を適用します。

- 独自の記事、文章、文書、出版用ソース、ブランド要素を含まない編集資料：[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)。
- 独自のコード、スクリプト、テスト、例、再利用可能なスキーマ、設定、テンプレート：[MIT](https://opensource.org/license/mit)。
- 名称、ロゴ、商標、ブランド資産、ビジュアルアイデンティティ（スタジオの共有用プレビュー画像を含む）：ライセンスは付与せず、すべての権利を留保。
- 第三者の資料と依存関係：元のライセンスと告知。

これは資料の種類と場所に応じたマップであり、すべての資料で二つのライセンスを選べるという意味ではありません。ゲーム、研究アーカイブ、リポジトリ、外部ポートフォリオへのリンクによって、作品全体にサイトのライセンスが適用されることはありません。

## 2. 個別の告知

ファイル、サブツリー、個別資料の告知は、指定された範囲に適用されます。Zenodo の記録に示されたライセンスは、その保存版を規律します。サイトにはプロジェクト固有の例外はありません。ローカルな告知で第三者の必須条件を弱めることはできません。

## 3. 優先順位

1. 第三者の必須条件と告知。
2. ファイル単位の告知と SPDX 識別子。
3. サブツリーのライセンスと資料固有の条件。
4. 採用された場合の明示的なプロジェクト固有の例外。
5. 上記の標準マップ。

## 4. 帰属表示

CC BY-SA 4.0 の資料では、著者と作品名、正規ページまたは DOI、ライセンスへのリンク、変更の有無を示してください。翻案には ShareAlike 条件が適用されます。MIT コードの複製には著作権表示と許諾文の保持が必要です。

## 5. ブランドと外部作品

公開によって、Zhovten Games や IRONCREED の名称・意匠を、承認、提携、公式な出所の証拠として使用する許可は生じません。キャラクター、架空の世界、ゲーム資産は、サイトに掲載されただけでは利用許諾されません。他スタジオのポートフォリオ記録は著者の貢献を示し、権利は各権利者に帰属します。

## 6. 公開ソースとリリース

サイトの公開ソースは [Zhovten-Games/zhovten-games.github.io/site](https://github.com/Zhovten-Games/zhovten-games.github.io/tree/main/site) です。フッターには現在のビルドを表示します。[リリース記録](https://github.com/Zhovten-Games/zhovten-games.github.io/tree/main/releases)は公開版を正規の Sites コミットと公開用コピーに結び付けます。Constitution とライセンスポリシーは、それぞれの告知を持つ固定サブモジュールです。組み込みによってライセンスが変更されることはありません。

## 7. お問い合わせ

適用ライセンスを超える許可は[お問い合わせ](/contact/)からご相談ください。この運用上のマップは法律相談ではありません。複雑な所有権、管轄、第三者の権利については適切な法的確認が必要です。`,
    },
    "privacy-policy": {
      title: "プライバシーポリシー",
      description: "Zhovten Games のサイトにおけるデータ処理、ブラウザの動作、外部インフラについて。",
      body: `## 1. 運営主体

Zhovten Games は zhovten.games のスタジオサイトを運営しています。ログ、プロジェクト一覧、著者プロフィール、ポリシーを英語、ウクライナ語、ロシア語、日本語で公開します。このポリシーは当サイトを対象とし、リンク先のゲームやサービスには個別のポリシーがあります。

## 2. アプリケーションのデータ

訪問者登録、コメント、問い合わせフォーム、訪問者データベース、アクセス解析、広告プロファイリング、AI 入力はありません。閲覧時に訪問者の文章を外部言語モデルへ送信しません。アーカイブの絞り込み、並べ替え、プレビューはブラウザで動作し、プレビューを開くと当サイトの該当ページを取得します。

## 3. ブラウザの保存

アプリケーションコードは Cookie を設定せず、localStorage や sessionStorage を使用しません。フィルターや開いたウィンドウは一時的なページ状態を使います。ブラウザは設定に従って通常の履歴やキャッシュを保存する場合があります。ホスティングや保護インフラは、アプリケーションコードとは独立した技術的な仕組みを適用する場合があります。

## 4. インフラとログ

ホスティングや保護サービスの提供者は、配信と保護のため、IP アドレス、要求 URL、ブラウザ情報、時刻、診断・セキュリティログを処理する場合があります。その処理には各提供者の条件が適用されます。ネットワークアクセスが技術的な記録を一切残さないとは主張せず、管理していない保存期間を約束しません。

## 5. 外部画像とリンク

一部のゲームポートフォリオのページやカードは、YouTube の画像サービスから直接サムネイルを読み込みます。動画リンクを開かなくても、読み込みによって通常の接続情報を伴うリクエストが提供者に送られます。YouTube プレーヤーは埋め込んでいません。GitHub、Zenodo、ORCID、LinkedIn、itch.io、Discord、Telegram などへの移動には、それぞれのポリシーが適用されます。

## 6. お問い合わせの情報

メールリンクは利用者のメールアプリを開き、サイトはフォームを送信しません。メールや外部プラットフォームで連絡した場合、受信者とサービスは対応のために利用者が送った情報を受け取ります。問い合わせに必要な情報だけをお送りください。

## 7. 権利と連絡先

適用法によって、該当する運営者が実際に保有する個人データへのアクセス、訂正、削除、処理の制限、異議申立ての権利を持つ場合があります。スタジオへの連絡は[お問い合わせ](/contact/)または [LinkedIn](https://www.linkedin.com/company/zhovten-games/) を利用してください。別の提供者に関する依頼は、その提供者への直接の連絡が必要な場合があります。

## 8. 変更

アカウント、解析、フォーム、外部 AI 処理、訪問者データのサーバー保存を追加する前に、このポリシーとプロジェクト規則を見直します。改訂版と施行日はこのページに掲載します。`,
    },
    "terms-of-use": {
      title: "利用規約",
      description: "Zhovten Games のサイトへのアクセス、許可される利用、外部リソース、責任の条件。",
      body: `## 1. 同意と適用範囲

Zhovten Games のサイトを利用することで、この規約に同意したものとします。同意できない場合は利用を中止してください。この規約は当サイトを対象とします。リンク先のゲーム、リポジトリ、プラットフォーム、サービスには個別の条件がある場合があります。

## 2. サイトの目的

スタジオのログ、研究、開発記録、プロジェクト一覧、著者プロフィールを四言語で紹介します。ホラー、戦争、暴力など、成人向けのテーマを扱う場合があります。計画、試作、機能、経路は変更される場合があり、開発記録はリリースやサービスの約束ではありません。

## 3. 知的財産

再利用には[ライセンス](/governance/licensing/)と各作品の告知が適用されます。アクセスによって、名称、ロゴ、キャラクター、架空の世界、その他の権利留保資料の所有権は移転しません。外部ポートフォリオは他スタジオの製品の所有を意味しません。

## 4. 許可される利用

閲覧、公開リンクの利用、適用条件に従ったライセンス対象資料の再利用ができます。アクセス制御の回避、インフラ攻撃、悪意あるまたは過度な自動アクセス、スタジオや著者へのなりすまし、他者の作品の盗用は禁止します。この条件は、適用されるオープンライセンスや強行法規で既に与えられた許可を取り消しません。

## 5. 研究と実験的な成果

研究ノート、試作、コード例、絞り込み、プレビューは現状のまま提供します。実用に先立って独立した評価が必要であり、医療、法律、その他の専門的助言ではありません。帰属表示と公開日は該当する出典や版を示し、古い記事は過去のプロジェクト状態を説明する場合があります。

## 6. 外部サービス

GitHub、Zenodo、ORCID、LinkedIn、InterDead、itch.io などには各運営者の条件が適用されます。Zhovten Games は第三者サービスの継続的な提供や動作を管理しません。外部へのリクエストについては[プライバシーポリシー](/governance/privacy-policy/)をご覧ください。

## 7. 保証と責任

サイトの継続的な利用可能性、無誤謬性、特定目的への適合性を保証しません。適用法で認められる範囲で、Zhovten Games は間接的損失、逸失利益、実験的なサイト内容のみに基づく判断について責任を負いません。法によって除外できない権利や責任を、この規約で除外することはありません。

## 8. 変更と連絡先

改訂規約と施行日をこのページに掲載します。質問や報告は[お問い合わせ](/contact/)または[スタジオの LinkedIn](https://www.linkedin.com/company/zhovten-games/)からお寄せください。`,
    },
  },
};

export function getPolicies(locale: Locale): Policy[] {
  return policySlugs.map((slug) => ({ slug, ...policies[locale][slug] }));
}
