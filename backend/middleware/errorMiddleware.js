
const notFound = (req, res, next) =>{

    const error = new Error(`not found - ${req.originalUrl}`);

    next(error);
}

const errorHandler = (err, req, res, next) =>{

    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    let message = err.message;

    if(err.name === "CastError"){

        message = "Resource not found"
        statusCode = 404;
    }

    res.status(statusCode).json({

        message
    })
}

export {notFound, errorHandler};