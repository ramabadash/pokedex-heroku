
function errorHandlerMiddleware (err, req, res, next) {
    console.log(err);
    if(!err.status) { //other error
        return res.status(500).send({"error": err.messege});
    }
     return res.status(err.status).send({"error": err.messege}) ; 
}

module.exports = {errorHandlerMiddleware}