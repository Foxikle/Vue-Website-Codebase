<template>
    <div className="bg-slate-300 dark:bg-zinc-700 flex flex-col justify-between m-0 p-0
        text-gray-800 dark:text-gray-200 font-sans flex-wrap"
        ref="content_wrapper">
    <GlobalHeader pgTitle="Plugin Wikis"  :componentKey="componentKey"/>
    <div class="flex items-center justify-center">
      <p className="sm:m-20 m-10 sm:text-xl sm:w-2/6 flex-col">
        The wikis for plugins I publish can be found below.
      </p>
    </div>
    <div class="flex flex-row flex-wrap m-10 mb-20 justify-center">
      <div className="border-cyan-700 hover:border-cyan-950 text-center
                  hover:dark:bg-zinc-600 border-2 rounded-lg m-3 p-1 px-3 transition
                  shadow-sky-950 shadow-md hover:scale-105 min-w-60 justift-center items-center
                  flex flex-col">
          <h1 className="text-3xl">CustomNPCs</h1>
          <p className="whitespace-normal w-auto">
          The simple, intuitive, and highly customizable NPC plugin.  </p>
          <RouterLink className="hover:bg-amber-600 p-1 m-3 border-2 rounded-lg transition
           hover:border-emerald-950 border-cyan-700 flex justify-center
          hover:scale-105 w-3/4" to="/plugins/wiki/customnpcs"> View Wiki </RouterLink>
      </div>
    </div>
    <div class="discord flex justify-center">
      <p class="text-xl dark:bg-violet-600 border-2 dark:border-violet-900
      bg-violet-400  border-violet-700 mb-24 w-1/6
          self-center rounded-lg p-1 justify-center text-center hover:bg-purple-600
          transition min-w-min relative">
          <a href="https://discord.com/invite/Arp6A6ue3u" target="_blank">
            Discord
          </a>
      </p>
    </div>
    </div>
    <div className="bg-slate-300 dark:bg-zinc-700" :style="{height: emptySpaceHeight + 'px'}"></div>
      <div ref="footer_wrapper">
        <GlobalFooter className="fixed w-full bottom-0"/>
      </div>
  </template>
<script>
import GlobalHeader from '@/components/GlobalHeader.vue';
import GlobalFooter from '@/components/GlobalFooter.vue';

export default {
  data() {
    return {
      emptySpaceHeight: 0,
      componentKey: 0,
    };
  },
  name: 'WikiHome',
  components: {
    GlobalHeader,
    GlobalFooter,
  },
  methods: {
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
    this.calculateEmptySpace();
    document.title = 'Plugin Wikis | Foxikle';
    document.addEventListener('fullscreenchange', this.onFullscreenChange);
    document.addEventListener('mozfullscreenchange', this.onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', this.onFullscreenChange);
    document.addEventListener('msfullscreenchange', this.onFullscreenChange);
    window.addEventListener('resize', this.calculateEmptySpace);
  },
  beforeUnmount() {
    document.removeEventListener('fullscreenchange', this.onFullscreenChange);
    document.removeEventListener('mozfullscreenchange', this.onFullscreenChange);
    document.removeEventListener('webkitfullscreenchange', this.onFullscreenChange);
    document.removeEventListener('msfullscreenchange', this.onFullscreenChange);
    window.removeEventListener('resize', this.calculateEmptySpace);
  },
  created() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'F11') {
        this.onFullscreenChange();
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.exitFullscreen();
      }
    });
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
