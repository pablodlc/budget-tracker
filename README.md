# budget-tracker

## Description

Click the following link to visit the deployed application: [budget-tracker](https://budget-tracker-pablodlc.herokuapp.com/).

Check out the YouTube video of **budget-tracker** in action by clicking the following link: [**budget-tracker**](https://www.youtube.com/watch?v=v0xPYAg_BtM).

**budget-tracker** got that PWA! ⚡  
**P**rogressive **W**eb **A**pplications ("**PWA**s") are powerful sites with a ton of utility. Any website can be made into a **PWA** by a loving programmer. **PWA**s have two awesome features: The first of their strengths is that they're functional regardless of connectivity. The second is that they can be installed as an application to nearly any modern device the user may have.  

**PWA**s work regardless of their connectivity by running self-calling functions to determine their connection status. The first time a device connects to a **PWA**, a database is saved to the device and to the server. When any data is changed while connected, both databases are updated. If the application loses its connection, it stores any changes locally, running normally. When the application reconnects, it updates the server from the local database. Because of the applications running from two databases, they stay persistent.  



Or watch the gif below!  
![**budget-tracker**](./assets/budget-tracker.gif)

This application was written following the guidelines laid out in the provided [User Story](#User%20Story) and [Acceptance Criteria](#Acceptance%20Criteria).

### Table of Contents

-   [User Story](#user%20story)
-   [Acceptance Criteria](#acceptance%20criteria)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Future Developments](#future%20developments)
-   [Questions?](#questions)

#### User Story

> AS AN avid traveler  
> I WANT to be able to track my withdrawals and deposits with or without a data/internet connection  
> SO THAT my account balance is accurate when I am traveling

#### Acceptance Criteria

> GIVEN a budget tracker without an internet connection  
> WHEN the user inputs an expense or deposit  
> THEN they will receive a notification that they have added an expense or deposit  
> WHEN the user reestablishes an internet connection  
> THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated

## Installation

As listed in `package.json`, this application has the following dependencies:  
![dependencies](./assets/dependencies.jpg)  
At the root level of the application, open the terminal and run `npm i`.

## Usage
- [Starting **budget-tracker**](#starting-budget-tracker)
- 

### Starting **budget-tracker**
The application can be started anytime at its deployed location by clicking this link: [budget-tracker](https://budget-tracker-pablodlc.herokuapp.com/).

To start the app locally, there are three commands that can be sent in the terminal at the root of the application:

-   `npm start`
-   `node server`
-   `nodemon server`

All three of which are demonstrated in the gif below:  
![budget-tracker](./assets/start.gif)  
  
---  

Reference the diagrammed image below, and its associated list items immediately following it, for instructions on using the **budget-tracker** app:  
![budget tracker markup](./assets/bt-markup.jpg)

1. `Header`: This is the header for the app, **budget-tracker**. The dollar amount dynamically updates based on the transactions.
2. `Transaction Title`: When entering a transaction, enter the transaction name here.
3. `Transaction Amount`: Enter the dollar amount of the transaction here.
4. `+Add Funds Button`: After entering both the `Transaction Name` and `Transaction Amount`, click this button to **ADD** the `Transaction Amount` to the `Total`.
4. `-Subtract Funds Button`: After entering both the `Transaction Name` and `Transaction Amount`, click this button to **SUBTRACT** the `Transaction Amount` to the `Total`.
5. `Transactions Table`: This is a two-column table that records the `Transaction Names` and `Transaction Amounts` the user has entered into **budget-tracker** as rows in descending order in order of newest to oldest. 
6. `Total Over Time Graph`: This graph dynamically generates and updates itself with the data from the user's input. 
    - On the Y-Axis is the dollar amount; the top limit being the highest the total has been in this database's table. Conversely, the minimum dollar amount is the lowest total the database's table has been.
    - On the X-Axis is the time span of the graph, in ascending order from left to right.  

## Future Developments

I was almost done. I can't delete `Products` yet. That would be the first thing to address when revisiting this application. But as of this submission, I still have some catching up to do in class, so I gotta let it go!

## Questions?

Please feel free to contact me with any questions or comments, or visit my GitHub to see more of my work.  
[Contact me by email](mailto:pablodlc@gmail.com)  
[GitHub User pablodlc](https://github.com/pablodlc)  
[e-comm GitHub Repo](https://github.com/pablodlc/e-comm)

**e-comm** made with ❤️ by pablodlc
