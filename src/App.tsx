import { useMemo, useState } from "react";
import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";
import {
  ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Box,
  Menu, Rotate3D, X
} from "lucide-react";
import { projects, type Project } from "./data/projects";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <Link to="/" className="brand" aria-label="Till startsidan">
        <span className="brand-mark">◈</span><span>PORTFOLIO<span className="brand-dot">.</span></span>
      </Link>
      <button className="mobile-menu" onClick={() => setMenuOpen(v => !v)} aria-label="Öppna meny">
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav className={menuOpen ? "nav nav-open" : "nav"}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>Hem</NavLink>
        <a href="/#work" onClick={() => setMenuOpen(false)}>Portfolio</a>
        <a href="/#about" onClick={() => setMenuOpen(false)}>Om mig</a>
        <a href="mailto:gatsfieldnavid@gmail.com" onClick={() => setMenuOpen(false)}>Kontakt <ArrowUpRight size={13} /></a>
      </nav>
      <a className="availability" href="mailto:hello@example.com"><span /> Tillgänglig för möjligheter</a>
    </header>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link className="project-card" to={`/models/${project.id}`} style={{ animationDelay: `${index * 70}ms` }}>
      <div className="card-image">
        <img src={project.poster} alt={`Posterbild för ${project.title}`} loading={index > 2 ? "lazy" : "eager"}
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0"; }} />
        <div className="poster-fallback"><Box size={34} /><span>Lägg till posterbild</span></div>
        <div className="card-image-shade" />
        <span className="three-d-pill"><Rotate3D size={13} /> 3D-MODELL</span>
        <span className="card-open"><ArrowUpRight size={19} /></span>
        <span className="card-hint">Klicka för att utforska</span>
      </div>
      <div className="card-meta">
        <div><span className="eyebrow">{project.category}</span><h3>{project.title}</h3></div>
        <ArrowUpRight className="meta-arrow" size={18} />
      </div>
    </Link>
  );
}

function HomePage() {
  const [filter, setFilter] = useState("Allt");
  const categories = ["Allt", "Character", "Creature", "Environment", "Prop"];
    const visibleProjects = useMemo(
        () =>
            filter === "Allt"
                ? projects
                : projects.filter((p) => p.category === filter),
        [filter]
    );

  return (
    <>
      <section className="hero">
        <div className="hero-noise" />
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-line" /> 3D ARTIST PORTFOLIO</span>
          <h1>Karaktärer.<br /><span>Världar.</span><br />Berättelser.</h1>
          <p>3D-karaktärer och creatures skapade med fokus på form, material och personlighet.</p>
          <a className="primary-button" href="#work">Utforska arbeten <ArrowDownRight size={17} /></a>
          <div className="hero-footnote"><span className="tiny-dot" /> Utvalda 3D-projekt <span className="foot-divider" /> Interaktiva modeller</div>
        </div>
        <div className="hero-art" aria-label="Dekorativt utrymme för en utvald karaktär">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="hero-art-glow" />
            <a href="/models/calvin" className="hero-model-link">
                <img
                    width="400px"
                    height="400px"
                    src="/posters/hero.webp"
                    alt="Förhandsvisning av utvald 3D-karaktär"
                />
                <br/>
                <div className="hero-open-label">Utforska modellen ↗</div>
            </a>

            <div className="hero-art-caption"><span>01 / UTVALT VERK</span><span>3D · CHARACTER DESIGN</span></div>
        </div>
        <div className="hero-index">01 — 04</div>
      </section>

      <section className="intro-strip">
        <p>Digitala karaktärer, skapade från första form till färdig presentation.</p>
        <span>MODELLERING <i>·</i> TEXTURERING <i>·</i> LOOKDEV</span>
      </section>

      <section className="work-section section-wrap" id="work">
        <div className="section-heading">
          <div><span className="eyebrow">UTVALDA PROJEKT</span><h2>Arbeten<span className="muted-period">.</span></h2></div>
          <p>Välj ett verk för att öppna den interaktiva 3D-visningen och utforska detaljerna.</p>
        </div>
        <div className="filter-row" role="group" aria-label="Filtrera projekt">
          {categories.map(category => <button key={category} className={filter === category ? "filter active" : "filter"} onClick={() => setFilter(category)}>{category}</button>)}
          <span className="project-count">{String(visibleProjects.length).padStart(2, "0")} PROJEKT</span>
        </div>
        <div className="project-grid">
          {visibleProjects.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
        </div>
        <div className="gallery-note"><Rotate3D size={16} /><span>Alla märkta projekt innehåller en interaktiv 3D-modell.</span><span className="gallery-note-end">DRA · ROTERA · ZOOMA</span></div>
      </section>

      <section className="about-section" id="about">
        <div className="about-mark">◈</div>
        <div className="about-copy"><span className="eyebrow">BAKOM MODELLERNA</span><h2>Form med<br /><span>personlighet.</span></h2></div>
        <p>Jag skapar karaktärer och creatures med fokus på silhuett, material och detaljer.</p>
        <a className="text-link" href="mailto:hello@example.com">Låt oss prata <ArrowUpRight size={16} /></a>
      </section>
      <Footer />
    </>
  );
}

function ModelViewer({ project }: { project: Project }) {
console.log("Modellen hittades", project.model);
  const [modelError, setModelError] = useState(false);
  return (
    <div className="viewer-shell">
      <div className="viewer-topline"><span><span className="live-dot" /> INTERAKTIV MODELL</span><span>GLB / REAL-TIME VIEW</span></div>
      {!modelError ? (
        <model-viewer
          key={project.model}
          src={project.model}
          alt={`Interaktiv 3D-modell av ${project.title}`}
          camera-controls
          touch-action="pan-y"
          auto-rotate
          rotation-per-second="12deg"
          shadow-intensity="1"
          environment-image="neutral"
          interaction-prompt="auto"
          loading="eager"
          ar
          ar-modes="webxr scene-viewer quick-look"
          onError={(event) => {
              console.error("Model-viewer error:", event);
              setModelError(true);
          }}
        >
          <div slot="progress-bar" className="model-progress"><span /></div>
        </model-viewer>
      ) : (
        <div className="viewer-empty"><Box size={38} /><h3>Modellen kunde inte laddas</h3><p>Kontrollera att GLB-filen finns på <code>{project.model}</code>.</p><p className="viewer-empty-help">Lägg filen i <code>public{project.model}</code> och ladda om sidan.</p></div>
      )}
      <div className="viewer-instructions"><Rotate3D size={16} /><span>Dra för att rotera</span><span className="instruction-dot">·</span><span>Scrolla eller nyp för att zooma</span></div>
    </div>
  );
}

function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
console.log("ID:", id);
console.log("Projekt:", project);
  if (!project) return <main className="not-found"><span className="eyebrow">404 — PROJEKT SAKNAS</span><h1>Det här verket hittades inte.</h1><Link className="primary-button" to="/">Tillbaka till portfolion <ArrowRight size={16} /></Link></main>;
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  return (
    <>
      <main className="detail-page section-wrap">
        <Link to="/#work" className="back-link"><ArrowLeft size={15} /> Tillbaka till alla projekt</Link>
        <div className="detail-heading">
          <div><span className="eyebrow">{project.category} <span className="eyebrow-separator">/</span> {project.year ?? "PORTFOLIO"}</span><h1>{project.title}<span className="muted-period">.</span></h1></div>
          <div className="detail-tools">{project.software.map(tool => <span className="software-tag" key={tool}>{tool}</span>)}</div>
        </div>
        <p className="detail-lead">{project.description}</p>
        <ModelViewer project={project} />
        <div className="detail-lower">
          <section className="project-about"><span className="eyebrow">OM PROJEKTET</span><h2>Från form till färdig karaktär.</h2><p>{project.description}</p><p>Uppdatera den här texten med din faktiska process, utmaningar och vad du själv ansvarade för i projektet.</p></section>
          <aside className="project-facts"><span className="eyebrow">PROJEKTINFO</span><dl><div><dt>Typ</dt><dd>{project.category}</dd></div><div><dt>År</dt><dd>{project.year ?? "—"}</dd></div><div><dt>Program</dt><dd>{project.software.join(", ")}</dd></div><div><dt>Format</dt><dd>GLB / Web 3D</dd></div></dl></aside>
        </div>
        <Link to={`/models/${nextProject.id}`} className="next-project"><span><span className="eyebrow">NÄSTA PROJEKT</span><strong>{nextProject.title}</strong></span><span className="next-icon"><ArrowUpRight size={21} /></span></Link>
      </main>
      <Footer />
    </>
  );
}

function Footer() {
  return <footer className="site-footer"><Link to="/" className="brand"><span className="brand-mark">◈</span><span>PORTFOLIO<span className="brand-dot">.</span></span></Link><span>Utformad för att låta arbetet tala.</span><a href="mailto:hello@example.com">KONTAKT <ArrowUpRight size={13} /></a><span className="copyright">© {new Date().getFullYear()}</span></footer>;
}

export default function App() {
  return <div className="app-shell"><Header /><Routes><Route path="/" element={<HomePage />} /><Route path="/models/:id" element={<ProjectPage />} /><Route path="*" element={<main className="not-found"><h1>Sidan hittades inte.</h1><Link to="/">Till startsidan <ArrowRight size={16} /></Link></main>} /></Routes></div>;
}
