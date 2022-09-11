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

        <div className="prose prose-violet mx-auto my-6 max-w-prose pb-12 text-gray-700">
          <div dangerouslySetInnerHTML={{ __html }} />
        </div>

        <div className="border-t-[1rem] border-gray-400 bg-gray-200 py-12">
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
                    href="build-release-run"
                    className="text-xl font-bold decoration-dashed hover:text-violet-900 hover:underline"
                  >
                    V. Build, release, run
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  Strictly separate build and run stages
                </p>
              </li>

              <li className="mb-4">
                <p>
                  <a
                    href="processes"
                    className="text-xl font-bold decoration-dashed hover:text-violet-900 hover:underline"
                  >
                    VI. Processes
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  Execute the app as one or more stateless processes
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
                  Export services via port binding
                </p>
              </li>

              <li className="mb-4">
                <p>
                  <a
                    href="concurrency"
                    className="text-xl font-bold decoration-dashed hover:text-violet-900 hover:underline"
                  >
                    VIII. Concurrency
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  Scale out via the process model
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
                  Maximize robustness with fast startup and graceful shutdown
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
                  Keep development, staging, and production as similar as
                  possible
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
                  Treat logs as event streams
                </p>
              </li>

              <li className="mb-4">
                <p>
                  <a
                    href="admin-processes"
                    className="text-xl font-bold decoration-dashed hover:text-violet-900 hover:underline"
                  >
                    XII. Admin processes
                  </a>
                </p>
                <p className="text-lg text-gray-800">
                  Run admin/management tasks as one-off processes
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
