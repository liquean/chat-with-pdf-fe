import { apiErrorHandler } from "../../errors/apiErrorHandler";

const queryModel = async (query: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/prompt?query=${query}`
  );

  if (!response.ok) {
    throw new Error(apiErrorHandler(response.status));
  }

  const body = await response.json();

  return body;
};

export default queryModel;
