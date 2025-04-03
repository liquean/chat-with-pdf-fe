export const apiErrorHandler = (status?: number) => {
  const statusCode = status || 0;
  let readableError = "";

  switch (statusCode) {
    case 400:
      readableError = "Bad Request. Please check your input.";
      break;
    case 401:
      readableError = "Unauthorized.";
      break;
    case 403:
      readableError = "Forbidden. Lack of permission for this request.";
      break;
    case 404:
      readableError = "Not Found.";
      break;
    case 422:
      readableError = "Unprocessable request at this moment.";
      break;
    case 500:
      readableError = "Server Error. Please try again later.";
      break;
    default:
      readableError = "An unexpected error occurred. Please try again later.";
      break;
  }
  return readableError;
};
