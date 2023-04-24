import axios from "axios";

const baseUrl = "https://httpbin.org";

const Api = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

export default Api;
