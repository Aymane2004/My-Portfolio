import { useState, useEffect } from "react";

const G = "#D4A33A";
const G2 = "#F0C968";
const BG = "#05060A";
const TEXT = "#F7F2EA";
const MUTED = "#B9B1A6";
const BORDER = "rgba(212,163,58,0.28)";
const SURFACE = "rgba(212,163,58,0.10)";

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredNav, setHoveredNav] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay = 0, y = 28) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : `translateY(${y}px)`,
    transition: `opacity 1s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  const skills = [
    { cat: "FRONTEND", items: ["React", "HTML", "CSS", "JavaScript"] },
    { cat: "BACKEND", items: ["Laravel", "PHP", "Python"] },
    { cat: "DATABASE", items: ["MySQL", "MongoDB"] },
    { cat: "LANGUAGES", items: ["Arabic", "French", "English"] },
    { cat: "TOOLS", items: ["Git", "PowerPoint", "Excel", "Word"] },
  ];

  const experiences = [
    {
      period: "11/2025 – 02/2026",
      role: "Full Stack Web Developer Intern",
      company: "GHATHAPP",
      location: "Agadir, Morocco",
      desc: "Web full stack development internship working on real-world applications.",
    },
    {
      period: "March 2025",
      role: "End-of-Training Intern",
      company: "Vala Bleu",
      location: "Agadir, Morocco",
      desc: "Applied full stack skills in a professional environment as part of diploma completion.",
    }
  ];

  const education = [
    {
      year: "2023 – 2025",
      degree: "Diploma — Web Full Stack Development",
      school: "Institut Spécialisé de Technologie Appliquée, Agadir",
    },
    {
      year: "2022 – 2023",
      degree: "1st Year Physical Science",
      school: "Ibn Zohr University, Ait Melloul",
    },
    {
      year: "2021 – 2022",
      degree: "Baccalaureate in Physical Science",
      school: "Lycée Ibn Zohr, Belfaa",
    },
  ];

  const contacts = [
    { label: "Email", value: "aymantt2004@gmail.com", href: "mailto:aymantt2004@gmail.com" },
    { label: "Phone", value: "+212 675 845 466", href: "tel:+212675845466" },
    { label: "GitHub", value: "github.com/Aymane2004", href: "https://github.com/Aymane2004" },
    { label: "LinkedIn", value: "aymane-taleb", href: "https://www.linkedin.com/in/aymane-taleb-b46b4431b" },
  ];

  const navLinks = ["About", "Skills", "Experience", "Contact"];

  const mono = { fontFamily: "'Space Mono', 'Courier New', monospace" };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Space+Mono:wght@400;700&display=swap');
        html { scroll-behavior: smooth; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #07070A; }
        ::-webkit-scrollbar-thumb { background: ${G}; }
        ::selection { background: ${G}; color: ${BG}; }
      `}</style>

      <div style={{ background: BG, color: TEXT, minHeight: "100vh", fontFamily: "'Cormorant Garamond', Georgia, serif", overflowX: "hidden" }}>

        {/* ── NAV ── */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: "1.25rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "center",
          borderBottom: `0.5px solid ${BORDER}`,
          backdropFilter: "blur(20px)", background: "rgba(7,7,10,0.88)",
        }}>
          <a href="#home" style={{ textDecoration: "none" }}>
            <span style={{ ...mono, fontSize: "17px", color: G, letterSpacing: "0.2em", fontWeight: 700 }}>AT</span>
          </a>
          <div style={{ display: "flex", gap: "2.5rem" }}>
            {navLinks.map(s => (
              <a key={s} href={`#${s.toLowerCase()}`} style={{
                ...mono, fontSize: "12px", color: hoveredNav === s ? G : MUTED,
                textDecoration: "none", letterSpacing: "0.15em",
                transition: "color 0.2s",
              }}
                onMouseEnter={() => setHoveredNav(s)}
                onMouseLeave={() => setHoveredNav(null)}
              >{s.toUpperCase()}</a>
            ))}
          </div>
        </nav>

        {/* ── HERO ── */}
        <section id="home" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 3rem 5rem", position: "relative", overflow: "hidden" }}>

          {/* Background grid lines */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: `
              linear-gradient(${BORDER} 1px, transparent 1px),
              linear-gradient(90deg, ${BORDER} 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px", opacity: 0.4,
          }} />

          {/* Large decorative text */}
          <div style={{
            position: "absolute", right: "-0.05em", top: "50%", transform: "translateY(-50%)",
            fontSize: "clamp(10rem, 20vw, 22rem)", fontWeight: 300, color: "transparent",
            WebkitTextStroke: `1px ${BORDER}`, lineHeight: 1, pointerEvents: "none",
            userSelect: "none", letterSpacing: "-0.04em", fontStyle: "italic",
          }}>TALEB</div>

          {/* Gold vertical line */}
          <div style={{
            position: "absolute", left: "1.75rem", top: "20%", bottom: "20%",
            width: "1px", background: `linear-gradient(to bottom, transparent, ${G}, transparent)`,
            ...fade(1),
          }} />

          <div style={{ position: "relative", maxWidth: "800px", ...fade(0) }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem", ...fade(0.1) }}>
              <div style={{ width: "32px", height: "1px", background: G }} />
              <span style={{ ...mono, fontSize: "12px", color: G, letterSpacing: "0.35em" }}>
                WEB FULL STACK DEVELOPER · AGADIR, MOROCCO
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(4.5rem, 11vw, 10rem)", fontWeight: 300, lineHeight: 0.88, letterSpacing: "-0.025em", marginBottom: "2.5rem", ...fade(0.15) }}>
              TALEB<br />
              <em style={{ color: G, fontStyle: "italic" }}>Aymane.</em>
            </h1>

            <p style={{ ...mono, fontSize: "14px", color: MUTED, lineHeight: 1.8, maxWidth: "440px", marginBottom: "2.5rem", ...fade(0.3) }}>
              Building elegant digital experiences — from pixel-perfect interfaces to robust server-side logic. React · Laravel · JavaScript.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", ...fade(0.45) }}>
              <a href="mailto:aymane.taleb04@gmail.com" style={{
                ...mono, fontSize: "12px", background: G, color: BG,
                padding: "12px 28px", textDecoration: "none", letterSpacing: "0.12em",
                fontWeight: 700, transition: "background 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.background = G2}
                onMouseLeave={e => e.currentTarget.style.background = G}
              >CONTACT ME</a>

              <a href="https://github.com/Aymane2004" target="_blank" style={{
                ...mono, fontSize: "12px", border: `0.5px solid ${BORDER}`,
                color: MUTED, padding: "12px 28px", textDecoration: "none",
                letterSpacing: "0.12em", transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = G; e.currentTarget.style.color = G; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = MUTED; }}
              >VIEW GITHUB</a>

              <a href="/CV_resume.pdf" download style={{
                ...mono, fontSize: "12px", border: `0.5px solid ${G}`,
                color: G, padding: "12px 28px", textDecoration: "none",
                letterSpacing: "0.12em", transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = SURFACE; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
              >DOWNLOAD CV</a>
            </div>
          </div>

          {/* Scroll arrow */}
          <div style={{ position: "absolute", right: "3rem", bottom: "3rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", ...fade(0.8) }}>
            <div style={{ ...mono, fontSize: "12px", color: MUTED, writingMode: "vertical-rl", letterSpacing: "0.25em" }}>SCROLL</div>
            <div style={{ width: "1px", height: "50px", background: `linear-gradient(to bottom, ${MUTED}, transparent)` }} />
          </div>
        </section>

        {/* ── ABOUT + SKILLS ── */}
        <section id="about" style={{ padding: "7rem 3rem", borderTop: `0.5px solid ${BORDER}` }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>

              {/* About */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "2.5rem" }}>
                  <span style={{ ...mono, fontSize: "11px", color: G, letterSpacing: "0.3em" }}>01</span>
                  <div style={{ flex: 1, height: "0.5px", background: BORDER }} />
                  <span style={{ ...mono, fontSize: "11px", color: G, letterSpacing: "0.3em" }}>ABOUT ME</span>
                </div>

                <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, lineHeight: 1.15, marginBottom: "1.5rem" }}>
                  Crafting the web,<br /><em style={{ color: G }}>front to back.</em>
                </h2>

                <p style={{ ...mono, fontSize: "13px", color: MUTED, lineHeight: 2, marginBottom: "2rem" }}>
                  Fresh full-stack developer from Agadir, Morocco. Graduated with a diploma in Web Full Stack Development, combining solid front-end craft with Laravel-powered backends. Curious, driven, and ready to contribute to meaningful projects.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    ["Driving License", "Category B · 2023"],
                    ["Location", "Oukhrib Belfaa, Chtouka Ait Baha"],
                    ["Interests", "Football, Swimming, Internet"],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", borderBottom: `0.5px solid ${BORDER}`, paddingBottom: "10px" }}>
                      <span style={{ ...mono, fontSize: "11px", color: MUTED, letterSpacing: "0.1em" }}>{k.toUpperCase()}</span>
                      <span style={{ ...mono, fontSize: "11px", color: TEXT }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div id="skills">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "2.5rem" }}>
                  <span style={{ ...mono, fontSize: "11px", color: G, letterSpacing: "0.3em" }}>02</span>
                  <div style={{ flex: 1, height: "0.5px", background: BORDER }} />
                  <span style={{ ...mono, fontSize: "11px", color: G, letterSpacing: "0.3em" }}>SKILLS</span>
                </div>

                {skills.map(({ cat, items }) => (
                  <div key={cat} style={{ marginBottom: "2rem" }}>
                    <span style={{ ...mono, fontSize: "11px", color: MUTED, letterSpacing: "0.2em", display: "block", marginBottom: "10px" }}>{cat}</span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {items.map(skill => (
                        <span key={skill}
                          style={{
                            ...mono, fontSize: "12px",
                            border: `0.5px solid ${hoveredSkill === skill ? G : BORDER}`,
                            color: hoveredSkill === skill ? G : TEXT,
                            background: hoveredSkill === skill ? SURFACE : "transparent",
                            padding: "6px 14px", cursor: "default",
                            transition: "all 0.2s",
                          }}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" style={{ padding: "7rem 3rem", borderTop: `0.5px solid ${BORDER}` }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4rem" }}>
              <span style={{ ...mono, fontSize: "11px", color: G, letterSpacing: "0.3em" }}>03</span>
              <div style={{ flex: 1, height: "0.5px", background: BORDER }} />
              <span style={{ ...mono, fontSize: "11px", color: G, letterSpacing: "0.3em" }}>EXPERIENCE</span>
            </div>

            {experiences.map((exp, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "240px 1fr",
                gap: "3rem", paddingBottom: "3rem", marginBottom: "3rem",
                borderBottom: i < experiences.length - 1 ? `0.5px solid ${BORDER}` : "none",
              }}>
                <div>
                  <p style={{ ...mono, fontSize: "13px", color: G, marginBottom: "6px" }}>{exp.period}</p>
                  <p style={{ ...mono, fontSize: "12px", color: MUTED }}>{exp.location}</p>
                </div>
                <div>
                  <h3 style={{ fontSize: "1.9rem", fontWeight: 400, lineHeight: 1.1, marginBottom: "6px" }}>{exp.role}</h3>
                  <p style={{ ...mono, fontSize: "12px", color: G, marginBottom: "10px" }}>{exp.company}</p>
                  <p style={{ ...mono, fontSize: "12px", color: MUTED, lineHeight: 1.8 }}>{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section style={{ padding: "7rem 3rem", borderTop: `0.5px solid ${BORDER}` }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4rem" }}>
              <span style={{ ...mono, fontSize: "11px", color: G, letterSpacing: "0.3em" }}>04</span>
              <div style={{ flex: 1, height: "0.5px", background: BORDER }} />
              <span style={{ ...mono, fontSize: "11px", color: G, letterSpacing: "0.3em" }}>EDUCATION</span>
            </div>

            {education.map((edu, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "240px 1fr",
                gap: "3rem", paddingBottom: "2.5rem", marginBottom: "2.5rem",
                borderBottom: i < education.length - 1 ? `0.5px solid ${BORDER}` : "none",
              }}>
                <p style={{ ...mono, fontSize: "13px", color: G }}>{edu.year}</p>
                <div>
                  <h3 style={{ fontSize: "1.7rem", fontWeight: 400, marginBottom: "6px" }}>{edu.degree}</h3>
                  <p style={{ ...mono, fontSize: "12px", color: MUTED }}>{edu.school}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" style={{ padding: "7rem 3rem 5rem", borderTop: `0.5px solid ${BORDER}` }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "3rem" }}>
              <span style={{ ...mono, fontSize: "11px", color: G, letterSpacing: "0.3em" }}>05</span>
              <div style={{ flex: 1, height: "0.5px", background: BORDER }} />
              <span style={{ ...mono, fontSize: "11px", color: G, letterSpacing: "0.3em" }}>CONTACT</span>
            </div>

            <h2 style={{ fontSize: "clamp(3rem, 7vw, 7rem)", fontWeight: 300, lineHeight: 0.9, letterSpacing: "-0.025em", marginBottom: "4rem" }}>
              Let's build<br /><em style={{ color: G }}>something great.</em>
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1px", background: BORDER, marginBottom: "4rem" }}>
              {contacts.map(({ label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" style={{
                  textDecoration: "none", padding: "1.75rem",
                  background: hoveredLink === label ? SURFACE : BG,
                  transition: "background 0.2s",
                }}
                  onMouseEnter={() => setHoveredLink(label)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <p style={{ ...mono, fontSize: "11px", color: MUTED, letterSpacing: "0.2em", marginBottom: "10px" }}>{label.toUpperCase()}</p>
                  <p style={{ ...mono, fontSize: "12px", color: hoveredLink === label ? G : TEXT, transition: "color 0.2s", wordBreak: "break-all" }}>{value}</p>
                </a>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", paddingTop: "2rem", borderTop: `0.5px solid ${BORDER}` }}>
              <span style={{ ...mono, fontSize: "12px", color: MUTED }}>© 2026 TALEB Aymane</span>
              <span style={{ ...mono, fontSize: "12px", color: MUTED }}>Agadir, Morocco 🇲🇦</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
