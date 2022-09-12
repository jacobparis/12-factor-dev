---
meta:
  title: VI. Uniformity
  description: Normalize the developer experience between developers while allowing customization
  previous: "continuous"
  next: "port-binding"
headers:
  Cache-Control: no-cache
---

In a codebase with multiple contributors, the hardware, operating systems, terminal shells, IDEs, and dependency versions will all differ between developers. One of the goals of continuous development is to normalize the environment so the developer experience is set upon identical foundations for each developer.

Developers who use MacOS, Linux, or Windows operating systems should see identical results when running any application code. As continuous development environments are containerized, the operating system of the developer should not affect it.

Continuous development does not dictate the tools that developer should use. Developers are entitled to their own preferences for code editor, extensions, themes, keybindings, shell configuration, and other preferences. A development environment that requires a specific IDE violates the uniformity principle, as does any requirement for a particular operating system or hardware.
