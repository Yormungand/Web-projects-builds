<template>
  <section class="about-us section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 valign md-mb50">
          <div class="mb-50">
            <h6 class="fw-100 text-u ls10 mb-10">{{ aboutData.smallTitle }}</h6>
            <h3 class="fw-600 text-u ls1 mb-30 color-font">
              {{ aboutData.title }}
            </h3>
            <p>{{ aboutData.content }}</p>
            <NuxtLink to="#" class="butn bord curve mt-30">
              <span>Read More</span>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-7 img">
          <img :src="aboutData.image" :alt="aboutData.title" />
          <div class="stauts">
            <div
              class="item"
              v-for="statue in aboutData.status"
              :key="statue.id"
            >
              <h4>
                {{ statue.number }}
                <span>{{ statue.letter }}</span>
              </h4>
              <h6>{{ statue.statusName }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import aboutUs1Data from "~/data/about-us1.json";
export default {
  data() {
    return {
      aboutData: aboutUs1Data,
    };
  },
};
</script>

<style scoped>
</style>