<template>
  <div id="app">
    <BlogContianer :blogsData="blogsData" :categoryData="categories" :tagsData="tags"/>
  </div>
</template>

<script>
import BlogContianer from './views/BlogContianer';
// import WPServices from './services/WPServices';
import axios from 'axios';


export default {
  name: "App",

  components: {
    BlogContianer
  },

  data() {
    return {
      blogsData: [],
      categories: [],
      tags: []
    }
  },

  methods: {
    async fetchBlogsData() {
      try {
        // const res = await WPServices.getAllPosts();
        const res = await axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts`);
        const data = await res.data.posts;
        return data;
      } catch (error) {
        console.error(error);
      }
    },
    
    async fetchSingleBlogData(id) {
      try {
        const res = await axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/${id}`);
        const data = await res.data;
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  },

  async created() {
    this.blogsData = await this.fetchBlogsData();

    // categories
    let temp = []
    this.blogsData.forEach((item) => {
      let cat = Object.keys(item.categories)
      temp.push(...cat)
    })
    this.categories = [...new Set(temp)]

    // tags
    let tag_temp = []
    this.blogsData.forEach((item) => {
      let tag = Object.keys(item.tags)
      tag_temp.push(...tag)
    })

    // this.tags = [...new Map([...new Set(tag_temp)].map(item => [item['tag_name'], item])).values()];
    this.tags = [...new Set(tag_temp)]
    // this.tags = this.tags.sort((a, b) => (a.post_count < b.post_count) ? 1 : -1)


    console.log("TAG", this.tags)
    console.log("cat", this.categories)
    
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
