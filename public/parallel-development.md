---
headers:
  Cache-Control: no-cache
---

Developers are able to run multiple development environments for the same codebase concurrently without conflict.

As the [backing services](backing-services) in a continuous development environment are **isolated**, each workspace will have its own copy of the codebase and any attached resources.

## Examples

- A developer who is working on a feature branch in one workspace can create a second environment in order to do a code review. Each workspace should run in parallel without affecting the other
