---
meta:
  title: II. Parallel development
  description: Run multiple workspaces in parallel
  previous: "dev-prod-parity"
  next: "uniformity"
headers:
  Cache-Control: no-cache
---

Developers should be able to run multiple development environments for the same codebase concurrently without conflict.

A common use case is during code review, where a developer who is working on a feature branch in one workspace can create a second environment based on the review branch, that runs in parallel without affecting other workspaces by either the author or the reviewer.

As the [backing services](backing-services) in a continuous development environment are required to be independent, each workspace will have its own resources.
