---                          
title: Juggling Projects
layout: post         
date: 2016-08-29 09:00                         
tag:                             
- blog                        
- Pair Programming
- Recap
- 8th Light
blog: true                            
--- 

# Juggling Projects

This past Friday Becca and I had our mini-review board for our tic-tac-toe app (which you can play [here](http://beccanelson.is/tttaas-js/)) and got a lot of really good feedback. For those of you who may not know this application was 3 parts, an iOS tic-tac-toe, a Javascript browser tic-tac-toe and a backend API running on a home made HTTP server and Clojure tic-tac-toe. This one large project gave us a few valuable experiences that are tough to come by as an apprentice. One of the biggest is pair programming, which I talked about a lot in my last blog post so I'm going to completely ignore it in this one. Another big point is working with code that you didn't write. As an apprentice most of our projects are 'green field' which basically just means we take everything from the top. This project provided the interesting task of utilizing Becca's Java HTTP server and Clojure tic-tac-toe, we had to make some changes to both of them to get them to correctly interface with our intended API. This problem was further expanded when we had to deploy our API to heroku (something the server had never done before), and when we later had to add a new client because we were in too big of a hurry to get something that works and then when it finally did we forgot to go back to the API's code becuase we just didn't have to change it anymore. Something that really stuck with me from our mini-review board was that "as an apprentice it's almost always better to have 80% of the project 100% done than 100% of the project 80% done". That line really resonated with me since as an apprentice at 8th Light it's our job to learn, and work towards becoming a software crafter. If there's one thing a software crafter doesn't do it's call something done when it's only 80% complete, and if I'm in the habit of doing that as an apprentice it will affect the accuracy of my estimates, and I'll add less value to a project. The morale of the story is don't rush things. Even if in the moment it seems better to have a working product to demo, if you don't sit down and refactor it all right after you're really going to regret it down the line.