import { Link, useParams } from 'react-router-dom'
import PageHead from '../components/PageHead'
import Reveal from '../components/Reveal'
import { Caption, CtaBand } from '../components/Layout'
import { insights } from '../content'
import NotFound from './NotFound'

export function InsightsIndex() {
  const [lead, ...rest] = insights

  return (
    <>
      <PageHead
        crumb="Insights"
       
        eyebrow="Notes from the practice"
        title={
          <>
            What changed, and what to <em className="gold">do about it.</em>
          </>
        }
        lede="Written by the advocate who dealt with the directive, the decision, or the filing. Published when something actually changes, which is less often than a newsletter would suggest."
        image="/img/books.jpg"
      />

      <section className="section">
        <div className="shell">
          <Reveal className="split" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <Link to={`/insights/${lead.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
              <img
                src={lead.image}
                alt=""
                style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover' }}
              />
            </Link>
            <div>
              <Caption>{lead.kind}</Caption>
              <h2 className="display-lg">
                <Link to={`/insights/${lead.slug}`} style={{ textDecoration: 'none' }}>
                  {lead.title}
                </Link>
              </h2>
              <p className="lede" style={{ marginTop: '1.2rem' }}>
                {lead.standfirst}
              </p>
              <p style={{ marginTop: '1.4rem', fontSize: '0.76rem', letterSpacing: '0.11em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--ink-soft)' }}>
                {lead.author} · {lead.date}
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <Link to={`/insights/${lead.slug}`} className="link-underline brick">
                  Read the note <span className="btn-arrow">→</span>
                </Link>
              </div>
            </div>
          </Reveal>

          <hr className="rule" />

          <Reveal className="card-grid" style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
            {rest.map((n) => (
              <Link className="card" to={`/insights/${n.slug}`} key={n.slug}>
                <span className="card__media">
                  <img src={n.image} alt="" loading="lazy" />
                </span>
                <span className="card__body">
                  <span className="card__meta">
                    <span>{n.kind}</span>
                    <span className="sep">·</span>
                    <span>{n.date}</span>
                  </span>
                  <span className="card__title">{n.title}</span>
                  <span className="card__text">{n.standfirst}</span>
                  <span className="card__foot">{n.author}</span>
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
       
        eyebrow="A question on any of this"
        heading={
          <>
            These notes are general. Your matter <em className="brick">is not.</em>
          </>
        }
      >
        If something here touches a decision you are about to make, ask before you make it.
      </CtaBand>
    </>
  )
}

export function InsightDetail() {
  const { slug } = useParams()
  const note = insights.find((n) => n.slug === slug)
  const more = insights.filter((n) => n.slug !== slug).slice(0, 3)

  if (!note) return <NotFound />

  return (
    <>
      <PageHead
        crumb="All insights"
        crumbTo="/insights"
       
        eyebrow={note.kind}
        title={note.title}
        lede={note.standfirst}
        image={note.image}
      />

      <section className="section">
        <div className="shell">
          <Reveal className="article">
            <figure className="article__figure">
              <img src={note.image} alt="" />
            </figure>

            <p className="article__byline">
              <span>{note.author}</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>{note.date}</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>{note.kind}</span>
            </p>

            <p className="article__standfirst">{note.standfirst}</p>

            <div className="article__body">
              {note.body.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </div>

            <hr className="rule" style={{ margin: '2.5rem 0 1.5rem' }} />
            <p style={{ fontSize: '0.84rem', color: 'var(--ink-soft)' }}>
              This note describes the position as at {note.date} and is general information,
              not legal advice. Directives change. Ask us before you rely on it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--stone">
        <div className="shell">
          <Reveal className="section-head">
            <div>
              <Caption>More notes</Caption>
              <h2 className="display-md">Also from the practice.</h2>
            </div>
          </Reveal>
          <Reveal className="card-grid">
            {more.map((n) => (
              <Link className="card" to={`/insights/${n.slug}`} key={n.slug}>
                <span className="card__media">
                  <img src={n.image} alt="" loading="lazy" />
                </span>
                <span className="card__body">
                  <span className="card__meta">
                    <span>{n.kind}</span>
                    <span className="sep">·</span>
                    <span>{n.date}</span>
                  </span>
                  <span className="card__title">{n.title}</span>
                  <span className="card__foot">{n.author}</span>
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}
