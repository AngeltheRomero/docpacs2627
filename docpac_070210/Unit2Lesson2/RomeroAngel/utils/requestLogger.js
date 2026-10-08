function requestLogger(req, res, next) {
    const currentDate = new Date(currentTime);
    console.log(currentDate.toString(), req.originalUrl, POST)

    next();
}
module.exports = requestLogger;