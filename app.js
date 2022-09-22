const express = require('express');
const axios = require('axios');
const app = express();
const api_key = process.env.REACT_APP_API_KEY;



app.get('/getAllChampInfos/:champName', (req, res) => {

    res.set('Access-Control-Allow-Origin', '*');
    const test = axios.get(`http://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions/${req.params.champName}.json`)
        .then(function (response) {
            // handle success
            // console.log('MERAKIANA', response);
            console.log(response.data);
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