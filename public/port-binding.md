---
meta:
  title: VII. Port binding
  description: Bind service ports for public and private access
  previous: "uniformity"
  next: "parallel-development"
headers:
  Cache-Control: no-cache
---

Twelve-factor development environments allow binding ports within the container to external interfaces, such as ports on `localhost` or URLs on the hosted development server.

The environment does not assume the developer has access to `localhost`.
