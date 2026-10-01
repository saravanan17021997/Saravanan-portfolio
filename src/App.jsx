import SystemMap from './components/SystemMap';
import {
  profile,
  caseStudies,
  experience,
  skillGroups,
  education,
} from './data/content';

export default function App() {
  return (
    <div className="wrap">
      <header className="header">
        <div className="idbar">
          <div>
            <h1 className="name">{profile.name}</h1>
            <div className="role">
              {profile.role} — {profile.location}
            </div>
          </div>
          <div className="meta">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <br />
            <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
          </div>
        </div>

        <div className="lede">
          {profile.lede.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <a className="cta" href={profile.resume}>
          Download resume (PDF)
        </a>
      </header>

      <SystemMap />

      <section className="section">
        <h2 className="section-head">Selected work</h2>
        <div className="cases">
          {caseStudies.map((c) => (
            <article className="case" key={c.title}>
              <div className="case-top">
                <h3>{c.title}</h3>
                <span className="tag">{c.tag}</span>
              </div>
              <div className="case-body">
                <p>
                  <b>The problem.</b> {c.problem}
                </p>
                <p>
                  <b>What I built.</b> {c.built}
                </p>
                <p>
                  <b>The hard part.</b> {c.hard}
                </p>
              </div>
              <ul className="stack">
                {c.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-head">Experience</h2>
        {experience.map((job) => (
          <div className="job" key={job.org}>
            <div className="job-when">{job.when}</div>
            <div>
              <h3>{job.role}</h3>
              <div className="job-org">{job.org}</div>
              <ul>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="section">
        <h2 className="section-head">Tools I work with</h2>
        <div className="skills">
          {skillGroups.map((g) => (
            <div key={g.title}>
              <h3>{g.title}</h3>
              <p>{g.items}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-head">Education</h2>
        <div className="job">
          <div className="job-when">{education.when}</div>
          <div>
            <h3>{education.degree}</h3>
            <div className="job-org">{education.school}</div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>Open to automation and business systems roles.</div>
        <div>
          <a href={`mailto:${profile.email}`}>Email</a> ·{' '}
          <a href={`tel:${profile.phoneHref}`}>Phone</a> ·{' '}
          <a href={profile.resume}>Resume</a>
        </div>
      </footer>
    </div>
  );
}
