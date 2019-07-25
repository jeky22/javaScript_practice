const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/yj_eventTry', function (req, res) {
    res.sendFile(path.join(__dirname + '/yj_eventTry.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/cookies', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/cookies.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/jc_cookieTry', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/jc_cookieTry.html'));
    //__dirname : It will resolve to your project folder.
});


router.get('/join', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : ' + req.query.big + ', ' + req.query.small 
    + ', ' + req.query.firstName + ', ' + req.query.lastName + ', ' + req.query.userName + ', ' + req.query.city + ', ' + req.query.state);
});

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))