---
headers:
  Cache-Control: no-cache
---

Dev/prod parity minimizes the gap between development and production environments. The closer the development environment resembles production, the more confidence a developer will have that their changes are going to behave in the same way once deployed.

The continuous development environment is identical to the production environment with few exceptions:

- the addition of developer tools, such as CLIs, SSH servers, and IDE backends;
- newer codebases, containing Work-In-Progress code that is not deployed to production;
- and development versions of [backing services](backing-services)

Where production environments exist as an integrated system of applications, it may not be reasonable to provision them all within a single development environment, and they should instead be treated as external backing services.

## Examples

- An application that uses PostgreSQL in production should use PostgreSQL in development and should not use a lightweight alternative like SQLite.
- A developer should not assume they are in a development environment because a hostname is localhost, nor do they assume they are in a production environment because the hostname is not localhost.
