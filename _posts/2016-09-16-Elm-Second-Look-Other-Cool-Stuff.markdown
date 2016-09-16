---
title: Elm Second Look - Maybe?
layout: post
date: 2016-09-16 09:00
tag:
- blog
- Functional Programming
- Elm
- 8th Light
blog: true
---

## Maybe, Maybe not

Elm kind of reminds me of my work in Swift (never though I would be saying that), in the sense that is always forces you to deal with the tragedy of trying to get the first element or get the rest of an empty list if you use those functions. I think it's a pretty awesome way for a programming language to work, and saves you a lot of run time errors. On the other hand, one of my favorite parts of functional programming is the sweet satisfaction of getting a recursive function that's only 5 lines long doing something incredibly complex, and this idea of `Maybe` doesn't exactly encourage that (or so I thought). `Maybe` is a module included with any Elm project and can be pretty confusing when you're first learning the language. To give you an idea of how maybes are used heres my first ever Elm function...

~~~~
change amount coins =
  case (head coins) of
    Nothing ->
      []
    Just val ->
      if (amount >= val) then
        (val::(change (amount - val) coins))
      else
        (change amount (Maybe.withDefault [] (tail coins)))
~~~~

A few syntax notes `val::` is pushing the value to the resulting array, and yes `Nothing` and `Just` are keywords.

This function is called `change` and is the Coin Changer Kata. It is called with an amount lets say `100` (which is 1$) and a list of coins `[25,10,5,1]`. The case statement on the 2nd line will get the `head coins` or the first element of coins and match it to either `Nothing` or `Just val`. `Nothing` is what's returned when the `head coins` is wait for it... Nothing, and `Just val` would be substituted by the first value if one is there. Another option I had to handle this is one that you see on the last line of the function `Maybe` comes with a function `withDefault` which will return the default value (in this case an empty list) if the function results in `Nothing`. The one problem I have with these maybe's is that even if I handle the `tail coins` is empty list, it still returns a `Maybe` in the following conditionals, if I try and get the head. The refactoring that avoids addressing the same issue of whether or not this list is empty in several places is met in the next section using the same `case` statement.

## Pattern matching

In the previous code example you can see elm supports pattern matching, in that case it is matching the `head coins` to either `Nothing` or `Just val`, but that makes it seem like it's more of a replacement for an `if`. Check out my refactored `change` function below for a glimpse at some more verbose pattern matching. Take note of the lack of `Maybe`!!

~~~~
change amount coins =
  case coins of
    [] ->
      []
    val::vals ->
      if amount >= val then
        val :: change (amount - val) coins
      else
        change amount vals
~~~~

Lets talk about the differences between the two functions. First, instead of matching to the `head coins` we're simply matching to `coins` in the `case`. Second, instead of matching to `Nothing` and using a maybe we simply match to empty list. Third, (and heres the useful example of pattern matching) we match `val::vals`. If you remember before I mentioned that `::` is how you push an element to a list, so `val::vals` is matched to a value being pushed to a list. Elm sees `[1,2,3]` the same as `1::[2,3]` so `[1,2,3]` would match that pattern with 1 as `val` and `[2,3]` as vals, this way also works with `[1]` matching 1 to `val` and `[ ]` to vals. The function now has completely removed Maybes which add a lot of confusion to the code (in my opinion) and you are able to reference the `head coins` as val and the `tail coins` as vals. Problem solved, in a very satisfying very elm way.

Hopefully I'll get the chance to cover more Elm specifics in the future as sometimes it can be hard to find good examples code online!
