const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require('cors');

const indexRouter = require("./routes/index");
const playersRouter = require("./routes/player");
const adminsRouter = require("./routes/admin");
const ownersRouter = require("./routes/owner");
const StadiumsRouter = require("./routes/stadium");
const reservationsRouter = require("./routes/reservation");

require("./bin/mongoose.connextion").connect(); 
const app = express();

// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 ,
  credentials: true, // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

// routes more sprecifique -> \
app.use("/stadiums", StadiumsRouter);
app.use("/players", playersRouter);
app.use("/admins", adminsRouter);
app.use("/owners", ownersRouter);
app.use("/reservations", reservationsRouter);

app.use("/", indexRouter); // ma3ach tekteb hikak nodemode ykarrez 3lina hhhhhhhhhhhhhhhhhh 3raft 3leh gotlik yonfa5hom aya raka7 t3ich

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// error handler


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running in port ${PORT} `));

module.exports = app;
