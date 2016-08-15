---                          
title: Creating iOS View Abstractions Part 2 - The Solution                
layout: post         
date: 2016-08-15 09:00                         
tag:                             
- blog                        
- xCode
- iOS
- Abstractions
- 8th Light
blog: true                            
--- 

Part 1 [here](http://www.tomcmcgee.me/Creating-iOS-View-Abstractions/)



# The Solution

As you can see at the end of Part 1, there's way too much going on in our GameViewController. After walking through it's responsibilities with one of my mentors, we counted 7 or 8 separate classes it could be split into ([this](https://github.com/beccanelson/tttaas-iOS/blob/master/iOS-tic-tac-toe/GameViewController.swift)) is the `GameViewController` now). That's a blog for another time though, this blog is just about the view abstractions. They were one of the most interesting things about Swift and xCode i've seen so far. So I'm excited to share them with you.

If you took a look at the original GameViewController in part 1 you would notice the board was represented in it as `@IBOutlet public weak var boardStackView: UIStackView!`, it had a hard dependency on the fact that it was a UIStackView (a user interface component supplied by xCode). What would happen if I decided to make it a view with constaints positioning 9 individual buttons around the board? Well, I would have had to go into my code and change every instance of `UIStackView` to `UIView` or `[UIButton]` this obviously isn't ideal and definitely isn't obeying the [Dependency Inversion Principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle). After some major refactoring, the board is represented like this ` @IBOutlet public weak var boardView: BoardView!`. I know I had to double take a few times myself, so verbose yet functional. How is it done? Pretty simply actually. I wrote a protocol (Swift Interface) that looked something like this: 

```

	@objc public protocol BoardView {
	    func show(board board: [String])
	    func enableSpots()
	    func disableSpots()
	    func clearSpots()
	}

``` 

That protocol is what my GameViewController is expecting an instance of, and in case you can't tell is completely independent of the UI implementation of the board. All I needed to do now was create the concrete class that would take the UI Implementation, a stack view in this case, and the protocol, and create the methods for it. That ended up looking like this: 

``` 

	public class BoardStackView: UIStackView, BoardView {
	    
	    public func show(board board: [String]) {
	        for view in self.subviews{
	            for button in view.subviews {
	                let btn = button as! UIButton
	                setSpotToMarker(btn, marker: board[btn.tag])
	            }
	        }
	    }
	    
```

As you can see it takes a `UIStackView` and a `BoardView` and creates a show method. The only step left was to set the actual `UIStackView` in the storyboard to the `BoardStackView` that extends UIStackView. If you have the proper `UIStackView` highlighted, navigate to this menu and select BoardStackView:

![Image of Menu](../assets/images/boardStackView.png)

Now in my `GameViewController` if I want to show the current board, all I do is call `boardView.show(board)` no extra clutter in the class, and a very clear API with exactly the functionality we wanted. Next time I do iOS development I'll be sure to abstract my view like this again!