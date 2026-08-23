import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type Project = {
  title: string;
  category: string;
  status: string;
  image: string;
  alt: string;
  featured?: boolean;
};

const base = import.meta.env.BASE_URL;
const asset = (path: string) => `${base}${path}`;

const projects: Project[] = [
  {
    title: "Foldable Dining Module",
    category: "Compact-space solution",
    status: "Implemented",
    image: "images/foldable-dining-module.jpg",
    alt: "Implemented foldable dining module shown in an apartment interior",
    featured: true,
  },
  {
    title: "Sculptural Armchair",
    category: "Form and volume study",
    status: "Early 3D study",
    image: "images/sculptural-armchair.jpg",
    alt: "Sculptural upholstered armchair modeled in Blender",
  },
  {
    title: "Biomorphic Concrete Table",
    category: "Sculptural furniture concept",
    status: "Concept sketch",
    image: "images/biomorphic-table.jpg",
    alt: "Biomorphic concrete table concept with a decorative accent insert",
  },
  {
    title: "Biophilic Study Pods",
    category: "Learning environment system",
    status: "Concept sketch",
    image: "images/biophilic-study-pods.jpg",
    alt: "Modular study pods with an integrated hydroponic planting system",
    featured: true,
  },
  {
    title: "Sculptural Entryway Console",
    category: "Storage and daily ritual",
    status: "Concept sketch",
    image: "images/entryway-console.jpg",
    alt: "Entryway console concept with integrated key and shoe storage",
  },
  {
    title: "Upcycled Floor Lamp",
    category: "Lighting and material reuse",
    status: "Implemented",
    image: "images/upcycled-floor-lamp.jpg",
    alt: "Implemented floor lamp created by transforming an existing object",
  },
];

function Arrow({ down = false }: { down?: boolean }) {
  return <span aria-hidden="true">{down ? "\u2193" : "\u2197"}</span>;
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Olena Hryhorieva - home">
          OH
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Furniture / Objects / Visual Direction</p>
            <h1 id="hero-title">
              Olena
              <br />
              Hryhorieva
            </h1>
            <h2>Furniture &amp; Object Concept Designer</h2>
            <p className="hero-intro">
              I explore furniture and everyday objects through form, silhouette,
              ergonomics, and cultural research - from hand-drawn concepts to
              early 3D studies and selected implemented pieces.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                View selected work <Arrow down />
              </a>
              <a className="text-link" href="#about">
                About my practice <Arrow />
              </a>
            </div>
          </div>

          <figure className="hero-art">
            <div className="hero-frame">
              <img
                src={asset("images/sculptural-armchair.jpg")}
                alt="Sculptural armchair - an early Blender study by Olena Hryhorieva"
              />
            </div>
            <figcaption>
              <span>01 / Sculptural Armchair</span>
              <span>Early 3D study</span>
            </figcaption>
          </figure>
        </section>

        <section className="portfolio-paths section-shell" aria-labelledby="portfolio-title">
          <div className="section-heading">
            <p className="eyebrow">Two creative practices</p>
            <h2 id="portfolio-title">Portfolio</h2>
          </div>

          <div className="path-grid">
            <article className="path-card furniture-path">
              <div>
                <p className="card-index">01 / Primary practice</p>
                <h3>Furniture &amp; Object Concept Design</h3>
                <p>
                  Sculptural furniture, compact-living solutions, lighting, and
                  human-centered objects explored through sketching, materials,
                  early 3D, and implemented work.
                </p>
              </div>
              <div className="card-actions">
                <a
                  className="button button-light"
                  href={asset("files/olena-hryhorieva-furniture-object-design-portfolio.pdf")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open portfolio PDF <Arrow />
                </a>
                <a
                  className="small-link"
                  href={asset("files/olena-hryhorieva-furniture-object-design-portfolio.pdf")}
                  download
                >
                  Download PDF <Arrow down />
                </a>
              </div>
            </article>

            <article className="path-card styling-path">
              <div>
                <p className="card-index">02 / Visual background</p>
                <h3>Fashion Styling &amp; Visual Direction</h3>
                <p>
                  A background in silhouette, color, texture, and visual narrative
                  that now informs how I think about materials, objects, and atmosphere.
                </p>
              </div>
              <div className="card-actions">
                <span className="availability">Selected portfolio available on request</span>
                <a
                  className="small-link"
                  href="mailto:elegorieva@gmail.com?subject=Styling%20portfolio%20request"
                >
                  Request styling portfolio <Arrow />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="selected-work section-shell" id="work" aria-labelledby="work-title">
          <div className="section-heading heading-row">
            <div>
              <p className="eyebrow">Selected furniture &amp; objects</p>
              <h2 id="work-title">Form with a reason</h2>
            </div>
            <p className="heading-note">
              Current work combines author&apos;s concept sketches, introductory
              Blender studies, and implemented solutions. Each status is labeled clearly.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card${project.featured ? " project-card-wide" : ""}`}
                key={project.title}
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
            <p className="eyebrow">Working method</p>
            <h2 id="approach-title">From observation to object</h2>
          </div>
          <ol className="method-grid">
            <li>
              <span>01</span>
              <h3>Observe</h3>
              <p>A daily friction, spatial limitation, cultural reference, or remembered form.</p>
            </li>
            <li>
              <span>02</span>
              <h3>Frame</h3>
              <p>The intended use, human interaction, scale, ergonomics, and emotional tone.</p>
            </li>
            <li>
              <span>03</span>
              <h3>Explore</h3>
              <p>Silhouettes, proportions, materials, color relationships, and alternative forms.</p>
            </li>
            <li>
              <span>04</span>
              <h3>Develop</h3>
              <p>A clearer concept ready for feedback, 3D development, prototyping, or production dialogue.</p>
            </li>
          </ol>
        </section>

        <section className="about section-shell" id="about" aria-labelledby="about-title">
          <div className="about-title">
            <p className="eyebrow">About</p>
            <h2 id="about-title">A visual eye moving toward tangible form.</h2>
          </div>
          <div className="about-copy">
            <p>
              My ideas often begin with an observation, a cultural reference, or a
              form captured in a quick sketch. I then develop the concept through its
              intended use, silhouette, ergonomics, and possible materials.
            </p>
            <p>
              My current portfolio combines hand-drawn furniture and object concepts,
              early Blender studies, and several implemented solutions. A background in
              styling has strengthened my sensitivity to proportion, texture, color,
              and visual storytelling.
            </p>
            <p>
              I am continuing to develop my professional furniture-design and 3D
              workflow and am open to junior roles, internships, and concept-focused
              collaborations.
            </p>
            <ul className="skill-list" aria-label="Core strengths and tools">
              <li>Concept development</li>
              <li>Hand sketching</li>
              <li>Material &amp; color research</li>
              <li>Spatial problem solving</li>
              <li>Blender - basic</li>
            </ul>
          </div>
        </section>

        <section className="contact section-shell" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Let&apos;s develop an idea into a thoughtful object.</h2>
          <p>
            Open to furniture and object concept design, junior roles, internships,
            and collaborative projects. Based in Georgia and available remotely.
          </p>
          <a className="email-link" href="mailto:elegorieva@gmail.com">
            elegorieva@gmail.com <Arrow />
          </a>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <span>\u00a9 2026 Olena Hryhorieva</span>
        <span>Furniture &amp; Object Concept Design</span>
        <a href="#top">Back to top \u2191</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
