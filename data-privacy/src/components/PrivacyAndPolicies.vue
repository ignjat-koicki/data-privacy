<template>
  <div class="privacy-page">
    <h1>{{ page.title }}</h1>

    <p>
      {{ page.text[0] }}
    </p>

    <p>
      {{ page.text[1] }}
    </p>
  </div>
</template>

<script lang="ts">
import { LANGCONST } from '../lang/Lang'

export default {
  name: 'string',
  created() {
    this.page = LANGCONST.lang.userPages.find((x) => x.page == 'privacy')
  },
  data() {
    return {
      page: LANGCONST.lang.userPages.find((x) => x.page == 'privacy'),
    }
  },
  methods: {},
}
</script>

<style>
.privacy-page {
  padding: 50px 0px !important;
}
.privacy-page p {
  font-weight: 400 !important;
}
</style>
