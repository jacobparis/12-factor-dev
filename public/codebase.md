---
meta:
  title: I. Codebase
  description: One codebase tracked in revision control, many deploys
  previous: "/"
  next: "dependencies"
headers:
  Cache-Control: no-cache
---

Twelve-factor development requires code to be tracked in a version control system, such as Git, Mercurial, or Subversion, that is hosted on a remote server, such as GitHub, GitLab, or BitBucket.

Each hosted repository forms a codebase.

Development teams can have different relationships between repositories and production environments:

- One-to-one, also known as a **single-repo** architecture. Some code may run in the browser, while other code runs on the server, but all of the code is contained within a single repository.
- One-to-many, also known as a **mono-repo** architecture. Several distinct applications exist within the same repository.
- Many-to-one, also known as a **multi-repo** architecture. The application depends on code from multiple repositories. Client/API structures and micro-service architectures often fall in this bucket.

Twelve-factor development requires making changes to a **single repository at a time**. In a multi-repo architecture, contributions to each repository must be able to be made, tested, and deployed independently of the other.
