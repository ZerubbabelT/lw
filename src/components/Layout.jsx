'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RouteFade, RouteProgress } from './RouteProgress'
import { firm } from '../content'

/* Four items and one control. Everything a visitor might want but does
   not navigate by — sectors, the record, careers, the legal notice —
   sits either inside the What we do menu or in the footer. */
const NAV = [
  {
    label: 'About us',
    to: '/about',
  },
  {
    label: 'What we do',
    match: ['/practice', '/sectors', '/results'],
    items: [
      {
        to: '/practice',
        label: 'Practice areas',
        note: 'The eight areas of law we are retained for.',
      },
      {
        to: '/sectors',
        label: 'Sectors',
        note: 'Where our clients build, and how each one is licensed.',
      },
      {
        to: '/results',
        label: 'Selected results',
        note: 'Outcomes we can describe, with the forum they were won in.',
      },
    ],
  },
  { to: '/team', label: 'Teams' },
  { to: '/insights', label: 'Insights' },
]

/** The eyebrow that heads every section. */
export function Caption({ children }) {
  return (
    <p className="caption">
      <span className="caption__dot" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}

/** The one menu in the bar. Opens on hover or on click, and closes on
    Escape, on a click outside it, or as soon as the route changes. */
function NavMenu({ group, pathname }) {
  const [open, setOpen] = useState(false)
  const wrap = useRef(null)
  const isActive = group.match.some((p) => pathname.startsWith(p))

  useEffect(() => {
    if (!open) return undefined
    const onDown = (e) => {
      if (!wrap.current?.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div
      className={open ? 'nav-menu is-open' : 'nav-menu'}
      ref={wrap}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={isActive ? 'nav__link nav__link--menu is-active' : 'nav__link nav__link--menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {group.label}
        <span className="nav__chevron" aria-hidden="true" />
      </button>

      <div className="nav-menu__panel">
        {group.items.map((item) => (
          <Link className="nav-menu__item" href={item.to} key={item.to} onClick={() => setOpen(false)}>
            <span className="nav-menu__label">{item.label}</span>
            <span className="nav-menu__note">{item.note}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

function Masthead() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="masthead">
      <div className="shell">
        <div className="masthead__bar">
          <Link href="/" className="wordmark">
            <span className="seal" aria-hidden="true">K</span>
            <span className="wordmark__text">
              <span className="wordmark__name">Kebede</span>
              <span className="wordmark__sub">Advocates · Addis Ababa</span>
            </span>
          </Link>

          <nav className="nav" aria-label="Primary">
            {NAV.map((item) =>
              item.items ? (
                <NavMenu key={item.label} group={item} pathname={pathname} />
              ) : (
                <Link
                  key={item.to}
                  href={item.to}
                  className={pathname === item.to ? 'nav__link is-active' : 'nav__link'}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="masthead__end">
            <Link
              href="/contact"
              className={pathname === '/contact' ? 'masthead__contact is-active' : 'masthead__contact'}
            >
              Contact us
            </Link>
            <Link href="/contact" className="btn btn--ochre masthead__cta">
              Book a consultation
            </Link>

            <button
              type="button"
              className="nav-toggle"
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <span className={open ? 'nav-toggle__bars is-open' : 'nav-toggle__bars'} />
            </button>
          </div>
        </div>

        <nav className={open ? 'mobile-nav is-open' : 'mobile-nav'} aria-label="Primary, mobile">
          {NAV.map((item) =>
            item.items ? (
              <div className="mobile-nav__group" key={item.label}>
                <span className="mobile-nav__label">{item.label}</span>
                {item.items.map((sub) => (
                  <Link key={sub.to} href={sub.to} onClick={() => setOpen(false)}>
                    {sub.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={item.to} href={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ),
          )}
          <Link href="/contact" className="btn btn--ochre" onClick={() => setOpen(false)}>
            Book a consultation
          </Link>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <hr className="tibeb" />
      <div className="shell footer__inner">
        <div className="footer__grid">
          <div className="footer__col">
            <span className="wordmark__name" style={{ fontSize: '1.5rem' }}>
              Kebede
            </span>
            <p className="footer__blurb">
              Corporate, investment and dispute counsel in Addis Ababa since {firm.founded}.
              Nine advocates, admitted to the federal courts, working in Amharic and English.
            </p>
          </div>

          <div className="footer__col">
            <h4>Practice</h4>
            <ul>
              <li><Link href="/practice/foreign-investment">Foreign investment</Link></li>
              <li><Link href="/practice/mergers-acquisitions">Mergers &amp; acquisitions</Link></li>
              <li><Link href="/practice/mining-energy">Mining &amp; energy</Link></li>
              <li><Link href="/practice/banking-finance">Banking &amp; finance</Link></li>
              <li><Link href="/practice">All eight practices</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Firm</h4>
            <ul>
              <li><Link href="/about">The firm</Link></li>
              <li><Link href="/team">Advocates</Link></li>
              <li><Link href="/results">Results</Link></li>
              <li><Link href="/sectors">Sectors</Link></li>
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/legal">Privacy &amp; terms</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Office</h4>
            <ul>
              {firm.address.map((line) => (
                <li key={line}>{line}</li>
              ))}
              <li><a href={`tel:${firm.phoneRaw}`}>{firm.phone}</a></li>
              <li><a href={`mailto:${firm.email}`}>{firm.email}</a></li>
              <li style={{ marginTop: '0.35rem' }}>Mon–Fri, 8:30–17:30 (EAT)</li>
            </ul>
          </div>
        </div>

        <div className="footer__legal">
          <p>
            This site is published for general information and is not legal advice.
            Sending a message does not create an advocate–client relationship, and
            past outcomes do not guarantee a similar result. <Link href="/legal">Legal notice
            and privacy</Link>.
          </p>
          <p>© {new Date().getFullYear()} Kebede Advocates</p>
        </div>
      </div>
    </footer>
  )
}

export function CtaBand({ eyebrow = 'Next step', heading, children, action = 'Book a consultation' }) {
  return (
    <section className="cta-band">
      <div className="shell cta-band__inner">
        <div>
          <Caption>{eyebrow}</Caption>
          <h2>{heading}</h2>
          {children ? (
            <p className="lede" style={{ marginTop: '0.9rem' }}>
              {children}
            </p>
          ) : null}
        </div>
        <div className="btn-row">
          <Link href="/contact" className="btn btn--green">
            {action} <span className="btn-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Layout({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <RouteProgress />
      <Masthead key={pathname} />
      <main>
        <RouteFade>{children}</RouteFade>
      </main>
      <Footer />
      <a className="call-bar" href={`tel:${firm.phoneRaw}`}>
        Call the office · {firm.phone}
      </a>
    </>
  )
}
