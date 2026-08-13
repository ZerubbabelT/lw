import Link from 'next/link'
import PageHead from '@/components/PageHead'
import Reveal from '@/components/Reveal'
import { Caption, CtaBand } from '@/components/Layout'
import { practices } from '@/content'

export default function PracticeIndex() {
  return (
    <>
      <PageHead
        crumb="Practice"
        eyebrow="What we handle"
        title={
          <>
            Eight practices, one <em className="gold">bench.</em>
          </>
        }
        lede="We advise on transactions and we argue disputes. We do not do conveyancing, family matters, or criminal defence. When a call falls outside these eight areas we say so and give you two names."
        image="/img/facade.jpg"
      />

      <section className="section">
        <div className="shell">
          {practices.map((p) => (
            <Reveal className="detail-block" key={p.slug}>
              <div>
                <Caption>Practice</Caption>
                <h2>{p.name}</h2>
                <div style={{ marginTop: '1.4rem' }}>
                  <Link href={`/practice/${p.slug}`} className="link-underline brick">
                    Read the detail <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
              <div className="prose">
                <p>{p.body}</p>
                <ul className="tag-list">
                  {p.scope.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Not sure where it fits"
        heading={
          <>
            Describe the problem. We will tell you <em className="brick">whose it is.</em>
          </>
        }
      >
        If the matter belongs with another firm, you will hear that on the first call.
      </CtaBand>
    </>
  )
}
