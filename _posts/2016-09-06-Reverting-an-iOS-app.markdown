---                          
title: Tutorial - Downgrading an iOS App's Version
layout: post         
date: 2016-09-06 09:00                         
tag:                             
- blog                        
- Consulting
- iOS
- Nike Running Club
- Downgrade
- 8th Light
blog: true                            
--- 

# The Problem


For a little background my girlfriend, Megan, and I have been training for a half marathon in November, the process has been a lot of fun and we've had some 'companions' along the way, one of which is the iOS App Nike+ Run Club. Over the weekend Megan finally got around to updating her things, this consisted of her OSx version, her iOS version, and finally each of her iOS apps (to be honest most of this was inspired by the 'zoom' feature being added to Instagram). Anyways one of the apps she ended up updating was Nike+ Run Club (NRC), she coincidentally hadn't done so in a while so she went straight from Version 4.8.7 to 5.0.2.

![IMAGE OF NIKE RUN CLUB APP](http://www.tomcmcgee.me/assets/images/NikeRunClub.png)

Now those of you who use the app, and have updated it know that version 5 has not been the most well received. That's putting it nicely, as 5.0+ is showing up with just under 1.5 Stars

![IMAGE OF NIKE RUN CLUB REVIEWS](http://www.tomcmcgee.me/assets/images/NRCReview.png)

When Megan updated she: Lost her entire training plan, was unable to recover the same version of her plan (Instead of distance to run they now use time to run), and a complete UI overhaul. It's safe to say she wasn't one bit pleased. I took her disapproval as a challenge, and a chance to prove that I've learned a thing or two sitting on the computer all day and got to work. If you follow this guide step by step you should be able to download and use any version of an iOS app that's compatible with your device.

# The Solution

## Requirements

* iPhone
* Mac
* iTunes
* USB to iPhone Cable
* [Charles](https://www.charlesproxy.com/)

## Easy Guide

### Part 1 - Setup
* Download Charles [here](https://www.charlesproxy.com/download/)
* Open Charles and Grant Permissions, enter your password.
* In iTunes go to 'My iPhone Apps' and Delete Nike+ Run Club if it's there

### Step 2 - Identify the version 
* In iTunes navigate to the Nike+ Run Club app page [here (click View in iTunes)](https://itunes.apple.com/us/app/nike+-run-club/id387771637?mt=8)
* Then make sure Charles looks something like this 
![CHARLES SAMPLE](http://www.tomcmcgee.me/assets/images/CharlesSample.png)
* Go back to iTunes and download the App's latest version 
![NRC Download Image](http://www.tomcmcgee.me/assets/images/NRCDownload.png)
* In Charles You should see something like this 
![Charles Buy-iTunes](http://www.tomcmcgee.me/assets/images/Charles-BuyiTunes.png)
* In the previous image you should see a request to 'p27-buy.itunes.apple.com' find the first occurrence of a 'buy.itunes.apple.com' url. Control + Click on it, and click 'Enable SSL Proxying'
* Back in iTunes  Go to 'My iPhone Apps' Delete the app again, and select 'move to trash'.
* Click the small broom in the top left of Charles to clear it.
* Navigate back to the 'App Store' portion of iTunes and click on the App's image to refresh the page.
* Download the Nike Run Club App Again
* In Charles find your 'buy.itunes.apple.com' URL and use the tiny arrow on it's right to expand it. Open another folder called 'WebObjects' and then each of it's subfolders. In the end you should see something called 'buyProduct'.
![BuyProductSample](http://www.tomcmcgee.me/assets/images/Charles-BuyProduct.png)
* Click on 'buyProduct' then in the middle of the page make sure the 'Contents' and 'XML Text' tabs are selected
![BuyProductClick](http://www.tomcmcgee.me/assets/images/Charles-BuyProductClick.png)
* In the bottom portion right under 'XML Text' scroll down through the XML until you see a key called 'softwareVersionExternalIndentifiers' with an array of integer tags beneath it. It should look like this: ![software versions](http://www.tomcmcgee.me/assets/images/Charles-SoftwareVersions.png)
* Scroll to the very bottom of the list and count back how many versions you want. Since i'm on version 5.0.2 I want to go back from 5.0.2 through 5.0.1, and 5.0.0 to 4.8.7, so my identifier should be the fourth version from the bottom. In general it seems I always need to add one, so the **fifth** from the bottom!
* Copy the code for the selected version (fifth from the bottom for NRC) and paste it somewhere you won't lose it. The code for version 4.8.7 of Nike Run Club is '816668851' I don't think that should change so you can probably use mine.
![VersionSelection](http://www.tomcmcgee.me/assets/images/Charles-VersionSelection.png)

* To check which version you are selecting copy the 'softwareVersionExternalIdentifier' and click on the blue pen in the top toolbar of Charles. (This should open a new 'buyProduct' with a blue pen next to it instead of curly braces.)
* With the new buyProduct open select the 'XML Text' tab along the bottom of Charles.
* At the very top of the file find the 'appExtVrsId' key with a string following it. The string should resemble the code you copied earlier mine looks like '818642267'
![VersionSubstitution](http://www.tomcmcgee.me/assets/images/Charles-VersionSubstitution.png)
* Replace it with the code you found earlier and click the 'execute' button at the bottom of Charles.
* This may open a new instance of charles and take a moment, but should open a new curly Braced 'buyProduct' which looks a lot like the first. If you scroll down far enough you'll find a key called 'metadata' which contains some information about the app. One of the bits it contains is the 'bundleShortVersionString' this should be the version version of the app you selected! Mine is 4.8.7! We're onto something here...
![VersionChecking](http://www.tomcmcgee.me/assets/images/Charles-VersionChecking.png)
* Repeat step 2 until the version in the metadata is the version you want to download!

### Step 3 - Substituting the Version
* Now you have the right version identification code (in my case '816668851') and you need to actually download it.
* Control + Click on the last curlyBraced (NOT BluePen) version of 'buyProduct' and click 'BreakPoints' towards the bottom.
* Now go back into iTunes, navigate to 'My iPhone Apps' control + click the app, delete it and move it to the trash.
* In the App Store download the application again, only this time Charles should pop up! It's letting you edit the request before it is sent!
* In the tabs at the top select 'Edit Request' and then in the tabs at the bottom select 'XML Text'. In the line following the 'appExtVrsId' delete the number between the '<string>' tags and replace it with your own version.
* Hit Execute - then execute again when it pops up a second time.
* After the download is finished navigate to 'My iPhone Apps' in iTunes, control + click on your app select 'Get Info' and check out the version.
![CharlesSuccess](http://www.tomcmcgee.me/assets/images/Charles-Success.png)
* It worked! I successfully downloaded Version 4.8.7 instead of 5.0.3!

### Step 4 - Putting the old version on your iPhone
* **NOTE:** You must delete the app from your iPhone before starting the step or the process will not work!
* Plug your phone into your computer with the old version in iTunes
* Navigate to your iPhone (this probably happens automatically)
* In the menu on the left side select Apps.
* Find the app you just downloaded and click 'install'
* In the very bottom right click 'Apply'
* Wait for your iPhone to Sync with iTunes
* If you did everything right enjoy your new (old) App!


### If you have any trouble, questions or comments, leave a comment!!!





