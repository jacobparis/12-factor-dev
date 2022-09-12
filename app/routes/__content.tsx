import { Link, Outlet, useLocation } from "@remix-run/react"
import proseStyles from "~/prose.css"

export function links() {
  return [{ rel: "stylesheet", href: proseStyles }]
}
export default function LegalLayout() {
  return (
    <>
      <article className="flex min-h-screen flex-col">
        <div className="py-12 text-center text-6xl font-bold text-orange-900">
          <Link to="/">Twelve Factor Development</Link>
        </div>

        <Outlet />
      </article>
    </>
  )
}
