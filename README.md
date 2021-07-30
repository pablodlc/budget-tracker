# budget-tracker

## Description

Click the following link to visit the deployed application: [budget-tracker](https://budget-tracker-pablodlc.herokuapp.com/).

**budget-tracker** is

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
To seed the database in MySql:

-   After the dependencies are installed, open MySql with the command `mysql -u root -p`, where `root` is your user name, followed by a prompt for your MySql password.
-   In the MySql shell, enter the command `source db/schema.sql;`
-   After the database is seeded, enter the command `exit`

To seed the database from the command line, enter the following command in the terminal: `npm run seed`

## Usage

To start the application, open the terminal at the root of the application with and enter the command `npm start`. If successful, the last line of the response in the terminal will be `App listening on port 3001!`. The application can then be opened using an API client or in the browser at [localhost:3001](localhost:3001). The gif in the [**Description**](#description) section demonstrates the application being used on [Insomnia](https://insomnia.rest/).  
**e-comm** uses basic CRUD routes. The following URLs can fetch their namesake's data from the database.

-   [localhost:3001/api/categories](localhost:3001/api/categories)
-   [localhost:3001/api/tags](localhost:3001/api/tags)
-   [localhost:3001/api/products](localhost:3001/api/products)

To search for an item by id, use the following URLs, using the correct `id` as the number at the end.

-   [localhost:3001/api/categories/1](localhost:3001/api/categories/1)
-   [localhost:3001/api/tags/2](localhost:3001/api/tags/2)
-   [localhost:3001/api/products/3](localhost:3001/api/products/3)

To create a new item in the database, use the following URLs to `POST` into the corresponding data tables.

-   [localhost:3001/api/categories](localhost:3001/api/categories)
-   [localhost:3001/api/tags](localhost:3001/api/tags)
-   [localhost:3001/api/products](localhost:3001/api/products)

Then click on the `Body` dropdown menu below the address bar and select `JSON`. Ensure the URL is set to `categories`, `tags`, or `products` accordingly. Then enter the following JSON in the body and hit send:

```js
{ "category_name": "your category name here" }
```

```js
{ "tag_name": "your tag name here" }
```

```js
{
  "product_name": "your category name here",
//   `24.99` is a variable below. Enter the appropriate price here
  "price": 24.99,
//   `10` is a variable below. Enter the appropriate number of items in stock here.
  "stock": 10,
//   `tagIds` is an array associating ids to the product being created. Based on our `tag-seeds.js` file, the numbers in `[1, 2, 3]` below would associate the tags `"rock music"`, `"pop music"`, and `"blue"` with these new `tagsId` array items. The reason those three tags are associated to the new product is because 1, 2, and 3 are their ids, respectively.
  "tagsId": [1, 2, 3]
}
```

Below is an image from Insomnia demonstrating how to `POST` (create) a new category in **e-com**. Just change the .JSON content accordingly.  
![post-cat_name](./assets/POST-catName.jpg)

To update an item in **e-comm**, choose the `PUT` route in Insomnia, using the following addresses as examples where the numbers represent ids.

-   [localhost:3001/api/categories/1](localhost:3001/api/categories/1)
-   [localhost:3001/api/tags/2](localhost:3001/api/tags/2)
-   [localhost:3001/api/products/3](localhost:3001/api/products/3)

Below is an image from Insomnia demonstrating how to `PUT` (update) the `category` with the id of 1.  
![update by id](./assets/PUT-cat-by-id.jpg)

To delete from **e-comm**, choose the `DELETE` route in Insomnia, using the following addresses as examples where the numbers represent ids.

-   [localhost:3001/api/categories/1](localhost:3001/api/categories/1)
-   [localhost:3001/api/tags/2](localhost:3001/api/tags/2)
-   [localhost:3001/api/products/3](localhost:3001/api/products/3)

Below is an image from Insomnia demonstrating how to delete the `tag` with the id of 2.  
![delete by id](./assets/DELETE-tag-by-id.jpg)

## Future Developments

I was almost done. I can't delete `Products` yet. That would be the first thing to address when revisiting this application. But as of this submission, I still have some catching up to do in class, so I gotta let it go!

## Questions?

Please feel free to contact me with any questions or comments, or visit my GitHub to see more of my work.  
[Contact me by email](mailto:pablodlc@gmail.com)  
[GitHub User pablodlc](https://github.com/pablodlc)  
[e-comm GitHub Repo](https://github.com/pablodlc/e-comm)

**e-comm** made with ❤️ by pablodlc
