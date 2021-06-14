const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: true, unique: true},
    description_poster: {type: String, required: true},
    img_path: {type: String, required: true},
    date_poster: {type: Date, default: Date.now}
})

module.exports = model('Poster', schema)