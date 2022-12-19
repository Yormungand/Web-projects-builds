<template>
  <section class="blog-pg section-padding pt-0">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div class="posts">
            <div
              v-for="(blogItem, index) in blogs"
              :class="`item ${index === blogs.length - 1 ? '' : 'mb-80'}`"
              :key="blogItem.id"
            >
              <div class="img">
                <NuxtLink to="/blog-details/blog-details-dark">
                  <img :src="blogItem.image" alt="" />
                </NuxtLink>
              </div>
              <div class="content">
                <div class="row justify-content-center">
                  <div class="col-10">
                    <NuxtLink to="/blog/blog-dark" class="date">
                      <span class="num">{{ blogItem.date.day }}</span>
                      <span>{{ blogItem.date.month }}</span>
                    </NuxtLink>
                    <div class="tags">
                      <NuxtLink
                        v-for="(tag, index) in blogItem.tags"
                        :key="index"
                        to=""
                      >
                        {{ tag }}
                      </NuxtLink>
                    </div>
                    <h4 class="title">
                      <NuxtLink to="/blog-details/blog-details-dark">
                        {{ blogItem.title }}
                      </NuxtLink>
                    </h4>
                    <p>{{ blogItem.content }}</p>
                    <NuxtLink
                      to="/blog-details/blog-details-dark"
                      class="butn bord curve mt-30"
                    >
                      Read More
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="pagination">
              <span class="active">
                <NuxtLink to="/blog/blog-dark">1</NuxtLink>
              </span>
              <span>
                <NuxtLink to="/blog/blog-dark">2</NuxtLink>
              </span>
              <span>
                <NuxtLink to="/blog/blog-dark">
                  <i class="fas fa-angle-right"></i>
                </NuxtLink>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import blogs from "../../data/blogs1.json";
export default {
  data() {
    return {
      blogs,
    };
  },
};
</script>

<style scoped>
</style>