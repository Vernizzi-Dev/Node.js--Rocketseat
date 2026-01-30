import http from 'node:http'
import chalk from 'chalk'

const infUsuario = [
    {
        nome: "Victor",
        idade: 16,
        bio: "Sou um adolescente que adora programar e conhecer novas tecnologias",
        saldo: "3.679.93"
    }
]

const server = http.createServer((req, res) => {
    const {method, url} = req

    if(method === 'GET' && url === '/usuario'){
        return res.end(chalk.gray(`Nome do Usuário: ${infUsuario[0].nome}\nIdade do Usuário: ${infUsuario[0].idade}\nBiografia: ${infUsuario[0].bio}\nSaldo Atual: ${infUsuario[0].saldo}`))
    }
})

server.listen(3333)