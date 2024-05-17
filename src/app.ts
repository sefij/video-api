import * as express from 'express'
import { PaperCupDependencies } from './IO/Dependencies'
import { JWTMiddleware } from './API/Middelwares/JWT.middleware'
import * as path from 'path'
import redoc from 'redoc-express'
import { Config } from './config'
import { RegisterRoutes } from './routes'
import { ErrorHandler } from './API/Middelwares/ErrorHandler.middleware'

const init = async () => {
    await PaperCupDependencies.init()
    expressApp.listen(Config.PORT, () => {
        console.log(`App listening on port ${Config.PORT}`)
    })
}

const getDirName = () => {
    if (!__dirname.includes('node_modules')) {
        return path.join(__dirname, '../')
    } else {
        return __dirname.split('node_modules')[0]
    }
}

const setupSwaggerDocs = () => {
    const dirname = getDirName()
    const swaggerJsonPath = path.join(dirname, 'public', 'swagger.json')

    expressApp.use('/swagger.json', express.static(swaggerJsonPath))
    expressApp.get(
        '/redoc',
        redoc({
            title: 'API Docs',
            specUrl: '/swagger.json'
        })
    )
}

const expressApp: express.Application = express()

expressApp.use(express.json())
setupSwaggerDocs()
expressApp.use(JWTMiddleware)
RegisterRoutes(expressApp)
expressApp.use(ErrorHandler)

init()
    .then(() => {
        console.log('Server is up')
    })
    .catch((e) => {
        console.error(`Failed to start server - ${e?.message}`, e)
        process.exit(-1)
    })
