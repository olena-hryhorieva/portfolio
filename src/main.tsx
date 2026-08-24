import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./language.css";

type Language = "uk" | "en";

const base = import.meta.env.BASE_URL;
const asset = (path: string) => `${base}${path}`;

const translations = {
  uk: {
    metaTitle: "Олена Григор’єва - концепт-дизайнер меблів, предметів інтер’єру та побуту",
    metaDescription:
      "Олена Григор’єва - концепт-дизайнер меблів, предметів інтер’єру та побуту. Авторські концепції, 3D-опрацювання та реалізовані об’єкти.",
    languageLabel: "Оберіть мову",
    homeLabel: "Олена Григор’єва - головна сторінка",
    nav: {
      work: "Роботи",
      approach: "Метод",
      about: "Про мене",
      contact: "Контакти",
    },
    hero: {
      eyebrow: "Меблі / Предмети / Візуальний напрям",
      firstName: "Олена",
      lastName: "Григор’єва",
      role: "Концепт-дизайнер меблів, предметів інтер’єру та побуту",
      intro:
        "Досліджую меблі й повсякденні предмети через форму, силует, ергономіку та культурні образи - від ескізів від руки до 3D-опрацювань і окремих реалізованих об’єктів.",
      primaryCta: "Переглянути вибрані роботи",
      secondaryCta: "Про мою практику",
      figureTitle: "01 / Скульптурне крісло",
      figureStatus: "Опрацювання концепції",
      figureAlt: "Скульптурне крісло - 3D-опрацювання концепції Олени Григор’євої у Blender",
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
        "Моє поточне портфоліо поєднує ескізи меблів і предметів від руки, 3D-опрацювання у Blender та кілька реалізованих рішень. Досвід у стилістиці загострив моє відчуття пропорцій, фактури, кольору та візуальної оповіді.",
        "Після переосмислення професійного шляху я свідомо зосередилася на дизайні меблів і предметів - напрямі, який давно був частиною мого візуального мислення та творчої практики. Для мене це не початок творчого шляху, а новий професійний фокус для вже сформованої дизайнерської оптики. Продовжую поглиблювати навички у дизайні меблів і 3D, спираючись на досвід у стилістиці, композиції, роботі з кольором, матеріалами та простором.",
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
        "Відкрита до різних форматів співпраці у сфері концептуального дизайну меблів і предметів: проєктної роботи, участі в команді та творчих партнерств.",
    },
    footer: {
      copyright: "© 2026 Олена Григор’єва",
      practice: "Концепт-дизайн меблів і предметів",
      backToTop: "На початок ↑",
    },
  },
  en: {
    metaTitle: "Olena Hryhorieva - Concept Designer for Furniture, Interior & Everyday Objects",
    metaDescription:
      "Olena Hryhorieva - concept designer for furniture, interior and everyday objects. Selected concepts, 3D development, and implemented objects.",
    languageLabel: "Choose language",
    homeLabel: "Olena Hryhorieva - home",
    nav: {
      work: "Work",
      approach: "Approach",
      about: "About",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Furniture / Objects / Visual Direction",
      firstName: "Olena",
      lastName: "Hryhorieva",
      role: "Concept Designer for Furniture, Interior & Everyday Objects",
      intro:
        "I explore furniture and everyday objects through form, silhouette, ergonomics, and cultural research - from hand-drawn concepts to 3D development and selected implemented pieces.",
      primaryCta: "View selected work",
      secondaryCta: "About my practice",
      figureTitle: "01 / Sculptural Armchair",
      figureStatus: "Concept development",
      figureAlt: "Sculptural armchair - 3D concept development by Olena Hryhorieva in Blender",
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
        "My current portfolio combines hand-drawn furniture and object concepts, 3D development in Blender, and several implemented solutions. A background in styling has strengthened my sensitivity to proportion, texture, color, and visual storytelling.",
        "After reassessing my professional direction, I made a deliberate decision to focus on furniture and object design - a field that has long been part of my visual thinking and creative practice. This is not the beginning of my creative path, but a new professional focus for an already established design perspective. I continue to deepen my furniture design and 3D practice, drawing on experience in styling, composition, color, materials, and spatial thinking.",
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
        "I am open to different forms of collaboration in furniture and object concept design, including project-based work, team participation, and creative partnerships.",
    },
    footer: {
      copyright: "© 2026 Olena Hryhorieva",
      practice: "Furniture & Object Concept Design",
      backToTop: "Back to top ↑",
    },
  },
} as const;

function getInitialLanguage(): Language {
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
            <a href="#portfolio">{t.nav.work}</a>
            <a href="#approach">{t.nav.approach}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
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
              <a className="button button-dark" href="#portfolio">
                {t.hero.primaryCta} <Arrow down />
              </a>
              <a className="text-link" href="#about">
                {t.hero.secondaryCta} <Arrow />
              </a>
            </div>
          </div>

          <figure className="hero-art">
            <div className="hero-frame">
              <img src={asset("images/sculptural-armchair.jpg")} alt={t.hero.figureAlt} />
            </div>
            <figcaption>
              <span>{t.hero.figureTitle}</span>
              <span>{t.hero.figureStatus}</span>
            </figcaption>
          </figure>
        </section>

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

        <section className="contact section-shell" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 id="contact-title">{t.contact.title}</h2>
          <p>{t.contact.description}</p>
          <a className="email-link" href="mailto:elegorieva@gmail.com">
            elegorieva@gmail.com <Arrow />
          </a>
        </section>
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
