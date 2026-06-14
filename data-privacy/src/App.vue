<script lang="ts">
import { useRoute, useRouter } from 'vue-router'
import Language from './components/Language.vue'
import { Lang, LANGCONST } from './lang/Lang.ts'
import { LangModel } from './lang/LangModel.ts'
import router from './router'
import { watch } from 'vue'

export default {
  name: 'app',
  components: {
    Language: Language,
  },
  data() {
    return {
      outerWidth: window.outerWidth,
      selected: {
        value: 'sr-latin-rs',
        label: 'Serbian',
        flag: 'https://flagcdn.com/w20/rs.png',
      },
      currentLang: LANGCONST.lang,
      routeLang: LANGCONST.currentLang,
    }
  },
  mounted() {
    let lang = sessionStorage.getItem('lang')
    let langModel = new Lang()

    this.overlay()

    let navigations = document.querySelectorAll<Element>('.navigation')
    for (let i = 0; i < navigations.length; i++) {
      if (i != navigations.length - 1) {
        navigations[i].classList.add('removed')
      }
    }

    if (lang) {
      langModel.changeLang(lang)
      this.currentLang = langModel.getLang(lang)
      this.routeLang = LANGCONST.currentLang
      sessionStorage.setItem('lang', LANGCONST.currentLang)
    } else {
      langModel.changeLang(LANGCONST.LANG_SRB)
      this.currentLang = langModel.getLang(LANGCONST.LANG_SRB)
      this.routeLang = LANGCONST.currentLang
      sessionStorage.setItem('lang', this.routeLang)
    }

    router.push({
      name: this.$route.name,
      params: { lang: this.routeLang },
    })

    document.documentElement.lang = this.routeLang
  },
  created() {},
  methods: {
    overlay() {
      const div = document.createElement('div')
      div.classList.add('overlay')
      document.querySelector('.wrapper').appendChild(div)

      let overlays = document.querySelectorAll<Element>('.overlay')
      setTimeout(() => {
        for (let i = 0; i < overlays.length; i++) {
          overlays[i].remove()
        }
      }, 300)
    },
    open(event) {
      window.open(event, '_blank')
    },
    changeLang(event: any) {
      let lang = event.value
      sessionStorage.setItem('lang', lang)

      window.location.reload()
    },
    getCurrentComponent() {
      const matched = (this as any).$router.currentRoute.value.matched
      console.log(matched)
      if (matched && matched.length > 0) {
        const component = matched[matched.length - 1]?.components?.default
        console.log(component)
        return component || null
      }
      return null
    },
  },
}
</script>

<template>
  <div class="wrapper">
    <header>
      <div class="navigation">
        <RouterLink
          v-for="value in currentLang.pages"
          class="route-link"
          :key="value.route"
          :to="{ name: value.route, params: { lang: routeLang ?? 'sr-latin-rs' } }"
        >
          <div class="nav-item">
            <span>{{ value.name }}</span>
          </div>
        </RouterLink>
        <div class="nav-item">
          <Language
            :open="false"
            :selected="selected"
            :mobile="outerWidth < 900"
            @change="changeLang($event)"
          ></Language>
        </div>
      </div>
    </header>

    <div style="padding: 0px 14%">
      <div class="wrapper wrapper-content">
        <component :is="getCurrentComponent()" />
      </div>
    </div>

    <footer class="section-footer">
      <div class="footer-content" v-for="value in currentLang.footer.footerPages">
        <span class="footer-title">
          {{ value.name }}
          <span class="footer-headline"></span>
        </span>
        <p class="footer-item" v-for="item in value.routes">
          <a @click="open(item.route)">{{ item.name }}</a>
        </p>
      </div>
    </footer>
    <h2 class="copyright">
      Copyright © 2024 Datamit Technologies. All rights reserved.&nbsp;
      <a :href="'/' + routeLang">Terms of use</a> &nbsp; | &nbsp;
      <a :href="'/' + routeLang + '/' + 'privacy-and-policies'">Privacy Policy</a>
    </h2>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.hidden {
  display: none !important;
}

.removed {
  display: none !important;
}

.overlay {
  height: 300dvh;
  width: 100%;
  position: absolute;
  background-color: white;
  top: 0;
  z-index: 9999;
}

.section-footer {
  border-top: 0.2px solid rgba(197, 197, 197, 0.1);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-top: 1px solid rgba(216, 216, 216, 1);
  padding: 30px 7%;
  background: rgba(197, 197, 197, 0.1);
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
}

.route-link {
  text-decoration: none !important;
  color: rgba(60, 60, 60) !important;
}

.copyright {
  border-top: 1px solid rgba(216, 216, 216, 0.8);
  font-size: 14px;
  font-weight: 100;
  color: rgba(60, 60, 60);
  width: 100%;
  padding-top: 1px;
  background-color: rgba(173, 173, 173, 0.1);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 7% !important;
  padding-right: 7% !important;
}

.copyright a {
  color: #0077ed;
}

.navigation {
  width: 100%;
  display: flex;
  height: 50px;
  border-bottom: 1px solid rgba(60, 60, 60);
  column-gap: 20px;
  background: rgb(255, 255, 255);
  padding: 10px 7%;
}

@media (max-width: 600px) {
  .navigation {
    flex-wrap: wrap;
    height: 150px;
  }

  .route-link {
    display: flex;
    align-items: self-start;
    justify-items: self-start;
    width: 100%;
  }

  .nav-item .lang-container {
    position: absolute;
    left: 4%;
  }
}

.footer-content {
  width: 23%;
  flex-direction: row;
  margin-bottom: 10px !important;
}

.footer-item {
  display: block;
  padding: 0;
  margin-bottom: 7px !important;
  font-size: 14px;
  color: rgb(70, 70, 70);
  font-weight: 200;

  margin-top: 2px;
}

.footer-item a {
  display: block;
  font-size: 16px !important;
  color: rgb(70, 70, 70);
  font-weight: 200;
}

.footer-headline {
  width: 100%;
  margin-top: 7px !important;
  height: 1.5px !important;
  display: block !important;
  background-color: rgba(197, 197, 197);
}

@media (max-width: 768px) {
  .footer-item,
  .footer-item a {
    font-size: 14.4px !important; /* 16px * 1.4 */
  }

  .footer-title {
    font-size: 16.2px !important; /* 18px * 1.4 */
  }
  .copyright {
    font-size: 10px !important;
    font-weight: 100 !important;
  }
  .footer-content {
    width: 100% !important;
    margin-bottom: 12px !important;
  }
}

.footer-item a {
  display: block;
  font-size: 16px;
  color: rgb(70, 70, 70);
  font-weight: 200;
}
.footer-title {
  font-size: 16px;
  color: black;
  font-weight: 200;
}

a {
  text-decoration: none;
}

.nav-item {
  font-size: 15px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-item span {
  display: block;
  margin-top: 10px;
}
</style>
