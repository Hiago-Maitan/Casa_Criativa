//usei o express para criar e configurar meu servidor
const express = require('express')
const server = express()


const ideas = [
    {
        img: "coding.png",
        title: "Cursos de CSS",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vitae magni doloremque undea",
        url: "www.google.com.br",
    },
    {
        img: "coding.png",
        title: "Cursos de HTML",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vitae magni doloremque undea",
        url: "www.google.com.br",
    },
    {
        img: "coding.png",
        title: "Cursos de Java",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vitae magni doloremque undea",
        url: "www.google.com.br",
    }, {
        img: "coding.png",
        title: "Cursos de UX",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vitae magni doloremque undea",
        url: "www.google.com.br",
    }
]

//configurar arquivos estaticos (css, scripts, imagens)
server.use(express.static("public"))


//configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

// criei uma rota "/"
// e capturo o pedido do cliente para responder
server.get("/", function (req, res) {

    const reversedIdeas = [...ideas].reverse()

    let lastIdeas = []
    for (let idea of reversedIdeas) {
        if (lastIdeas.length < 2) {
            lastIdeas.push(idea)
        }
    }

    return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideias", function (req, res) {
    
    const reversedIdeas = [...ideas].reverse()

    return res.render("ideas.html", { ideas: reversedIdeas })
})

// liguei meus ervidor na porta 3000
server.listen(3000)