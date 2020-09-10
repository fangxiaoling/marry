import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PcIndex',
    component: resolve => require(['../views/PcIndex.vue'],resolve)
  },
  {
    path: '/PcIndex',
    name: 'PcIndex',
    component: resolve => require(['../views/PcIndex.vue'],resolve)
  },
  {
    path: '/MIndex',
    name: 'MIndex',
    component: resolve => require(['../views/MIndex.vue'],resolve)
  },
  {
    path: '/PcScene',
    name: 'PcScene',
    component: resolve => require(['../views/PcScene.vue'],resolve)
  },
  {
    path: '/MScene',
    name: 'MScene',
    component: resolve => require(['../views/MScene.vue'],resolve)
  },
  {
    path: '/PcSceneOne',
    name: 'PcSceneOne',
    component: resolve => require(['../views/PcSceneOne.vue'],resolve)
  },
  {
    path: '/MSceneOne',
    name: 'MSceneOne',
    component: resolve => require(['../views/MSceneOne.vue'],resolve)
  },
  {
    path: '/PcSceneTwo',
    name: 'PcSceneTwo',
    component: resolve => require(['../views/PcSceneTwo.vue'],resolve)
  },
  {
    path: '/MSceneTwo',
    name: 'MSceneTwo',
    component: resolve => require(['../views/MSceneTwo.vue'],resolve)
  },
  {
    path: '/PcSceneThree',
    name: 'PcSceneThree',
    component: resolve => require(['../views/PcSceneThree.vue'],resolve)
  },
  {
    path: '/MSceneThree',
    name: 'MSceneThree',
    component: resolve => require(['../views/MSceneThree.vue'],resolve)
  },
  {
    path: '/PcSceneFour',
    name: 'PcSceneFour',
    component: resolve => require(['../views/PcSceneFour.vue'],resolve)
  },
  {
    path: '/MSceneFour',
    name: 'MSceneFour',
    component: resolve => require(['../views/MSceneFour.vue'],resolve)
  },
  {
    path: '/PcSceneFive',
    name: 'PcSceneFive',
    component: resolve => require(['../views/PcSceneFive.vue'],resolve)
  },
  {
    path: '/MSceneFive',
    name: 'MSceneFive',
    component: resolve => require(['../views/MSceneFive.vue'],resolve)
  },
  {
    path: '/PcSceneSix',
    name: 'PcSceneSix',
    component: resolve => require(['../views/PcSceneSix.vue'],resolve)
  },
  {
    path: '/MSceneSix',
    name: 'MSceneSix',
    component: resolve => require(['../views/MSceneSix.vue'],resolve)
  },
  {
    path: '/PcSceneSeven',
    name: 'PcSceneSeven',
    component: resolve => require(['../views/PcSceneSeven.vue'],resolve)
  },
  {
    path: '/MSceneSeven',
    name: 'MSceneSeven',
    component: resolve => require(['../views/MSceneSeven.vue'],resolve)
  },
  {
    path: '/PcGuest',
    name: 'PcGuest',
    component: resolve => require(['../views/PcGuest.vue'],resolve)
  },
  {
    path: '/MGuest',
    name: 'MGuest',
    component: resolve => require(['../views/MGuest.vue'],resolve)
  },
  {
    path: '/PcGuestOne',
    name: 'PcGuestOne',
    component: resolve => require(['../views/PcGuestOne.vue'],resolve)
  },
  {
    path: '/MGuestOne',
    name: 'MGuestOne',
    component: resolve => require(['../views/MGuestOne.vue'],resolve)
  },
  {
    path: '/PcGuestTwo',
    name: 'PcGuestTwo',
    component: resolve => require(['../views/PcGuestTwo.vue'],resolve)
  },
  {
    path: '/MGuestTwo',
    name: 'MGuestTwo',
    component: resolve => require(['../views/MGuestTwo.vue'],resolve)
  },
  {
    path: '/PcGuestThree',
    name: 'PcGuestThree',
    component: resolve => require(['../views/PcGuestThree.vue'],resolve)
  },
  {
    path: '/MGuestThree',
    name: 'MGuestThree',
    component: resolve => require(['../views/MGuestThree.vue'],resolve)
  },
  {
    path: '/PcGuestFour',
    name: 'PcGuestFour',
    component: resolve => require(['../views/PcGuestFour.vue'],resolve)
  },
  {
    path: '/MGuestFour',
    name: 'MGuestFour',
    component: resolve => require(['../views/MGuestFour.vue'],resolve)
  },
  {
    path: '/PcGuestFive',
    name: 'PcGuestFive',
    component: resolve => require(['../views/PcGuestFive.vue'],resolve)
  },
  {
    path: '/MGuestFive',
    name: 'MGuestFive',
    component: resolve => require(['../views/MGuestFive.vue'],resolve)
  },
  {
    path: '/PcGuestSix',
    name: 'PcGuestSix',
    component: resolve => require(['../views/PcGuestSix.vue'],resolve)
  },
  {
    path: '/MGuestSix',
    name: 'MGuestSix',
    component: resolve => require(['../views/MGuestSix.vue'],resolve)
  },
  {
    path: '/PcGuestSeven',
    name: 'PcGuestSeven',
    component: resolve => require(['../views/PcGuestSeven.vue'],resolve)
  },
  {
    path: '/MGuestSeven',
    name: 'MGuestSeven',
    component: resolve => require(['../views/MGuestSeven.vue'],resolve)
  },
  {
    path: '/PcGuestEight',
    name: 'PcGuestEight',
    component: resolve => require(['../views/PcGuestEight.vue'],resolve)
  },
  {
    path: '/MGuestEight',
    name: 'MGuestEight',
    component: resolve => require(['../views/MGuestEight.vue'],resolve)
  },
  {
    path: '/PcGuestNine',
    name: 'PcGuestNine',
    component: resolve => require(['../views/PcGuestNine.vue'],resolve)
  },
  {
    path: '/MGuestNine',
    name: 'MGuestNine',
    component: resolve => require(['../views/MGuestNine.vue'],resolve)
  },
  {
    path: '/PcGuestTen',
    name: 'PcGuestTen',
    component: resolve => require(['../views/PcGuestTen.vue'],resolve)
  },
  {
    path: '/MGuestTen',
    name: 'MGuestTen',
    component: resolve => require(['../views/MGuestTen.vue'],resolve)
  },
  {
    path: '/PcGuestEleven',
    name: 'PcGuestEleven',
    component: resolve => require(['../views/PcGuestEleven.vue'],resolve)
  },
  {
    path: '/MGuestEleven',
    name: 'MGuestEleven',
    component: resolve => require(['../views/MGuestEleven.vue'],resolve)
  },
  {
    path: '/PcGuestTwelve',
    name: 'PcGuestTwelve',
    component: resolve => require(['../views/PcGuestTwelve.vue'],resolve)
  },
  {
    path: '/MGuestTwelve',
    name: 'MGuestTwelve',
    component: resolve => require(['../views/MGuestTwelve.vue'],resolve)
  },
  {
    path: '/PcMicroFilm',
    name: 'PcMicroFilm',
    component: resolve => require(['../views/PcMicroFilm.vue'],resolve)
  },
  {
    path: '/MMicroFilm',
    name: 'MMicroFilm',
    component: resolve => require(['../views/MMicroFilm.vue'],resolve)
  },
  {
    path: '/PcMicroFilm1',
    name: 'PcMicroFilm1',
    component: resolve => require(['../views/PcMicroFilm1.vue'],resolve)
  },
  {
    path: '/PcMicroFilm2',
    name: 'PcMicroFilm2',
    component: resolve => require(['../views/PcMicroFilm2.vue'],resolve)
  },
  {
    path: '/PcMicroFilm3',
    name: 'PcMicroFilm3',
    component: resolve => require(['../views/PcMicroFilm3.vue'],resolve)
  },
  {
    path: '/PcMicroFilm4',
    name: 'PcMicroFilm4',
    component: resolve => require(['../views/PcMicroFilm4.vue'],resolve)
  },
  {
    path: '/PcMicroFilm5',
    name: 'PcMicroFilm5',
    component: resolve => require(['../views/PcMicroFilm5.vue'],resolve)
  },
  {
    path: '/PcMicroFilm6',
    name: 'PcMicroFilm6',
    component: resolve => require(['../views/PcMicroFilm6.vue'],resolve)
  },
  {
    path: '/PcMicroFilm7',
    name: 'PcMicroFilm7',
    component: resolve => require(['../views/PcMicroFilm7.vue'],resolve)
  },
  {
    path: '/PcMicroFilm8',
    name: 'PcMicroFilm8',
    component: resolve => require(['../views/PcMicroFilm8.vue'],resolve)
  },
  {
    path: '/PcMicroFilm9',
    name: 'PcMicroFilm9',
    component: resolve => require(['../views/PcMicroFilm9.vue'],resolve)
  },
  {
    path: '/PcMicroFilm10',
    name: 'PcMicroFilm10',
    component: resolve => require(['../views/PcMicroFilm10.vue'],resolve)
  },
  {
    path: '/MMicroFilm1',
    name: 'MMicroFilm1',
    component: resolve => require(['../views/MMicroFilm1.vue'],resolve)
  },
  {
    path: '/MMicroFilm2',
    name: 'MMicroFilm2',
    component: resolve => require(['../views/MMicroFilm2.vue'],resolve)
  },
  {
    path: '/MMicroFilm3',
    name: 'MMicroFilm3',
    component: resolve => require(['../views/MMicroFilm3.vue'],resolve)
  },
  {
    path: '/MMicroFilm4',
    name: 'MMicroFilm4',
    component: resolve => require(['../views/MMicroFilm4.vue'],resolve)
  },
  {
    path: '/MMicroFilm5',
    name: 'MMicroFilm5',
    component: resolve => require(['../views/MMicroFilm5.vue'],resolve)
  },
  {
    path: '/MMicroFilm6',
    name: 'MMicroFilm6',
    component: resolve => require(['../views/MMicroFilm6.vue'],resolve)
  },
  {
    path: '/MMicroFilm7',
    name: 'MMicroFilm7',
    component: resolve => require(['../views/MMicroFilm7.vue'],resolve)
  },
  {
    path: '/MMicroFilm8',
    name: 'MMicroFilm8',
    component: resolve => require(['../views/MMicroFilm8.vue'],resolve)
  },
  {
    path: '/MMicroFilm9',
    name: 'MMicroFilm9',
    component: resolve => require(['../views/MMicroFilm9.vue'],resolve)
  },
  {
    path: '/MMicroFilm10',
    name: 'MMicroFilm10',
    component: resolve => require(['../views/MMicroFilm10.vue'],resolve)
  },
  {
    path: '/PcActivity',
    name: 'PcActivity',
    component: resolve => require(['../views/PcActivity.vue'],resolve)
  },
  {
    path: '/MActivity',
    name: 'MActivity',
    component: resolve => require(['../views/MActivity.vue'],resolve)
  },
  {
    path: '/PcActivityOne',
    name: 'PcActivityOne',
    component: resolve => require(['../views/PcActivityOne.vue'],resolve)
  },
  {
    path: '/PcActivityTwo',
    name: 'PcActivityTwo',
    component: resolve => require(['../views/MIndex.vue'],resolve)
  },
  {
    path: '/PcActivityThree',
    name: 'PcActivityThree',
    component: resolve => require(['../views/PcActivityThree.vue'],resolve)
  },
  {
    path: '/MActivityOne',
    name: 'MActivityOne',
    component: resolve => require(['../views/MActivityOne.vue'],resolve)
  },
  {
    path: '/MActivityTwo',
    name: 'MActivityTwo',
    component: resolve => require(['../views/MActivityTwo.vue'],resolve)
  },
  {
    path: '/MActivityThree',
    name: 'MActivityThree',
    component: resolve => require(['../views/MActivityThree.vue'],resolve)
  },
  {
    path: '/PcBrands',
    name: 'PcBrands',
    component: resolve => require(['../views/PcBrands.vue'],resolve)
  },
  {
    path: '/MBrands',
    name: 'MBrands',
    component: resolve => require(['../views/MBrands.vue'],resolve)
  },
  {
    path: '/PcPortrait',
    name: 'PcPortrait',
    component: resolve => require(['../views/PcPortrait.vue'],resolve)
  },
  {
    path: '/MPortrait',
    name: 'MPortrait',
    component: resolve => require(['../views/MPortrait.vue'],resolve)
  },
  {
    path: '/PcPortrait1',
    name: 'PcPortrait1',
    component: resolve => require(['../views/PcPortrait1.vue'],resolve)
  },
  {
    path: '/PcPortrait2',
    name: 'PcPortrait2',
    component: resolve => require(['../views/PcPortrait2.vue'],resolve)
  },
  {
    path: '/PcPortrait3',
    name: 'PcPortrait3',
    component: resolve => require(['../views/PcPortrait3.vue'],resolve)
  },
  {
    path: '/PcPortrait4',
    name: 'PcPortrait4',
    component: resolve => require(['../views/PcPortrait4.vue'],resolve)
  },
  {
    path: '/PcPortrait5',
    name: 'PcPortrait5',
    component: resolve => require(['../views/PcPortrait5.vue'],resolve)
  },
  {
    path: '/PcPortrait6',
    name: 'PcPortrait6',
    component: resolve => require(['../views/PcPortrait6.vue'],resolve)
  },
  {
    path: '/PcPortrait7',
    name: 'PcPortrait7',
    component: resolve => require(['../views/PcPortrait7.vue'],resolve)
  },
  {
    path: '/PcPortrait8',
    name: 'PcPortrait8',
    component: resolve => require(['../views/PcPortrait8.vue'],resolve)
  },
  {

    path: '/PcPortrait9',
    name: 'PcPortrait9',
    component: resolve => require(['../views/PcPortrait9.vue'],resolve)
  },
  {
    path: '/PcPortrait10',
    name: 'PcPortrait10',
    component: resolve => require(['../views/PcPortrait10.vue'],resolve)
  },
  {
    path: '/PcPortrait11',
    name: 'PcPortrait11',
    component: resolve => require(['../views/PcPortrait11.vue'],resolve)
  },
  {
    path: '/PcPortrait12',
    name: 'PcPortrait12',
    component: resolve => require(['../views/PcPortrait12.vue'],resolve)
  },
  {
    path: '/MPortrait1',
    name: 'MPortrait1',
    component: resolve => require(['../views/MPortrait1.vue'],resolve)
  },
  {
    path: '/MPortrait2',
    name: 'MPortrait2',
    component: resolve => require(['../views/MPortrait2.vue'],resolve)
  },
  {
    path: '/MPortrait3',
    name: 'MPortrait3',
    component: resolve => require(['../views/MPortrait3.vue'],resolve)
  },
  {
    path: '/MPortrait4',
    name: 'MPortrait4',
    component: resolve => require(['../views/MPortrait4.vue'],resolve)
  },
  {
    path: '/MPortrait5',
    name: 'MPortrait5',
    component: resolve => require(['../views/MPortrait5.vue'],resolve)
  },
  {
    path: '/MPortrait6',
    name: 'MPortrait6',
    component: resolve => require(['../views/MPortrait6.vue'],resolve)
  },
  {
    path: '/MPortrait7',
    name: 'MPortrait7',
    component: resolve => require(['../views/MPortrait7.vue'],resolve)
  },
  {
    path: '/MPortrait8',
    name: 'MPortrait8',
    component: resolve => require(['../views/MPortrait8.vue'],resolve)
  },
  {
    path: '/MPortrait9',
    name: 'MPortrait9',
    component: resolve => require(['../views/MPortrait9.vue'],resolve)
  },
  {
    path: '/MPortrait10',
    name: 'MPortrait10',
    component: resolve => require(['../views/MPortrait10.vue'],resolve)
  },
  {
    path: '/MPortrait11',
    name: 'MPortrait11',
    component: resolve => require(['../views/MPortrait11.vue'],resolve)
  },
  {
    path: '/MPortrait12',
    name: 'MPortrait12',
    component: resolve => require(['../views/MPortrait12.vue'],resolve)
  },
  {
    path: '/PcLogin',
    name: 'PcLogin',
    component: resolve => require(['../views/PcLogin.vue'],resolve)
  },
   
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes  
})

export default router




