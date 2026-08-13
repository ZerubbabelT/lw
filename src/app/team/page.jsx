import Image from 'next/image'
import PageHead from '@/components/PageHead'
import Reveal from '@/components/Reveal'
import { Caption, CtaBand } from '@/components/Layout'
import { PersonCard, PersonContactLinks } from '@/components/PersonCard'
import { attorneys } from '@/content'

function GraduationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 9l9-4 9 4-9 4-9-4Z" />
      <path d="M7 11v4.2c0 1.5 2.7 3.3 5 3.3s5-1.8 5-3.3V11" />
      <path d="M21 9v4.4" />
    </svg>
  )
}

function ScalesIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.5v16" />
      <path d="M5.5 7h13" />
      <path d="M5.5 7l-2.6 5.6a3 3 0 0 0 5.2 0L5.5 7Z" />
      <path d="M18.5 7l-2.6 5.6a3 3 0 0 0 5.2 0L18.5 7Z" />
      <path d="M8.5 20.5h7" />
    </svg>
  )
}

/* the principal, carried above the grid: bigger photograph, a longer
   introduction, and the credentials broken out — the rest of the bench
   keeps the plain card below */
function LeadPartner({ person }) {
  return (
    <section className="section section--tight">
      <div className="shell">
        <Reveal className="lead-partner">
          <div className="lead-partner__media">
            <Image
              src={person.photo}
              alt={person.name}
              width={900}
              height={1125}
              sizes="(max-width: 900px) 20rem, 40vw"
            />
            <PersonContactLinks person={person} />
          </div>

          <div className="lead-partner__body">
            <Caption>Firm leadership</Caption>
            <h2 className="lead-partner__name">{person.name}</h2>
            <span className="lead-partner__role">{person.role}</span>

            <p className="lead-partner__para">{person.intro}</p>

            <dl className="lead-creds">
              <div className="lead-cred">
                <span className="lead-cred__icon" aria-hidden="true">
                  <GraduationIcon />
                </span>
                <div className="lead-cred__text">
                  <dt>Education</dt>
                  <dd>{person.edu}</dd>
                </div>
              </div>
              <div className="lead-cred">
                <span className="lead-cred__icon" aria-hidden="true">
                  <ScalesIcon />
                </span>
                <div className="lead-cred__text">
                  <dt>Admitted</dt>
                  <dd>{person.bar}</dd>
                </div>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function TeamIndex() {
  const lead = attorneys.find((a) => a.lead)
  const bench = attorneys.filter((a) => !a.lead)

  return (
    <>
      <PageHead
        crumb="People"
        eyebrow="The bench"
        title={
          <>
            Nine advocates, <em className="gold">one floor.</em>
          </>
        }
        lede="Six partners, two senior associates, one associate. We have never opened a second office, because a partner reading every filing that leaves the building is the whole point of the firm."
        image="/img/meeting.jpg"
      />

      {lead ? <LeadPartner person={lead} /> : null}

      <section className="section section--stone">
        <div className="shell">
          <Reveal className="section-head">
            <div>
              <Caption>The bench</Caption>
              <h2 className="display-lg">
                The rest of <em className="gold">the bench.</em>
              </h2>
            </div>
            <p className="lede">
              Specialists, staffed together. Every matter is run by a partner and no more
              than two others, whichever of them you call first.
            </p>
          </Reveal>

          <Reveal className="people-grid">
            {bench.map((a) => (
              <PersonCard person={a} key={a.slug} />
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Direct line"
        heading={
          <>
            Ask for an advocate <em className="brick">by name.</em>
          </>
        }
        action="Start a new matter"
      >
        Tell us who you would like to speak with and what the matter concerns. New matter
        enquiries are answered within one business day.
      </CtaBand>
    </>
  )
}
