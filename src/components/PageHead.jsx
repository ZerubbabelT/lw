import { Link } from 'react-router-dom'
import { Caption } from './Layout'

export default function PageHead({ crumb, crumbTo, am, eyebrow, title, lede, image, imageForward = false }) {
  return (
    <section className={imageForward ? 'page-head page-head--image-forward' : 'page-head'}>
      {image ? (
        <>
          <div className="page-head__media">
            <img src={image} alt="" />
          </div>
          <div className="page-head__wash" />
        </>
      ) : null}

      <div className="shell page-head__inner">
        <div>
          {crumbTo ? (
            <Link to={crumbTo} className="crumb">
              ← {crumb}
            </Link>
          ) : (
            <span className="crumb">{crumb}</span>
          )}
          {eyebrow ? <Caption>{eyebrow}</Caption> : null}
          <h1>{title}</h1>
        </div>
        {lede ? <p className="lede lede-on-dark">{lede}</p> : null}
      </div>
      <hr className="tibeb" />
    </section>
  )
}
