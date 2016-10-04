---
title: Elm Type Signatures
layout: post
date: 2016-10-03 09:00
tag:
- blog
- Functional Programming
- Elm
- 8th Light
blog: true
---

# Type Signatures

In Elm you have the 'option' to add a type signature to any function, option is in quotes here because there's absolutely no reason not to do it. It looks something like this...

~~~
multiply : number -> number -> number
multiply a b = a * b
~~~

The top line is the type signature, and the `->` means that the argument before it is a parameter. These type signatures are pretty confusing to read your first time around, so I'll try to give you the gist of it. Multiply is a function that takes two arguments `a` and `b`, the type signature looks like it only takes one argument `number ->` not `number number ->`, but in reality every function in Elm only takes one argument! `multiply a b` is the same as writing `(multiply a) b` passing the first parameter to a function will return a function that takes the second variable and returns a function with the first parameter 'filled in' (for lack of a better term). I could call `multiply 10` and get back a function that's result is basically `multiply b = 10 * b`.

# Why you need it

For those of you who don't know in Elm the compiler catches every possible run time error, that's because of these Types, whether or not you have your types correct is the difference between being able to run your code and everything being broken. Since I didn't use any type signatures on my any of my functions, I would have a method returning something that I wasn't expecting and instead of the compiler saying "HEY!! SOMETHING IS TERRIBLY WRONG WITH THIS FUNCTION", I was stuck being pointed to the function that required `multiply` to return a number instead of a string, and back tracking till I found the type-o. Anytime you're writing elm, with or without type signatures, you're going to be essentially keeping track of the type of everything. Why not just be a little more explicit with what you're expecting? Moral of the story use type signatures, it will help anyone who has to look at your code any time in the future... even yourself!
