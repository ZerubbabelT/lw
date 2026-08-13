import { useState } from 'react'
import PageHead from '../components/PageHead'
import Reveal from '../components/Reveal'
import { Caption } from '../components/Layout'
import { firm, practices } from '../content'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    // Frontend only: nothing is transmitted. Wire this to intake when a backend exists.
    setSent(true)
    event.target.reset()
  }

  return (
    <>
      <PageHead
        crumb="Contact"
       
        eyebrow="New matter"
        title={
          <>
            Tell us the deadline <em className="gold">first.</em>
          </>
        }
        lede="Conflicts are cleared within one business day. You then meet the partner who would run the matter before anyone quotes a fee."
        image="/img/addis-street.jpg"
      />

      <section className="section">
        <div className="shell">
          {/* the three things people arrive wanting, before any form */}
          <Reveal className="contact-actions">
            <a className="contact-action" href={`tel:${firm.phoneRaw}`}>
              <span className="contact-action__label">Call the office</span>
              <span className="contact-action__value">{firm.phone}</span>
              <span className="contact-action__note">Mon–Fri, 8:30–17:30 EAT</span>
            </a>
            <a className="contact-action" href={`mailto:${firm.email}`}>
              <span className="contact-action__label">Email new matters</span>
              <span className="contact-action__value">{firm.email}</span>
              <span className="contact-action__note">Answered within one business day</span>
            </a>
            <a
              className="contact-action"
              href="https://www.openstreetmap.org/?mlat=9.0102&mlon=38.7869#map=17/9.0102/38.7869"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-action__label">Visit us</span>
              <span className="contact-action__value">Africa Avenue</span>
              <span className="contact-action__note">Dembel City Center, 9th floor</span>
            </a>
          </Reveal>
        </div>

        <div className="shell contact-grid">
          <Reveal>
            <Caption>Enquiry form</Caption>
            <h2 className="display-md" style={{ margin: '0.4rem 0 1.6rem' }}>
              What happened, and what is due when.
            </h2>

            <form className="form-grid" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" required placeholder="Abebe Girma" />
              </div>

              <div className="field">
                <label htmlFor="org">Company or organisation</label>
                <input id="org" name="org" type="text" placeholder="Optional" />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" />
              </div>

              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="+251 91 234 5678" />
              </div>

              <div className="field">
                <label htmlFor="matter">Type of matter</label>
                <select id="matter" name="matter" defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  {practices.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name}
                    </option>
                  ))}
                  <option value="other">Something else</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="deadline">Next deadline, if any</label>
                <input id="deadline" name="deadline" type="date" />
              </div>

              <div className="field field--full">
                <label htmlFor="summary">What is the matter about?</label>
                <textarea
                  id="summary"
                  name="summary"
                  required
                  placeholder="A few sentences is enough. Please do not send confidential documents until we have confirmed there is no conflict."
                />
              </div>

              {sent ? (
                <p className="form-status" role="status">
                  Received. A partner will reply within one business day.
                </p>
              ) : null}

              <div className="field field--full">
                <div className="btn-row" style={{ alignItems: 'center', gap: '1.5rem' }}>
                  <button type="submit" className="btn btn--ochre">
                    Send enquiry <span className="btn-arrow">→</span>
                  </button>
                  <p className="form-note">
                    Sending this form does not create an advocate–client relationship and
                    does not make your message confidential.
                  </p>
                </div>
              </div>
            </form>
          </Reveal>

          <Reveal>
            <Caption>Office</Caption>

            <div className="office-card" style={{ marginTop: '0.4rem' }}>
              <h3>Addis Ababa</h3>
              <address>
                {firm.address.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
                <br />
                <a href={`tel:${firm.phoneRaw}`}>{firm.phone}</a>
                <br />
                <a href={`mailto:${firm.email}`}>{firm.email}</a>
              </address>
            </div>

            <div className="office-card">
              <h3>Hours</h3>
              <address>
                Monday to Friday, 2:30 – 11:30 (8:30 a.m. – 5:30 p.m.)
                <br />
                East Africa Time, UTC+3
                <br />
                <br />
                For injunctions and interim relief outside these hours, call the main line
                and follow the prompt for urgent matters.
              </address>
            </div>

            <div className="map-frame">
              <iframe
                title="Map showing the office on Africa Avenue, Addis Ababa"
                loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=38.7789%2C9.0052%2C38.7949%2C9.0152&layer=mapnik&marker=9.0102%2C38.7869"
              />
            </div>

            <div className="office-card">
              <h3>Referring counsel</h3>
              <address>
                We accept referrals from firms outside Ethiopia and return the matter when
                the local assignment ends. Ask for Solomon Kebede.
              </address>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
