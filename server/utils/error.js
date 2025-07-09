//custom ERROR function

export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};

// This code defines a custom error handler function that creates an error object with a specific status code and message.
// It can be used to standardize error responses in an Express application.
// The function takes a status code and a message as parameters, creates a new Error object, and assigns the status code and message to it.
// This error object can then be passed to the next middleware or used in a response to provide consistent error handling across the application.
