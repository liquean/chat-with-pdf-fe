import { apiErrorHandler } from "../../errors/apiErrorHandler";

const uploadFile = async (payload: FormData) => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/files`, {
    method: "POST",
    body: payload,
  });

  if (!response.ok) {
    throw new Error(apiErrorHandler(response.status));
  }

  const body = await response.json();

  return body;
};

export default uploadFile;
