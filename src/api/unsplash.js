import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 292a45bd4c5ebdd7abe9cc7866fdf9d22397ba614b3258fd03eac48756bf74e7"
  }
});
