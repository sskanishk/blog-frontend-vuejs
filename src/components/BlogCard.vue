<template>
<router-link :to="{path: `post/${blogData.slug}`, query: {id: blogData.ID }}">
  <vs-card>
    <template #title>
      <h3>{{ blogData.title }}</h3>
    </template>
    <template #img>
      <img :src="blogData.post_thumbnail.URL" :alt="blogData.title" />
    </template>
    <template #text>
      <p>fhd</p>
    </template>
    <!-- <template #interactions>
      <vs-button danger icon>
        <i class="bx bx-heart"></i>
      </vs-button>
    </template> -->
  </vs-card>
</router-link>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    blogData: Object,
  }
}
</script>