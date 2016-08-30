---                          
title: The Factory Pattern
layout: post         
date: 2016-08-30 09:00                         
tag:                             
- blog                        
- Programming Patterns
- 8th Light
blog: true                            
--- 

# The Factory Pattern

I'm going to take a break from my usual blog format of some sort of recap or how things could of improved in hindsight and talk about one of the easiest patterns to use in any project. I used the term any project, but that definitely isn't true. One thing that you should never try to do is force yourself to use any pattern especially one like the factory pattern. To me this pattern takes on two slightly different forms, so I'll touch on both of them. 

The first form is when you notice you have an interface with a bunch of different implementations, and somewhere in your code you need to decide which one to use. My example of this is a Javascript tic-tac-toe I worked on for my most recent project, we had a user interface that allowed the user to select one of 3 player types for both players. Those were: Human, computer (easy), and computer (hard). Our main was huge because we had a series of `if`s `else`s and `new`s that not only lead to a ton of confusion, but also quite the eye sore. Our solution was to make a GameFactory, you can check out the code [here](https://github.com/beccanelson/tttaas-js/blob/master/src/GameFactory.js), and basically it's only responsibility was to create the correct game (humanVsHuman, humanVsComputer, computerVsHuman, computerVsComputer) based on what players we passed in. That was in our main we could reference it like `game = GameFactory.getGame("computer","computer")` and simply get back the game we were expecting and call `game.start();`. It was a great addition to our code and really helped to clean things up.

The other version of the factory pattern is the abstract factory pattern. This factory functions a little bit differently than the other example, and that's because instead of choosing which game to make, it creates the game based on the factory. In this examples there's two interfaces one is called the `Button` and one is called the `ButtonFactory`. The `ButtonFactory` will always create a `Button`, and usually it only creates one type of `Button`. The ButtonFactory would be created based off another factor, for example if they're browsing in Google Chrome, you may make a `ChromeButtonFactory` and if they're browsing in Safari you may make a `SafariButtonFactory`. The reason you may need these two factories varies, but could be because of compatibility issues with browsers, different UIs for each, or even just different button text. This example with a buttonFactory is usually implemented as a UIFactory, since depending on your inspiration for implementing the pattern the whole UI is probably going to be different. In that case the UIFactory can generate every UI component for the app!