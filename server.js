const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();
require('dotenv').config();

const authRouter = require('./routes/auth-routes');
app.use('/auth', authRouter);

const userRouter = require('./routes/user-routes');
app.use('/user', userRouter);

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(bodyParser.json());
appluse(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(
    session({
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`I'm listening on port ${PORT}`);
});

// //app.get('/', (req, res) => {
//     res.render('index', {
//         appName: 'vets-for-pets',
//     });
// });

//app.use('/appName', appNameRouter);

app.use('*', (req, res) => {
    res.status(404).send({
        error: 'Not Found',
    });
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send({ err, message: err.message });
});