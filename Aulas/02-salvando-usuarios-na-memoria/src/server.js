import http from 'node:http'; // MODULO INTERNO DO Node.JS -- NÃO PRECISA SER INSTALADO -- HTTP USADO PARA CRIAÇÃO DE ROTAS API

// E COMO EU FAÇO PARA DIFERENCIAR UM MODULO TERCEIRO DO MODULO QUE É INTERNO, COMO POR EXEMPLO O 'HTTP' QUE NÃO É PRECISO FAZER UMA INSTALAÇÃO? 

//     R= NESSE CASO O NODE.JS PEDE PARA A GENTE NAS ULTIMAS VERSÕES COLOCAR UM COMANDO 'node:' ANTES DA IMPORTAÇÃO DOS MODULOS INTERNOS

//     EXEMPLO: 'node:http'




// Criar usuário (name, email, senha) => através do req(require) eu consigo obter acesso a todas essas informações da requisição de quem está chamando o nosso servidor.
// Já o res(response) vai ser utilizado para devolver uma resposta para quem está chamando o nosso serivodor.

// ROTAS HTTP: Rotas nada mais são do que caminhos de entrada da nossa aplicação, dentro da nossa API. 
// - Criar usuários
// - Listagem usuários
// - Edição de usuários
// - Remoção de usuários

// - HTTP
//     - Método HTTP
//     - URL

// GET, POST, PUT, PATCH, DELETE

// GET => Buscar um recusro do Back-end
// POST => Criar um recusro no Back-end
// PUT => Atualizar um recurso no Back-end
// PATCH => Atualizar uma informação específica de um recurso no Back-end
// DELETE => Deletar um recurso no Back-end

// GET /Users => Buscando usuários do Back-end
// POST /Users => Criar um usuário no Back-end


const server = http.createServer((req, res) => {
    const {method, url} = req
    
    if(method === 'GET' && url === '/users'){

        // Early return: usar return para sair da função o quanto antes.
        return res.end('Listagem de Usuários!')
    }

    if(method === 'POST' && url === '/users'){
        return res.end('Criação de Usuários!')
    }

    return res.end("[ERROR] Nenhuma Rota foi encontrada.")
})

server.listen(3333)
    // localhost:3333