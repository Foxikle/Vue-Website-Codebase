<!-- views/LoginPage.vue -->
<template>
  <div>
    <div className="bg-slate-300 dark:bg-zinc-700 flex flex-col justify-between m-0 p-0
    dark:text-gray-200"
      ref="content_wrapper">
  <GlobalHeader pgTitle="Sign in" :componentKey="componentKey" />

    <form @submit.prevent="handleLogin">
      <div className="pt-36 mb-3 inline-flex self-center">
      <p className="border-cyan-800 hover:border-cyan-900 transition border-2
          rounded-lg w-fit p-1 text-lg font-sans text-gray-800 dark:text-gray-200">
        <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
        <label for="email" className="bg-slate-300 dark:bg-zinc-700">Email: </label>
        <input type="email" id="email" v-model="email" placeholder="you@example.domain" required
        className="bg-slate-300 dark:bg-zinc-700"/>
      </p>
    </div>
    <br>
    <div className="mb-4 inline-flex self-center">
      <p className="border-cyan-800 hover:border-cyan-900 transition border-2
      rounded-lg w-fit p-1 text-lg font-sans text-gray-800 dark:text-gray-200">
        <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
        <label for="password" className="bg-slate-300 dark:bg-zinc-700">Password: </label>
        <input type="password" id="password" v-model="password" placeholder="password" required
        className="bg-slate-300 dark:bg-zinc-700"/>
      </p>
    </div>
    <br>
    <button type="submit" className="border-cyan-800 hover:border-cyan-900 transition border-2
      rounded-lg w-fit p-1 text-lg font-sans mb-7 text-gray-800 dark:text-gray-200">
      Log in
    </button>
    <div class="flex items-center justify-center">
      <p class="w-3/5 flex-col justify-center text-gray-800 dark:text-gray-200">
        By clicking 'Log in' you agree to the
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
    <p className="m-1 italic text-gray-800 dark:text-gray-200">
      No account?
    </p>
    <button type="button">
      <router-link to="/register" className="border-cyan-800 hover:border-cyan-900 transition
      border-2 rounded-lg w-fit p-1 text-lg font-sans mb-7 text-gray-800 dark:text-gray-200">
        Create an account
        </router-link>
      </button>
  </div>
  <div className="bg-slate-300 dark:bg-zinc-700 pt-20"
  :style="{height: emptySpaceHeight + 'px' }"></div>
  <div ref="footer_wrapper">
      <GlobalFooter className="fixed w-full bottom-0"/>
  </div>
</div>
</template>
<script>
import axios from '@/api';
import GlobalFooter from '@/components/GlobalFooter.vue';
import GlobalHeader from '@/components/GlobalHeader.vue';
// eslint-disable-next-line
import { useToast } from "vue-toastification";

const toast = useToast();
export default {
  data() {
    return {
      email: '',
      password: '',
      emptySpaceHeight: 0,
      componentKey: 0,
    };
  },
  components: {
    GlobalHeader,
    GlobalFooter,
  },
  methods: {
    setAuthTokenCookie(token) {
      const expirationDate = new Date(Date.now() + 1);
      const cookieValue = `${encodeURIComponent(token)} ; expires=${expirationDate.toUTCString()}; path=/`;
      document.cookie = `authToken=${cookieValue}`;
    },
    handleLogin() {
      if (!this.getCookie('foxikle_accepted_cookies')) {
        useToast().error('You must consent to cookies to log in.', {
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
        return;
      }
      const loginData = {
        user: {
          email: this.email,
          password: this.password,
        },
      };
      axios
        .post('/users/sign_in', loginData)
        .then((response) => {
          console.log(response);
          this.$store.dispatch('setUser', response.data);
          this.setAuthTokenCookie(response.data.user.authentication_token);
          // this.$router.back();
          toast.success('Success!', {
            position: 'top-right',
            timeout: 4990,
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
          this.componentKey += 1;
          console.log(this.$store.getters.getUser);
        })
        // eslint-disable-next-line
        .catch((error) => {
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
              loseButton: 'button',
              icon: false,
              rtl: false,
            });
            console.error('Connection refused. The server may be down or unreachable.');
          } else if (error.response.status === 500) {
            toast.error('Internal Server Error!', {
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
          } else {
            toast.error('Invalid password or username!', {
              position: 'top-right',
              timeout: 5000,
              closeOnClick: true,
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              draggable: true,
              draggablePercent: 0.6,
              howCloseButtonOnHover: false,
              hideProgressBar: false,
              loseButton: 'button',
              icon: false,
              rtl: false,
            });
          }
        });
    },
    getCookie(name) {
      const { cookie } = document;
      const prefix = `${name}=`;
      let begin = cookie.indexOf(`; ${prefix}`);
      let end;
      if (begin === -1) {
        begin = cookie.indexOf(prefix);
        if (begin !== 0) return null;
      } else {
        begin += 2;
        end = document.cookie.indexOf(';', begin);
        if (end === -1) {
          end = cookie.length;
        }
      }
      return unescape(cookie.substring(begin + prefix.length, end));
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
<style>
body, html {
  margin: 0;
  padding: 0;
}
</style>
