//requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//ports
const port = process.env.PORT || 5000;

//uses
app.use(express.static('server/public'));
app.use(bodyParser.json());


//router
const real_estateRouter = require('./modules/routers/real_estate.router');
app.use('/real_estate', real_estateRouter);

//spin UP
app.listen(port, () => {
    console.log(`you awake PORT 500`);
});