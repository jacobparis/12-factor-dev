---
meta:
  title: IV. Backing services
  description: Treat backing services as attached resources
  previous: "config"
  next: "continuous"
headers:
  Cache-Control: no-cache
---

Twelve-factor development environments include instructions to start any backing service the application needs to function. This includes databases (such as PostgreSQL, MongoDB, or Redis), queuing systems (such as RabbitMQ or Beanstalkd), and more.

These services do not need to run inside the development container, but there should be a one-to-one relationship between development environments and coupled services. Three development environments for the same developer on the same codebase should be attached to three independent sets of backing services.

Some cloud services, such as PlanetScale, allow the creation of temporary databases for development. Cloudflare's CLI tool Wrangler will provision temporary Cloudflare Workers with development code. These are compatible with twelve-factor principles.

Developers should avoid using different backing services during development than production. For example, using SQLite in the development environment and PostgreSQL in production. Twelve-factor development environments are containerized and can often run versions of backing services that closely approximate production environments.

All deploys of an application (development environment, staging environment, and production environments) should be using the same type and version of backing services.
