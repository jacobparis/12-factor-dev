---
meta:
  title: III. Config
  description: Store config in the environment
  previous: "dependencies"
  next: "backing-services"
headers:
  Cache-Control: no-cache
---

Continuous development forbids the use of heuristics to determine an application's environment.

For example, a developer should not assume they are in a development environment because a hostname is `localhost`, nor should they assume they are in a production environment because the hostname is not `localhost`.
