---                          
title: Craftsmanship - Failing Early and Often        
layout: post         
date: 2016-08-17 09:00                         
tag:                             
- blog                        
- Software Engineering
- Craftsmanship
- Overdesigning
- TDD
- 8th Light
blog: true                            
--- 

# Failing Early and Often

I have been reading [Software Craftsmanship by Pete McBreen](https://www.amazon.com/Software-Craftsmanship-Imperative-Pete-McBreen/dp/0201733862), and he talks a lot about the differences between Software Engineering and Software Craftsmanship.
When talking about engineering, he tries to relate software engineering to the physical world. The word that relates these two is engineering, and most of the time in practice it means rigorous planning before building something. For example before they produce a car they make plans for each part, how they're going to interact and their exact size and dimension; that works fairly well, with each car usually not having any mision-critical defects. According to Pete, a car has rougly 5,000 parts; comparing this to a real world software application which can have hundreds of thousands of lines of code each possibly independent of the rest of the application this whole idea of a blueprint which followed exactly and everything just working isn't going to happen. There's no way to know every part works correctly and then all of those parts work together correctly, etc. In my last post I talked about maybe sketching out a general idea of how you think it's going to look and then throwing it out, and that's actually what I'll suggest here.

Software isn't like a car in the sense that it has physical parts that you have to order in specific sizes; when writing software you can swap out any piece you want with a new one with no cost (besides time, and the cost of labor), that's why I believe it's best to just dive in to writing tests, than writing code and when things don't behave how you think they should you rip them out and stick in something new. This iterative process of telling what works and what doesn't, replacing parts that seem like they don't fit, and making big design decisions along-side a technical lead who has the projects best interest in mind is what I think make a great software consultant and are a few characteristics that I feel like a great Software Crafter should have.