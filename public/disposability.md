---
meta:
  title: IX. Disposability
  description: Minimize the cost of destroying and creating new development environments
  previous: "parallel-development"
  next: "dev-prod-parity"
headers:
  Cache-Control: no-cache
---

Continuous development environments are disposable, and can be started or stopped at any time.

Workspaces should minimize startup time. Longer startup times encourage developers to re-use workspaces. Developers should favor using new workspaces to minimize the configuration drift that accumulates as developers work on multiple tasks.

Developer environments should also be sufficiently automated such that no manual tasks are required to get a new workspace into a ready-to-code state.

The persistent state of a workspace should match its running state as closely as possible. If a development environment shuts down unexpectedly, that crash should not result in a loss of uncommitted changes. Frequent and regular backups help, but continuous development prefers total persistence.

Continuous development environments are stateless and do not share data between environments for the same codebase. Any data that needs to be shared between environments should be stored in a stateful [backing service](backing-services) such as a database or enterprise secret store.
