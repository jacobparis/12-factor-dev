import { Link, Outlet, useLocation } from "@remix-run/react"
import proseStyles from "~/prose.css"

export function links() {
  return [{ rel: "stylesheet", href: proseStyles }]
}
export default function LegalLayout() {
  return (
    <>
      <article className="flex min-h-screen flex-col">
        <div className="bg-black py-8 text-center text-5xl text-gray-100">
          <Link to="/">Twelve Factor Development</Link>
        </div>

        <Outlet />
      </article>
    </>
  )
}
