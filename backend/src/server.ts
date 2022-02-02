import express from 'express'
import mongoose from 'mongoose'

import { auth, client, user, invoice, project, subcontractor } from './routes'
import config from './config/config'

const app = express()

main().catch((err) => console.log(err))

async function main() {
    await mongoose.connect(config.mongo as string, config.mongo_opts as object)
    console.log('db connected')
}

app.use(express.json())

app.use('/', auth)
app.use('/user', user)
app.use('/client', client)
app.use('/invoice', invoice)
app.use('/project', project)
app.use('/subcontractor', subcontractor)

app.listen(8000, () => {
    console.log('backend is run')
})
