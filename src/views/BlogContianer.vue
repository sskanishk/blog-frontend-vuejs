<template>
  <div class="container">
    <div class="sidebar">
      <div>
        <Sidebar :categoryData="categoryData" :tagsData="tagsData"/>
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
export default {
  name: "BlogContianer",
  components: {
    BlogCard,
    Sidebar,
  },
  props: {
    blogsData: Array,
    categoryData: Array,
    tagsData: Array
  },
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