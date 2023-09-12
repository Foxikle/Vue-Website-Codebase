<template>
  <div className="bg-slate-300 dark:bg-zinc-700 flex flex-col justify-between m-0 p-0
      text-gray-800 dark:text-gray-200 font-sans flex-wrap"
      ref="content_wrapper">
    <GlobalHeader pgTitle="About"/>
    <div class="personal m-8">
      <h1 class="lg:text-4xl text-2xl m-2">
        Foxikle
      </h1>
      <p>
        Hey! I'm Foxikle, and I like to code things. Moreover I like to teach myself
         how to code things.
      </p>
    </div>
    <hr className="w-3/5 h-1 mx-auto my-4 bg-gray-400 dark:bg-gray-500 border-0 rounded">
    <div class="plugins m-8">
      <h1 class="lg:text-4xl text-2xl m-2 mb-4">
        FAQ
      </h1>
      <div class="flex flex-col justify-center items-center self-center m-6 mb-16">
        <div class="wrapper">
          <p>
            Q: How long have you been coding?
          </p>
          <p>
            A: A while :)  (like 3 1/2 years)
          </p>
        </div>

        <div class="wrapper m-4">
          <p>
            Q: What languages are you familliar with?
          </p>
          <p>
            A: I'm familliar with Java, HTML & CSS, and Javascript
          </p>
        </div>

        <div class="wrapper m-4">
          <p>
            Q: Why are all of your plugins free & open source?
          </p>
          <p>
            A: I'm a fan of free things :)
          </p>
        </div>

        <div class="wrapper m-4">
          <p>
            Q: Can you make me a plugin?
          </p>
          <p>
            A: Probably not.
          </p>
        </div>

        <div class="wrapper m-4">
          <p>
            Q: Where can I get support?
          </p>
          <p>
            A: For now, Join my discord server. (I'm working on something. Be patient)
          </p>
        </div>

        <div class="wrapper m-4">
          <p>
            Q: Can I contribute to one of your plugins?
          </p>
          <p>
            A: Yes! You can make a pull request and I'll look at it. You can also fork any of the
             repos to modify them for yourself.
          </p>
        </div>

        <div class="wrapper m-4">
          <p>
            Q: What's with the branding?
          </p>
          <p>
            A: Foxes are my favourite animal. :)
          </p>
        </div>

        <div class="wrapper m-4">
          <p>
            Q: Where are you from?
          </p>
          <p>
            A: I'm from the east coast of the United States.
          </p>
        </div>

        <div class="wrapper m-4">
          <p>
            Q: When is your server releasing?
          </p>
          <p>
            A: Probably not soon.
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
  name: 'AboutView',
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
    document.title = 'About | Foxikle';
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
