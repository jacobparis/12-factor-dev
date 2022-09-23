---
headers:
  Cache-Control: no-cache
---

Continuous development environments include instructions to **automatically** provision and de-provision any [backing service](backing-services) the application needs to function. This includes databases (such as PostgreSQL, MongoDB, or Redis), queuing systems (such as RabbitMQ or Beanstalkd), and more.

These services do not need to run inside the development environment, but they must be properly **isolated**. A developer must be able to work in multiple parallel development environments without these services interfering with one another.

All deploys of an application (development environment, staging environment, and production environments) use the same type and version of backing services to ensure [dev / prod parity](dev-prod-parity). Continuous development environments are **isolated** and can often run versions of backing services that closely approximate production environments.

## Examples

- [Docker](https://www.docker.com/) provides a CLI tool that can create services as Docker containers
- [PlanetScale](https://planetscale.com/) allows the creation of temporary databases for development
- Cloudflare's CLI tool [Wrangler](https://github.com/cloudflare/wrangler2) will deploy temporary Cloudflare Workers with development code to the cloud
