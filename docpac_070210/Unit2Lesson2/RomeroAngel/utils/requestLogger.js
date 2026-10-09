function requestLogger(req, res, next) {
    const currentDate = new Date();
    console.log(currentDate.toString(), req.originalUrl, req.method);
    next();
}
module.exports = requestLogger;