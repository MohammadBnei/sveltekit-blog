---
title: Experiences
date: 2022-08-19
---

I started my developper a few years ago. From Springboot JAVA for Netapsys, to the MERN stack for Gymglish and Fastory, it was a rich route. Let's dive into some details.

# Fastory

Fastory is a company who permits the creation of micro-sites for events. You can create a 2d game, prize winning contest, conversationnal bot to retrieve user information... They have contract with some of the biggest names in the industry (SFR, JO 2022...) and provide lots of services (data analytics, marketing tools for example). 
Here is a table resuming what I did for them :

| Project| Back/Front| Datastorage| Summary|
| :------------- | :----------------------- | :-------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Resolving bugs | NodeJS - React           | Mongo                 | Lots of bug because of an old architecture and lots of new features. It was my introduction to the code.|
| WebHook| NodeJS - React| ElasticSearch - Mongo | All the data from our conversational bots were first saved in our databases, then exposed to the clients. With the webhook extension I created, clients were able to hook their own servers into our infrastructure to get real time data of the user using the bots. |
| Leaderboard    | NodeJS - React           | Redis - Mongo         | I coded a leaderboard extension for the microsite’s games. This leaderboard uses Redis for fast availability, then mongo for long time saving.|