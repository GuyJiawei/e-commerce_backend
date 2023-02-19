# E-Commerce Backend

  ![License Badge](https://img.shields.io/badge/license-MIT-green.svg)

  ## Description
  E-commerce, the largest sector of the electronics industry, generated an estimated $29 trillion in 2019. To serve businesses of all sizes, e-commerce platforms like Shopify and WooCommerce provide a suite of services. This project aims to explain the fundamental architecture of such platforms.

  The E-commerce Backend is a REST API designed for an internet retail website. It's built on top of an Express.js server that uses Sequelize, a promise-based Node.js ORM, to interact with a MySQL database. Sequelize supports various relational databases like Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server.

  This E-commerce backend offers API routes that map to the standard CRUD operations for each data group. Using these routes, you can:

  - Create new categories, products, and tags
  - View existing categories, products, and tags
  - Establish associations between different entities
  - Update categories, products, and tags
  - Delete entries from the database
  
  To make this E-commerce website fully functional, you only need to build a simple front-end application that calls the API routes. Alternatively, you can directly access the API routes from your browser to see the raw data returned by the server.

  ## Table of Contents

  * [Installation and Usage](#installation)
  * [Usage](#usage)
  * [Contributing](#contrubuting)
  * [License](#license)
  * [Questions](#questions)

  ## Installation and Usage

  - Clone the repository and run an integrated terminal.
  - Enter 'npm i' to download and install the required dependencies.
  - Create .env file and add: 
  - `DB_NAME='employees_db'`
  - `DB_PASSWORD='INSERT YOUR SQL PASSWORD'`
  - `DB_USER='root'`
  - Open an integrated terminal and enter `mysql -u root -p`, enter password to start MySQL.
  - Enter `source db/schema.sql` to create the database.
  - Enter `npm run seed` to create the example data.
  - In the terminal enter `node server.js` and the application will run.

  ## Contributing

  Contribution to this project will not be accepted, unfortunately. Thank you for your interest!

  
  ## License
  - MIT
  - https://choosealicense.com/licenses/MIT/
  - A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
  

  ## Questions

  If you have any questions or require further information, please contact me at:

  - GitHub: https://github.com/GuyJiawei
  - Email: guy.jiawei.anderson@gmail.com

  ## Demo
  Full video at: https://drive.google.com/drive/folders/1wo8WE9C5EeIWv-RiO2m5RmX95_pGrTps?usp=sharing

  ![GIF](./Assets/Untitled_%20Feb%2019%2C%202023%2011_16%20AM.gif)
