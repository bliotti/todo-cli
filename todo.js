const { head } = require('ramda')

const [execPath, jsPath, cmd, ...rest] = process.argv

const handleCmd = cmd => {
	switch (cmd) {
		case 'add':
			return 'add'
		case 'rm':
			return 'remove'
		default:
			return `${cmd} is not supported`
	}
}

console.log(handleCmd(cmd))
