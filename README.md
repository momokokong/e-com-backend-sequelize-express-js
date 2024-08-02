# e-com-backend-sequelize-express-js
[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
***
## Table of content
- e-com-backend-sequelize-express-js
  - [Description](#Description)
  - [Walkthrough](#Walkthrough)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Tests](#Tests)
  - [Contributing](#Contributing)
  - [License](#License)
  - [Questions](#Questions)
***
## Description
This is a project to mimic an e-commerce website backend that utilizes Node.js Sequelize and Postgres database to handle products, categories and tags.  The api routes, database schema and seeded data are provided by UCB edX bootcamp.   

## Walkthrough
- This is a video walkthough of the installation and API tests. [Walkthrough video](https://drive.google.com/file/d/1mWf51VsKpMft6WrzfPKEIoNwZ91pU4zk/view)

## Installation
- The backend requires npm and Postgres.  
  - [Node.js/npm installation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
  - [Postgres installation](https://www.postgresql.org/download/)
1. Clone the repo: https://github.com/momokokong/e-com-backend-sequelize-express-js
2. In the terminal, move to where the cloned local repo is.
3. `npm install` to install the necessary node modules.
4. Set up the database schema and seeds data: In the terminal go to the folder db/
   - `psql -U postgres` you will need to enter the password for Postgres user postgres. In the Postgres bash:
     - `\i schema.sql` 
     - exit by `\q`
5. `npm run seed` to seed the database
6. `npm run start` to start the server, which without environmental variable should be listening port 3001. 

## Usage
1. Given this is to test back end, see [Tests](#Tests) for using Insomnia to test the API from http://localhost:3001 

## Tests
1. Requires [Insomnia](https://insomnia.rest/download), API:
   - Category 
     - GET `http://localhost:3001/api/categories/` returns all categories and associated products
     - GET `http://localhost:3001/api/categories/:id` returns the category with the specific id
     - POST `http://localhost:3001/api/categories/` creates a new category and returns the category
       - body format: 
         ```
         {
           "category_name":"Cat"
         }
         ```
     - PUT `http://localhost:3001/api/categories/:id` updates the category with the specific id, same body format as POST
     - DELETE `http://localhost:3001/api/categories/:id` removes the category with the specific id
   - Tag
     - GET `http://localhost:3001/api/tags/` returns all tags and associated products
     - GET `http://localhost:3001/api/tags/:id` returns the tag with the specific id
     - POST `http://localhost:3001/api/tags/` creates a new tag and returns the tag
       - body format: 
         ```
         {
           "tag_name":"Cat"
         }
         ```
     - PUT `http://localhost:3001/api/tags/:id` updates the tag with the specific id, same body format as POST
     - DELETE `http://localhost:3001/api/tags/:id` removes the tag with the specific id
   - Product 
     - GET `http://localhost:3001/api/products/` returns all products and associated tags and categories
     - GET `http://localhost:3001/api/products/:id` returns the product with the specific id
     - POST `http://localhost:3001/api/products/` creates a new product and returns the product
       - body format: 
         ```
         {
           "product_name": "Cat Light Saber",
           "price": 788.00,
           "stock": 100,
           "tagIds": [4, 8]
         }
         ```
     - PUT `http://localhost:3001/api/products/:id` updates the product with the specific id, same body format as POST
     - DELETE `http://localhost:3001/api/products/:id` removes the product with the specific id
   

## Contributing
Contact me.  Find my information in the [Questions](#Questions) section.

## License
This project adopts WTFPL license practices. Check the website for license details: [License: WTFPL](http://www.wtfpl.net/about/)

## Questions
[momokokong's GitHub profile.](https://github.com/momokokong)

[Po Shin Huang Linkedin profile](https://www.linkedin.com/in/poshinhuang/)

