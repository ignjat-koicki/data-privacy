<template>
  <div class="terms-of-use-page">
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
    this.page = LANGCONST.lang.userPages.find((x) => x.page == 'terms')

    document.title = LANGCONST.lang.pageTitles['Terms'].title
  },
  data() {
    return {
      page: LANGCONST.lang.userPages.find((x) => x.page == 'terms'),
    }
  },
  methods: {},
}
</script>

<style>
.terms-of-use-page {
  padding: 50px 0px !important;
}

.terms-of-use-page p {
  font-weight: 400 !important;
}

</style>
