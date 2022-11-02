<template>
  <div class="container">
    <div class="sidebar">
      <div>
        <Sidebar :categoryData="categories" :tagsData="tags"/>
      </div>
    </div>
    <div class="blogs__wrapper">
      <h2>Recent Blogs</h2>
      <div class="blogs__wrapper-cont">
        <div :key="blogData.ID" v-for="blogData in blogsData">
          <BlogCard :blogData="blogData" class="blogcard" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard";
import Sidebar from "../components/Sidebar";
import axios from 'axios';

export default {
  name: "BlogContianer",
  components: {
    BlogCard,
    Sidebar,
  },
  // props: {
  //   blogsData: Array,
  //   categoryData: Array,
  //   tagsData: Array
  // },

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
        // console.log("data", data)
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


    // console.log("TAG", this.tags)
    // console.log("cat", this.categories)
    
  }
};
</script>

<style scoped>
.container {
  display: flex;
  width: 90%;
  padding: 0px 50px;
}

.sidebar {
  width: 25%;
  /* background: yellow; */
  /* display: flex; */
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  /* align-items: center; */
}

.blogs__wrapper {
  /* display: flex; */
  /* justify-content: center; */
  width: 75%;
  /* flex-wrap: wrap; */
}

.blogs__wrapper-cont {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
}

.blogcard {
  margin: 0px 20px 30px 20px;
}
</style>