<template>
    <div ref="content_wrapper" class="bg-slate-300 dark:bg-zinc-700 text-gray-800
        dark:text-gray-200 font-sans">
      <GlobalHeader pgTitle="Terms of Service"/>
  <div class="max-w-3xl mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">Foxikle's Terms of Service</h2>
    <p class="mb-2">Effective Date: July 27th, 2023</p>
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">1. Acceptance of Terms</h3>
      <p>
        Welcome to the Foxikle website (the "Website," "We," "Us," or "Our"). By
        accessing or using the Website, you agree to be bound by these Terms of
        Service and any other applicable guidelines or policies referenced
        herein. If you do not agree to these terms, please do not use the
        Website.
      </p>
    </div>
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">2. User Conduct</h3>
      <p>
        You agree to use the Website only for lawful purposes and in a manner
        that does not violate any applicable laws, regulations, or the rights of
        others. Prohibited actions include, but are not limited to:
      </p>
      <ul class="list-disc pl-6">
        <li>
          Uploading, posting, or transmitting any content that is unlawful,
          harmful, threatening, abusive, defamatory, or otherwise objectionable.
        </li>
        <li>
          Engaging in any activity that could harm, disable, overburden, or
          impair the Website or interfere with other users' enjoyment of the
          Website.
        </li>
        <li>
          Attempting to gain unauthorized access to any portion of the Website,
          other users' accounts, or any systems or networks connected to the
          Website.
        </li>
        <li>
          Using the Website to distribute unsolicited or unauthorized
          advertising, promotional materials, spam, or any other form of
          solicitation.
        </li>
      </ul>
    </div>
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">3. Intellectual Property</h3>
      <p>
        The content, design, trademarks, logos, and other materials displayed
        on the Website are owned or licensed by us and are protected by
        intellectual property laws. You may not reproduce, distribute, modify,
        or create derivative works of any content on the Website without our
        express written consent.
      </p>
    </div>
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">4. User-Generated Content</h3>
      <p>
        You may have the opportunity to submit or post content on the Website,
        such as comments, reviews, or user-generated content. By submitting
        content, you grant us a non-exclusive, royalty-free, perpetual,
        irrevocable, and fully sublicensable right to use, reproduce, modify,
        adapt, publish, translate, create derivative works from, distribute,
        and display such content throughout the world in any media.
      </p>
      <p>
        You are solely responsible for any content you submit and ensure that it
        does not infringe upon the rights of any third party or violate any
        applicable laws.
      </p>
    </div>
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">5. Disclaimer of Warranties</h3>
      <p>
        The Website is provided on an "as is" and "as available" basis. We make
        no warranties or representations, expressed or implied, regarding the
        Website's reliability, accuracy, completeness, or availability. Your use
        of the Website is at your own risk.
      </p>
    </div>
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">6. Limitation of Liability</h3>
      <p>
        To the extent permitted by applicable laws, we shall not be liable for
        any direct, indirect, incidental, special, or consequential damages
        arising from or in connection with your use of the Website or any
        content provided on the Website.
      </p>
    </div>
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">7. Indemnification</h3>
      <p>
        You agree to indemnify, defend, and hold harmless Foxikle,
        its officers, directors, employees, and affiliates from any claims,
        losses, liabilities, expenses, or damages, including reasonable
        attorney's fees, arising out of or related to your use or misuse of the
        Website, violation of these Terms of Service, or any third-party rights
        infringement.
      </p>
    </div>
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">8. Changes to the Terms</h3>
      <p>
        We reserve the right to modify or update these Terms of Service at any
        time without prior notice. The most recent version will be posted on
        the Website, and your continued use of the Website after the changes are
        implemented constitutes your acceptance of the updated terms.
      </p>
    </div>
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">9. Termination</h3>
      <p>
        We reserve the right to terminate or suspend your access to the Website
        at any time for any reason without notice.
      </p>
    </div>
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">10. Governing Law</h3>
      <p>
        These Terms of Service shall be governed by and construed in accordance
        with the laws of The United States. Any disputes arising under or in
        connection with these terms shall be subject to the exclusive
        jurisdiction of the courts in The United States.
      </p>
    </div>
    <div class="mb-6">
      <h3 class="text-xl font-bold mb-2">11. Contact Us</h3>
      <p>
        If you have any questions, concerns, or inquiries about these Terms of
        Service, please contact us at:
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
import GlobalHeader from '@/components/GlobalHeader.vue';
import GlobalFooter from '@/components/GlobalFooter.vue';

export default {
  name: 'TermsOfServiceView',
  components: {
    GlobalHeader,
    GlobalFooter,
  },
};
</script>
