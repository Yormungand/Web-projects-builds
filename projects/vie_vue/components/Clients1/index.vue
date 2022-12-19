<template>
  <section class="clients section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 valign md-mb50">
          <div class="sec-head mb-0">
            <h6 class="wow fadeIn" data-wow-delay=".5s">Best Features</h6>
            <h3 class="wow mb-20 color-font">Our Clients</h3>
            <p>
              Our area of practice is quite wide: design, graphics, branding,
              development.
            </p>
          </div>
        </div>
        <div class="col-lg-8">
          <div>
            <div class="row bord">
              <div
                v-for="item in clientsData.slice(0, clientsData.length / 2)"
                :key="item.id"
                class="col-md-3 col-6 brands"
              >
                <div
                  class="item wow fadeIn"
                  :data-wow-delay="`${
                    item.id == 1
                      ? '.3'
                      : item.id == 2
                      ? '.6'
                      : item.id == 3
                      ? '.8'
                      : item.id == 4
                      ? '.3'
                      : ''
                  }s`"
                >
                  <div class="img">
                    <img
                      v-if="theme === 'light'"
                      :src="item.lightImage"
                      alt=""
                    />
                    <img v-else :src="item.darkImage" alt="" />

                    <NuxtLink
                      to="#"
                      class="link words chars splitting"
                      data-splitting
                    >
                      {{ item.url }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div
                v-for="item in clientsData.slice(4, clientsData.length)"
                :key="item.id"
                :class="`${
                  item.id == 5
                    ? 'col-md-3 col-6 brands sm-mb30'
                    : item.id == 6
                    ? 'col-md-3 col-6 brands sm-mb30'
                    : item.id == 7
                    ? 'col-md-3 col-6 brands'
                    : item.id == 8
                    ? 'col-md-3 col-6 brands'
                    : ''
                }`"
              >
                <div
                  class="item wow fadeIn"
                  :data-wow-delay="`${
                    item.id == 1
                      ? '.4'
                      : item.id == 2
                      ? '.7'
                      : item.id == 3
                      ? '.5'
                      : item.id == 4
                      ? '.3'
                      : ''
                  }s`"
                >
                  <div class="img">
                    <img
                      v-if="theme === 'light'"
                      :src="item.lightImage"
                      alt="client image"
                    />
                    <img v-else :src="item.darkImage" alt="client image" />
                    <NuxtLink
                      to="#"
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
    </div>
  </section>
</template>

<script>
import clientsData from "../../data/clients.json";
export default {
  props: ["theme"],
  data() {
    return {
      clientsData,
    };
  },
};
</script>

<style scoped>
</style>