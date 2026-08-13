import { notFound } from 'next/navigation'
import Link from 'next/link'
import PageHead from '@/components/PageHead'
import Reveal from '@/components/Reveal'
import { Caption, CtaBand } from '@/components/Layout'
import { practices } from '@/content'

export function generateStaticParams() {
  return practices.map((p) => ({ slug: p.slug }))
}

export default async function PracticeDetailPage({ params }) {
  const { slug } = await params
  const practice = practices.find((p) => p.slug === slug)
  if (!practice) notFound()
  const others = practices.filter((p) => p.slug !== slug).slice(0, 4)
  return <PracticeDetail practice={practice} others={others} />
}

function PracticeDetail({ practice, others }) {
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
              <Link className="practice-row" href={`/practice/${p.slug}`} key={p.slug}>
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
