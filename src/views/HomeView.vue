<template>
  <div className="bg-slate-300 dark:bg-zinc-700 flex flex-col justify-between m-0 p-0
      text-gray-800 dark:text-gray-200 font-sans flex-wrap"
      ref="content_wrapper">
    <GlobalHeader pgTitle="Home"/>
    <div>
      <h1 class="sm:text-7xl m-6">
        Hi, I'm Foxikle.
      </h1>
      <div class="flex flex-col justify-center">
      <p class="w-3/5 self-center">
        This is the home of basically everything I do. So if you are looking for something,
        chances are you'll find it here. If you are looking for plugin support,
        please join my discord.
      </p>
      <div class="discord flex justify-center">
    <p class="text-xl dark:bg-violet-600 border-2 dark:border-violet-900
    bg-violet-400  border-violet-700 mb-24 w-1/12 mt-6
        self-center rounded-lg p-1 justify-center text-center hover:bg-purple-600
        transition min-w-min relative">
        <a href="https://discord.com/invite/Arp6A6ue3u" target="_blank">
          Discord
        </a>
    </p>
  </div>
      </div>
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
  name: 'HomeView',
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
    document.title = 'Home | Foxikle';
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
};
</script>
