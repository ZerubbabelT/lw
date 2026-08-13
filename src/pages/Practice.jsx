import { Link, useParams } from 'react-router-dom'
import PageHead from '../components/PageHead'
import Reveal from '../components/Reveal'
import { Caption, CtaBand } from '../components/Layout'
import { practices } from '../content'
import NotFound from './NotFound'

export function PracticeIndex() {
  return (
    <>
      <PageHead
        crumb="Practice"
       
        eyebrow="What we handle"
        title={
          <>
            Eight practices, one <em className="gold">bench.</em>
          </>
        }
        lede="We advise on transactions and we argue disputes. We do not do conveyancing, family matters, or criminal defence. When a call falls outside these eight areas we say so and give you two names."
        image="/img/facade.jpg"
      />

      <section className="section">
        <div className="shell">
          {practices.map((p) => (
            <Reveal className="detail-block" key={p.slug}>
              <div>
                <Caption>Practice</Caption>
                <h2>{p.name}</h2>
                <div style={{ marginTop: '1.4rem' }}>
                  <Link to={`/practice/${p.slug}`} className="link-underline brick">
                    Read the detail <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
              <div className="prose">
                <p>{p.body}</p>
                <ul className="tag-list">
                  {p.scope.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
       
        eyebrow="Not sure where it fits"
        heading={
          <>
            Describe the problem. We will tell you <em className="brick">whose it is.</em>
          </>
        }
      >
        If the matter belongs with another firm, you will hear that on the first call.
      </CtaBand>
    </>
  )
}

export function PracticeDetail() {
  const { slug } = useParams()
  const practice = practices.find((p) => p.slug === slug)
  const others = practices.filter((p) => p.slug !== slug).slice(0, 4)

  if (!practice) return <NotFound />

  return (
    <>
      <PageHead
        crumb="All practices"
        crumbTo="/practice"
       
        eyebrow="Practice"
        title={practice.name}
        lede={practice.short}
        image={practice.image}
        imageForward
      />

      <section className="section">
        <div className="shell split">
          <Reveal>
            <Caption>Scope</Caption>
            <ul className="tag-list" style={{ marginTop: '0.6rem' }}>
              {practice.scope.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="prose">
            <p style={{ fontSize: '1.2rem', color: 'var(--ink)', lineHeight: 1.55 }}>
              {practice.body}
            </p>

            <h3>Representative matters</h3>
            <ul className="matter-list">
              {practice.matters.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <p style={{ fontSize: '0.82rem', marginTop: '1.2rem' }}>
              Client names are withheld. Past outcomes do not guarantee a similar result.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--stone">
        <div className="shell">
          <Reveal className="section-head">
            <div>
              <Caption>Related</Caption>
              <h2 className="display-md">Matters rarely arrive alone.</h2>
            </div>
          </Reveal>
          <Reveal className="practice-list">
            {others.map((p, i) => (
              <Link className="practice-row" to={`/practice/${p.slug}`} key={p.slug}>
                <span className="practice-row__mark">{i + 1}</span>
                <span>
                  <span className="practice-row__title" style={{ display: 'block', marginTop: '0.2rem' }}>
                    {p.name}
                  </span>
                </span>
                <span className="practice-row__desc">{p.short}</span>
                <span className="practice-row__go">Read on →</span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
       
        eyebrow="This practice"
        heading={
          <>
            Bring the file. We will read it <em className="brick">before we quote.</em>
          </>
        }
      >
        Conflicts cleared within a day, and a meeting with the partner who would run the
        matter.
      </CtaBand>
    </>
  )
}
