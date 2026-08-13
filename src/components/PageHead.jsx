import Link from 'next/link'
import Image from 'next/image'
import { Caption } from './Layout'

export default function PageHead({ crumb, crumbTo, eyebrow, title, lede, image, imageForward = false }) {
  return (
    <section className={imageForward ? 'page-head page-head--image-forward' : 'page-head'}>
      {image ? (
        <>
          <div className="page-head__media">
            <Image src={image} alt="" fill sizes="100vw" preload />
          </div>
          <div className="page-head__wash" />
        </>
      ) : null}

      <div className="shell page-head__inner">
        <div>
          {crumbTo ? (
            <Link href={crumbTo} className="crumb">
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
