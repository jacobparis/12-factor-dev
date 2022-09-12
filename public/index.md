# Introduction

Continuous development is a workflow methodology for building software applications.

Continuous development environments:

- Use declarative formats for setup automation, to minimize time and cost for new developers joining the project;
- Do not require manual work to get to a ready-to-code state;
- Are compatible with developers' chosen operating systems, shells, and IDEs;
- Declare all dependencies, for both development and production, including system tools;
- Do not need to be actively maintained to eliminate configuration drift or prepare for further development;
- Minimize divergence between development and production, enabling continuous deployment for maximum agility;

The continuous development methodology can be applied to apps written in any programming language, and which use any combination of backing services (database, queue, memory cache, etc).

## Background

This document is the compilation of decades of lessons learned from developers working at and running companies of all-sizes, from solo ventures, startups, and meganational corporations.

Sources of inspiration include [The Twelve-Factor App](https://12factor.net/) and the [Agile Manifesto](https://agilemanifesto.org/)

## Who should read this document?

- Any developer building applications which run as a service;
- Maintainers and contributors of open source software;
