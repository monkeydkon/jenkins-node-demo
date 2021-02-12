const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()


app.use(cors({
    credentials: true,
    origin: ['http://localhost:8080',
        'http://localhost',
        'http://localhost:8081',
        'capacitor://localhost',
        'https://moby-app-admin.firebaseapp.com',
        'https://mobyx-test.firebaseapp.com',
        'http://192.168.1.190:8080']
}));

app.use(bodyParser.json())

app.get('/', (req,res,next) => {
    res.status(200).json({msg: 'You just got /, asdasd!'})
})

app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({
        message: message,
        data: data
    });
})

app.listen(process.env.PORT || 3000, () => {
    console.log('app running')   
})
