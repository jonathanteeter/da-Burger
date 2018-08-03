# Eat da-Burger
This is a full-stack restaurant application that allows users to order any burger and then enjoy it. Data is persisted in the database allowing users to interact with other submitted orders. 

## What the project does
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.  Each burger in the waiting area also has a Devour it! button.  When the user clicks it, the burger will move to the right side of the page.  The app will store every burger in a database, whether devoured or not.

## Design & Technology
* Project uses a MVC design pattern:
    * Model - burger.js
    * View - index.handlebars with (layout) main.handlebars
    * Controller - burgers_controller.js
    * (With manually created ORM using callbacks)
    * https://developer.chrome.com/apps/app_frameworks  
* Key technologies used to build this app are:
    * Bootstrap (Front-end framework)
    * Handlebars (Front-end templating engine)
    * Express.js (Server framework)
    * Node.js (Server-side JavaScript environment)
    * MySQL (RDBMS)
    * Heroku (Cloud Application Platform)

## Challenges
* This project has a lot of file dependencies as illustrated.  Understanding the back-end flow was key to building out this project.
    * Server.js   <-  burgers_controller.js  <-  burger.js  <-  orm.js  <-  connections.js  <-  burgers_db
    * Node Server <-  Controllers (router)   <-  Models     <-    --- Configuration ---     <-  MySQL Database
* Working with handlebars took some practice but again as understanding came was fun to render the html back to the front-end.

## Link to [My Portfolio] 
(https://jonathanteeter.github.io/jtPortfolio/)


