var m = require("mithril");

var Blog = {
    list: [],
    loadList: function() {
      return m.request({
        method: "GET",
        url: "/api/blog"
      })
      .then(function(result) {
          Blog.list = result.data;
      })
    }
}

module.exports = Blog;
