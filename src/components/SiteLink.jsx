import { Link, useLocation } from 'react-router-dom'

// navLinks/footer links mix real routes ("/destinations") with in-page
// anchors ("#about"). A plain <a href="#about"> only works while already on
// "/", so anywhere else it needs to become a route change to "/#about"
// instead (ScrollToHash handles the actual scrolling once there).
export default function SiteLink({ href, children, className, onClick }) {
  const { pathname } = useLocation()

  if (href.startsWith('/')) {
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (pathname === '/') {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <Link to={`/${href}`} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}
