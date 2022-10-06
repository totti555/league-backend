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

app.get('/getSummoner/:summonerId/champion/:champKey', (req, res) => {

    res.set('Access-Control-Allow-Origin', '*');
    const test = axios.get(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${req.params.summonerId}/by-champion/${req.params.champKey}?api_key=${api_key}`)
        .then(function (response) {
            res.send(response.data)

        })
        .catch(function (error) {
            // handle error
            console.log('No mastery for this champion');
        })
        .then(function () {
            // always executed

        });

    // console.log(test)
    // res.json([test])
})

app.get('/getMasteries/:summonerId', (req, res) => {

    res.set('Access-Control-Allow-Origin', '*');
    const test = axios.get(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${req.params.summonerId}?api_key=${api_key}`)
        .then(function (response) {
            res.send(response.data)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
            console.log('No mastery for this champion');
        })
        .then(function () {
            // always executed

        });

    // console.log(test)
    // res.json([test])
})

app.get('/summoner/:puuid/matches', (req, res) => {

    res.set('Access-Control-Allow-Origin', '*');
    let count = 20;
    const test = axios.get(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${req.params.puuid}/ids?start=0&count=${count}&api_key=${api_key}`)
        .then(function (response) {
            res.send(response.data)

        })
        .catch(function (error) {
            console.log('No matches found');
        })
        .then(function () {
            // always executed

        });
})


app.get('/summoner/matches/:matchId', (req, res) => {

    res.set('Access-Control-Allow-Origin', '*');
    const test = axios.get(`https://europe.api.riotgames.com/lol/match/v5/matches/${req.params.matchId}?api_key=${api_key}`)
        .then(function (response) {
            res.send(response.data)

        })
        .catch(function (error) {
            console.log('No matches found');
        })
        .then(function () {
            // always executed

        });
})

app.get('/summoner/:summonerId/rank', (req, res) => {

    res.set('Access-Control-Allow-Origin', '*');
    const test = axios.get(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${req.params.summonerId}?api_key=${api_key}`)
        .then(function (response) {
            res.send(response.data)

        })
        .catch(function (error) {
            console.log('No rank found');
        })
        .then(function () {
            // always executed

        });
})

app.listen(8080, () => {
    console.log('listening on port 8080')
})