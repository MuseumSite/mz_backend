const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: true, unique: true},
    description_news: {type: String, required: true},
    date_news: {type: Date, default: Date.now}
})

module.exports = model('News', schema)
