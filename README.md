# Eat da-Burger
This is a full-stack restaurant application that allows users to order any burger and then enjoy it. Data is persisted in the database allowing users to interact with other submitted orders. 

## What the project does
Eat-Da-Burger! lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.  Each burger in the waiting area also has a Devour it! button.  When the user clicks it, the burger will move to the right side of the page.  The app will store every burger in the MySQL database, whether devoured or not.

## Design & Technology
* Project uses a MVC (Model, View, Controller) design pattern that provides for better organized and maintainable code:
    * Model - burger.js
    * View - index.handlebars with (layout) main.handlebars
    * Controller - burgers_controller.js
    * _With manually created ORM using callbacks_
    * https://developer.chrome.com/apps/app_frameworks  
* Key technologies used to build this app are:
    * HTML and CSS -- Provides the means to create structured documents with style
    * Bootstrap -- Responsive Front-end framework
    * Handlebars -- Front-end templating engine
    * Node.js -- Server-side JavaScript environment
    * Express.js -- Node.js web server framework
    * MySQL -- Relational Database Management System (RDBMS)
    * .gitignore -- node_modules
    * Heroku -- Cloud Application Platform

## Challenges
* This project has a lot of file dependencies as illustrated.  Understanding the back-end flow was key to building out this project.
    * Server.js   <-  burgers_controller.js  <-  burger.js  <-  orm.js  <-  connections.js  <-  burgers_db
    * Node Server <-  Controllers (router)   <-  Models     <-  ----- Configuration ------  <-  MySQL Database
* Working with handlebars took some practice but again as understanding came, it became clear how to render the html back to the front-end.

## Link to [My Portfolio] 
(https://jonathanteeter.github.io/jtPortfolio/)


