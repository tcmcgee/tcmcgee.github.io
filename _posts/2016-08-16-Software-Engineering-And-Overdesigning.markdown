---                          
title: Software Engineering and Overdesigning             
layout: post         
date: 2016-08-16 09:00                         
tag:                             
- blog                        
- Software Engineering
- Overdesigning
- TDD
- 8th Light
blog: true                            
--- 

# Overdesigning

Yesterday I started to read [Software Craftsmanship by Pete McBreen](https://www.amazon.com/Software-Craftsmanship-Imperative-Pete-McBreen/dp/0201733862),
and one of the first topics covered in the book is what is Software Engineering, and when is it useful.
It continued to show examples of when it's practical, referencing huge 7+ year government projects with budgets in the hundreds of thousands of dollars, that depended on hardware being specifically created for for this software to operate on. Now software engineering has evolved to a very broad term over time, but in this context it's referencing the idea of designing an entire system before a single line of code is written, and once the design is determined, it is followed as a specification not just a guide. This has it's benefits: a team of 500 people working on separate parts all following the specification exactly (styling, syntax, implementation) should finish with a product that integrates successfully and meshes; basically, it's easier to distribute work amongst many when the exact implementation of everything is specified.


There's also a ton of downfalls, especially when working in a smaller team between 5-10 people. Two of the largest negative aspects go hand in hand: The First being the huge amount of time spent creating these specifications, choosing the best people to create the best possible implementation is important here as well since the product is going to be exactly as they specify (hopefully). The second major risk is creating the specification, writing all of the code exactly how you want, and then realizing that your product is suffering because of poor design decisions. Examples of some possible ways your product could suffer would be: Taking far too long to implement a new feature because you didn't write software that follows the open/closed principle, a lot of repetition in the software since it's difficult for each individual programmer to see the big picture if they're just following rules, and lastly not allowing for the design to shape itself and overdesign. Designers may want to create this grand product with abstraction, upon abstraction, upon abstraction until you're working with a project that is far too cluttered than it needs to be.


As a developer myself one thing that I try to avoid is definitely overdesigning, I think it's easier to follow the pattern of [Red Green Refactor](http://www.jamesshore.com/Blog/Red-Green-Refactor.html) and create abstractions as they're needed, than to think of all possible abstractions before hand. Personally, I like to use UML as a guide especially when pairing on something specifically, it helps to draw it out in UML and discuss why you think this interface is necissary, or why this pattern should be used. The trick is not to follow the UML as law, and use it as more of a speculative design.