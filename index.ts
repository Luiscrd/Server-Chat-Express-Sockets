import colors from 'colors';
import bodyParser from 'body-parser';
import cors from 'cors';
import Server from './classes/server';
import router from './routes/router';

const server = Server.instance;

// BodyParser
server.app.use(bodyParser.urlencoded({ extended: true}));

server.app.use(bodyParser.json());

// CORS
server.app.use(cors({origin: true, credentials: true}));

// Service Routes
server.app.use('/', router);

server.start(() => {

    console.log(colors.blue('[Indexts] Server: run Ok'));
    
})