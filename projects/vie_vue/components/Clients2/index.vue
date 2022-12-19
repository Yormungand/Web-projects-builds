<template>
  <section class="clients sub-bg pt-50 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="row">
            <div
              v-for="item in clientsData.slice(0, length)"
              :key="item.id"
              class="col-lg-3 brands"
            >
              <div class="item no-bord wow fadeIn" data-wow-delay=".3s">
                <div class="img">
                  <img v-if="theme === 'light'" :src="item.lightImage" alt="" />
                  <img v-else :src="item.darkImage" alt="" />
                  <NuxtLink
                    to="#0"
                    class="link words chars splitting"
                    data-splitting
                  >
                    {{ item.url }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import clientsData from "../../data/clients.json";
export default {
  props: ["theme", "length"],
  data() {
    return {
      clientsData,
    };
  },
};
</script>

<style scoped>
</style>