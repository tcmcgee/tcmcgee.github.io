---
title: "The Four Rules Of Simple Design"
layout: post
date: 2016-03-19 10:50
tag:
- blog
- 8thLight
- TDD
- Simple Design
- Four Rules Of Simple Design
blog: true
---

# The Four Rules Of Simple Design

When writing software, a lot of developers have a set of *rules* they live by, today I'm going to tell you about the four rules of simple design, why they work for me, and why they may not be for everyone. Without further ado, here they are:

1. Passes all tests
2. Expresses every idea we need to express. (clarity)
3. Contains no duplication of knowledge
4. Make it small

I'll give a quick summary of each rule and then talk about how these worked for me, and you can decide for yourself if they'd benefit your workflow.

The first rule is arguably the simplest, yet also the most important, you *have* to pass every test you write. This doesn't mean comment out the failing tests, or change the assertions to what the tests output the actual result is. Basically just make sure you're code works exactly how you've intended. Another aspect of this rule, that may require some implication, is that there **are** tests! Don't leave your code untested, make sure everything works.

The second rule is that every idea that needs to be expressed is expressed. In my opinion this rule is all about abstracting the original hard coded ideas into their own classes, functions, or at least renaming the variables. A great and common example of this is in the game of life. A lot of people are attempted to store the X and Y coordinates as just two random ints or perhaps a tuple of ints, when this is in fact the perfect place to abstract a `Location` object. Since in the game of life, you need to check a location for all of it's neighboring spots as well, there's definitely some more meet to this class. What should really make things jump out at you is the random numbers that show up without context like `world.getCell(0,0);`.

The third rule is simple upon first glance, but is probably the one I struggle with the most. This rule says that your code should maintain no duplication of knowledge, but what exactly does that entail? If there's a clear duplication of code I should abstract that into it's own function, for example if I want to get all the living cells instead of having a for loop in two different places that checks if each cell is alive, I should write a function that returns all the living cells. How far does this go though? Assuming I want to iterate through the world in at least one other spot and do something different, do I abstract applying a function to every element of a list, and returning a list of only ones that have the function return true or is that too much abstraction? In this case I think this is why the word *knowledge* plays such an important role in this rule. If I have the code to get the living cells in two different places I should abstract that, but if I have the code to get the living cells and the code to remove any cells that die next tick that isn't the same *knowledge*, so it probably doesn't need to be abstracted. You get a better feel for this rule with a little practice.

The fourth and final rule is to make it small. This rule essentially just means remove any dead code you can whether it be a single function, variable declaration, or half of your classes, you should strive to make your code as simple as possible.

These rules may *seem* simple, and quite frankly it's because for the most part they are. The point of these rules is to be general enough to be applicable in every piece of code you write, while being specific enough to be helpful to programmers of any level. The easiest way to think of these rules is as a checklist. After writing any amount of code consciously and purposefully go through each rule, and see if there's anyplace you can improve. The order of these rules does matter! Tests passing and the software working as intended is the most important part of any program, followed by the cleanliness of the code and leaving it understandable for any future developers. Now some people argue two and three are interchangeable, or in some cases three is more important than two. Personally I feel the above order is correct and nothing is more important than keeping your code legible.

These rules may not be for everyone though, they act only as a guideline for my development and I know there's going to be cases where rules 2-4 may not apply exactly. This iterative process reminds me a lot of red green refactoring, and has helped me out more than I can describe. It's definitely not for everyone though and it's a personal choice to decide whether or not it's for you. I hope you at least think about incorporating these four rules and this process into your workflow!
