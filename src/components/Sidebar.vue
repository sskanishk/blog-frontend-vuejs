<template>
  <div class="sidebar__items">
    <h2>Category</h2>
    <ul>
      <li :key="category.ID" v-for="category in categoryData" class="category__li">{{ category }}</li>
    </ul>
    <br />
    <h2>Tags</h2>
    <ul>
      <li :key="tag.tag_name" v-for="tag in tagsData" class="category__li">{{ tag.tag_name }}</li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "Sidebar",
  props: {
    categoryData: Array,
    tagsData: Array
  }
}
</script>

<style scoped>
.sidebar__items {
  display: flex;
  /* background-color: aqua; */
  margin: 10px 0px;
  flex-direction: column;
}

ul {
  list-style-type: none;
  padding-inline-start: 0px;
}

li {
  font-weight: 500;
  border-bottom: solid 0.5px #f4f4f4;
  padding: 10px 0px;
}

li:hover {
  background-color: #71b3ff50;
}
</style>