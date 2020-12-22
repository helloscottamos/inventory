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

    saveItems(items)
    console.log(chalk.green.inverse('New item added'))
    }else if (duplicateItem && !duplicateItem.active && active){
        duplicateItem.description = description
        duplicateItem.value = value
        duplicateItem.active = true
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

const saveItems = (items)=>{
    const dataJSON = JSON.stringify(items)
    fs.writeFileSync('items.json', dataJSON)
}

addItem('1235', 'moo', 5, '2020-12-17 16:00:00', 'scott', false)