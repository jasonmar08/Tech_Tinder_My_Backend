const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AuthRouter = require('./routes/AuthRouter')
const WrittenPostRouter = require('./routes/WrittenPostRouter')
const VideoPostRouter = require('./routes/VideoPostRouter')
const ImagePostRouter = require('./routes/ImagePostRouter')
const UserRouter = require('./routes/UserRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/auth', AuthRouter)
app.use('/writtenposts', WrittenPostRouter)
// app.use('/videoposts', VideoPostRouter)
// app.use('/imageposts', ImagePostRouter)
app.use('/users', UserRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
