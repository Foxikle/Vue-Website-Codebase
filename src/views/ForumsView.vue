<template>
    <GlobalHeader pgTitle="Forums"/>
    <div className="flex flex-col"> <!--List of offical channels-->
      <h1>Offical Communications</h1>
      <div className="block py-4">
        <h1>Server Announcements</h1>
      </div>
      <div className="block py-4">
        <h1>Bug Reports</h1>
      </div>
      <div className="block py-4">
        <h1>Punishment Appeals</h1>
      </div>
      <div className="block py-4">
        <h1>Feature Request</h1>
      </div>
      <div className="block py-4">
        <h1>Support</h1>
      </div>
    </div>
    <div className="flex flex-col"> <!--List of community channels-->
      <h1>Community Channels</h1>
      <div className="block py-5">
        <h1>Guides</h1>
      </div>
      <div className="block py-5">
        <h1>Discussion</h1>
      </div>
      <div className="block py-5">
        <h1>Help and Advice</h1>
      </div>
      <h1>Support Ticket System</h1>
    </div>
    <GlobalFooter />
</template>
<script>
// @ is an alias to /src
import GlobalHeader from '@/components/GlobalHeader.vue';
import GlobalFooter from '@/components/GlobalFooter.vue';

export default {
  name: 'IssuesView',
  components: {
    GlobalHeader,
    GlobalFooter,
  },
};
</script>
