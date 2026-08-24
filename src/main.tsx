import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./language.css";

type Language = "uk" | "en";

const base = import.meta.env.BASE_URL;
const asset = (path: string) => `${base}${path}`;

const projectVisuals = [
  {
    image: "images/foldable-dining-module.jpg",
    featured: true,
  },
  {
    image: "images/sculptural-armchair.jpg",
  },
  {
    image: "images/biomorphic-table.jpg",
  },
  {
    image: "images/biophilic-study-pods.jpg",
    featured: true,
  },
  {
    image: "images/entryway-console.jpg",
  },
  {
    image: "images/upcycled-floor-lamp.jpg",
  },
];

const translations = {
  uk: {
    metaTitle: "Олена Григор’єва - концепт-дизайнер меблів і предметів інтер’єру та побуту",
    metaDescription:
      "Олена Григор’єва - концепт-дизайнер меблів і предметів інтер’єру та побуту. Авторські концепції, 3D-опрацювання та реалізовані об’єкти.",
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
      role: "Концепт-дизайнер меблів і предметів інтер’єру та побуту",
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
        "Скульптурні меблі, рішення для компактного житла, освітлення й людиноцентричні предмети, досліджені через ескізи, матеріали, 3D-моделювання та реалізовані проєкти.",
      openPdf: "Відкрити PDF-портфоліо",
      downloadPdf: "Завантажити PDF",
      stylingIndex: "02 / Візуальний досвід",
      stylingTitle: "Портфоліо стилістки",
      stylingDescription:
        "Добірка робіт зі стилістики образів, роботи з кольором, фактурою та візуальною композицією. Цей досвід сьогодні впливає на мій підхід до матеріалів, предметів і атмосфери простору.",
      openStylingPdf: "Відкрити портфоліо стилістки",
      downloadStylingPdf: "Завантажити PDF",
    },
    work: {
      title: "Форма, що має сенс",
      note:
        "Поточне портфоліо поєднує авторські концептуальні ескізи, 3D-опрацювання у Blender і реалізовані рішення. Стадію кожного проєкту позначено чітко.",
    },
    projects: [
      {
        title: "Складаний обідній модуль",
        category: "Рішення для компактного простору",
        status: "Реалізовано",
        alt: "Реалізований складаний обідній модуль в інтер’єрі квартири",
      },
      {
        title: "Скульптурне крісло",
        category: "Дослідження форми й об’єму",
        status: "Опрацювання концепції",
        alt: "Скульптурне м’яке крісло, змодельоване у Blender",
      },
      {
        title: "Біоморфний бетонний стіл",
        category: "Концепція скульптурних меблів",
        status: "Концептуальний ескіз",
        alt: "Концепція біоморфного бетонного столу з декоративною акцентною вставкою",
      },
      {
        title: "Біофільні навчальні модулі",
        category: "Система для навчального середовища",
        status: "Концептуальний ескіз",
        alt: "Модульні навчальні місця з інтегрованою гідропонною системою",
      },
      {
        title: "Скульптурна консоль для передпокою",
        category: "Зберігання та щоденний ритуал",
        status: "Концептуальний ескіз",
        alt: "Концепція консолі для передпокою зі зберіганням ключів і взуття",
      },
      {
        title: "Торшер з апсайклінгу",
        category: "Освітлення й повторне використання матеріалів",
        status: "Реалізовано",
        alt: "Реалізований торшер, створений через переосмислення наявного предмета",
      },
    ],
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
        "Sculptural furniture, compact-living solutions, lighting, and human-centered objects explored through sketching, materials, 3D development, and implemented work.",
      openPdf: "Open portfolio PDF",
      downloadPdf: "Download PDF",
      stylingIndex: "02 / Visual background",
      stylingTitle: "Styling Portfolio",
      stylingDescription:
        "A selection of image styling work focused on color, texture, proportion, and visual composition. This experience now informs how I think about materials, objects, and atmosphere.",
      openStylingPdf: "Open styling portfolio",
      downloadStylingPdf: "Download PDF",
    },
    work: {
      title: "Form with a reason",
      note:
        "Current work combines original concept sketches, 3D development in Blender, and implemented solutions. Each status is labeled clearly.",
    },
    projects: [
      {
        title: "Foldable Dining Module",
        category: "Compact-space solution",
        status: "Implemented",
        alt: "Implemented foldable dining module shown in an apartment interior",
      },
      {
        title: "Sculptural Armchair",
        category: "Form and volume study",
        status: "Concept development",
        alt: "Sculptural upholstered armchair modeled in Blender",
      },
      {
        title: "Biomorphic Concrete Table",
        category: "Sculptural furniture concept",
        status: "Concept sketch",
        alt: "Biomorphic concrete table concept with a decorative accent insert",
      },
      {
        title: "Biophilic Study Pods",
        category: "Learning environment system",
        status: "Concept sketch",
        alt: "Modular study pods with an integrated hydroponic planting system",
      },
      {
        title: "Sculptural Entryway Console",
        category: "Storage and daily ritual",
        status: "Concept sketch",
        alt: "Entryway console concept with integrated key and shoe storage",
      },
      {
        title: "Upcycled Floor Lamp",
        category: "Lighting and material reuse",
        status: "Implemented",
        alt: "Implemented floor lamp created by transforming an existing object",
      },
    ],
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
  const projects = projectVisuals.map((visual, index) => ({
    ...visual,
    ...t.projects[index],
  }));

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
            <a href="#work">{t.nav.work}</a>
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
              <a className="button button-dark" href="#work">
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

        <section className="portfolio-paths section-shell" aria-labelledby="portfolio-title">
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

        <section className="selected-work section-shell" id="work" aria-labelledby="work-title">
          <div className="section-heading heading-row">
            <div>
              <h2 id="work-title">{t.work.title}</h2>
            </div>
            <p className="heading-note">{t.work.note}</p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card${project.featured ? " project-card-wide" : ""}`}
                key={project.image}
              >
                <div className="project-image">
                  <img src={asset(project.image)} alt={project.alt} loading="lazy" />
                  <span className="status">{project.status}</span>
                </div>
                <div className="project-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                  </div>
                </div>
              </article>
            ))}
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
