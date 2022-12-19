<template>
  <section
    class="call-action section-padding sub-bg bg-img"
    :style="`background-image: url(${img ? img : '/img/patrn.svg'})`"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-lg-9">
          <div class="content sm-mb30">
            <h6 class="wow words chars splitting" data-splitting>Let’s Talk</h6>
            <h2 class="wow words chars splitting" data-splitting>
              about your <br />
              <b class="back-color">next project</b>.
            </h2>
          </div>
        </div>

        <div class="col-md-4 col-lg-3 valign">
          <NuxtLink
            to="/contact/contact-dark"
            class="butn bord curve wow fadeInUp"
            data-wow-delay=".5s"
          >
            <span>Get In Touch</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["img"],
};
</script>

<style scoped>
</style>