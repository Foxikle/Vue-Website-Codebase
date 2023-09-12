<template>
    <div ref="content_wrapper" class="bg-slate-300 dark:bg-zinc-700 text-gray-800
        dark:text-gray-200 font-sans">
      <GlobalHeader pgTitle="Privacy Policy"/>
      <div class="max-w-3xl mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">Foxikle's Privacy Policy</h2>
    <p class="mb-2">Effective Date: July 27th, 2023</p>
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">1. Introduction</h3>
      <p>
        Welcome to the Foxikle Website (the "Website," "We," "Us," or "Our").
        This privacy policy outlines the types of personal information we
        collect, how we use it, and the steps we take to safeguard your
        information. By accessing or using the Website, you consent to the
        practices described in this policy.
      </p>
    </div>
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">2. Information Collected</h3>
      <p>
        (a) Personal Information: We may collect personally identifiable
        information that you provide voluntarily, such as your name, email
        address, and other information you submit through
        contact forms, registration forms, or interactive features on the
        Website.
      </p>
      <p>
        (b) Non-Personal Information: We may automatically collect non-personal
        information about your device and browsing behavior, such as your IP
        address, browser type, operating system, and usage patterns, using
        cookies and similar technologies. This information is used to enhance
        the functionality of the Website and improve your user experience.
      </p>
    </div>
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">3. Use of Information</h3>
      <p>
        We may use your personal information for the following purposes:
      </p>
      <ul class="list-disc list-inside text-left pl-6 indent-1">
        <li>To provide and maintain the services offered on the Website.</li>
        <li>To respond to your inquiries, comments, or requests.</li>
        <li>To personalize your experience on the Website.</li>
        <li>To improve our products, services, and user experience.</li>
        <li>To comply with legal obligations and protect our rights and interests.</li>
      </ul>
    </div>
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">4. Disclosure of Information</h3>
      <p>We may share your personal information in the following circumstances:</p>
      <ul class="list-disc list-inside pl-6 text-left indent-1">
        <li>
          With trusted third-party service providers who assist us in operating
          the Website and providing services.
        </li>
        <li>When required by law, court order, or governmental authority.</li>
        <li>
          To protect the rights, property, or safety of the Website, our users,
          or others.
        </li>
      </ul>
    </div>
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">5. Third-Party Links</h3>
      <p>
        Our Website may contain links to third-party websites or services that
        have their own privacy policies. We are not responsible for the content
        or practices of any linked site. We recommend reviewing the privacy
        policies of these websites before providing any personal information.
      </p>
    </div>
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">6. Security</h3>
      <p>
        We implement reasonable security measures to protect your personal
        information from unauthorized access, disclosure, or destruction.
        However, no method of data transmission over the internet or electronic
        storage is entirely secure, and we cannot guarantee absolute security.
      </p>
    </div>
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">7. Children's Privacy</h3>
      <p>
        The Website is not intended for children under the age of 13.
        We do not knowingly collect personal information from individuals under
        13. If you believe we have inadvertently collected
        information from a child, please contact us immediately, and we will
        take appropriate steps to delete the information.
      </p>
    </div>
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">8. Changes to this Privacy Policy</h3>
      <p>
        We reserve the right to update this privacy policy at any time. The
        most recent version will be posted on the Website, with the effective
        date noted at the beginning. We encourage you to review this policy
        periodically for any changes.
      </p>
    </div>
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">9. Contact Us</h3>
      <p>
        If you have any questions, concerns, or requests regarding this privacy
        policy or the use of your personal information, please contact us at:
      </p>
      <p class="font-bold">
        support@foxikle.dev
      </p>
    </div>
  </div>
      </div>
    <GlobalFooter />
  </template>

<script>
// @ is an alias to /src
import GlobalHeader from '@/components/GlobalHeader.vue';
import GlobalFooter from '@/components/GlobalFooter.vue';

export default {
  name: 'PrivacyPolicyView',
  components: {
    GlobalHeader,
    GlobalFooter,
  },
};
</script>
