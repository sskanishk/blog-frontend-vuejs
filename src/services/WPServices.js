import http from "../http-common";

class WPService {
  getAllPosts() {
    return http.get("/posts");
  }

  getPost(slug) {
    return http.get(`/post/${slug}`);
  }

}

export default new WPService();
