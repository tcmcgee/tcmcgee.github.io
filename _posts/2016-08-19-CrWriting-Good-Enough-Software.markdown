---                          
title: Craftsmanship - Writing 'Good Enough' Software   
layout: post         
date: 2016-08-19 09:00                         
tag:                             
- blog                        
- Good Enough Software
- Craftsmanship
- Ownership
- 8th Light
blog: true                            
--- 

# Good Enough Software

In my past blogs I've talked about reading [Software Craftsmanship by Pete McBreen](https://www.amazon.com/Software-Craftsmanship-Imperative-Pete-McBreen/dp/0201733862), and today I'm going to continue down that series.

One of the topics Pete talks about is good enough software, and when you read his definition, that it's basically sacrificing clean code and a solid foundation and creating a bloated product from trying to finish too quickly, it's easy to say that you would *never* do that. Sadly, I had some first hand experience with good enough software, and that's on my current project.

Becca and I have been working on a tic tac toe api that's being consumed by an iOS application and a Javascript application. This api, is being run as Becca's java server (a milestone project for any apprentice) deployed on heroku. Locally everything worked wonderfully and as intended, but when we finally got the server and our application deployed on heroku, we were getting unexpected 503 responses. It seemed to be a socket problem, and it seemed like we didn't have the time to fix it, so we didn't.

The results of this problem seemed minor, "oh well, looks like we will just send the request until one works". Originally about 1/10 or so requests returned the 200 we intended, so in our iOS app we just wrote our work around and no one was the wiser, except the ridiculously long and inconsistent response times of course. When we finally got around to our javascript app, we implemeneted the same work around and found out that these 503 responses weren't being silently resubmitted and were metaphorically *blowing up* the console. To our mentors, this behavior wasn't okay and we weren't sent off to fix the issue.

Even though we had no idea where to start, we were able to dig through our code and fix the issue relatively quickly. That's a blog post for another time though. After our fix was implemented and deployed, it just worked. Every request would return a response!!! The benefits in our application's performance were unprecedented, and we could not have been happier to not have to deal with that (or the red wall in the console) anymore.

A valuable lesson was learned from this. We decided that our deployment was good enough and we only really needed it to work 1 in 5 times anyways. This inconsistency caused us to write our iOS and JS app based around something that was inherently broken, or code that was *good enough*. If i'm willing to let it happen once, how many more times would I let it happen before I draw the line? When will the whole project be lost because the code is full of work arounds to *good enough* software? Questions like these had a very clear answer, it is not acceptable to deploy known bugs even if it's *good enough*.