import type { LoaderFunction, MetaFunction } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"
import ReactDOMServer from "react-dom/server"
import proseStyles from "~/prose.css"

export function links() {
  return [{ rel: "stylesheet", href: proseStyles }]
}

export const meta: MetaFunction = () => {
  return {
    title: "Twelve-Factor Development",
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
        <div className="bg-gray-900 py-12 text-center text-5xl text-gray-100">
          <Link to="/">Twelve-Factor Development</Link>
        </div>

        <div className="prose prose-violet mx-auto my-6 max-w-prose px-4 pb-12 text-gray-700">
          <div dangerouslySetInnerHTML={{ __html }} />
        </div>

        <div className="border-t-[1rem] border-gray-400 bg-gray-200 py-12 px-4">
          <h2 className="text-bold text-center text-3xl">The Twelve Factors</h2>

          <nav className="mx-auto my-6 max-w-prose ">
            <ul>
              <li className="mb-4">
                <p>
                  <a
                    href="codebase"
                    className="text-xl font-bold decoration-dashed hover:text-violet-900 hover:underline"
                  >
                    I. Codebase
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  One codebase tracked in revision control, many deploys
                </p>
              </li>

              <li className="mb-4">
                <p>
                  <a
                    href="dependencies"
                    className="text-xl font-bold decoration-dashed hover:text-violet-900 hover:underline"
                  >
                    II. Dependencies
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  Explicitly declare and isolate dependencies
                </p>
              </li>

              <li className="mb-4">
                <p>
                  <a
                    href="config"
                    className="text-xl font-bold decoration-dashed hover:text-violet-900 hover:underline"
                  >
                    III. Config
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  Store config in the environment
                </p>
              </li>

              <li className="mb-4">
                <p>
                  <a
                    href="backing-services"
                    className="text-xl font-bold decoration-dashed hover:text-violet-900 hover:underline"
                  >
                    IV. Backing services
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  Treat backing services as attached resources
                </p>
              </li>

              <li className="mb-4">
                <p>
                  <a
                    href="continuous"
                    className="text-xl font-bold decoration-dashed hover:text-violet-900 hover:underline"
                  >
                    V. Continuous
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  Prebuild new workspaces during continuous integration
                </p>
              </li>

              <li className="mb-4">
                <p>
                  <a
                    href="uniformity"
                    className="text-xl font-bold decoration-dashed hover:text-violet-900 hover:underline"
                  >
                    VI. Uniformity
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
                    href="port-binding"
                    className="text-xl font-bold decoration-dashed hover:text-violet-900 hover:underline"
                  >
                    VII. Port binding
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  Bind service ports for public and private access
                </p>
              </li>

              <li className="mb-4">
                <p>
                  <a
                    href="parallel-development"
                    className="text-xl font-bold decoration-dashed hover:text-violet-900 hover:underline"
                  >
                    VIII. Parallel Development
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  Run multiple workspaces in parallel
                </p>
              </li>

              <li className="mb-4">
                <p>
                  <a
                    href="disposability"
                    className="text-xl font-bold decoration-dashed hover:text-violet-900 hover:underline"
                  >
                    IX. Disposability
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
                    href="dev-prod-parity"
                    className="text-xl font-bold decoration-dashed hover:text-violet-900 hover:underline"
                  >
                    X. Dev/prod parity
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  Keep development and production as similar as possible
                </p>
              </li>

              <li className="mb-4">
                <p>
                  <a
                    href="logs"
                    className="text-xl font-bold decoration-dashed hover:text-violet-900 hover:underline"
                  >
                    XI. Logs
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  Show logs for environment processes
                </p>
              </li>

              <li className="mb-4">
                <p>
                  <a
                    href="unknown"
                    className="text-xl font-bold decoration-dashed hover:text-violet-900 hover:underline"
                  >
                    XII. Unknown
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  Placeholder twelfth principle
                </p>
              </li>
            </ul>
          </nav>

          <div className="mx-auto max-w-prose py-12 text-gray-700">
            <Link
              reloadDocument
              to="/index.md"
              className="decoration-dashed hover:text-violet-900 hover:underline"
            >
              View printable version
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
