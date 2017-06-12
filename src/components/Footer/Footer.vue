<template>
    <div class="footer">
        <div class="home page" @click="$store.commit('HOME')">
            <router-link to="/"><img class="person" :src=[home?homeUrl2:homeUrl1]></router-link>
        </div>
        <div class="person page" @click="$store.commit('ABOUT')">
            <router-link to="/about" ><img class="person" :src=[about?pageUrl2:pageUrl1]>
            </router-link>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import store from '@/store/store';
    import {mapState} from 'Vuex';

    export default {
        data() {
            return {
                homeUrl1: './static/img/home.png',
                homeUrl2: './static/img/home_active.png',
                pageUrl1: './static/img/person.png',
                pageUrl2: './static/img/person_active.png'
            };
        },
        computed: mapState(['home', 'about']),
        store
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .footer
        position: fixed
        bottom:0
        right: 0
        padding-bottom: 10px
        height: 46px
        width: 100%
        font-size: 0
        border-top: 1px solid #eee
        background-color: #fff
        .page
            display: inline-block;
            width: 50%
            text-align: center
            .person
                height: 50px

</style>
