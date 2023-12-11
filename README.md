# Client Organizer

This is a mobile application for  the INF654 Mobile Web Development final project.

## Description

The purpose of this application is to show my web development skills I learned in class. It's a client organizer where the user can store potiential and current clients information into a database.

 ## Features
 This application provides a database hosted by google to store contacts in
 
 1. Push notifications and messaging hosted by OneSignal, where I can notifiy my users and target specific groups of users. when the app loads in a browser for the first 
 time, it will allow the user to set the permission if they want to accept push notifications onto their device. 

 2. Offline Mode, is enabled on this device, an IndexedDB, static, and dynamic caching is enable onto this application

 3. An easy to use user inerface for people in a hurry that would not to spend a lot of time learning how to the use the application

 4. User Autentication where the user has a sense of privacy, and can use from any device that supports progressive web applications.

 5. A service worker that impliments install, registration, waiting, and active functionality


## Instructions
 1. Open VS code and open up a terminal, make sure you have NPM and Git installed. 
 2. Use NPM and GIT to clone the application  with the command git clone https://github.com/cierra00/client-organizer.git.
 3. Using the terminal or VS code. Open the repository you just downloaded/cloned.
 4. Using the VS code extension LiveServer click go live.
 5. In the address bar on the browser, there is an icon to install the application.
 6. You can also just use it as a web application as well.
 7. Optionally you can connect your cell phone to the same network as your PC and type in your ip address with
    a :5000 into your address bar of the browser to view on mobile.
    
## Authors

Cierra Ray
I used the demo project from class to build of off for more development in the course. 


## Version and bug notes
When the user logs in, there is a glitch where the page is not reloading.
CacheAll is only working some of the time. 
This version of the application is not a stable release, it is just inteneded for demonstration on building a web application.

The application will allow a user to register, login, and logout, however database data is present when application loads, user information will 
dispaear after user logs out. 

Offline mode is a little buggy due to catchAll giving some occasional errors. 

Attempted to use fiebase messaging, but ran into bugs, so I used a more simple push messaging service.

I would like to recreate this application using React, where some of the bugs can be resolved. 

# License
This project is a final project for class and is not to be redistributed. 

