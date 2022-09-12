---
meta:
  title: IV. Continuous
  description: Prebuild new workspaces during continuous integration
  previous: "uniformity"
  next: "codebase"
headers:
  Cache-Control: no-cache
---

The build process for new development environments should be initiated each time new code is pushed to a branch.

Downloading Docker images, installing dependencies, running build scripts, and provisioning development infrastructure can take time, so it's important to start the process as early as possible.

Any developer working on a particular branch should be able to create an environment based on the same prebuilt environment, minimizing waiting time.
