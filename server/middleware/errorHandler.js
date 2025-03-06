const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log error for debugging

    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message || "Internal Server Error";

    // Handle Mongoose bad ObjectId
    if (err.name === "CastError") {
        statusCode = 400;
        message = "Resource not found. Invalid ID format.";
    }

    // Handle Mongoose validation errors
    if (err.name === "ValidationError") {
        statusCode = 400;
        message = Object.values(err.errors).map(val => val.message).join(", ");
    }

    // Handle Duplicate Key errors (e.g., unique email in User model)
    if (err.code === 11000) {
        statusCode = 400;
        message = "Duplicate field value entered.";
    }

    // Handle JWT authentication errors
    if (err.name === "JsonWebTokenError") {
        statusCode = 401;
        message = "Invalid token, authorization denied.";
    }
    if (err.name === "TokenExpiredError") {
        statusCode = 401;
        message = "Token expired, please log in again.";
    }

    res.status(statusCode).json({
        success: false,
        message: message,
    });
};

export default errorHandler;
