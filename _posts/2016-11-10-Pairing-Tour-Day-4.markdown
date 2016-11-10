---
title: Pairing Tour Day 4
layout: post
date: 2016-11-10 09:00
tag:
- blog
- Apprenticeship
- Pairing Tour
- 8th Light
blog: true
---

# Pairing Tour Day Four

For the fourth day of my pairing tour I was once again in Libertyville with Craig, in the morning we dealt with some errors in our Jenkins build. That turned out to be completely out of our hands, as it was an environment problem on the clients part. After that we went to Egg Harbor and with our full bellies set out to find some way we could help Malcolm on the studio services rails project.

In the afternoon we found a simple starting point for a larger refactor Malcolm was working on, which involved filtering all of the old statuses from a drop down menu, and displaying only a new set of statuses. These statuses are in the process of being changed to be more descriptive, and right now old and new statuses both exist so that no one loses functionality. We realized that by updating the search drop down menu to only show the new statuses some of the old clients could be 'lost' for lack of a better term and difficult to find. So we decided instead to work on migrating the current statuses to the more descriptive new statuses. This new goal of ours resulted in a lot of looking around in our postgres DB and trying to figure out how we could automate changing the status. At the end of the day we had made some progress towards exactly what that would entail and I was forced to leave it at that. Tomorrow I'm back to pairing with Rob L. on some configuration migrations.
