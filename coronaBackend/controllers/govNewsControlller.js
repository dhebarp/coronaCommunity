const govNews = require('../models/govNews');

exports.getArticles = async (req, res, next) => {
    try {
        const newsArticles = await govNews.find();

        return res.status(200).json({
            success: true,
            data: newsArticles
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addArticle = async (req, res, next) => {
    try {
        const {source, author, title, content, url, publishedAt } = req.body;
        const oneArticle = await govNews.create(req.body);

        return res.status(201).json({
            success: true,
            data: oneArticle
        });
    } catch (err) {
        if (err.name == 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);

            res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}