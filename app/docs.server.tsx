export const docs = [
  {
    slug: "/",
    file: () => import("../public/index.md"),
  },
  {
    slug: "version-control",
    title: "I. Version Control",
    description: "Code must be tracked in a centralized version control system",
    file: () => import("../public/version-control.md"),
  },
  {
    slug: "ephemerality",
    title: "II. Ephemerality",
    description: "Minimize the time spent getting ready to code",
    file: () => import("../public/ephemerality.md"),
  },
  {
    slug: "dependencies",
    title: "III. Dependencies",
    description: "Dependencies must be explicitly declared and installed",
    file: () => import("../public/dependencies.md"),
  },
  {
    slug: "backing-services",
    title: "IV. Backing Services",
    description:
      "Backing services must be automatically provisioned and de-provisioned",
    file: () => import("../public/backing-services.md"),
  },
  {
    slug: "parallel-development",
    title: "V. Parallel Development",
    description: "Workspaces must be able to run concurrently without conflict",
    file: () => import("../public/parallel-development.md"),
  },
  {
    slug: "dev-prod-parity",
    title: "VI. Dev-prod-parity",
    description:
      "Development environments should resemble production as much as possible",
    file: () => import("../public/dev-prod-parity.md"),
  },
  {
    slug: "uniformity",
    title: "VII. Uniformity",
    description:
      "Development environments must work uniformly no matter the developer's choice of IDE, OS, or hardware",
    file: () => import("../public/uniformity.md"),
  },
  {
    slug: "feedback",
    title: "VIII. Feedback",
    description:
      "Development environments must provide log information for all automations",
    file: () => import("../public/feedback.md"),
  },
]
