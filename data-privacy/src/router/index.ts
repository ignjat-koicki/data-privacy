import { createRouter, createWebHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

import PrivacyAndPolicies from './../components/PrivacyAndPolicies.vue'
import TermsOfUse from './../components/TermsOfUse.vue'
import { LANGCONST } from '../lang/Lang.ts'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: {
      name: 'Terms',
      params: {
        lang: LANGCONST.currentLang,
      },
    },
  },

  {
    path: '/:lang(sr-latin-rs|en|eu-fr)',
    component: {
      template: '<router-view />',
    },
    children: [
      {
        path: '',
        name: 'Terms',
        component: TermsOfUse,
        params: {
          lang: LANGCONST.currentLang,
        },
      },
      {
        path: 'privacy-and-policies',
        name: 'Policies',
        component: PrivacyAndPolicies,
        params: {
          lang: LANGCONST.currentLang,
        },
      },
    ],
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'Terms',
      params: {
        lang: 'sr-latin-rs',
      },
    },
  },
] as RouteRecordRaw[]

export default createRouter({
  history: createWebHistory(),
  routes,
})
