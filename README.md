# LE DROIT A LA DECONNEXION

"Le Droit à la Déconnexion" is a website destined to motivate companies to implement the right for their employees to disconnect outside of working hours. Former or current employees can grade and leave a review about the respect of this right in their company.

## Installation

Use npm to init the projet on both Front & Back. All dependencies are listed in their respective package.json.

```javascript
npm i
```
Then create a .env in root directory FRONT 

```env
REACT_APP_BACK= PORT_SERVEUR

REACT_APP_FRONT= PORT_FRONT
```
Last, you need to create a conf.js in Back/Route ( next to index.js ) & use this template to connect your database with your server.
```javascript

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '', // server adress
  user: '', // username
  password: '', // password
  database: '', // database name
  port: 4100,
});

module.exports = connection;
```


## License
[WildCodeSchool](https://wildcodeschool.fr/)
