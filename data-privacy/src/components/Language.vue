<template>
  <div class="lang-container" style="margin-right: 10px" :class="{ hidden: false }">
    <div class="lang-select">
      <div class="selected" @click="open = !open">
        <FontAwesomeIcon :icon="faGlobe"></FontAwesomeIcon>
        {{ selected!.label }}
      </div>

      <div v-if="open" class="dropdown">
        <div v-for="lang in languages" :key="lang.value" class="option" @click="changeLang(lang)">
          <FontAwesomeIcon class="lang-icon" :icon="lang.flag"></FontAwesomeIcon>
          {{ lang.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { LANGCONST } from './../lang/Lang'
import {
  faCheck,
  faGlobe,
  faGlobeAmericas,
  faGlobeEurope,
  faGlobeOceania,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'Language',
  components: {
    FontAwesomeIcon: FontAwesomeIcon,
  },
  props: {
    selected: {
      type: Object,
      required: true,
    },
    open: {
      type: Boolean,
      required: false,
    },
    hidden: {
      type: Boolean,
      required: false,
    },
    mobile: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      selected: this.selected,
      open: false,
      hidden: this.hidden,
      mobile: this.mobile,
      outerWidth: outerWidth,
      lang: LANGCONST.lang,
      faGlobe: faGlobeAmericas,
      languages: [] as any[],
    }
  },
  mounted() {
    console.log(this.selected)
    setTimeout(() => {
      this.loadLanguages()
    }, 100)
    setTimeout(() => {
      console.log(this.languages)
      this.selected = this.languages.find((x) => x.value == sessionStorage.getItem('lang'))
    }, 200)
  },
  emits: ['change'],
  watch: {
    selected(newVal) {
      this.selected = newVal
    },
    open(newVal) {
      this.open = newVal
    },
    mobile(newVal) {
      this.mobile = newVal
    },
    lang(newVal) {
      this.lang = LANGCONST.lang
    },
  },
  methods: {
    loadLanguages() {
      const lang = LANGCONST.lang
      this.languages = [
        {
          value: 'sr-latin-rs',
          label: lang.Serbian,
          flag: faCheck,
        },
        {
          value: 'en',
          label: lang.English,
          flag: faCheck,
        },
      ]
    },
    changeLang(event: any) {
      this.selected = event
      this.$emit('change', event)
    },
  },
}
</script>

<style>
@keyframes showicon {
  from {
    opacity: 0;
    transform: translateX(-3px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

.mobile-lang-container {
  position: unset !important;
}

.lang-select {
  animation: fadeIn 0.2s ease forwards;
}
.option .lang-icon {
  opacity: 0;
}

.option {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  font-weight: 200;

  cursor: pointer;
}

.dropdown {
  position: absolute;
  width: 100%;
  border: 1.5px solid rgba(60, 60, 60, 0.7);
  background: #fff;
  border-radius: 4px;
  z-index: 10;
  z-index: 99999999;
}

.lang-select {
  width: 140px;
  position: relative;
  font-size: 14px;
  border-radius: 8px !important;
}
.selected {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  font-weight: 200;

  border-radius: 4px;
  cursor: pointer;
  background: #fff;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.lang-container {
  animation: fadeIn 0.2s ease forwards;
  position: absolute;
  right: 25%;
}
.option:hover .lang-icon {
  animation: showicon 0.07s ease-out forwards;
}
</style>
