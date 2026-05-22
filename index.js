const express = require("express");
const app = express();
const port = 8080;
const path = require("path");  //Path require
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended : true }));
app.use(methodOverride('_method'));

app.set("views engine", "ejs"); //Set views Engine
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id : uuidv4(),
        username: "Web Development",
        content: "I Love Coding!",
    },
    {
        id : uuidv4(),
        username: "Ratnesh Kumar",
        content: "Hard work is most important to achive your goal",
    },
    {
        id : uuidv4(),
        username: "Learn with er raj",
        content: "Discipline and Consistency is the key of Success",
    },
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {        //Serve new form
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();     // Generate the long ID here
    posts.push({id, username, content});
    res.redirect("/posts");

});

app.get("/posts/:id", (req, res) => {
    let { id } =req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;            // To access Post
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);   //To find post
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;            // To access Post
    let post = posts.find((p) => id === p.id);   //To find post
    res.render("edit.ejs", {post});
});

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;            // To access Post
    posts = posts.filter((p) => id !== p.id);   
    res.redirect("/posts");
});


app.listen(port, () => {
    console.log(`Listening to port : ${port}`);
});