---                          
title: Creating iOS View Abstractions Part 1 - The Problem                
layout: post         
date: 2016-08-07 09:00                         
tag:                             
- blog                        
- xCode
- iOS
- Abstractions
- 8th Light
blog: true                            
--- 

# The Problem

Lately I have been working on an iOS tic tac toe application written in Swift. Like most applications designed to be used by a non devolper consumer it has a front end user interface. In my case it's handled through an xCode storyboard, and constraints (a way to keep the view consistent across several devices i.e. iPad vs iPhone). The components on the app (buttons, lables, etc) as well as the constraints are set via a GUI in xCode which is an abstraction of a file that looks a bit like HTML. The problem with building your apps UI using this method is that when you inevitably want to access an element of it you have to draw (quite literally) the connection between the storyboard component and the ViewController you want to edit it in. The problem we faced was in our ViewController where we were handling the game logic: changing who's turn it is, making a request to the server to check for a winner, and keep track of the current board; We were also handling the UI logic, setting the buttons text to the board. The method looked something like this:

```  
public func show(board board: [String]) {
	for view in boardStackView.subviews{
	    for button in view.subviews {
	        let btn = button as! UIButton
	        setSpotToMarker(btn, marker: board[btn.tag])
	    }
	}
}
```

Not only is this method anything but simple, with it's nested loops, and not very clear names, but it also added a lot of clutter to our `GameViewController` and resulted in a huge breach of the single responsibility principle. If we wanted to change the board from nested `UIStackViews` to a `View`with constraits aligning 9 `UIButtons` into a board, we would have to change everything in our ViewController. If you want to see what it originally looked like: [click here](https://github.com/beccanelson/tttaas-iOS/blob/001710306610b30b2631927dfe5c45c41b0b87ee/iOS-tic-tac-toe/GameViewController.swift) but be warned, it isn't pretty.