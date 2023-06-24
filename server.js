//Brings in dependenices
const express = require("express");
const path = require("path");
const session = require("express-session");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Brings in the controller routes
const routes = require("./controllers");
const sequelize = require("./config/connection.js");

// Establishes the express.js route
const app = express();
//Establishes the port that will be used.
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
//Sets up the view engine for the express.js using handlebars.
app.engine("handlebars", hbs.engine);
// Informs express.js that views should be rendered using the handlebars engine
app.set("view engine", "handlebars");

//Adds middleware to parse incoming requests with JSON payloads
app.use(express.json());
//Middleware to parse incoming requests with URL payloads
app.use(express.urlencoded({ extended: true }));
//middleware to serve static files from directory
app.use(express.static(path.join(__dirname, "public")));
//app.use(require("./controllers/userRoutes"));
//app.use(require("./controllers/postRoute"));
//app.use(require("./controllers/commentRoute"));



// middleware used to handle the routing
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
