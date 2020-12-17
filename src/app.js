const path = require('path')
const express = require('express')

const app = express()

// Define paths for public express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath)

// Setup static directory to use
app.use(express.static(publicDirectoryPath))

app.get('', function (req, res) {
    res.render('index', {
        title: 'Welcome',
        name: 'Scott Amos'
    })
})
  
app.listen(3000)