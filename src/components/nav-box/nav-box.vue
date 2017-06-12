<template>
    <div class="box clearfix">
        <div class="item " v-for="item in items" @click="$store.commit('OTHER')">
            <router-link :to="item.route">
                <img :src="item.src" width="40" height="40" >
                <p class="text">{{item.text}}</p>
            </router-link>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import store from '@/store/store';

    export default {
        data() {
            return {
                items: [
                    {
                        src: './static/img/luck.png',
                        route: '/luck',
                        text: '运势'
                    }, {
                        src: './static/img/smile.png',
                        route: '/smile',
                        text: '笑一笑'
                    }, {
                        src: './static/img/today.png',
                        route: '/today',
                        text: '今日'
                    }, {
                        src: './static/img/english.png',
                        route: '/english',
                        text: '英文励志'
                    }, {
                        src: './static/img/ip.png',
                        route: '/ip',
                        text: '获得ip'
                    }, {
                        src: './static/img/translate.png',
                        route: '/translate',
                        text: '翻译'
                    }, {
                        src: './static/img/other.png',
                        route: '/other',
                        text: '敬请期待'
                    }, {
                        src: './static/img/other.png',
                        route: '/other',
                        text: '敬请期待'
                    }
                ]
            };
        },
        store
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/base.styl";
    .box
        width: 100%
        padding-top: 20px
        font-size: 0
        /*border-radius: 100%/50% 100% 0 0*/
        z-index: 100
        /*background: red*/
        /*margin-top: -40px*/
        /*padding-top: 20px*/
        /*clearfix*/
        .item
            width: 25%
            float: left
            /*padding-top: 10px*/
            padding-bottom: 5px
            height: 60px
            text-align: center
            color: #11BFAE
            .text
                font-size: 10px
</style>
