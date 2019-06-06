# rest-mocha-template with mysql

Install mySQL from https://dev.mysql.com/downloads/ 
MySQL Community Server
MySQL Workbench

Start mySQL

Create user 'newuser', database 'one', table 'user_login', column 'user_email', column 'user_password'

To run the tests open two terminal windows and run:

1. `yarn start`
2. `yarn test`

Add new users: POST http://localhost:3000/api/users email password

