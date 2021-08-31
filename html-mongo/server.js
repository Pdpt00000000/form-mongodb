const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://<username>:3008_poli_3008@cluster0.08s6n.mongodb.net/notesDB", {useNewUrlParser:true}, {useUnifiedTopology:true})

const notesSchema = {
    title_trab: String,
    areas_intervencao: String,
    prof_coordenador: String,
    email_prof_coordenador: String,

}

const Note = mongoose.model("Note", notesSchema)

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/form-concurso.html")
})

app.listen(3000, function(){
    console.log("server ir running on 3000");
})