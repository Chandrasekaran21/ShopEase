
const notFound = (req, res, next) =>{

    console.log(req)

    const error = new Error(`not found - ${req.originalUrl}`);

    next(error);
}

const errorHandler = (err, req, res, next) =>{

    let statusCode = res.statusCode === 500 ? res.statusCode : null;

    let message = err.message;

    if(err.name === "CastError"){

        message : "Resource not found"
        statusCode : 404;
    }

    res.status(res.statusCode).json({

        message
    })
}

export {notFound, errorHandler};