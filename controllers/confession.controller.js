const { Confession } = require('../models/confession');
const logger = require('../logging/logger')

async function getConfessionList(sortBy) {
    let confs;
    switch (sortBy) {
        case "newest":
            logger.info("Sort by newest")
            confs = await Confession.find()
                .sort({ date: -1 })
                .limit(10)
            break;
        case "oldest":
            logger.info("Sort by oldest")
            confs = await Confession.find()
                .sort({ date: 1 })
                .limit(10)
            break;
        case "mostliked":
            confs = await Confession.find()
                .sort({ likes: -1 })
                .limit(10)
            break;
    }

    return confs;
}

module.exports.getConfessionList = getConfessionList



