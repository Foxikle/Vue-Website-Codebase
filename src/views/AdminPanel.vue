<template>
  <div className="bg-slate-300 dark:bg-zinc-700 m-0 p-0
    text-gray-800 dark:text-gray-200 font-sans">
    <div class="content_wrapper">
      <GlobalHeader pgTitle="Admin Panel"/>
      <h1 className="text-8xl mt-20">
        Welcome, {{ user.username }}!
      </h1>
      <hr className="w-5/6 h-1 mx-auto my-12 bg-gray-400 dark:bg-emerald-950 border-0 rounded">

      <h1>I really should use Grafana. Maybe I'll set that up later.</h1>
    </div>
    <div class="footer_wrapper">
      <GlobalFooter />
    </div>
  </div>
</template>
<script>
import GlobalHeader from '@/components/GlobalHeader.vue';
import GlobalFooter from '@/components/GlobalFooter.vue';

export default {
  components: {
    GlobalFooter,
    GlobalHeader,
  },
  computed: {
    user() {
      if (this.$store.getters.getUser) {
        return this.$store.getters.getUser.user;
      }
      return null;
    },
  },
  data() {
    return {
      newUsersToday: 0,
      newUsersThisWeek: 0,
      newUsersThisMonth: 0,
      deletedUsersToday: 0,
      deletedUsersThisWeek: 0,
      deletedUsersThisMonth: 0,
      UserLoginsToday: 0,
      UserLoginsThisWeek: 0,
      UserLoginsThisMonth: 0,
      UserLogoutsToday: 0,
      UserLogoutsThisWeek: 0,
      UserLogoutsThisMonth: 0,
      // Api things
      // server errors
      request500sToday: 0,
      request500sThisWeek: 0,
      request500sThisMonth: 0,
      // bad requests (expect a lot of these)
      request400sToday: 0,
      request400sThisWeek: 0,
      request400sThisMonth: 0,
      // Sucessful requests (and these)
      request200sToday: 0,
      request200sThisWeek: 0,
      request200sThisMonth: 0,
    };
  },
};
</script>
