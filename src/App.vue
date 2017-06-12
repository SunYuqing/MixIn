<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import footer from '@/components/Footer/Footer';

  export default {
    components: {
      'v-footer': footer
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #app
    width:100%
    height:100%
    &::-webkit-scrollbar
      width:1px
    .fade-enter
      opacity:0

    .fade-leave
      opacity:1

    .fade-enter-active
      transition:opacity .3s

    .fade-leave-active
      opacity:0
      transition:opacity .3s

</style>
