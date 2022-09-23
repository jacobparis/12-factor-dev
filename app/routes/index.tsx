import type { LoaderFunction, MetaFunction } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"
import ReactDOMServer from "react-dom/server"
import proseStyles from "~/prose.css"
import { docs } from "./__content/$file"

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

        <aside className="mx-auto mb-4 max-w-prose text-gray-700">
          <p className="mb-4">
            💡 This document is meant as a manifesto to describe a modern way of
            developing software that many large-scale development shops have
            gravitated towards.{" "}
            <strong>Continuous development is bigger than Gitpod.</strong>
          </p>
          <ul className="mb-4 ml-4 list-disc">
            <li className="mb-2">Continuous Development is like "Agile".</li>
            <li className="mb-2">
              Continuous Remote Development (CRD) is like "Extreme Programming".
              It's a specific flavour of continuous development (in the same way
              that XP is a specific flavour of Agile) and describes the Gitpod
              workflow.
            </li>
            <li className="mb-2">
              <a
                href="https://github.com/gitpod-io/run-gp"
                className="text-orange-900 underline hover:text-black"
              >
                run-gp
              </a>{" "}
              is an implementation of continuous development that is not remote.
            </li>
            <li className="mb-2">
              Similar workflows, such as those created in-house by Shopify and
              Uber, could also be considered implementations of continuous
              development.
            </li>
          </ul>

          <p className="mb-4">
            The ideal outcome is to collect a group of important thought leaders
            who believe in these principles, who already run their development
            teams in this way, and who can help Gitpod promote this new way of
            working. Potential signatories include Kent Beck (Agile), Tom
            Preston-Werner (GitHub), Tobi Lutke (Shopify), and more.
          </p>

          <p className="mb-4">
            If we can get such characters on board, this will be a manifesto
            that lives on its own and benchmarks the category that Gitpod has
            created.
          </p>

          <p className="mb-4">
            If not, this will become a smaller scale project. It may live
            directly on our website, manifesto will be the wrong word to use,
            and we will forgo the grander notions of carving an industrial
            category for a stronger focus on Continuous Remote Development as
            Gitpod practices it.
          </p>
        </aside>

        <div className="prose prose-orange mx-auto my-6 max-w-prose px-4 pb-12 text-gray-700">
          <div dangerouslySetInnerHTML={{ __html }} />
        </div>

        <div className="border-t-[1rem] border-orange-400 bg-orange-100 py-12 px-4">
          <h2 className="mb-12 text-center text-5xl font-bold text-orange-900 ">
            The Seven Principles
          </h2>

          <nav className="mx-auto my-6 max-w-prose ">
            <ul>
              {docs
                .filter((doc) => doc.title)
                .map((doc) => (
                  <li className="mb-4" key={doc.slug}>
                    <p>
                      <a
                        href={doc.slug}
                        className="text-xl font-bold decoration-dashed hover:text-orange-900 hover:underline"
                      >
                        {doc.title}
                      </a>
                    </p>
                    <p className="text-lg text-gray-800">{doc.description}</p>
                  </li>
                ))}
            </ul>
          </nav>

          <div className="mx-auto max-w-prose py-12 text-gray-700">
            <Link
              reloadDocument
              to="/index.md"
              className="decoration-dashed hover:text-orange-900 hover:underline"
            >
              View as markdown
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
