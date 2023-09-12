<template>
  <div className="bg-slate-300 dark:bg-zinc-700 flex flex-col justify-between m-0 p-0
    text-gray-800 dark:text-gray-200"
      ref="content_wrapper">
    <GlobalHeader pgTitle="Create an Account"/>
<form @submit.prevent="handleRegistration">
  <div className="pt-36 mb-3 inline-flex self-center">
      <p className="border-cyan-800 hover:border-cyan-900 transition border-2
          rounded-lg w-fit p-1 text-lg font-sans">
        <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
        <label for="email" className="bg-slate-300 dark:bg-zinc-700">Email: </label>
        <input type="email" id="email" v-model="email" placeholder="you@example.domain" required
        className="bg-slate-300 dark:bg-zinc-700"/>
      </p>
    </div>
    <br>
    <div className="mb-4 inline-flex self-center">
      <p className="border-cyan-800 hover:border-cyan-900 transition border-2
          rounded-lg w-fit p-1 text-lg font-sans">
        <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
        <label for="username" className="bg-slate-300 dark:bg-zinc-700">Username: </label>
        <input type="text" id="username" v-model="username" placeholder="username" required
        className="bg-slate-300 dark:bg-zinc-700"/>
      </p>
    </div>
    <br>
    <div className="mb-4 inline-flex self-center">
      <p className="border-cyan-800 hover:border-cyan-900 transition border-2
      rounded-lg w-fit p-1 text-lg font-sans">
        <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
        <label for="password" className="bg-slate-300 dark:bg-zinc-700">Password: </label>
        <input type="password" id="password" v-model="password" placeholder="password" required
        className="bg-slate-300 dark:bg-zinc-700"/>
      </p>
    </div>
    <br>
    <div className="mb-4 inline-flex self-center">
      <p className="border-cyan-800 hover:border-cyan-900 transition border-2
      rounded-lg w-fit p-1 text-lg font-sans">
        <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
        <label for="confirm_password" className="bg-slate-300 dark:bg-zinc-700">
          Confirm Password:
        </label>
        <input type="password" id="confirm_password" v-model="passwordConfirmation"
          placeholder="password, again" required className="bg-slate-300 dark:bg-zinc-700"/>
      </p>
    </div>
    <br>
    <div className="mb-4 inline-flex self-center">
      <p className="border-cyan-800 hover:border-cyan-900 transition border-2
      rounded-lg w-fit p-1 text-lg font-sans">
    <input type="checkbox" id="over_thirteen" name="over_thirteen" value=""
      v-model="over_thirteen" className="w-8 h-4 text-red-600 bg-gray-100 border-gray-300
       rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-amber-600">
    <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
    <label htmlfor="over_thirteen" className="m-1">
      I am at least 13 years of age.
    </label>
    </p>
    </div>
    <br>
    <button type="submit" className="border-cyan-800 hover:border-cyan-900 transition border-2
      rounded-lg w-fit p-1 text-lg font-sans mb-7">
      Sign Up
    </button>
    <div class="flex items-center justify-center">
      <p class="w-3/5 flex-col justify-center">
        By clicking 'Sign Up' you agree to the
        <router-link to="/privacy" className="text-cyan-600 underline hover:text-amber-700">
          Privacy Policy
        </router-link>
        and
        <router-link to="/tos" className="text-cyan-600 underline hover:text-amber-700">
          Terms of Service.
        </router-link>
      </p>
    </div>
    </form>
    <hr className="w-48 h-1 mx-auto my-4 bg-gray-400 dark:bg-gray-700 border-0 rounded">
    <p className="m-1 italic">
      Already have an account?
    </p>
    <button type="button">
      <router-link to="/login" className="border-cyan-800 hover:border-cyan-900 transition
      border-2 rounded-lg w-fit p-1 text-lg font-sans mb-7">
        Sign In
        </router-link>
      </button>
      </div>
  <div className="bg-slate-300 dark:bg-zinc-700 pt-20"
   :style="{ height: emptySpaceHeight + 'px' }"></div>
  <div ref="footer_wrapper">
    <GlobalFooter className="fixed w-full bottom-0"/>
  </div>
</template>
<script>

import axios from '@/api';
import GlobalFooter from '@/components/GlobalFooter.vue';
import GlobalHeader from '@/components/GlobalHeader.vue';
// eslint-disable-next-line
import { useToast } from 'vue-toastification';

export default {
  name: 'RegisterPage',
  components: {
    GlobalHeader,
    GlobalFooter,
  },
  data() {
    return {
      email: '',
      username: '',
      password: '',
      passwordConfirmation: '',
      over_thirteen: false,
      emptySpaceHeight: 0,
    };
  },

  // Assuming you have form inputs for email, password, and password confirmation
  methods: {
    handleRegistration() {
      const strRegex = /^[a-zA-Z0-9_]*$/;
      const stringy = typeof this.username === 'string' ? strRegex.test(this.username) : false;
      if (!this.over_thirteen) {
        useToast().error('Due to privacy laws, you must be at least thirteen years of age to create an account.', {
          position: 'top-right',
          timeout: 30000,
          closeOnClick: false,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: 'button',
          icon: false,
          rtl: false,
        });
        return;
      }
      if (!stringy) {
        useToast().error('Your username must be alphanumeric! (Only Numbers, Letters, and underscores)', {
          position: 'top-right',
          timeout: 5000,
          closeOnClick: false,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: 'button',
          icon: false,
          rtl: false,
        });
        return;
      }
      axios
        .post('/users', {
          user: {
            email: this.email,
            username: this.username,
            password: this.password,
            password_confirmation: this.passwordConfirmation,
          },
        })
        .then((response) => {
          console.log(response);
          this.$store.dispatch('setUser', response);
          this.$router.back();
          useToast().success('Success! You are now set up with an account.', {
            position: 'top-right',
            timeout: 3000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: false,
            closeButton: 'button',
            icon: false,
            rtl: false,
          });
        })
        .catch((error) => {
          console.log(error);
          if (error) {
            if (error.code === 'ERR_NETWORK') {
              useToast().error('Connection refused. The server may be down or unreachable. Please try again later.', {
                position: 'top-right',
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: false,
                closeButton: 'button',
                icon: false,
                rtl: false,
              });
              console.error('Connection refused. The server may be down or unreachable.');
            } else if (error.response.status === 500) {
              console.error('Internal Server Error!');
              useToast().error('Internal Server Error!', {
                position: 'top-right',
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: false,
                loseButton: 'button',
                icon: false,
                rtl: false,
              });
            } else {
              console.error('Registration failed');
              useToast().error('An account by this email likley already exists!', {
                position: 'top-right',
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: false,
                closeButton: 'button',
                icon: false,
                rtl: false,
              });
            }
          } else {
            useToast().error('An error occoured!', {
              position: 'top-right',
              timeout: 5000,
              closeOnClick: true,
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              draggable: true,
              draggablePercent: 0.6,
              showCloseButtonOnHover: false,
              hideProgressBar: false,
              closeButton: 'button',
              icon: false,
              rtl: false,
            });
          }
        });
    },
    calculateEmptySpace() {
      const contentHeight = this.$refs.content_wrapper?.offsetHeight;
      const windowHeight = window.innerHeight;
      const footerHeight = this.$refs.footer_wrapper?.offsetHeight;

      if (contentHeight !== null && footerHeight !== null) {
        this.emptySpaceHeight = windowHeight - contentHeight - footerHeight;
      }
    },
    onFullscreenChange() {
      this.calculateEmptySpace();
    },
    enterFullscreen() {
      const element = this.$refs.content_wrapper;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    },
    exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    },
  },
  mounted() {
    // Calculate empty space after the DOM elements are mounted
    this.calculateEmptySpace();

    // Add event listeners for fullscreen and resize changes
    document.addEventListener('fullscreenchange', this.onFullscreenChange);
    document.addEventListener('mozfullscreenchange', this.onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', this.onFullscreenChange);
    document.addEventListener('msfullscreenchange', this.onFullscreenChange);
    window.addEventListener('resize', this.calculateEmptySpace);
  },
  beforeUnmount() {
    // Remove event listeners to prevent memory leaks
    document.removeEventListener('fullscreenchange', this.onFullscreenChange);
    document.removeEventListener('mozfullscreenchange', this.onFullscreenChange);
    document.removeEventListener('webkitfullscreenchange', this.onFullscreenChange);
    document.removeEventListener('msfullscreenchange', this.onFullscreenChange);
    window.removeEventListener('resize', this.calculateEmptySpace);
  },
  created() {
    // Listen for the F11 key press to enter fullscreen mode
    document.addEventListener('keydown', (event) => {
      if (event.key === 'F11') {
        this.onFullscreenChange();
      }
    });

    // Listen for the Esc key press to exit fullscreen mode
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.exitFullscreen();
      }
    });
  },
};
</script>
