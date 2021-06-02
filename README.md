Book 3 - DeShawn's Dog Walking Service

In this book, you will develop the core skill of debugging JavaScript code in a browser. You will also be introduced to handling click events when the user interacts with a web page.

Using the debugger is how you will be expected to diagnose your code and fix bugs during your time at NSS. Use of other strategies like console.log() are to be used sparingly.

Using the Debugger
As a software developer, the developer tools in the browser are where you will spend about 75% of your time and focus. Being comfortable with the debugger and stepping through your code one line at a time to see what's happening is a crucial, core skill for a junior developer.

Knowing Where to Look
This video introduces you to understanding how to read an error in the developer tools and knowing where to go look into your code for the bug.



Breakpoints and Inspecting Values
In this video, you will see how to set breakpoints, evaluate the values of variables, and how to step through your code one line at a time.



Chrome Dev Tools Walkthrough Demo
Now that you've seen a few quick walkthroughs of how to use the Developer Tools to debug your code, your next job is to try it out.

Visit the Debug JavaScript site and follow the 7 step demo on using the Developer Tools to find and fix issues in JavaScript.

Fixing DeShawn's Application
DeShawn hired some consulting agency from overseas to build a simple application that displayed the following information.

A list of cities where his service is provided.
A list of dog walkers that are currently working for him.
A list of pets that are currently being given walks by his employees.
A full list of current assignments.
Unfortunately, the overseas developer had an unfortunate noodle-related accident, and the only version that DeShawn has is filled with bugs. Your job is to fix the bugs.

Here's what the output of the application should look like.



Setup
Run the following command in your terminal.

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/nashville-software-school/client-side-mastery/cohort-48/book-3-deshawns-dog-walking/chapters/scripts/deshawn-setup.sh)"
That script will create the workspace/dog-walking directory for you. Just cd to that directory and open it in Viual Studio Code.

Then run the serve command and open the URL in Chrome.

Bugs to Fix
This table shows you how many bugs there are in each module.

Main	CityList	Walkers	Assignments	CSS
1	3	3	3	3
Refer to the videos in the previous chapter to use your Chrome Dev Tools, and the debugger to find and fix the issues.

Do not use any console.log() statements.

Fixing Brewed Awakenings Receipts
Brewed Awakenings is a local coffee shop that wants a web site that shows which products they are selling, and which employee is selling them. Here's all of the information they want on their web site.

A list of employees.
A list of products.
A list of orders that shows which product was sold, and which employee sold it.
Here's what the output of the application should look like.



Setup
Run the following command in your terminal.

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/nashville-software-school/client-side-mastery/cohort-48/book-3-deshawns-dog-walking/chapters/scripts/brewed-setup.sh)"
That script will create the workspace/brewed-awakenings directory for you. Just cd to that directory and open it in Viual Studio Code.

Then run the serve command and open the URL in Chrome.

❗
Use the debugging tools. Do not use any console.log() statements to fix this application.

Entity Relationship Diagrams
In this chapter, you are going to use, discuss, and learn how to create your first Entity Relationship Diagram (ERD). An ERD is a vital tool for software developers so that the data and the relationships between them can be visualized.

Learning Objectives
You should be able to explain the purpose of an ERD.
You should be able to identify resources, fields, primary keys, and foreign keys on an ERD.
You should be able to define resources, their fields, and their relationships in dbdiagram.
You should be able to explain what a 1 -> many relationship is.
Videos to Watch
Entity Relationship Diagram (ERD) Tutorial - Part 1
Entity Relationship Diagram (ERD) Tutorial - Part 2
Video Walkthrough
Now that you have been introduced to the vocabulary and concepts of visualizing the resources in a database, watch this next video for defining an ERD for DeShawn's Dog Walking service.

Entity Relationship Diagram for Brewed Awakenings
Look in the database.js module and identify the resources, the fields/attributes on each resource, and the relationship between the three resources used by the application.

Products
Employees
Orders
Use dbdiagram to visualize your database.

There should be two 1 -> many relationships visualized in your ERD. They both will converge on a single entity.

This is a great opportunity to discuss these concepts with your teammates and your instruction team, because if you don't understand your data structure, data types, and relationships, then it simply doesn't matter how much knowledge you have of a programming language.

All programming languages are written with one goal in mind - how to manipulate and represent data that is stored in a database.

It is crucial that you spend time now to get the basic vocabulary and understanding of these concepts.

Event Listener to Show Service Area
Time for your first event listener. You are going to use your debugger to step through the code to see how it all works.

Add the following code after the import statement in the Walkers module.

workspace/dog-walking/scripts/Walkers.js
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    window.alert(`${walker.name} services ${walker.city}`)
                }
            }
        }
    }
)
Inside the for..of loop in the existing code, update the line of code to be the following code.

walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
Refresh your browser to load the new code.

Then click on some of the walkers. You should see the name of the city the walker works in appear in an alert box.

animation of clicking on a walker

Step Through the Code
Open the Walker.js file in your developer tools.

Open your dev tools.
Click on the Sources tab.
Use the keyboard shortcut of ctrl+p on Windows or cmd+p on Mac.
Type in the name of the file and select it.
Put a breakpoint on the following line of code.
const itemClicked = clickEvent.target
Click on a walker.
Use the step over icon to run each line of code and examine what the values of the variables are.

Viewing Product Prices on Click
Using code from the last project as an example, attempt adding a click event listener that presents an alert box showing the price of a product when it is clicked by the user.



If you find yourself creeping up on 30 minutes of trying to get the code to work, it's time to go to a peer, or an instructor for assistance.

As always, you can peek at most of the solution.

Displaying Number of Products Sold
Using code from the last project as an example, attempt adding a click event listener that presents an alert box showing how many products an employee has sold when their name is clicked.



If you find yourself creeping up on 30 minutes of trying to get the code to work, it's time to go to a peer, or an instructor for assistance.

As always, you can peek at most of the solution.

Who's Walking Whom
Using the event listener code provided as an example, see if you can update the RegisteredPets module to capture when a user clicks on a pet. When the user does click a pet, display an alert that says who is currently walking it.



💡
Make sure you import the walkers state into the module.
💡
You will need another for..of loop inside a for..of loop. It's called a nested loop.
💡
You can avoid the nested for..of loop by using the .find() array method.
You can also take a peek at most of the solution.

New City State
Your walker data structure currently has city as a key on each object with a value of a string. That's fine for such a small scale of dog walking employees. Over a span of years, though, DeShawn significantly expands the number of people in each city that walk dogs.

This means that the string value of, say, "Chicago" is repeated many times on the walker objects. Unfortunately, this quickly leads to data inconsistencies as the person creating the objects mistakenly types in "Chigago" for one person, and "Cihcago" for another.

This happens far too often when humans are asked to manually enter in the same data into a database over and over again. We're awesome at making mistakes.

What would alleviate this problem is having the string of "Chicago" only entered once in the entire database, and the each walker would reference that string.

This means that the walker data struture should no longer have a city key, but rather a cityId key. The value would now be an integer foreign key to an object in a new collection called cities.

const database = {
    cities: [
        {
            id: 1,
            name: "Chicago"
        }, ...
    ],
    walkers: [
        {
            id: 1,
            name: "Alphonse Meron",
            email: "ameron0@mashable.com",
            cityId: 1
        }, ...
Your task is to move all of the current city names into a cities collection in your database, and have each walker object reference the correct one via a foreign key.

This will also mean changing, a.k.a. refactoring, your existing code for the city list, and for the event listener on the walker list that shows an alert for that walker's city.

Events and Debugging Assessment
Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners.

This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

Event Listeners to Create
When the kid name is clicked, it should display their wish.
When the celebrity name is clicked, it should display their sport.
The pairings list should should contain the pairing in the following format.
{child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
Below is an animation showing how the application should look when complete and how the event listeners should work.



Setup
Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

Make sure you are in your workspace directory
git clone {github repo SSH string}
cd into the directory it creates
code . to open the project code
Use the serve command to start the web server
Open the URL provided in Chrome
Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

Deep Learning
Another reminder from the instruction team. This is NOT A TEST. We are not looking for 100% completion, although if you can make it work completely, then huzzah for you.

What we are looking for is effort, critical thinking about the concepts, creative thinking to bind the concepts together for a solution, and collaboration with your teammates and instruction team.

If you only get 50% of it complete, but display the above Core Skills and can demonstrate understanding of the fundamental code concepts, then you are learning and growing - which is what we care about.