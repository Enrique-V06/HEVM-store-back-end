# HEVM-store-back-end

## Description

This proyect was done to practice and reinforce the knowledge of sequelize by creating relations between models and creating endpoint that acheive certain functions
like get all items from a model, get a single item by it´s ID, create new items, update and delete items from a model.

## Installation & Usage

Just clone the repo, and run the next commands in the order provided:
- `npm i`
- `mysql -u <yourusername> -p`
- Then enter your MySQL password when prompted to do so.
- When in the MySQL ambient `SOURCE db/schema.sql;`
- `exit` or `quit`
- After exiting the MySQL ambient enter the following command to seed the database created by the schema:
    - `npm run seed`
- Finally run the next command to start the application: `node server.js`

## Link

[Video](https://www.youtube.com/watch?v=xNiXxhhIm8s)

## Credits

This proyect was done by me with starter code provided by the Fullstack Web development bootcamp.
