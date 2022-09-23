---
headers:
  Cache-Control: no-cache
---

Continuous Development Environments (CDEs) are sufficiently **automated** such that no manual tasks are required to get a workspace into a ready-to-code state.

**Ephemerality** can be achieved by discarding and creating new workspaces or by resetting an existing one. In either case, care should be taken to properly handle any [backing services](backing-services) that may be attached.

Workspaces should be as immediately available as possible. Longer switching times encourage developers to re-use workspaces from previous tasks. Developers prefer integrating their contributions into the codebase as frequently as possible and continuing development with fresh workspaces. The longer a development branch lives, the more it diverges from the state of [production](dev-prod-parity) and [the environments of other developers](uniformity).

The persistent state of a workspace matches its running state as closely as possible. If a development environment shuts down unexpectedly, that crash does not result in a loss of uncommitted changes. Frequent and regular backups help, but Continuous Development prefers total persistence.

CDEs are **isolated** and do not share data between environments for the same codebase. Any data that needs to be shared between environments should be stored in a stateful [backing service](backing-services) such as a database or enterprise secret store.
