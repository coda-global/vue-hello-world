<template>
  <div class="home">
    <h1>Posts</h1>
    <div v-if="allPosts.length">
      <Post @removePost="removePost($event)" :post="post" :key="post.id" v-for="post in allPosts"></Post>
    </div>
  </div>
</template>

<script>
import Post from "@/components/post.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PostList",
  data: () => ({
    postList: []
  }),
  components: {
    Post
  },
  
  computed: mapGetters(["allPosts"]),

  methods: {
    ...mapActions(["fetchPost"]),
    
    removePost: function(id) {
      alert("post Id :" + id + " removed");
    }
  },created() {
    this.fetchPost();
  }
};
</script>