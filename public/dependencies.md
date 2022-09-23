---
headers:
  Cache-Control: no-cache
---

Continuous Development Environments explicitly specify and install every dependency they require. Environments that rely on the implicit presence of dependencies in the host machine are neither **isolated** nor **transparent**. System tools (such as `curl` and `ping`) must be installed as needed as well.

Explicit dependency declaration ensures each developer will have the necessary packages and system tools **automatically** installed in their development environment.

To avoid regressions, package manifests should explicitly declare versions instead of specifying ranges. Version ranges also open applications up to supply chain attacks.

## Examples

- [Docker](https://www.docker.com/) containers use a `Dockerfile` that specifies the instructions required to bundle system tools, libraries, application code, and all other dependencies.

- [Nix](https://nixos.wiki/) environments create an immutable package store based on hashes of each dependency's source code, allowing for atomic upgrades, rollbacks and concurrent installation of different versions packages.

- In the NodeJS ecosystem, [npm](https://www.npmjs.com/) lists dependencies in `package.json` and `package-lock.json` files that specify versions, hashes, and child dependencies.
