import PageHead from '@/components/PageHead'
import Reveal from '@/components/Reveal'
import { Caption, CtaBand } from '@/components/Layout'
import { results, stats, testimonials } from '@/content'

export default function Results() {
  return (
    <>
      <PageHead
        crumb="Results"
        eyebrow="Selected outcomes"
        title={
          <>
            What the work has <em className="gold">produced.</em>
          </>
        }
        lede="A short list of outcomes across the practice. Client names are withheld, and no figures are published. The point of the list is the kind of problem, not the size of the number."
        image="/img/books.jpg"
      />

      <section className="section">
        <div className="shell">
          <Reveal style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <p className="disclaimer">
              Every matter turns on its own facts, its own record, and the tribunal in front
              of it. Nothing on this page suggests that a comparable result is available in
              your matter, and past outcomes do not guarantee a similar result.
            </p>
          </Reveal>

          <Reveal className="results-grid">
            {results.map((r) => (
              <article className="result" key={r.outcome}>
                <span className="result__area">{r.area}</span>
                <h2 className="result__outcome">{r.outcome}</h2>
                <p className="result__body">{r.body}</p>
                <p className="result__forum">{r.forum}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="strip">
        <div className="shell strip__grid">
          {stats.map((s) => (
            <div className="strip__item" key={s.label}>
              <span className="strip__value">{s.value}</span>
              <span className="strip__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--stone">
        <div className="shell">
          <Reveal className="section-head">
            <div>
              <Caption>In their words</Caption>
              <h2 className="display-lg">What clients say when asked.</h2>
            </div>
            <p className="lede">
              Published with permission, attributed by role rather than by name at the
              clients’ request.
            </p>
          </Reveal>
          <Reveal className="quotes">
            {testimonials.map((t) => (
              <div className="quote" key={t.name}>
                <blockquote>{t.quote}</blockquote>
                <div className="quote__attrib">
                  <strong>{t.name}</strong>
                  {t.detail}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Your matter"
        heading={
          <>
            Bring us the one that <em className="brick">is not going well.</em>
          </>
        }
      >
        Thirty minutes with the partner who would run it, before anyone quotes you a fee.
      </CtaBand>
    </>
  )
}
