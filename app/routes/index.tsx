import type { LoaderFunction, MetaFunction } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"
import ReactDOMServer from "react-dom/server"
import proseStyles from "~/prose.css"

export function links() {
  return [{ rel: "stylesheet", href: proseStyles }]
}

export const meta: MetaFunction = () => {
  return {
    title: "Continuous Development",
  }
}

export const loader: LoaderFunction = async ({ params }) => {
  const file = (await import("../../public/index.md").then(
    (mod) => mod.default
  )) as () => React.ReactElement

  return ReactDOMServer.renderToString(file())
}

export default function LegalLayout() {
  const __html = useLoaderData()
  return (
    <>
      <article>
        <div className="py-12 text-center text-6xl font-bold text-orange-900">
          <Link to="/">Continuous Development</Link>
        </div>

        <div className="prose prose-orange mx-auto my-6 max-w-prose px-4 pb-12 text-gray-700">
          <div dangerouslySetInnerHTML={{ __html }} />
        </div>

        <div className="border-t-[1rem] border-orange-400 bg-orange-100 py-12 px-4">
          <h2 className="mb-12 text-center text-5xl font-bold text-orange-900 ">
            The Nine(?) Tenets
          </h2>

          <p className="mx-auto mb-4 max-w-prose opacity-40">
            Authors note: these principles represent the north star of
            development experience that Gitpod should strive to achieve. We
            should not expect to update this list as Gitpod releases new
            features, nor should we hold this list back from capacities that
            Gitpod does not currently lead.
          </p>

          <nav className="mx-auto my-6 max-w-prose ">
            <ul>
              <li className="mb-4">
                <p>
                  <a
                    href="dev-prod-parity"
                    className="text-xl font-bold decoration-dashed hover:text-orange-900 hover:underline"
                  >
                    I. Dev/prod parity
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  Keep development and production as similar as possible
                </p>
              </li>

              <li className="mb-4">
                <p>
                  <a
                    href="parallel-development"
                    className="text-xl font-bold decoration-dashed hover:text-orange-900 hover:underline"
                  >
                    II. Parallel Development
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  Run multiple workspaces in parallel
                </p>
              </li>

              <li className="mb-4">
                <p>
                  <a
                    href="uniformity"
                    className="text-xl font-bold decoration-dashed hover:text-orange-900 hover:underline"
                  >
                    III. Uniformity
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  Normalize the developer experience between developers while
                  allowing customization
                </p>
              </li>

              <li className="mb-4">
                <p>
                  <a
                    href="continuous"
                    className="text-xl font-bold decoration-dashed hover:text-orange-900 hover:underline"
                  >
                    IV. Continuous
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  Prebuild new workspaces during continuous integration
                </p>
              </li>

              <li className="mb-4">
                <p>
                  <a
                    href="codebase"
                    className="text-xl font-bold decoration-dashed hover:text-orange-900 hover:underline"
                  >
                    V. Codebase
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  Make changes to one repository at a time
                </p>
              </li>

              <li className="mb-4">
                <p>
                  <a
                    href="disposability"
                    className="text-xl font-bold decoration-dashed hover:text-orange-900 hover:underline"
                  >
                    VI. Disposability
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  Minimize the cost of destroying and creating new development
                  environments
                </p>
              </li>

              <li className="mb-4">
                <p>
                  <a
                    href="dependencies"
                    className="text-xl font-bold decoration-dashed hover:text-orange-900 hover:underline"
                  >
                    VII. Dependencies
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  Explicitly declare and isolate dependencies
                </p>
              </li>

              <li className="mb-4">
                <p>
                  <a
                    href="backing-services"
                    className="text-xl font-bold decoration-dashed hover:text-orange-900 hover:underline"
                  >
                    VIII. Backing services
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  Provision backing services within the workspace
                </p>
              </li>

              <li className="mb-4">
                <p>
                  <a
                    href="logs"
                    className="text-xl font-bold decoration-dashed hover:text-orange-900 hover:underline"
                  >
                    IX. Logs
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  Give developers visibility into the environment
                </p>
              </li>
            </ul>
          </nav>

          <div className="mx-auto max-w-prose py-12 text-gray-700">
            <Link
              reloadDocument
              to="/index.md"
              className="decoration-dashed hover:text-orange-900 hover:underline"
            >
              View printable version
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
