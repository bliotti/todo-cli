const fs = require('fs')

//

function get() {
	return JSON.parse(fs.readFileSync('./todos.json', 'utf-8'))
}
function get() {
	return fs.writeFileSync('./todos.json', JSON.stringify(data))
}

module.exports = { get, set }
