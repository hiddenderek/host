import express from 'express'
import config from './config'
import processEnv from 'dotenv'
processEnv.config()
import serverRenderer from './renderers/serverRenderer'
const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/*', async (req: any, res: any) => {
    let contentGet = serverRenderer()
    console.log(contentGet.initialContent)
    console.log('hmmmm')
    res.render('index', { data: contentGet.initialContent });
})

app.listen(config.port, function listenHandler() {
    console.info(`Running on ${config.port}`)
})

export default app