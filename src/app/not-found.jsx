import Link from 'next/link'
import PageHead from '@/components/PageHead'

export default function NotFound() {
  return (
    <>
      <PageHead
        crumb="Not found"
        eyebrow="Page not found"
        title={
          <>
            That page is not <em className="gold">here.</em>
          </>
        }
        lede="The link may be old, or the page may have moved. The practice areas and the people are the two things most visitors are looking for."
        image="/img/facade.jpg"
      />
      <section className="section">
        <div className="shell btn-row">
          <Link href="/practice" className="btn btn--green">
            Practice areas <span className="btn-arrow">→</span>
          </Link>
          <Link href="/team" className="btn btn--dark-outline">
            People
          </Link>
          <Link href="/contact" className="btn btn--dark-outline">
            Contact
          </Link>
        </div>
      </section>
    </>
  )
}
