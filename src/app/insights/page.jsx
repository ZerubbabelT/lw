import Link from 'next/link'
import Image from 'next/image'
import PageHead from '@/components/PageHead'
import Reveal from '@/components/Reveal'
import { Caption, CtaBand } from '@/components/Layout'
import { insights } from '@/content'

export default function InsightsIndex() {
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
            <Link href={`/insights/${lead.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
              <Image
                src={lead.image}
                alt=""
                width={1200}
                height={900}
                style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover' }}
              />
            </Link>
            <div>
              <Caption>{lead.kind}</Caption>
              <h2 className="display-lg">
                <Link href={`/insights/${lead.slug}`} style={{ textDecoration: 'none' }}>
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
                <Link href={`/insights/${lead.slug}`} className="link-underline brick">
                  Read the note <span className="btn-arrow">→</span>
                </Link>
              </div>
            </div>
          </Reveal>

          <hr className="rule" />

          <Reveal className="card-grid" style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
            {rest.map((n) => (
              <Link className="card" href={`/insights/${n.slug}`} key={n.slug}>
                <span className="card__media">
                  <Image
                    src={n.image}
                    alt=""
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                  />
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
