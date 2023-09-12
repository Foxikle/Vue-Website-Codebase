<template>
    <img v-if="user.picture_url" :src="user.picture_url" alt="User Icon"
        class="max-h-8 mr-2 inline" />
    <img v-else :src="'https://api.dicebear.com/6.x/identicon/svg?seed=' + user.username" alt="User Icon"
        class="max-h-8 mr-2 inline" />
</template>
<script>
export default {
  name: 'IconImage',
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
