---
title: Alliance Search System
date: 2020-12-09
tags:
  - reactjs
  - microservices
  - sse
  - nodejs
---

Search system connected to the [star wars database](http://swapi.dev/).

## User API

Mock server to permit an authentification workflow for the front end. The username and the password are 'Luke' and 'DadSucks'.
The api is written in NodeJS with express, and spdy to create an https connection (with self generated certificate).

## Swapi API
