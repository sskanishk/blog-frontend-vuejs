<template>
<div class="container">
  <h1 >{{this.blogDetails.title}}</h1>
  <p v-html="this.blogDetails.content">{{this.blogDetails.content}}</p>
</div>
</template>

<script>
import axios from "axios"

export default {
  name: "Blog",
    methods: {
    async fetchSingleBlogData(id) {
      // console.log("id,id",id)
      try {
        const res = await axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/${id}`);
        const data = await res.data;
        // console.log("data", data)
        return data;
      } catch (error) {
        // console.error(error);
      }
    }
  },
   data() {
    return {
      blogDetails: {},
    }
  },
  async created() {
    this.blogDetails = await this.fetchSingleBlogData(this.$route.query.id)
  }
}
</script>



<style scoped>
.container {
  /* display: flex; */
  width: 50%;
  margin: auto;
  /* padding: 0px 50px; */
}

</style>