const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public')) // 정적인 파일 만들기 - 여기에 해당하는 폴더 이름을 써준다.

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

router.get('/join', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : ' + req.query.big + ', ' + req.query.small 
    + ', ' + req.query.firstName + ', ' + req.query.lastName + ', ' + req.query.userName + ', ' + req.query.city + ', ' + req.query.state);
});

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))