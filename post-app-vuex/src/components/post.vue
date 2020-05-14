<template>
  <div class="user-wrapper">
    <h4>{{ post.title }}</h4>
    <p>{{ post.body }}</p>
    <button @click="removePost(post.id)">REMOVE</button>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: {}
  },
  methods: {
    removePost: function(postId) {
      this.$emit("removePost",postId);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mb-20 {
  margin-bottom: 20px;
}
.user-wrapper {
  border: 1px solid grey;
  margin: 20px;
  padding: 20px;
}
</style>
