import PageHead from '../components/PageHead'
import Reveal from '../components/Reveal'
import { Caption, CtaBand } from '../components/Layout'
import { careers, firm } from '../content'

export default function Careers() {
  return (
    <>
      <PageHead
        crumb="Careers"
       
        eyebrow="Join the firm"
        title={
          <>
            Nine advocates. Occasionally, <em className="gold">ten.</em>
          </>
        }
        lede="We hire rarely and slowly, and we keep people. If you want to argue in your first month rather than your third year, a firm this size is the place to do it."
        image="/img/meeting.jpg"
      />

      <section className="section">
        <div className="shell split">
          <Reveal>
            <Caption>What it is like here</Caption>
            <h2 className="display-lg" style={{ marginTop: '0.8rem' }}>
              You will be in front of the file, not behind it.
            </h2>
          </Reveal>
          <Reveal className="prose">
            <p>
              Associates here draft the submission that gets filed, not a memo that
              someone else turns into one. A partner edits it, sometimes heavily, and
              explains what changed. That is the training, and it is the only kind we
              believe in.
            </p>
            <p>
              The trade is that we are small, so there is no bench to hide on. Files are
              staffed thinly on purpose. If you are on a matter, you are the person who
              knows it.
            </p>
            <p>
              We pay at the top of the Addis market for our size, fund the LL.M of one
              associate every second year, and close the office for the week between
              Genna and the new year.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--stone">
        <div className="shell">
          <Reveal className="section-head">
            <div>
              <Caption>Open positions</Caption>
              <h2 className="display-lg">Three ways in.</h2>
            </div>
            <p className="lede">
              Send a CV, a transcript, and one piece of legal writing you drafted yourself.
              We read the writing first.
            </p>
          </Reveal>

          {careers.map((role) => (
            <Reveal className="role" key={role.title}>
              <div>
                <h3>{role.title}</h3>
                <span className="role__type">{role.type}</span>
              </div>
              <p>{role.body}</p>
              <a
                className="btn btn--dark-outline"
                href={`mailto:${firm.email}?subject=${encodeURIComponent(role.title)}`}
              >
                Apply <span className="btn-arrow">→</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--stone">
        <div className="shell split">
          <Reveal>
            <Caption>How to apply</Caption>
            <h2 className="display-lg" style={{ marginTop: '0.8rem' }}>
              What we read, and in what order.
            </h2>
          </Reveal>
          <Reveal as="ul" className="fact-list">
            <li>
              <span className="fact-key">
                First
              </span>
              <span>
                The writing sample. One piece, five pages at most, drafted by you and not
                edited by a supervisor. Tell us which parts were yours if it was a
                collaboration.
              </span>
            </li>
            <li>
              <span className="fact-key">
                Second
              </span>
              <span>
                The CV and transcript. We care about the LL.B result, and we care more
                about what you have actually filed or argued.
              </span>
            </li>
            <li>
              <span className="fact-key">
                Then
              </span>
              <span>
                Two conversations, both with partners, both about a real problem rather
                than a hypothetical. You will meet everyone before an offer.
              </span>
            </li>
          </Reveal>
        </div>
      </section>

      <CtaBand
       
        eyebrow="No position that fits"
        heading={
          <>
            Write anyway. We open roles <em className="brick">when the right person appears.</em>
          </>
        }
        action="Send an application"
      >
        Applications are read by a partner, and everyone gets an answer.
      </CtaBand>
    </>
  )
}
