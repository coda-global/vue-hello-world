<template>
  <div class="home">
    <h1>Posts</h1>
    <div v-if="postList.length">
      <Post @removePost="removePost($event)" :post="post" :key="post.id" v-for="post in postList"></Post>
    </div>
  </div>
</template>

<script>
import Post from "@/components/post.vue";
import PostService from "@/services/post-service.js";

export default {
  name: "PostList",
  data: () => ({
    postList: []
  }),
  components: {
    Post
  },
  created: function() {
    this.getPostData();
  },
  methods: {
    getPostData: function() {
      PostService.getPostData().then(data => {
        console.log("posts data", data.data);
        this.postList = data.data;
      });
    },
    removePost: function(id) {
      alert("post Id :" + id + " removed");
    }
  }
};
</script>