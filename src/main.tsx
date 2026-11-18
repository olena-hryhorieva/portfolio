import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./language.css";
import { SelectedWork } from "./selected-work";

type Language = "uk" | "en";

const base = import.meta.env.BASE_URL;
const asset = (path: string) => `${base}${path}`;
const params = new URLSearchParams(window.location.search);
const workOnly = params.get("view") === "work";

const translations = {
  uk: {
    metaTitle: "Олена Григор’єва — дизайн меблів і стилістика інтер’єру",
    metaDescription:
      "Авторські концепції меблів та освітлення, візуалізація предметів в інтер’єрі й підготовка житла до оренди.",
    languageLabel: "Оберіть мову",
    homeLabel: "Олена Григор’єва - головна сторінка",
    nav: {
      work: "Роботи",
      portfolio: "Портфоліо",
      approach: "Метод",
      interiors: "Інтер’єри",
      about: "Про мене",
      contact: "Контакти",
    },
    hero: {
      eyebrow: "Меблі / Предмети / Візуальний напрям",
      firstName: "Олена",
      lastName: "Григор’єва",
      role: "Концепт-дизайнерка меблів і стилістка інтер’єру",
      intro:
        "Створюю авторські концепції меблів та освітлення, показую предмети в інтер’єрі й оновлюю житлові простори за допомогою меблів, світла та декору.",
      primaryCta: "Переглянути вибрані роботи",
      secondaryCta: "Про мою практику",
      figureTitle: "Настільна лампа з мереживним абажуром",
      figureStatus: "Авторська концепція",
      figureAlt: "Концепт настільної лампи з мереживним абажуром у вітальні",
    },
    portfolio: {
      eyebrow: "Два творчі напрями",
      title: "Портфоліо",
      furnitureIndex: "01 / Основний напрям",
      furnitureTitle: "Концепт-дизайн меблів і предметів",
      furnitureDescription:
        "Авторські концепції меблів і предметів для житлових просторів різного типу та різних сценаріїв повсякденного використання. У фокусі: виразна форма, ергономіка, матеріали, 3D-опрацювання й окремі реалізовані рішення.",
      openPdf: "Відкрити портфоліо меблів і предметів (PDF)",
      downloadPdf: "Завантажити PDF",
      stylingIndex: "02 / Візуальний досвід",
      stylingTitle: "Мода, стилістика образів",
      stylingDescription:
        "Добірка редакційних зйомок, персональних образів, візуальних перевтілень і роботи для телебачення. Досвід із силуетом, кольором і фактурою поглиблює мій підхід до матеріалів, предметів та атмосфери інтер’єру.",
      openStylingPdf: "Відкрити портфоліо зі стилістики та моди (PDF)",
      downloadStylingPdf: "Завантажити PDF",
    },
    approach: {
      eyebrow: "Метод роботи",
      title: "Від спостереження до предмета",
      steps: [
        {
          title: "Спостереження",
          description:
            "Щоденна незручність, просторове обмеження, культурний образ або форма, що залишилася в пам’яті.",
        },
        {
          title: "Формулювання",
          description:
            "Сценарій використання, взаємодія з людиною, масштаб, ергономіка та емоційний тон.",
        },
        {
          title: "Пошук",
          description:
            "Варіанти силуету, пропорцій, матеріалів, колористики та альтернативної форми.",
        },
        {
          title: "Розвиток",
          description:
            "Уточнена концепція, готова до обговорення, 3D-опрацювання, прототипування або діалогу з виробництвом.",
        },
      ],
    },
    about: {
      eyebrow: "Про мене",
      title: "Візуальне мислення, спрямоване до матеріальної форми.",
      paragraphs: [
        "Мої ідеї часто починаються зі спостереження, культурного образу або форми, зафіксованої швидким ескізом. Далі я розвиваю концепцію через сценарій використання, силует, ергономіку й можливі матеріали.",
        "У своїх роботах я поєдную ручні ескізи, 3D-опрацювання у Blender та візуалізації за допомогою ШІ. Мені важливо показати, як форма, світло й матеріал предмета працюють у конкретному інтер’єрі.",
        "Досвід у стилістиці й консультуванні щодо меблів у США навчив мене працювати з кольором, пропорціями та фактурою. В інтер’єрних проєктах я підбираю меблі, світло й декор, а у відео показую, як окремі зміни впливають на кімнату.",
      ],
      skillsLabel: "Основні навички та інструменти",
      skills: [
        "Розроблення концепцій",
        "Ескізування від руки",
        "Дослідження матеріалів і кольору",
        "Просторове мислення",
        "3D-опрацювання концепцій",
      ],
    },
    contact: {
      eyebrow: "Контакти",
      title: "Від ідеї до продуманого предметного рішення.",
      description:
        "Відкрита до співпраці з меблевими брендами, інтер’єрними студіями та приватними клієнтами.",
    },
    footer: {
      copyright: "© 2026 Олена Григор’єва",
      practice: "Концепт-дизайн меблів і предметів",
      backToTop: "На початок ↑",
    },
  },
  en: {
    metaTitle: "Olena Hryhorieva — Furniture Design and Interior Styling",
    metaDescription:
      "Original furniture and lighting concepts, product visualization in interiors, and residential styling.",
    languageLabel: "Choose language",
    homeLabel: "Olena Hryhorieva - home",
    nav: {
      work: "Work",
      portfolio: "Portfolio",
      approach: "Approach",
      interiors: "Interiors",
      about: "About",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Furniture / Objects / Visual Direction",
      firstName: "Olena",
      lastName: "Hryhorieva",
      role: "Furniture Concept Designer and Interior Stylist",
      intro:
        "I design furniture and lighting concepts, visualize products in interiors, and refresh rooms through furniture, lighting and decor.",
      primaryCta: "View selected work",
      secondaryCta: "About my practice",
      figureTitle: "Lace Shade Table Lamp",
      figureStatus: "Original concept",
      figureAlt: "Original lace shade table lamp concept in a living room",
    },
    portfolio: {
      eyebrow: "Two creative practices",
      title: "Portfolio",
      furnitureIndex: "01 / Primary practice",
      furnitureTitle: "Furniture & Object Concept Design",
      furnitureDescription:
        "Original furniture and object concepts for different types of homes and everyday-use scenarios. The work focuses on expressive form, ergonomics, materials, 3D development, and selected implemented solutions.",
      openPdf: "Open furniture & object portfolio (PDF)",
      downloadPdf: "Download PDF",
      stylingIndex: "02 / Visual background",
      stylingTitle: "Fashion Styling & Visual Direction",
      stylingDescription:
        "A selection of editorial shoots, personal styling, visual transformations, and work for television. Experience with silhouette, color, and texture continues to inform my approach to materials, objects, and interior atmosphere.",
      openStylingPdf: "Open fashion styling portfolio (PDF)",
      downloadStylingPdf: "Download PDF",
    },
    approach: {
      eyebrow: "Working method",
      title: "From observation to object",
      steps: [
        {
          title: "Observe",
          description:
            "A daily friction, spatial limitation, cultural reference, or remembered form.",
        },
        {
          title: "Frame",
          description:
            "The intended use, human interaction, scale, ergonomics, and emotional tone.",
        },
        {
          title: "Explore",
          description:
            "Silhouettes, proportions, materials, color relationships, and alternative forms.",
        },
        {
          title: "Develop",
          description:
            "A clearer concept ready for feedback, 3D development, prototyping, or production dialogue.",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "A visual eye moving toward tangible form.",
      paragraphs: [
        "My ideas often begin with an observation, a cultural reference, or a form captured in a quick sketch. I then develop the concept through its intended use, silhouette, ergonomics, and possible materials.",
        "My work combines hand sketches, concept modeling in Blender, and AI-assisted visualization. I use standalone images and room scenes to study how a product’s proportions, materials and finishes read in context.",
        "My background in styling and U.S. furniture consulting informs how I choose color, materials and proportions. For room projects, I select furniture, lighting and decor, and use short videos to show how those choices change a space.",
      ],
      skillsLabel: "Core strengths and tools",
      skills: [
        "Concept development",
        "Hand sketching",
        "Material & color research",
        "Spatial problem solving",
        "3D concept development",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "From an idea to a thoughtful object.",
      description:
        "I work with furniture and home decor brands, interior design teams, and private clients.",
    },
    footer: {
      copyright: "© 2026 Olena Hryhorieva",
      practice: "Furniture & Object Concept Design",
      backToTop: "Back to top ↑",
    },
  },
} as const;

function getInitialLanguage(): Language {
  const requested = params.get("lang");
  if (requested === "en" || requested === "uk") return requested;
  try {
    const savedLanguage = window.localStorage.getItem("olena-portfolio-language");
    return savedLanguage === "en" ? "en" : "uk";
  } catch {
    return "uk";
  }
}

function Arrow({ down = false }: { down?: boolean }) {
  return <span aria-hidden="true">{down ? "↓" : "↗"}</span>;
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const t = translations[language];
  useEffect(() => {
    const anchor = window.location.hash.slice(1);
    if (anchor) document.getElementById(anchor)?.scrollIntoView({ behavior: "instant" });
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.metaTitle;
    document
      .querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.setAttribute("content", t.metaDescription);
    try {
      window.localStorage.setItem("olena-portfolio-language", language);
    } catch {
      // The language still works when browser storage is unavailable.
    }
  }, [language, t.metaDescription, t.metaTitle]);

  return (
    <>
      <header className="site-header">
        <a className="monogram" href="#top" aria-label={t.homeLabel}>
          OH
        </a>
        <div className="header-controls">
          <nav aria-label={language === "uk" ? "Основна навігація" : "Primary navigation"}>
            <a href="#home-decor">{t.nav.work}</a>
            <a href="#interiors">{t.nav.interiors}</a>
            <a href="#portfolio">{t.nav.portfolio}</a>
            <a className="approach-link" href="#approach">{t.nav.approach}</a>
            <a href="#about">{t.nav.about}</a>
            {!workOnly && <a href="#contact">{t.nav.contact}</a>}
          </nav>
          <div className="language-switch" role="group" aria-label={t.languageLabel}>
            <button
              type="button"
              aria-pressed={language === "uk"}
              onClick={() => setLanguage("uk")}
            >
              UA
            </button>
            <button
              type="button"
              aria-pressed={language === "en"}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main id="top" lang={language}>
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1 id="hero-title">
              {t.hero.firstName}
              <br />
              {t.hero.lastName}
            </h1>
            <h2>{t.hero.role}</h2>
            <p className="hero-intro">{t.hero.intro}</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#home-decor">
                {t.hero.primaryCta} <Arrow down />
              </a>
              <a className="text-link" href="#about">
                {t.hero.secondaryCta} <Arrow />
              </a>
            </div>
          </div>

          <figure className="hero-art">
            <div className="hero-frame">
              <img src={asset("images/selected/table-lamp-room.webp")} alt={t.hero.figureAlt} />
            </div>
            <figcaption>
              <span>{t.hero.figureTitle}</span>
              <span>{t.hero.figureStatus}</span>
            </figcaption>
          </figure>
        </section>

        <SelectedWork language={language} asset={asset} />

        <section className="portfolio-paths section-shell" id="portfolio" aria-labelledby="portfolio-title">
          <div className="section-heading">
            <p className="eyebrow">{t.portfolio.eyebrow}</p>
            <h2 id="portfolio-title">{t.portfolio.title}</h2>
          </div>

          <div className="path-grid">
            <article className="path-card furniture-path">
              <div>
                <p className="card-index">{t.portfolio.furnitureIndex}</p>
                <h3>{t.portfolio.furnitureTitle}</h3>
                <p>{t.portfolio.furnitureDescription}</p>
              </div>
              <div className="card-actions">
                <a
                  className="button button-light"
                  href={asset("files/olena-hryhorieva-furniture-object-design-portfolio.pdf")}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.portfolio.openPdf} <Arrow />
                </a>
                <a
                  className="small-link"
                  href={asset("files/olena-hryhorieva-furniture-object-design-portfolio.pdf")}
                  download
                >
                  {t.portfolio.downloadPdf} <Arrow down />
                </a>
              </div>
            </article>

            <article className="path-card styling-path">
              <div>
                <p className="card-index">{t.portfolio.stylingIndex}</p>
                <h3>{t.portfolio.stylingTitle}</h3>
                <p>{t.portfolio.stylingDescription}</p>
              </div>
              <div className="card-actions">
                <a
                  className="button button-light"
                  href={asset("files/olena-hryhorieva-styling-portfolio.pdf")}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.portfolio.openStylingPdf} <Arrow />
                </a>
                <a
                  className="small-link"
                  href={asset("files/olena-hryhorieva-styling-portfolio.pdf")}
                  download
                >
                  {t.portfolio.downloadStylingPdf} <Arrow down />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="approach section-shell" id="approach" aria-labelledby="approach-title">
          <div className="section-heading">
            <p className="eyebrow">{t.approach.eyebrow}</p>
            <h2 id="approach-title">{t.approach.title}</h2>
          </div>
          <ol className="method-grid">
            {t.approach.steps.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="about section-shell" id="about" aria-labelledby="about-title">
          <div className="about-title">
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2 id="about-title">{t.about.title}</h2>
          </div>
          <div className="about-copy">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="skill-list" aria-label={t.about.skillsLabel}>
              {t.about.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>

        {!workOnly && <section className="contact section-shell" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 id="contact-title">{t.contact.title}</h2>
          <p>{t.contact.description}</p>
          <a className="email-link" href="mailto:elegorieva@gmail.com">
            elegorieva@gmail.com <Arrow />
          </a>
        </section>}
      </main>

      <footer className="site-footer section-shell" lang={language}>
        <span>{t.footer.copyright}</span>
        <span>{t.footer.practice}</span>
        <a href="#top">{t.footer.backToTop}</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
