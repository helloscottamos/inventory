const fs = require('fs');
const chalk = require('chalk')

const addItem = (id, description, value, dateAdded, addedBy, active) => {
    // Create an item
    const items = loadItems()
    const duplicateItem = items.find((item) => item.id === id)

    if(!duplicateItem){
        items.push({
            id, 
            description, 
            value, 
            dateAdded, 
            addedBy,
            active
        })

    // Write saveItem(items)
    console.log(chalk.green.inverse('New item added'))

    }else{
        console.log(chalk.red.inverse('Note item taken'))
    }
}

// Load items where they exist
const loadItems = () => {
    try{
        const dataBuffer = fs.readFileSync('items.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)  
    }catch(e){
        return []
    }
}

addItem('1234', 'moo', 5, '2020-12-17 16:00:00', 'scott', true)