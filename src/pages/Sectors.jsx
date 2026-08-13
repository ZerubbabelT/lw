import PageHead from '../components/PageHead'
import Reveal from '../components/Reveal'
import { Caption, CtaBand } from '../components/Layout'
import { sectors } from '../content'

export default function Sectors() {
  return (
    <>
      <PageHead
        crumb="Sectors"
       
        eyebrow="Where our clients build"
        title={
          <>
            Six sectors we know <em className="gold">from the inside.</em>
          </>
        }
        lede="Ethiopian regulation is sector-specific in a way that surprises investors. The same share purchase is licensed differently depending on what the company does, and by a different ministry."
        image="/img/construction.jpg"
      />

      <section className="section">
        <div className="shell">
          {sectors.map((s, i) => (
            <Reveal
              className="split"
              key={s.name}
              style={{
                paddingBlock: 'clamp(2rem, 4vw, 3.2rem)',
                borderBottom: i === sectors.length - 1 ? 'none' : '1px solid var(--paper-line)',
              }}
            >
              <div>
                <img
                  src={s.image}
                  alt=""
                  loading="lazy"
                  style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover' }}
                />
              </div>
              <div className="prose">
                <Caption>Sector</Caption>
                <h2 className="display-md" style={{ marginBottom: '0.9rem' }}>
                  {s.name}
                </h2>
                <p>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
       
        eyebrow="Your sector"
        heading={
          <>
            Not on this list? Ask <em className="brick">anyway.</em>
          </>
        }
      >
        These are the six we see most. The regulatory method is the same whichever ministry
        owns your licence.
      </CtaBand>
    </>
  )
}
