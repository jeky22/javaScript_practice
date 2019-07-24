app.use(express.static('public'))

const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/join', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : ' + req.query.big + ', ' + req.query.small 
    + ', ' + req.query.firstName + ', ' + req.query.lastName + ', ' + req.query.userName + ', ' + req.query.city + ', ' + req.query.state);
});

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))