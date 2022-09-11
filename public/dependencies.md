---
meta:
  title: II. Dependencies
  description: Explicitly declare and isolate dependencies
  previous: "codebase"
  next: "config"
headers:
  Cache-Control: no-cache
---

Twelve-factor development is encapsulated in an isolated environment, such as a container or virtual machine, with every dependency explicitly included in a manifest.

Explicit dependency declaration ensures that each developer will have the necessary packages and system tools installed in their development environment.

For example, Docker containers use a Dockerfile that specifies the instructions required to bundle system tools, libraries, application code, and all other dependencies.

Developers should not assume that system tools such as `curl` or `ping` will be present in the environment, and should install those explicitly as well.

To avoid regressions, package manifests should explicitly declare versions instead of specifying ranges. Version ranges also open applications up to supply chain attacks.
