<template>
  <div id="contact">
    <h1>get in touch</h1>
    <div class="column-container">
      <form class="contact-form" v-on:submit.prevent="sendEmail">
        <label>your name</label>
        <input v-model="name" type="text" ref="name" required />

        <label>your email address</label>
        <input v-model="email" type="email" ref="email" required />

        <label>message</label>
        <textarea
          v-model="message"
          name="message"
          id=""
          cols="30"
          rows="10"
          ref="message"
          required
        ></textarea>
        <button class="btn-send" ref="sendBtn">
          <img src="../assets/icons/send-icon.svg" alt="" />
          <span>{{ buttonState }}</span>
        </button>
      </form>

      <div class="social-media">
        <a
          class="github"
          href="https://github.com/RonelTheGreat"
          target="blank"
        >
          <img src="../assets/icons/github-icon.svg" alt="github logo" />
          <span>https://github.com/RonelTheGreat</span></a
        >

        <a
          href="https://facebook.com/rcobthegreat"
          class="facebook"
          target="blank"
        >
          <img src="../assets/icons/facebook-icon.svg" alt="facebook logo" />
          <span>https://facebook.com/rcobthegreat</span>
        </a>

        <a href="mailto: ronelcarlo.berino@gmail.com" class="gmail">
          <img src="../assets/icons/gmail-icon.svg" alt="gmail logo" />
          <span>ronelcarlo.berino@gmail.com</span>
        </a>

        <a class="twitter" href="https://twitter.com/rcob96" target="blank">
          <img src="../assets/icons/twitter-icon.svg" alt="twitter logo" />
          <span>https://twitter.com/rcob96</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      buttonState: "send message"
    };
  },
  methods: {
    sendEmail() {
      this.buttonState = "sending message";

      this.$refs.sendBtn.disabled = true;
      this.$refs.message.disabled = true;
      this.$refs.name.disabled = true;
      this.$refs.email.disabled = true;

      const serviceID = "gmail";
      const templateID = "contact_form";
      const userID = "user_SomMt8PGg9zOSsodgRYDz";
      const templateParams = {
        user_name: this.name,
        user_email: this.email,
        message: this.message
      };

      emailjs.send(serviceID, templateID, templateParams, userID).then(
        (res) => {
          console.log(res);
          this.$refs.sendBtn.style.backgroundColor = "green";
          this.buttonState = "message sent";

          setTimeout(() => {
            this.email = "";
            this.name = "";
            this.message = "";
            this.buttonState = "send message";
            this.$refs.sendBtn.style.backgroundColor = "#ff3587";
            this.$refs.sendBtn.disabled = false;
            this.$refs.message.disabled = false;
            this.$refs.name.disabled = false;
            this.$refs.email.disabled = false;
          }, 1000);
        },
        (error) => {
          this.buttonState = "check internet and try again";

          setTimeout(() => {
            this.buttonState = "send message again";
            this.$refs.sendBtn.style.backgroundColor = "#ff3587";
            this.$refs.sendBtn.disabled = false;
            this.$refs.message.disabled = false;
            this.$refs.name.disabled = false;
            this.$refs.email.disabled = false;
          }, 2000);
          console.log("FAILED...", error);
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
#contact {
  background: url(../assets/images/contact-bg.svg);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1rem;

  h1 {
    text-align: center;
    font-size: 3.2rem;
    font-weight: 500;
    text-transform: capitalize;
    background: linear-gradient(to right, #ee4a68, #ee4a68, #4200ff, #4818cf);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .column-container {
    margin: 1rem auto;
  }

  .contact-form {
    label {
      color: $font-primary;
      font-size: $font-medium;
      font-weight: 500;
      text-transform: capitalize;
      margin-bottom: 0.6rem;
      display: inline-block;
    }

    input {
      font-family: "Poppins", sans-serif;
      display: block;
      border: 2px solid #e4e4eb;
      border-radius: 5px;
      padding: 0.5rem;
      font-size: 1rem;
      width: 100%;
      margin-bottom: 3rem;
    }

    textarea {
      width: 100%;
      font-family: "Poppins", sans-serif;
      border: 2px solid #e4e4eb;
      border-radius: 5px;
      font-size: 1rem;
      padding: 0.5rem;
      height: 10rem;
      resize: none;
    }

    .btn-send {
      font-family: inherit;
      font-weight: 500;
      font-size: $font-medium;
      box-shadow: 5px 4px 10px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      width: 100%;
      border: none;
      cursor: pointer;
      padding: 1rem 2rem;
      background: #ff3587;
      margin-top: 2rem;

      &:hover {
        background: darken($color: #ff3587, $amount: 5%);
      }

      &:disabled {
        background: darken($color: #ff3587, $amount: 30%);
        cursor: not-allowed;
      }

      img {
        padding-right: 0.5rem;
      }
    }
  }

  .social-media {
    margin-top: 3rem;
    padding-bottom: 2vh;

    a {
      color: $font-primary;
      display: flex;
      align-items: center;
      margin-bottom: 3rem;
      font-size: 1rem;
    }

    .github,
    .facebook,
    .gmail,
    .twitter {
      span {
        padding-left: 0.4rem;
      }
    }
  }
}

@media screen and (min-width: 769px) {
  #contact {
    padding: 0.5rem;
    h1 {
      padding-top: 7rem;
      text-align: center;
      font-size: 4rem;
    }

    .column-container {
      display: flex;
      margin: 3rem auto;
      justify-content: space-evenly;
    }

    .social-media {
      padding-bottom: 0;

      a {
        font-size: $font-medium;
      }

      .github,
      .facebook,
      .gmail,
      .twitter {
        span {
          padding-left: 1rem;
        }
      }
    }
  }
}
</style>
