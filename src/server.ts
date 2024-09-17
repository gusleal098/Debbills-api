// 1º CENÁRIO - Saber se a biblioteca foi escrita com typescript, se ela possui as definições de tipos
// 2º CENÁRIO - Quando a biblioteca foi escrita com JavaScript não tem suporte pra TypeScript, mas foi feito em um outro pacote as definiçõe de tipos pra poder ser utilizado com TypeScript
// Toda definição de tipo de bibliotecas externas, o @types/nome da biblioteca vem antes
// Na documentação da biblioteca, se tiver o 'DT' ao lado do nome, é porque ela tem definições de tipos

import 'dotenv/config'
import express, { json } from 'express' // npm i -D @types/express
import { routes } from './routes'
import { setupMongo } from './database'

setupMongo().then(() => {
    const app = express()

    app.use(json())
    app.use(routes)

    app.listen(3333, () => console.log('🚀 App is running at port 3333!'))
})

