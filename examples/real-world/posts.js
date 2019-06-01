class Posts{
  constructor($, config){
    this.posts = [];
    this.newPost = this.newPost.bind(this);
  }
  newPost($, {logger}, {username}){
    logger.info("new post added");
    return (post) => this.posts.push({username, post})
  }
  getAll(){
    return this.posts;
  }
}

module.exports = Posts;
