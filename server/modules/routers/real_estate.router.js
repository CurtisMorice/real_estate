const express = require('express');
const router = express.Router();
const pool = require('../pool');


//router.get
router.get('/', (req, res) => {
    console.log('In real_estate GET router ', res);

    const queryText = `SELECT * FROM listings`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            res.sendStatus(500);
        });
}); // end GET

//router.post
router.post('/', (req, res) => {
    console.log('In real_estate POST router ', req.body);
    let newListing = req.body;
    const queryText = `INSERT INTO listings ("cost", "sqft", "type", "city", "image_path")
VALUES($1, $2, $3, $4, $5);`;
    pool.query(queryText, [newListing.cost, newListing.sqft, newListing.type, newListing.city, newListing.image_path])
        .then((result) => {
            console.log(`successful add of listing!`, req.body);
            res.sendStatus(200);
        })
        .catch((error) => {
            res.sendStatus(500);
        });

}); // end POST


//router.delete
router.delete('/:id', (req, res) => {
    const realEstateId = req.params.id;
    console.log('In real_estate DELETE router ', req.params.id);
    const queryText = 'DELETE FROM listings WHERE id=$1';
    pool.query(queryText, [realEstateId])
        .then((result) => {
            console.log(`successful DELETE of listing`, result);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error DELETE`, error);
            res.sendStatus(500);
        });
}); //end DELETE


module.exports = router;