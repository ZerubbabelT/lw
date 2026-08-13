import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import PageHead from '@/components/PageHead'
import Reveal from '@/components/Reveal'
import { Caption } from '@/components/Layout'
import { insights } from '@/content'

export function generateStaticParams() {
  return insights.map((n) => ({ slug: n.slug }))
}

export default async function InsightDetailPage({ params }) {
  const { slug } = await params
  const note = insights.find((n) => n.slug === slug)
  if (!note) notFound()
  const more = insights.filter((n) => n.slug !== slug).slice(0, 3)
  return <InsightDetail note={note} more={more} />
}

function InsightDetail({ note, more }) {
  return (
    <>
      <PageHead
        crumb="All insights"
        crumbTo="/insights"
        eyebrow={note.kind}
        title={note.title}
        lede={note.standfirst}
        image={note.image}
      />

      <section className="section">
        <div className="shell">
          <Reveal className="article">
            <figure className="article__figure">
              <Image
                src={note.image}
                alt=""
                width={1400}
                height={600}
                sizes="(max-width: 900px) 100vw, 900px"
              />
            </figure>

            <p className="article__byline">
              <span>{note.author}</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>{note.date}</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>{note.kind}</span>
            </p>

            <p className="article__standfirst">{note.standfirst}</p>

            <div className="article__body">
              {note.body.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </div>

            <hr className="rule" style={{ margin: '2.5rem 0 1.5rem' }} />
            <p style={{ fontSize: '0.84rem', color: 'var(--ink-soft)' }}>
              This note describes the position as at {note.date} and is general information,
              not legal advice. Directives change. Ask us before you rely on it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--stone">
        <div className="shell">
          <Reveal className="section-head">
            <div>
              <Caption>More notes</Caption>
              <h2 className="display-md">Also from the practice.</h2>
            </div>
          </Reveal>
          <Reveal className="card-grid">
            {more.map((n) => (
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
                  <span className="card__foot">{n.author}</span>
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}
