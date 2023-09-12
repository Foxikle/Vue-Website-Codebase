<template>
  <cookie-modal />
  <div class="wrapper text-gray-800 dark:text-gray-200">
  <div class="flex flex-row-reverse sticky  bg-slate-600 dark:bg-zinc-900
    p-1 justify-between">
    <div class="flex flex-row-reverse sticky bg-slate-400 dark:bg-zinc-900
    p-1 justify-between">
      <!--<div class="">
      <div class="my-2">
        <p class="m-2  mx-3 p-1 border-cyan-800 hover:border-cyan-900 transition border-2
          hover:text-amber-500 rounded-lg  dark:text-gray-400">
          <router-link to="/login">
            <font-awesome-icon icon="bell" size="2xl" />
          </router-link>
        </p>
      </div>
    </div> -->
    <!--
    <div v-if="user" class="">
      <div class="my-2">
        <p class="m-2  mx-3 p-1 border-cyan-800 hover:border-cyan-900 transition border-2
        hover:text-amber-500 rounded-lg  dark:text-gray-400">
        <router-link to="/admin/home">
          <font-awesome-icon icon="screwdriver-wrench" size="2xl" />
        </router-link>
      </p>
      </div>
    </div> --->
    <div class="">
      <div v-if="user" class="my-2">
        <div class="m-2 mx-3 p-1 pr-10 border-cyan-800 hover:border-cyan-900 transition border-2
         hover:text-amber-500 rounded-lg  dark:text-gray-400 flex flex-row">
            <IconImage />
            <p class="block text-xl my-1">{{ user.username }} </p>
        </div>
      </div>
      <!--
      <div v-else class="my-2">
        <p class="m-2 mx-3 p-1 border-cyan-800 hover:border-cyan-900 transition border-2
         hover:text-amber-500 rounded-lg  dark:text-gray-400">
          <router-link to="/login">
            <font-awesome-icon icon="user" size="2xl" />
          </router-link>
        </p>
      </div>
      -->
      </div>
    </div>
    <!--eslint-disable-next-line-->
      <div class=" lg:hidden"  @click="toggleMenu">
      <div class="my-2">
        <p class="m-2  mx-3 p-1 border-cyan-800 hover:border-cyan-900 transition border-2
        hover:text-amber-500 rounded-lg  dark:text-gray-400">
          <font-awesome-icon icon="bars" size="2xl"/>
      </p>
      </div>
    </div>
    </div>
  <div class="bg-slate-400 block dark:bg-zinc-800">
    <h1 class=" font-sans sm:text-7xl text-4xl py-8 sm:pt-16 ">
      {{ pgTitle }}
    </h1>
    <nav class="">
      <transition name="slide" mode="out-in" appear>
                  <!--eslint-disable-next-line-->
        <div v-if="showMenu" class="fixed top-0 left-0 h-full w-3/4 dark:bg-gray-800 bg-slate-400 z-50 lg:hidden fixed-menu">
          <!--eslint-disable-next-line-->
        <div class="lg:hidden"  @click="toggleMenu">
          <div class="mt-3">
            <p class=" mx-3 p-1 border-cyan-800 hover:border-cyan-900 transition border-2
              hover:text-amber-500 rounded-lg  dark:text-gray-400">
            <font-awesome-icon icon="rectangle-xmark" size="2xl" class="text-red-500"/>
            </p>
          </div>
        </div>
          <ul class="flex flex-col justify-center items-center h-full">
            <li v-for="item in navItems" :key="item.id" class="mb-4">
              <router-link :to="item.to"
               class="text-xl border-cyan-700 border-2 rounded-lg m-3 p-1">
               {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </transition>
      <div class=" m-5 hidden lg:inline-flex">
        <div class=" inline-flex m-3">
          <!--eslint-disable-next-line-->
          <div v-for="item in navItems" :key="item.id" :class="['border-cyan-700 hover:border-cyan-800 border-2 rounded-lg m-3 p-1 px-3 transition hover:text-amber-500 shadow-sky-950 shadow-md', { 'scale-105': showMenu }]">
            <router-link :to="item.to">{{ item.label }}</router-link>
          </div>
        </div>
    </div>
  </nav>
  </div>
  </div>
</template>

<script>
import IconImage from '@/components/IconImage.vue';
import CookieModal from '@/components/CookieModal.vue';

export default {
  name: 'GlobalHeader',
  components: {
    IconImage,
    CookieModal,
  },
  props: {
    pgTitle: String,
    componentKey: Number,
  },

  data() {
    return {
      showMenu: false,
      navItems: [
        { id: 1, label: 'Home', to: '/' },
        { id: 2, label: 'About', to: '/about' },
        { id: 3, label: 'Plugins', to: '/plugins' },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
  computed: {
    user() {
      if (this.$store.getters.getUser) {
        return this.$store.getters.getUser.user;
      }
      return null;
    },
  },
};
</script>

<style scoped>
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}
.slide-enter-active {
  animation: slideIn 0.5s;
}

.slide-leave-active {
  animation: slideOut 0.5s;
}

.slide-enter-active, .slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-enter-to, .slide-leave {
  opacity: 1;
  transform: translateX(0%);
}
</style>
