---                          
title: Statically Typed vs. Functional                  
layout: post         
date: 2016-07-27 09:00                         
tag:                             
- blog                        
- Functional
- Statically-Typed
- 8th Light
blog: true                            
--- 
# Statically Typed vs. Functional

These past couple of weeks I have been working on a iOS Tic-Tac-Toe application (hitting the app store Summer of 2016), that hits an API written in Java. The Java application calls a Clojure implementation of TicTacToe to do all of the game logic. In reality, it's way more work than just writing the logic in Swift along with the UI and saving ourselves the network calls and clojure interop, but for now experience is much more valuable than simplicity.

As far as which I personally prefer, I couldn't tell you. It seems like anytime I work for too long in one I begin to miss the other, and each has it's own advantages and disadvantages. For example, after I spend hours trying to debug something in Scheme or Clojure and it turns out that when I refactored a function I switched the order of the parameters so I was passing a list where it expected an integer, that's when I begin to miss Java which would of **screamed** at me instantly. And most of my frustration from Java comes from the added weight of typing things, and the crazy amount of indentation and extra words, `for (int i = 0; i < array.length(); i++)` gets a little old after a while, especially when you can think of one hundred different ways to do it easier with some recursion, and not having to worry about what type everything is.

This project presented me with something I never would have expected though and that's working with clojure in java. I knew clojure was built ontop of the JVM so I thought it would be simple enough but I didn't account for the difficulties in *translating* from clojure to Java, since that's the way we decided to make our calls. Clojure has lists which can contain elements of any type, lazy-sequences, and a lot more. Sadly, when you get a lazy sequence in Java, there's not a lot of ways to manipulate it, besides importing and requiring clojure.core functions. This project has been very enlightening for me!