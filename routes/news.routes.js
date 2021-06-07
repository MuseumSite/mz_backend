const cors = require("cors");
const {Router} = require('express')
const router = Router()
const News = require('../models/News')

router.use(cors({
    allowedOrigins: [
        '*'
    ]
}));

const ns = new News({title: "title", description_news: "desc"})

// /api/news/all
router.get('/all', async (req, res) => {
    try {
        News.find({}, (err, data) => {
            if (err) {
                console.log(err)
                return res.status(500).send()
            } else {
                return res.status(200).json(data)
            }
        })
    } catch (e) {
        res.status(500).json({message: 'Чтото пошло не так, попробуйте снова'})
    }
})

// /api/news/add
router.post('/add', async (req, res) => {
    try {
        const {title, description, img, date} = req.body
        console.log(title, description)
        const news = new News({title, description_news: description, img_path: img, date_news: date})
        await news.save()
        res.status(201).json({message: 'Данные добавленны'})
    } catch (e) {
        res.status(500).json({message: 'Чтото пошло не так, попробуйте снова'})
    }
})

module.exports = router