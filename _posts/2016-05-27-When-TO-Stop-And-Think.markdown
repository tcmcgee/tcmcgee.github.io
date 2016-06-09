---
title: When to Stop and Think
layout: post
date: 2016-05-27 09:00
tag:
- blog
- Testing
- Red Green Refactor
- The Four Rules Of Simple Design
blog: true
---
# Refactoring

In my opinion, knowing when to refactor and implement a design is one of the hardest parts of test driven development. After how many simple features are added or tests written should I sit down and switch over my design.

A recent example is my HTTP server written in Swift (you can find the code [here](https://github.com/tcmcgee/SwiftHTTPServer) ) As I was writing basic tests and adding code to return various HTTP responses it began to look like one massive tree of if statements. Each if statement handled a simple response specified by the requests method (GET, OPTIONS, PUT, etc.) it was a cluttered mess, but all of my tests passed and the behavior was exactly as intended. Now from looking at other implementations of HTTP protocols, I knew I would probably end up with a `Router` of some sort which processed the request and in my case returned the appropriate `Route` which would return the appropriate response. The problem that still blared in my face was when do I make this massive transformation in my code, from a tree of Ifs to the router?

My final answer was about 4 ‘if’s’ ago, and I came to this conclusion using [The Four Rules Of Simple Design] (http://martinfowler.com/bliki/BeckDesignRules.html) following these rules after I write each passing test when taking part in red, green, *REFACTOR* would of made it plain to see that I’m repeating myself _a lot_ and need to refactor immediately. These rules although very general, have helped me realize quite frequently when I needed to transform my design.


