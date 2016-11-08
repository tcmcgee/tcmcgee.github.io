---
title: Pairing Tour Day 1
layout: post
date: 2016-11-07 09:00
tag:
- blog
- Apprenticeship
- Pairing Tour
- 8th Light
blog: true
---

# Pairing Tour Day One

This week marks the start of my pairing tour here at [8th Light](https://8thlight.com). For those of you who don't know what that entails, I spend the whole day with one of the Crafters on my review board, doing what they do and pairing on client work. I have my schedule booked till Thanksgiving so I'll be busy, and you should be expecting one of these blogs most days.

Anyways today was my first day so I'm going to recap how things went. Like most things I have planned ahead of time, it went nothing like expected. The Crafter I was scheduled to pair with was forced to reschedule because getting me access to the building/codebase required going through legal, and legal is slow. The good news is I'm scheduled to pair with him tomorrow and again at the end of this week. I turned out to be quite lucky today, where one of my mentors who works in Libertyville several days a week was in the office so I was able to pair with him on the client I have been working on for the past month or so.

Today I worked almost entirely in front end Coffeescript, in a tri-pair where our third member was remote. It didn't take long before I was able to make a test pass since I'm very familiar with the code base, patterns, and syntax of the language. Our story for today was validating that two mandatory fields had been entered, and not allowing the user to submit the page until they were. To accomplish this we used a validator that would return whether or not the fields were entered and store them in a list. For example, if both fields were empty it was stored in an object like this `{missing_fields: ["name", "favorite_jello_flavor"]}`. Then where the validator was being called it would publish a message called something like `field_missing_message` along with the `missing_fields`. This project uses the publisher/subscriber pattern which is a way of communicating the state of the program and dynamically triggering events as the user's actions cause events to 'publish'. Since the project my pairs were working on is relatively new, I was able to see the process of importing the pubSub, and it was incredibly tedious. Once it was working, it was cool to see the pattern in action from importation to implementation though! Anyways, after the message was published each subview that was subscribed to the event would see if their specific action was called and if it was add a class appropriately named `has-error` to the view which turns the text red, and then adds an appropriate error message beneath the button. These changes would be reverted anytime the fields were changed by removing the class and setting the container that held the messages to empty. We ended up working with one of the clients designers to help fix some problems with the indentation of the error message, and we all decided it looked a lot better without the error message at all. The group ended up deleting the error text that we had spent a good portion of our day on, and although I knew it looked better and found myself being an advocate for exactly that change most of the afternoon prior to this, it was still a little disheartening just removing it! That's something I'll probably get *a lot* more used to once projects are out my control alone, and when my only clients aren't my mentors. All in all it was a fun day, and a good introduction to my pairing tour since I was able to get started on a project I was familiar with. I look forward to continuing on it on my path to becoming a Crafter!
