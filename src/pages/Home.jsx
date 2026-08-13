import { Link } from 'react-router-dom'
import { PersonCard } from './Team'
import Reveal from '../components/Reveal'
import { Caption, CtaBand } from '../components/Layout'
import {
  attorneys,
  practices,
  results,
  whyUs,
} from '../content'

/* Keep one compact proof strip in the first viewport. These figures establish
   experience and capacity without making visitors pass through a second stats band. */
const heroProof = [
  { value: '20+', label: 'Years advising investors' },
  { value: '9', label: 'Advocates admitted to federal courts' },
  { value: '31', label: 'Countries our clients invest from' },
]

function Hero() {
  return (
    <section className="hero">
      <div className="hero__frame">
        <div className="hero__media">
          <img src="/img/hero-addis.jpg" alt="The Addis Ababa skyline above the eucalyptus" />
        </div>
        <div className="hero__wash" />

        <div className="shell hero__inner">
          <div className="hero__col">
            <span className="hero__eyebrow reveal reveal-1">Advocates · Addis Ababa</span>
            <h1 className="reveal reveal-2">
              The law in two languages,
              <br />
              held to <em className="gold">one standard.</em>
            </h1>
            <p className="lede lede-on-dark reveal reveal-3">
              Corporate, investment and dispute counsel in Addis Ababa for investors,
              lenders and Ethiopian companies.
            </p>
            <div className="btn-row hero__actions reveal reveal-4">
              <Link to="/contact" className="btn btn--ochre">
                Book a consultation <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>

          {/* the proof rests in the foot of the card, where the curve is */}
          <div className="hero__proof reveal reveal-4">
            {heroProof.map((p) => (
              <div className="hero__proof-item" key={p.label}>
                <span className="hero__proof-value">{p.value}</span>
                <span className="hero__proof-label">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Practices() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal className="section-head">
          <div>
            <Caption>What we handle</Caption>
            <h2 className="display-lg">
              Eight practices, one <em className="brick">bench.</em>
            </h2>
          </div>
          <p className="lede">
            No file is passed to a department you have not met. The partner in the first
            meeting is the partner who signs the advice.
          </p>
        </Reveal>

        {/* Lead with the three areas visitors ask for most; the index carries the full list. */}
        <Reveal className="practices-grid">
          {practices.slice(0, 3).map((p) => (
            <Link className="card" to={`/practice/${p.slug}`} key={p.slug}>
              <span className="card__media">
                <img src={p.image} alt="" loading="lazy" />
              </span>
              <span className="card__body">
                <span className="card__title">{p.name}</span>
                <span className="card__text">{p.short}</span>
                <span className="card__foot">Read on →</span>
              </span>
            </Link>
          ))}
        </Reveal>

        <div style={{ marginTop: '2.25rem' }}>
          <Link to="/practice" className="btn btn--dark-outline">
            View all practice areas <span className="btn-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section className="section section--stone">
      <div className="shell">
        <Reveal className="section-head">
          <div>
            <Caption>Why this firm</Caption>
            <h2 className="display-lg">
              What you actually get by <em className="gold">hiring us.</em>
            </h2>
          </div>
          <p className="lede">
            Not awards. The things that change how your matter is run, and that you can hold
            us to from the first meeting.
          </p>
        </Reveal>

        <Reveal className="why">
          {whyUs.slice(0, 3).map((w) => (
            <div className="why__item" key={w.title}>
              <span className="why__mark">{w.mark}</span>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

function ResultsPreview() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal className="section-head">
          <div>
            <Caption>Selected outcomes</Caption>
            <h2 className="display-lg">A short record.</h2>
          </div>
          <p className="lede">
            Recent examples of licensing, contentious and transactional work handled by
            the firm.
          </p>
        </Reveal>

        <Reveal className="results-grid">
          {results.slice(0, 3).map((r) => (
            <article className="result" key={r.outcome}>
              <span className="result__area">{r.area}</span>
              <h3 className="result__outcome">{r.outcome}</h3>
              <p className="result__body">{r.body}</p>
              <p className="result__forum">{r.forum}</p>
            </article>
          ))}
        </Reveal>

        <p className="disclaimer">
          Every matter turns on its own facts. Past outcomes do not guarantee a similar result.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link to="/results" className="link-underline brick">
            All selected results <span className="btn-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function People() {
  return (
    <section className="section section--stone">
      <div className="shell">
        <Reveal className="section-head">
          <div>
            <Caption>The bench</Caption>
            <h2 className="display-lg">Who will handle your file.</h2>
          </div>
          <p className="lede">
            Six partners, two senior associates, one associate. Every matter is staffed by
            a partner and no more than two others.
          </p>
        </Reveal>

        <Reveal className="people-grid">
          {attorneys.slice(0, 4).map((a) => (
            <PersonCard person={a} key={a.slug} />
          ))}
        </Reveal>

        <div style={{ marginTop: '2.25rem' }}>
          <Link to="/team" className="link-underline brick">
            All nine advocates <span className="btn-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Practices />
      <WhyUs />
      <ResultsPreview />
      <People />
      <CtaBand
       
        eyebrow="First conversation"
        heading={
          <>
            Tell us the deadline. We will tell you <em className="brick">where you stand.</em>
          </>
        }
      >
        Bring the permit, contract or notice the matter rests on. We will clear conflicts,
        meet before quoting, and put the scope and fee basis in writing.
      </CtaBand>
    </>
  )
}
