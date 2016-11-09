---
title: Pairing Tour Day 3
layout: post
date: 2016-11-09 09:00
tag:
- blog
- Apprenticeship
- Pairing Tour
- 8th Light
blog: true
---

# Pairing Tour Day Three

For my third day of pairing, I headed out to Libertyville to work with Craig. Craig is currently between projects so he decided to work on a studio services project. Here studio services is basically clients that all crafters have rolled off of full time, but still need some maintenance. The project we were working on today was a rails project that has been a client of 8th Light for probably around 5 years based on the git history I saw. Anyways our main concern was that we had a state machine, which has a helper that has methods that get called to trigger events that set the state. Both the state machine and state machine helper are built with an object that represents a person. This Person had a method that exposes the State machine (which it creates, state machines are unique to each instance of Person so it's important you have the right one), the created state machine creates the state machine helper. The state machine helper gets the state machine from the Person instead of from the state machine (which creates it). Our primary task for the day was to make it so that the State Machine helper used the state machine that created it without using the Person at all. Today consisted of a lot of clean up and a lot of familiarizing myself with rails. Tomorrow I'm coming back to Libertyville and pairing with Craig again, so I'll probably expand a lot more on what we end up doing.
