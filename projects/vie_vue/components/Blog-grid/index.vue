<template>
  <section class="blog-pg blog section-padding pt-0">
    <div class="container">
      <div class="posts">
        <div class="row">
          <div v-for="blogItem in blogs" class="col-lg-4" :key="blogItem.id">
            <div class="item mb-80 wow fadeInUp" data-wow-delay=".3s">
              <div class="img">
                <img :src="blogItem.image" alt="" />
              </div>
              <div class="cont">
                <div>
                  <div class="info">
                    <NuxtLink to="/blog-details/blog-details-dark" class="date">
                      <span>
                        <i>{{ blogItem.date.day }}</i>
                        {{ blogItem.date.month }}
                      </span>
                    </NuxtLink>
                    <span>/</span>
                    <NuxtLink
                      v-for="(tag, index) in blogItem.tags"
                      :key="index"
                      to="#0"
                      class="tag"
                    >
                      <span>{{ tag }}</span>
                    </NuxtLink>
                  </div>
                  <h5>
                    <NuxtLink to="/blog-details/blog-details-dark">
                      {{ blogItem.title.substr(0, 55) + "..." }}
                    </NuxtLink>
                  </h5>
                  <div class="btn-more">
                    <NuxtLink
                      class="simple-btn"
                      to="/blog-details/blog-details-dark"
                    >
                      Read More
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pagination">
            <span class="active">
              <NuxtLink to="blog/blog-dark">1</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-dark">2</NuxtLink>
            </span>
            <span>
              <NuxtLink to="blog/blog-blogwindow.theme">
                <i class="fas fa-angle-right"></i>
              </NuxtLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import blogs from "../../data/blogs3.json";
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