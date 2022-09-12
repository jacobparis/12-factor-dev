---
meta:
  title: X. Dev/prod parity
  description: Keep development and production as similar as possible
  previous: "disposability"
  next: "logs"
headers:
  Cache-Control: no-cache
---

The goal of dev/prod parity is to minimize the gap between development and production environments. The more the development environment resembles production, the more confidence a developer will have that their changes are going to behave in the same way once deployed.

The continuous development environment is identical to the production environment with few exceptions:

- the addition of developer tools, such as CLIs, SSH servers, and IDE backends;
- newer codebases, containing Work-In-Progress code that is not deployed to production;
- and development versions of [backing services](backing-services)

Developers should prefer shorter cycle times between development and deployment, integrating their contributions into the codebase as frequently as possible. Workflows such as Test Driven Development encourage this. The longer a development branch lives, the more it diverges from the expectations of the production environment.
