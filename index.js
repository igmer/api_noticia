let express = require('express');
let bodyParser = require('body-parser');
let ejs = require('ejs');
let app = express();
let apiRoutes = require("./api_routes");
let routesform = require("./routesform");
const  db = require('./config/database')
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(express.static(__dirname+'/public'));
app.set('views', __dirname + '/public/views');
app.use('/css', express.static(__dirname+ '/node_modules/bootstrap/dist/css'));
app.use('/bower_components', express.static(__dirname+ '/bower_component/'));

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
db.authenticate()
    .then( () => {
        console.log('success')
    })
    .catch( err => {
        console.log(err)
    });
var port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Use Api routes in the App
app.use('/api', apiRoutes);
app.use('/noticia',routesform );
app.use('/inicio', apiRoutes);
app.use('/api/noticia/noticia',require('./routes/NoticiaRoutes'))
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});