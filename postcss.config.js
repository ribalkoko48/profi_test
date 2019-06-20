const autoprefixer = require('autoprefixer')

module.exports = {
    plugins: [
        autoprefixer('last 2 versions', 'ie 10')
    ]
}