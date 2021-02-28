<template>
  <div id="app">
    <BlogContianer :blogsData="blogsData" :categoryData="categories" :tagsData="tags"/>
  </div>
</template>

<script>
import BlogContianer from './views/BlogContianer';
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
        const res = await axios.get('http://localhost:8080/posts/');
        const data = await res.data;
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
    // blogData
    this.blogsData = await this.fetchBlogsData();
    
    // categories
    let temp = []
    this.blogsData.forEach((item) => {
      temp.push(...item.categories)
    })
    this.categories = [...new Set(temp)]

    // tags
    let tag_temp = []
    this.blogsData.forEach((item) => {
      tag_temp.push(...item.tags)
    })

    this.tags = [...new Map([...new Set(tag_temp)].map(item => [item['tag_name'], item])).values()];
    this.tags = this.tags.sort((a, b) => (a.post_count < b.post_count) ? 1 : -1)
    
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
