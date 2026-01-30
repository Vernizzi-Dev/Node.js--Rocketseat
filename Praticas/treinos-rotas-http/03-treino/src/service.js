// JSON - JavaScript Object Notation => Estrutura de dados muito comum de ser utilizada na transição de dados entre o Front e o Back, e também na transição de dados de um back para outro.

//  Como que o meu front vai saber que o meu back devolveu uma resposta no formato de JSON? É aí que entra os Cabeçalhos.
    // Cabeçalhos (requisição/resposta) => Metadados
        // Metadados: São informações para que, tanto o back e o front, saibam lidar com aquela requisição da melhor forma.
    // Então, Cabeçalhos nada mais são do que informações adicionais que não tem haver com o dado retornado do back para o front, mas sim de como que esse dado pode ser interpretado pelo front.



import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
    const {method, url} = req

        if(method === 'GET' && url === '/users'){
            return res
            .setHeader('content-type', 'application/json')
            .end(JSON.stringify(users))
        }

        if(method === 'POST' && url === '/users'){
            users.push({
                id: 3478,
                nome: 'Gabriel Oliveira', 
                email: 'biel_oliveira07@gmail.com', 
                telefone: 11997068779
            })
            return res.end('✔ Usuário criado com sucesso! ;)')
        }

        if(method === 'PUT' && url === '/users'){
            return res.end('Edição de Usuário')     
        }

    return res.end("Hello Word")
})

server.listen(3333)