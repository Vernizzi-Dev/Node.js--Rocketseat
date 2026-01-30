import http from 'node:http'
import chalk from 'chalk'


const server = http.createServer((req, res) => {
    const {method, url} = req

    if(method === 'GET' && url === '/pet'){
        return res.end(chalk.green('✔ Listagem de todos os Pets disponíveis!'))
    }

    if(method === 'POST' && url === '/pet'){
        return res.end(chalk.green('✔ Crie seu Pet aqui!!'))
    }

    if(method === 'PUT' && url === '/pet'){
        return res.end(chalk.green('✔ Edite o seu Pet aqui!) \n',(chalk.gray('Edições Disponíveis: Cor, Nome, Idade, Poder, Raça, Velocidade e Acessórios.'))))
    }

    if(method === 'DELETE' && url === '/pet'){
        return res.end(chalk.red('Você realmente deseja Excluir o seu Pet? \n',(chalk.yellow('Digite: [S] para excluir ou [N] para cancelar procedimento'))))
    }

    return res.end(chalk.red('✖ [ERROR] Nenhuma Rota Pet foi Encontrada!'))

})

server.listen(3333)