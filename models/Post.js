const db = require('./db');

const Post = db.sequelize.define('postagens', {
    titulo:{
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})


//Post.sync({force: true}) utilizar esse comando quando for criar, apenas na hora da criação
module.exports = Post;