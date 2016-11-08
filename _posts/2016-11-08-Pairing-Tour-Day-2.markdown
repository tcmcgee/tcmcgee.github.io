---
title: Pairing Tour Day 2
layout: post
date: 2016-11-08 09:00
tag:
- blog
- Apprenticeship
- Pairing Tour
- 8th Light
blog: true
---

# Pairing Tour Day two

The second day of my pairing tour was spent with Rob L. I finally managed to gain clearance to his building, and caught him at the start of a new project. This project is essentially to convert all the current applications over to continuous deployment. The company is fairly large so the main problem with converting is standardizing all the code bases, especially how configurable values are stored. In this particular system, every project is deployed with various configuration files, and each file is deployed separately to a database, this is because some values need to be changed 'on the fly' and others do not. The new system will standardize where configuration files are located (is it ./conf, ./confs or ./configuration), and how they're stored, `key=value` vs `{"key": "value"}` vs etc. And finally allow a new deploy plug-in that me and Rob started working on today to aggregate all of these values and add them to a metadata file, which then promotes *only* certain values through environments, ex: Dev to QA: values are 'overridden' by users in Dev, in some cases it's environmental variables like the endpoints to hit, in other cases its fine tuning of certain values for correct performance, we want to throw out the endpoints and overwrite them to the QA specific ones (eventually production specific), yet keep the fine-tuned values since they're now supposed to be more correct then their default values.


This lead to a lot of headaches on deciding how to read these values, since in theory how these configuration files currently look is nothing like they're supposed to look once the transition is occuring. Our task was to get a proof of concept/prototype/demo of how we think this should work so we can ask better questions in a more important planning meeting tomorrow. I will be working in Libertyville with Craig tomorrow, so Rob will have to do all the talking in the meeting, but I'll be back Friday to see how things went. All in all it wasn't a very code heavy day, but it was super interesting to see how everything worked, and another reminder than a lot of times things are a mess once you start looking at code. Today was also my first time not working in Chicago or Libertyville so it was pretty cool to actually get to experience a client site, although the atmosphere there was very business(?) for lack of a better term, and the cubicles along with one mouse and keyboard didn't exactly make for the best pairing atmosphere. I am excited to continue my pairing tour tomorrow and have learned a lot so far along the way!
