import { mapGetters } from "vuex";

import Vue from "vue";

export default Vue.extend({
  computed: {
    ...mapGetters("auth", ["isSignedIn"])
  },
  methods: {
    redirectIfSignedIn(path) {
      path = path || "/";
      if (this.isSignedIn) {
        this.$router.replace(path);
      }
    },
    redirectIfSignedOut(path) {
      path = path || "/";
      if (!this.isSignedIn) {
        this.$router.replace(path);
      }
    }
  }
});
