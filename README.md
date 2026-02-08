# Welcome to flights Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the development project
-Create a `.env` file in the root directory and add the following environment variable
   - `PORT=3000`
- Inside the `serc/config` folder create a ne wfile `config.json` andthen add the following piece of json


```
{
  "development": {
    "username": "YOUR_DB_LOGIN_NAME",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flight_search_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}



```