import axios from "axios";

const client = axios.create({
  baseURL: `${process.env.BASE_URL}.netlify/functions`,
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});
client.interceptors.request.use(c => {
  c.headers["client-type"] = "web/alekhin-games";
  return c;
});

export default client;
