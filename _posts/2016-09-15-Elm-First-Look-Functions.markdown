---                          
title: Elm First Look - Functions
layout: post         
date: 2016-09-15 09:00                         
tag:                             
- blog                        
- Functional Programming
- Elm
- 8th Light
blog: true                            
---

# Elm

I recently started on a new project, elm tic-tac-toe. For those of you who don't know, elm is a functional programming language and I've been learning it on the fly as I do this project. My first impression is that it's pretty cool and I wish I could blog about every little thing, and maybe I can, but I'm going to split it up so this is just going to cover elm functions.

A function in elm is pretty straight forward, below i'm going to define `addOne` a function that takes a number and adds one to it. Take note of the lack of parenthesis that you're probably expecting since this is functional programming.

~~~~
addOne num =
  num + 1
~~~~

That's about as basic as you can get, as you can see the function name comes first, then the parameters (separated by spaces if there's more than one) than an equal sign followed by the definition of the function. Indentation does matter, which I prefer to 1000 parenthesis. The next and way cooler thing I'm going to talk about are these things called records. A record is kind of like a mix between an object and a dictionary and is defined like this `record = {board = fromList ["","","","","","","","",""]}`. If I wanted to get the board I would simply type `record.board` and be met with the Array, now when you want to actually use these in a function they seem like they would be a real pain, considering I would have to extract the value every single time which would probably end up being a Elm `Maybe` (that will be covered in my next blog) and then dealing with that `Maybe`, and calling the function with it. In fact we're greeted with a syntax much simpler. Check out this code block below.

~~~~
let gameState =
  {board = fromList ["","","","","","","","",""], status = "in progress"}

doSomethingWithGameState {board, status} =
  log status (set 0 1 board)

--- Called like this
doSomethingWithGameState gameState
~~~~

As you can see some new syntax was introduced! The function is defined with parameters in `{ }`, if you didn't pick up on it yourself that means it's looking for a record that contains both of those fields. In this case the record must have a board and a status or things will get messy. I'm not sure exactly how trying to pass an invalid record is handled, because I've never done it but this way of passing Records as parameters made my code a whole lot cleaner since I can call a function `takeTurn gameState` instead of `takeTurn gameState.board gameState.status gameState.isPlayer1Turn gameState.player1Marker gameState.player2Marker`. That's something that really stood out to me about Elm so far, and definitely a cool feature of the language! Tomorrow I plan to blog about some other cool things like `Maybe`s and pattern matching with switches.
