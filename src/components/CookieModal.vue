<template>
    <div v-if="!getCookie('foxikle_accepted_cookies')" class="m-5">
        <h1 class="sm:text-3xl">This website requires cookies to run properly.</h1>
        <p>The cookies are used for session management and cookie acceptance. If you do not consent
            to cookies you will not be able to log in to the website.</p>
        <button @click="acceptCookies()"
          class="border-cyan-800 hover:border-cyan-900 transition border-2
        hover:text-amber-500 rounded-lg  dark:text-amber-400 p-2 mt-3">
            Accept Cookies
        </button>
    </div>
</template>
<script>
export default {
  name: 'CookieModal',
  methods: {
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
    acceptCookies() {
      this.setCookie('foxikle_accepted_cookies', 'true', 1000);
      this.$router.go();
    },
    setCookie(name, value, days, sameSite) {
      const expirationDate = days ? new Date(Date.now() + days * 24 * 60 * 60 * 1000) : null;
      let cookieAttributes = 'path=/;';
      if (expirationDate) {
        cookieAttributes += ` expires=${expirationDate.toUTCString()};`;
      }
      if (sameSite) {
        cookieAttributes += ` SameSite=${sameSite};`;
      }
      const cookieValue = encodeURIComponent(value);
      document.cookie = `${name}=${cookieValue}; ${cookieAttributes}`;
    },
  },
};
</script>
