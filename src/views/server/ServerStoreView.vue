<!-- views/LoginPage.vue -->
<template>
  <div>
    <div className="bg-slate-300 dark:bg-zinc-700 flex flex-col justify-between m-0 p-0
      text-gray-800 dark:text-gray-200 font-sans"
      ref="content_wrapper">
      <GlobalHeader pgTitle="Server Store" :componentKey="componentKey" />
      <div className="">
        <h1 className="text-7xl m-5">
          Server Ranks
        </h1>
        <hr className="w-4/12 h-1 mx-auto my-4 dark:bg-gray-400 bg-gray-700 border-0 rounded">
        <div className="flex flex-row flex-wrap m-10 mb-20 justify-center">
          <div className="border-cyan-700 hover:border-cyan-950 text-center
            hover:dark:bg-zinc-600 border-2 rounded-2xl m-3 p-1 px-3 transition
            shadow-sky-950 shadow-md hover:scale-105 min-w-2/5 w-2/5 justift-center text-2xl">
            <h1>Noble </h1>
            <p>$1.00</p>
          </div>
          <div className="border-cyan-700 hover:border-cyan-950 text-center
            hover:dark:bg-zinc-600 border-2 rounded-2xl m-3 p-1 px-3 transition
            shadow-sky-950 shadow-md hover:scale-105 min-w-2/5 w-2/5 justift-center text-2xl">
            <h1>Valient </h1>
            <p>$3.00</p>
          </div>
          <div className="border-cyan-700 hover:border-cyan-950 text-center
            hover:dark:bg-zinc-600 border-2 rounded-2xl m-3 p-1 px-3 transition
            shadow-sky-950 shadow-md hover:scale-105 min-w-2/5 w-2/5 justift-center text-2xl">
            <h1>Master </h1>
            <p>$6.00</p>
          </div>
          <div className="border-cyan-700 hover:border-cyan-950 text-center
            hover:dark:bg-zinc-600 border-2 rounded-2xl m-3 p-1 px-3 transition
            shadow-sky-950 shadow-md hover:scale-105 min-w-2/5 w-2/5 justift-center text-2xl">
            <h1>Celestial </h1>
            <p>$9.00</p>
          </div>
          <div className="border-cyan-700 hover:border-cyan-950 text-center
            hover:dark:bg-zinc-600 border-2 rounded-2xl m-3 p-1 px-3 transition
            shadow-sky-950 shadow-md hover:scale-105 min-w-2/5 w-2/5 justift-center text-2xl">
            <h1>Elysian  </h1>
            <p>$1.50/mo</p>
            <p class="italic text-sm text-gray-500">* Requires Celestial</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-slate-300 dark:bg-zinc-700" :style="{height: emptySpaceHeight + 'px'}"></div>
    <div ref="footer_wrapper">
      <GlobalFooter className="fixed w-full bottom-0"/>
    </div>
  </div>
</template>
<script>
import GlobalFooter from '@/components/GlobalFooter.vue';
import GlobalHeader from '@/components/GlobalHeader.vue';

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
