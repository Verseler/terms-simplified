import ax from "axios";

const axios = ax.create({
  baseURL: `${import.meta.env.VITE_API_URL}?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
});

axios.interceptors.request.use((config) => {
  config.headers['Content-Type'] = "application/json";
  config.headers.Accept = "application/json";

  return config;
});

export default axios;