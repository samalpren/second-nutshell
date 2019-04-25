const allFetchCalls = {
  getArticles() {
    return fetch("http://localhost:8088/articles")
    .then (response => response.json())
  },
  postNewArticle(taskPost) {
    return fetch("http://localhost:8088/articles", {
    method: "POST",
    body: JSON.stringify(taskPost),
    headers: {
      "Content-Type": "application/json"
    }
    });
  }
};

export default allFetchCalls;