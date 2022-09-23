import type { LoaderFunction, MetaFunction } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import { Link, useLoaderData, useLocation } from "@remix-run/react"
import ReactDOMServer from "react-dom/server"

export const docs = [
  {
    slug: "/",
    file: () => import("../../../public/index.md"),
  },
  {
    slug: "ephemerality",
    title: "I. Ephemerality",
    description:
      "Developers must be able to access ready-to-code workspaces at any time",
    file: () => import("../../../public/ephemerality.md"),
  },
  {
    slug: "dependencies",
    title: "II. Dependency Declaration",
    description: "Dependencies must be explicitly declared and installed",
    file: () => import("../../../public/dependencies.md"),
  },
  {
    slug: "backing-services",
    title: "III. Automated Provisioning",
    description:
      "Backing services must be automatically provisioned and de-provisioned",
    file: () => import("../../../public/backing-services.md"),
  },
  {
    slug: "parallel-development",
    title: "IV. Parallel Development",
    description: "Workspaces must be able to run concurrently without conflict",
    file: () => import("../../../public/parallel-development.md"),
  },
  {
    slug: "dev-prod-parity",
    title: "V. Dev/prod Parity",
    description:
      "Development environments should resemble production as much as possible",
    file: () => import("../../../public/dev-prod-parity.md"),
  },
  {
    slug: "uniformity",
    title: "VI. Uniformity",
    description:
      "Development environments must work uniformly no matter the developer's choice of IDE, OS, or hardware",
    file: () => import("../../../public/uniformity.md"),
  },
  {
    slug: "feedback",
    title: "VII. Feedback",
    description:
      "Development environments must provide log information for all automations",
    file: () => import("../../../public/feedback.md"),
  },
]

export const meta: MetaFunction = ({ params }) => {
  console.log({ docs })
  const doc = docs.find(({ slug }) => slug === params.file)

  return {
    title: [doc ? doc.title : null, "Continuous Development"].join(" – "),
  }
}

export const loader: LoaderFunction = async ({ params }) => {
  if (!docs.some(({ slug }) => slug === params.file)) {
    return redirect("/")
  }

  const index = docs.findIndex(({ slug }) => slug === params.file)

  const file = await docs[index].file()

  const previous = docs[index - 1] || null
  const next = docs[index + 1] || null

  return {
    title: docs[index].title,
    description: docs[index].description,
    previous: previous ? previous.slug : null,
    next: next ? next.slug : null,
    __html: ReactDOMServer.renderToString(file.default()),
  }
}

export default function PostSlug() {
  const { title, description, previous, next, __html } = useLoaderData()
  const location = useLocation()
  return (
    <div className="flex flex-grow flex-col border-t-[1rem] border-orange-400 bg-orange-100 py-12 px-4">
      <div className="mx-auto my-6 max-w-prose flex-grow px-4 pb-12 text-gray-700">
        <h1 className="mb-2 text-5xl font-bold text-orange-900"> {title} </h1>
        <h2 className="mb-4 text-2xl text-orange-900 opacity-80">
          {description}
        </h2>
        <div
          className="prose prose-orange"
          dangerouslySetInnerHTML={{ __html }}
        />
      </div>
      <footer className="">
        <div className="mx-auto mb-4 flex max-w-prose justify-between py-4 px-4">
          {previous ? (
            <a
              href={previous}
              className="text-2xl font-bold decoration-dashed hover:text-orange-900 hover:underline"
            >
              Previous
            </a>
          ) : null}
          {next ? (
            <a
              href={next}
              className="text-2xl font-bold decoration-dashed hover:text-orange-900 hover:underline"
            >
              Next
            </a>
          ) : null}
        </div>

        <div className="mx-auto max-w-prose px-4 pb-12 text-gray-700">
          <Link
            reloadDocument
            to={`${location.pathname}.md`}
            className="mb-4 block decoration-dashed hover:text-orange-900 hover:underline"
          >
            View as markdown
          </Link>
          <Link
            to="/"
            className="mb-4 block decoration-dashed hover:text-orange-900 hover:underline"
          >
            Back to index
          </Link>
        </div>
      </footer>
    </div>
  )
}
