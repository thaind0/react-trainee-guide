const decoder = new TextDecoder("utf-8");

const answerDecode = (value?: Uint8Array) => {
  if (!value) {
    return null;
  }
  try {
    const decodedRes = decoder.decode(value);
    // Split the string into an array of objects
    const objects = decodedRes
      .split("\n")
      .map((obj) => obj.replace("data:", "").trim())
      .filter((obj) => obj)
      .map((obj) => JSON.parse(obj));

    // Get the last object from the array and access the "answer" property
    const lastAnswer = objects.pop()?.answer;
    return lastAnswer;
  } catch {
    return null;
  }
};

export default answerDecode;
