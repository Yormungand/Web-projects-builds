<template>
  <section
    id="contact"
    class="contact-sec style2 section-padding position-re bg-img"
    style="background-image: url(/img/patrn1.png)"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="sec-head text-center">
            <h2 class="wow fadeIn" data-wow-delay=".3s">Contact Us</h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="form wow fadeInUp" data-wow-delay=".5s">
            <form id="contact-form">
              <div class="messages"></div>

              <div class="controls">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="form-group">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="text-center">
                      <a href="#0" class="butn light mt-30 full-width">
                        <h6 class="ls3 text-u">Send Massege</h6>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
</style>