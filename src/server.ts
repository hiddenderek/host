import express from 'express'
import config from './config'
import processEnv from 'dotenv'
import https from 'https'
import fs from 'fs'
import useragent from 'express-useragent'
processEnv.config()
import serverRenderer from './renderers/serverRenderer'
const app = express()
app.use(express.static('public'))
app.use(useragent.express());
app.set('view engine', 'ejs')

app.get('/*', async (req: any, res: any) => {
    let contentGet = serverRenderer()
    console.log(contentGet.initialContent)
    console.log('hmmmm')
    res.render('index', { data: contentGet.initialContent, isMobile: req.useragent.isMobile, isDesktop: req.useragent.isDesktop });
})

https.createServer({
    key: fs.readFileSync("./src/key.pem"),
    cert: fs.readFileSync("./src/cert.pem"),
  },app).listen(config.port, function listenHandler() {
      console.info(`Running on ${config.port}`)
  })

export default app