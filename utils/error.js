export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode; //manual status code
  error.message = message;
  return error;
};
