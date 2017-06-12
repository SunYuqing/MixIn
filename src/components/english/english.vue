<template>
    <div class='my-english'>
        <div class='title'>
            <span class="helper"></span>
            <img :src=imgUrl @click="goback" class="back-img">
            <span class="text">每日英语</span>
        </div>
        <div class='content-item' v-for='item in resData'>
            <p class="english">{{item.english}}</p>
            <p class="chinese">{{item.chinese}}</p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios from 'axios';

    export default {
        data() {
            return {
                imgUrl: './static/img/back.png',
                apiUrl: 'http://route.showapi.com/1211-1',
                appid: '39157',
                secret: '75aab1e85b434a2e882a77fae333de3b',
                resData: []
            };
        },
        methods: {
            goback() {
                this.$router.go(-1);
            }
        },
        mounted() {
            axios.get(this.apiUrl, {
                params: {
                    showapi_appid: this.appid, showapi_sign: this.secret, count: 5
                }
            }).then((res) => {
                this.resData = res.data.showapi_res_body.data;
                console.log(res.data.showapi_res_body.data);
            }).catch((err) => {
                console.log(err);
            });
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .my-english
        width: 100%
        color: #fff
        margin-bottom: 60px
        /*font-size: 0*/
        .title
            font-size: 16px
            height: 40px
            width: 100%
            background-color: #28CC9E
            font-family: cursive
            .helper
                display: inline-block
                height: 100%
                vertical-align: middle
            .back-img
                vertical-align: middle
            .text
                vertical-align: middle

        .content-item
            font-size: 14px
            width: 80%
            margin: 0 auto
            padding: 10px
            border-bottom: 1px solid #eee
            .english
                /*font-size: 12px*/
                color: #649DAD
                line-height: 16px
                padding-bottom: 8px
            .chinese
                font-size: 12px
                line-height: 16px
                color: #455D7A
</style>
