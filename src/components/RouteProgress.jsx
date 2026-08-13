import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Route feedback that costs nothing in time-to-content.
 *
 * Deliberately NOT a splash screen: no curtain, no artificial delay, nothing
 * that holds the first paint back. The bar is an overlay and the fade runs on
 * DOM that is already painted, so the page is interactive at the same moment
 * it would be without either.
 */
export function RouteProgress() {
  const { pathname } = useLocation()
  const [state, setState] = useState('idle') // idle | running | done
  const first = useRef(true)

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    setState('running')
    const done = setTimeout(() => setState('done'), 180)
    const reset = setTimeout(() => setState('idle'), 560)
    return () => {
      clearTimeout(done)
      clearTimeout(reset)
    }
  }, [pathname])

  return <div className={`route-progress is-${state}`} aria-hidden="true" />
}

/** Fades the page body in on route change. 200ms - felt, not waited on. */
export function RouteFade({ children }) {
  const { pathname } = useLocation()
  return (
    <div className="route-fade" key={pathname}>
      {children}
    </div>
  )
}
