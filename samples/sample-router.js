const express = require('express');
const Sample = require('./sample-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        const samples = await Sample.getSample();
        return res.status(200).json(samples)
    } catch(error){
        next(error)
    }
})

module.exports = router;