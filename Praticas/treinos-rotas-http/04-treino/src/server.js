import http from 'node:http'
import { stringify } from 'node:querystring'

const users = []

const server = http.createServer((req, res) => {
    const {method, url} = req
    if(method === 'POST' && url === '/users'){
        users.push({
            name: 'victor vernizzi', 
            id: 3581, 
            email: 'victor_vernizzi@gmail.com',
            telefone: 11997048551
        })
        return res.end('✔ Usuário criado com sucesso!')
    }
    if(method === 'GET' && url === '/users'){
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }
})

server.listen(3333)