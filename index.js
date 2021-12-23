const server = require('express');
const app = server();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

//Config
    //Template Engine
        app.engine('handlebars',handlebars.engine({defautLayout: 'main',
        runtimeOptions: {
                  allowProtoPropertiesByDefault: true,
            
                  allowProtoMethodsByDefault: true,
                }}));
        app.set('view engine', 'handlebars');

//Config
    //Body-Parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());

//Config
    //Rotas
        app.get("/", (req, res)=>{
            Post.findAll({order: [['id', 'DESC']]}).then(function (posts) {
                res.render('home', {posts: posts});
            });
        });

        app.get("/cad", (req, res)=>{
            res.render("formulario");
        })

        app.post("/add", (req, res)=>{
            Post.create({titulo: req.body.titulo, conteudo: req.body.conteudo}).then(function () {
                res.redirect('/');
            }).catch(function (err) {
                res.send("Erro no cadastro de postagem!, " + err+ ".");
            });
        })

app.listen(3000);