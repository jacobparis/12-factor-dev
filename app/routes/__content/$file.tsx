import type { LoaderFunction, MetaFunction } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import { Link, useLoaderData, useLocation } from "@remix-run/react"
import React from "react"
import ReactDOMServer from "react-dom/server"

const allowedFiles = [
  "codebase",
  "dependencies",
  "config",
  "backing-services",
  "continuous",
  "uniformity",
  "port-binding",
  "parallel-development",
  "disposability",
  "dev-prod-parity",
  "logs",
  "unknown",
]

const titles = {
  codebase: "I. Codebase",
  dependencies: "II. Dependencies",
  config: "III. Config",
  "backing-services": "IV. Backing Services",
  continuous: "V. Build, Release, Run",
  uniformity: "VI. Uniformity",
  "port-binding": "VII. Port Binding",
  "parallel-development": "VIII. Parallel Development",
  disposability: "IX. Disposability",
  "dev-prod-parity": "X. Dev/prod Parity",
  logs: "XI. Logs",
  unknown: "XII. Admin Processes",
  default: null,
}
export const meta: MetaFunction = ({ params }) => {
  return {
    title: [titles[params.file || "default"], "Twelve-Factor Development"].join(
      " – "
    ),
  }
}

export const loader: LoaderFunction = async ({ params }) => {
  if (!allowedFiles.includes(params.file)) {
    return redirect("/")
  }

  const files = {
    index: import("../../../public/index.md"),
    codebase: import("../../../public/codebase.md"),
    dependencies: import("../../../public/dependencies.md"),
    config: import("../../../public/config.md"),
    "backing-services": import("../../../public/backing-services.md"),
    continuous: import("../../../public/continuous.md"),
    uniformity: import("../../../public/uniformity.md"),
    "port-binding": import("../../../public/port-binding.md"),
    "parallel-development": import("../../../public/parallel-development.md"),
    disposability: import("../../../public/disposability.md"),
    "dev-prod-parity": import("../../../public/dev-prod-parity.md"),
    logs: import("../../../public/logs.md"),
    unknown: import("../../../public/unknown.md"),
  }

  const file = await files[params.file]

  return {
    title: file.meta.title,
    description: file.meta.description,
    previous: file.meta.previous,
    next: file.meta.next,
    __html: ReactDOMServer.renderToString(file.default()),
  }
}

export default function PostSlug() {
  const { title, description, previous, next, __html } = useLoaderData()
  const location = useLocation()
  return (
    <div className="flex flex-grow flex-col">
      <div className="mx-auto my-6 max-w-prose flex-grow px-4 pb-12 text-gray-700">
        <h1 className="mb-2 text-4xl font-bold">{title} </h1>
        <h2 className="mb-4 text-2xl text-gray-500"> {description} </h2>
        <div
          className="prose prose-violet "
          dangerouslySetInnerHTML={{ __html }}
        />
      </div>
      <footer className="border-t-[1rem] border-gray-400 bg-gray-200">
        <div className="mx-auto mb-4 flex max-w-prose justify-between py-4 px-4">
          {previous ? (
            <a
              href={previous}
              className="text-2xl font-bold decoration-dashed hover:text-violet-900 hover:underline"
            >
              Previous
            </a>
          ) : null}
          {next ? (
            <a
              href={next}
              className="text-2xl font-bold decoration-dashed hover:text-violet-900 hover:underline"
            >
              Next
            </a>
          ) : null}
        </div>

        <div className="mx-auto max-w-prose px-4 pb-12 text-gray-700">
          <Link
            reloadDocument
            to={`${location.pathname}.md`}
            className="decoration-dashed hover:text-violet-900 hover:underline"
          >
            View printable version
          </Link>
        </div>
      </footer>
    </div>
  )
}
