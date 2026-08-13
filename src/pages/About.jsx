import PageHead from '../components/PageHead'
import Reveal from '../components/Reveal'
import { Caption, CtaBand } from '../components/Layout'
import { commitments, stats, testimonials } from '../content'

export default function About() {
  return (
    <>
      <PageHead
        crumb="The firm"
       
        eyebrow="Since 2006"
        title={
          <>
            Small on <em className="gold">purpose.</em>
          </>
        }
        lede="Solomon Kebede left the Ministry of Trade and Industry in 2006 with one complaint about the private firms he had dealt with from the other side of the desk: the investor never spoke to the lawyer who understood the file."
        image="/img/addis-street.jpg"
      />

      <section className="section">
        <div className="shell split">
          <Reveal>
            <Caption>Our history</Caption>
            <h2 className="display-lg" style={{ marginTop: '0.8rem' }}>
              Twenty years, one floor, nine advocates.
            </h2>
          </Reveal>
          <Reveal className="prose">
            <p>
              The firm opened above a bank on Africa Avenue with two lawyers and a shared
              telephone. It has grown to nine, and we have turned down the mergers that
              would have made us a department inside a regional network. Staying this size
              is what lets a partner read every filing that leaves the building.
            </p>
            <p>
              Our work divides roughly in half. On one side, investors coming into Ethiopia:
              permits, structures, joint ventures, and the sequence of approvals that has
              to happen in the right order. On the other, Ethiopian companies with a
              problem: an assessment, a termination, a supplier who has stopped performing.
              The two halves inform each other more than they look like they should.
            </p>
            <h3>What we do not do</h3>
            <p>
              We do not handle criminal defence, family matters, immigration outside the
              work permit context, or conveyancing. When a call falls outside our eight
              practice areas we spend ten minutes on it anyway and give you two names of
              people who do it well.
            </p>
            <h3>Working in two languages</h3>
            <p>
              Every advocate here works in Amharic and English, and three also work in
              Oromiffa. That is not a courtesy. The proclamation is authoritative in
              Amharic, the directives are issued in Amharic, and the officer reviewing your
              file will read your submission in Amharic. Your board will read the advice in
              English. We are responsible for the fact that both say the same thing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--stone">
        <div className="shell">
          <Reveal className="section-head">
            <div>
              <Caption>How we work</Caption>
              <h2 className="display-lg">Four commitments.</h2>
            </div>
            <p className="lede">
              These are printed on the wall of the meeting room, and clients are invited to
              hold us to them.
            </p>
          </Reveal>

          <Reveal as="ul" className="fact-list">
            {commitments.map((c) => (
              <li key={c.key}>
                <span className="fact-key">
                  {c.key}
                </span>
                <span>{c.text}</span>
              </li>
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
       
        eyebrow="Fee arrangements"
        heading={
          <>
            Ask what it <em className="brick">costs</em> before you retain anyone.
          </>
        }
      >
        Fixed fees for licensing and registration work, hourly or capped for anything
        contentious, and a written basis before the first hour is recorded.
      </CtaBand>
    </>
  )
}
