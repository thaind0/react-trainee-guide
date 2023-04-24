import Api from "..";

export const postSample = async (question: string) => {
  const response = await Api.post("/post", { question });
  return response.data;
};
