<template>
  <GlobalHeader pgTitle="Minecraft Server"/>
  <div className="bg-slate-400 h-screen" />
  <div class="flex flex-row justify-center">
    <div>
      <strong class="text-black">
        <router-link to="/server/store">
          Store
        </router-link>
        </strong>
    </div>
  </div>
  <GlobalFooter />
</template>
<script>
// @ is an alias to /src
import GlobalHeader from '@/components/GlobalHeader.vue';
import GlobalFooter from '@/components/GlobalFooter.vue';

export default {
  name: 'ServerHomeView',
  components: {
    GlobalHeader,
    GlobalFooter,
  },
};
</script>
