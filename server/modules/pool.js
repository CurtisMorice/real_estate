//require in pg /postgres
const pg = require('pg');

//not a function, is an element of Pool
const Pool = pg.Pool;

//name of DB 
const DATABASE_NAME = 'real_estate';

//configuration
const config = {
    database: DATABASE_NAME, //the name of the database to connect to
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
};
// everything above is to create what to pass into the pool variable
const pool = new Pool(config); // creating new object using the config attached to the pool

pool.on('connect', (client) => {
    console.log(`Connected to the DATABASE connection ${DATABASE_NAME} from ${client}`);
});
pool.on('error', (err, client) => {
    console.log(`Connected to the DATABASE connection ${client} from ${err}`);
    process.exit(-1); //used to exit the db
});

module.exports = pool;