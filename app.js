var express = require("express"),
    app =   express();
    bodyParser = require("body-parser"),
    mongoose =require("mongoose");
    passport = require("passport"),
    User = require("./models/user")
    LocalStrategy = require("passport-local");

    mongoose.connect("mongodb://localhost:27017/journal", {useNewUrlParser: true});

    app.use(require("express-session")({
        secret: "glitch free technologies",
        resave:   false,
        saveUninitialized:  false
    }));

    app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/", function(req, res){
    res.send("we are up");
});

app.set("view engine", "ejs");  
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));


    app.listen(process.env.PORT || 3000, function(){
        console.log("app is running");
    })
