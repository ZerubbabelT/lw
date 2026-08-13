import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead'

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
          <Link to="/practice" className="btn btn--green">
            Practice areas <span className="btn-arrow">→</span>
          </Link>
          <Link to="/team" className="btn btn--dark-outline">
            People
          </Link>
          <Link to="/contact" className="btn btn--dark-outline">
            Contact
          </Link>
        </div>
      </section>
    </>
  )
}
