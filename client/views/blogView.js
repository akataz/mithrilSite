var m = require("mithril");
var Blog = require("../models/Blog");

module.exports = {
    oninit: Blog.loadList,
    view: function() {
      return m(".blogView", Blog.list.map(function(post){
        return m(".blogViewPost", post.title + " " + post.date)
      }))
    }
}
