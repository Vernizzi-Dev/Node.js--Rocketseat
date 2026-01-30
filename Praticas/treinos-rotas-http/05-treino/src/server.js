import http from 'node:http'

const server = http.createServer((req, res) => {
    const {method, url} = req
    if(method === 'GET' && url === '/criar'){
        console.log('✔ Aplicação Rodando...')
        const css = `
            <style>
                body{
                    background-color: black;
                    cursor: default;
                }
                h1{
                    text-align: center;
                    padding: 20px;
                    color: blue;
                    font-family: Arial;
                    text-shadow: 1px 1px 3px #42a4d9ff;
                }
                h2{
                    text-align: center;
                    color: red;
                    font-family: Arial;
                }
                div{
                    border: 2px solid white;
                    border-radius: 2vw;
                    padding: 3vw;
                    transition: 0.5s;
                }
                div:hover{
                    box-shadow: 0px 0px 20px red;
                    transition: 0.6s;
                }
            </style>
        `;

        return res
        .setHeader('Content-type', 'text/html; charset=utf-8')
        .end(`
                ${css}
                <h1> USUÁRIO CRIADO COM SUCESSO </h1> <br>
                <div>
                    <h2> estou fazendo um teste, integrando HTML no meu projeto Node! </h2>
                </div>
            `)
    }
})

server.listen(3333)