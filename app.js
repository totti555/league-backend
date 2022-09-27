const express = require('express');
// To use APIKEY
require('dotenv').config();
const api_key = process.env.LOL_API_KEY;
const axios = require('axios');
const app = express();



app.get('/getAllChampInfos/:champName', (req, res) => {

    res.set('Access-Control-Allow-Origin', '*');
    const test = axios.get(`http://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions/${req.params.champName}.json`)
        .then(function (response) {
            res.send(response.data)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed

        });

    // console.log(test)
    // res.json([test])
})

app.get('/getSummoner/:summonerName', (req, res) => {

    res.set('Access-Control-Allow-Origin', '*');
    const test = axios.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.params.summonerName}?api_key=${api_key}`)
        .then(function (response) {
            res.send(response.data)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed

        });

    // console.log(test)
    // res.json([test])
})

app.listen(8080, () => {
    console.log('listening on port 8080')
})