# ShopAPI 

<img src="https://cdn-icons-png.flaticon.com/512/3094/3094456.png" align="right"
     alt="ShopAPI  logo by Masood Zafar" width="150" height="120">

A backend API built in Hapijs that implements a basic database in postgreSQL for a chain of shops.

* **CREATE** routes for tables.
* **Update** routes for tables.
* **Delete** routes for tables.
* **GET** routes for tables.
* **GET** routes with filteration and search.

## Technologies used in this project:

<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<img align="left" alt="Node.js" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
<img src="./gitResources/5.png" img align="left" alt="Typescript" width="26px">
<img src="./gitResources/2.png" img align="left" alt="Hapi.js" width="26px">
<img src="./gitResources/3.png" img align="left" alt="postgres.js" width="26px">
<img src="./gitResources/4.png" img align="left" alt="sequelize.js" width="26px">


<br />

---

## Getting started:

To get started first run the following command to install the required modules from npm: 

```shell
npm install
```
Then build the project using the following command:

```shell
npm run build
```

To run the project make sure you are in **src directory** and then run the project using the command:

```shell
npm run start
```

When running the project for the first time make sure you comment out **connectSequelize()** and uncomment **createDatabase()** and **createTables** 
and build and run the project. After that stop the server uncomment **connectSequelize()** and comment out **createDatabase()** and **createTables**. 
Build and run the project again.

---

## Note

Feel free to download the project and build upon it. You can add
new features, refactor the code if you'd like. Happy coding!
