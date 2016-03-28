---
title: "Baby Steps And Refactoring"
layout: post
date: 2016-03-24 11:20
tag:
- blog
- 8thLight
- TDD
- Refactoring 
- TTT
blog: true
---
# Refactoring

In my experience, making it work has always been the easy part. I'm presented with a problem and the first thing that comes
to my mind is almost always a solution. The solution may not be the most elegant, and it definitely isn't going to be the
efficient by any definition of the word but it's a solution none the less. One of the biggest way's I'm trying to improve my
code is by sitting back and asking myself, is there a better way to do this? If I say yes to that question or even maybe, I
need to take time to think about my initial plan of attack. A lot of the time this time to reflect  still doesn't happen,
and even when it does my code still needs refactoring. Now refactoring to me is the process of going back and cleaning up all 
the code you've written after making any significant change. Whether this change is extending your application with a new feature,
or changing the entire way you store data usually there's some pretty large changes to be made.

# Baby Steps

One of the most difficult parts of making any significant change to a program is how you go about it, parameters need to be changed,
the way things are called, and the types of what is calling them are all over the place compared to your initial implementation.
Once again you can dive deep into switching everything that needs to at once, and try to have it completely changed after your
first compile, or you can start small in *baby steps*. For example if you're switching to a new data structure, start by creating
a helper method to opy all the data from your initial structure to the new one. This way you can call it before each of your new tests
and not lose all of your initial work while trying to make this change. Using baby steps to refactor works well, mostly because trying 
to tackle it all in one go *doesn't*. Baby steps allows for incremental change, and a chance to decide whether or not the
change you're making is taking things in the right direction. With the 'Giant Leap' refactoring process, you're either there or you're not,
if when you finally try to compile your code it doesn't work a lot of the time you're stuck going back to square one.

Use Baby Steps!
