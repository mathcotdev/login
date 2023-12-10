const express = require('express');
const path = require('path');


const app = express();

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');


app.get("/", (req, res) =>{
    /* res.send("<h1>Page d'accueil</h1>"); */
    res.render('index');
});

app.listen(1703, () =>{
    console.log("Server started on port 1703");
})