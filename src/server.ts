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

app.listen(8080, function listenHandler() {
    console.info(`Running on 8080`)
})

https.createServer({
    key: fs.readFileSync("./src/ssl/dchapman-portfolio_site_key.pem"),
    cert: fs.readFileSync("./src/ssl/dchapman-portfolio_site_cert.pem"),
    ca: fs.readFileSync("./src/ssl/dchapman-portfolio_site.ca-bundle")
  },app).listen(config.port, function listenHandler() {
      console.info(`Running on ${config.port}`)
  })

export default app