<template>
  <section class="contact section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="form md-mb50">
            <h4 class="fw-700 color-font mb-50">Get In Touch.</h4>

            <form id="contact-form">
              <div class="messages"></div>

              <div class="controls">
                <div class="form-group">
                  <input
                    id="form_name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required="required"
                  />
                </div>

                <div class="form-group">
                  <input
                    id="form_email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required="required"
                  />
                </div>

                <div class="form-group">
                  <textarea
                    id="form_message"
                    name="message"
                    placeholder="Message"
                    rows="4"
                    required="required"
                  ></textarea>
                </div>

                <button type="submit" :class="`butn ${theme === 'light' ? 'dark': 'bord'}`">
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1">
          <div class="cont-info">
            <h4 class="fw-700 color-font mb-50">Contact Info.</h4>
            <h3 class="wow" data-splitting>{{ contentFormData.title }}</h3>
            <div class="item mb-40">
              <h5>
                <NuxtLink to="#0">{{ contentFormData.email }}</NuxtLink>
              </h5>
              <h5>{{ contentFormData.phone }}</h5>
            </div>
            <h3 class="wow" data-splitting>Visit Us.</h3>
            <div class="item">
              <h6>
                {{ contentFormData.location.first }}
                <br />
                {{ contentFormData.location.second }}
              </h6>
            </div>
            <div class="social mt-50">
              <NuxtLink to="#0" class="icon">
                <i class="fab fa-facebook-f"></i>
              </NuxtLink>
              <NuxtLink to="#0" class="icon">
                <i class="fab fa-twitter"></i>
              </NuxtLink>
              <NuxtLink to="#0" class="icon">
                <i class="fab fa-pinterest"></i>
              </NuxtLink>
              <NuxtLink to="#0" class="icon">
                <i class="fab fa-behance"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import contentFormData from "../../data/contact-form.json";

export default {
  props: ["theme"],
  data() {
    return {
      contentFormData,
    };
  },
};
</script>

<style scoped>
</style>