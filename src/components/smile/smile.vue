<template>
    <div class="smile">
        <div class='title'>
            <span class="helper"></span>
            <img :src=imgUrl @click="goback" class="back-img">
            <span class="text">搞笑图片</span>
        </div>
        <div class='content-img' v-for='item in resData'>
            <div class='img-title'>{{item.title}}</div>
            <img :src='item.img' style="width: 90%"/>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import axios from 'axios';

    export default {
        data() {
            return {
                imgUrl: './static/img/back.png',
                apiUrl: 'http://route.showapi.com/341-3',
                appid: '39157',
                secret: '75aab1e85b434a2e882a77fae333de3b',
                resData: []
            };
        },
        mounted() {
           axios.get(this.apiUrl, {
               params: {
                   showapi_appid: this.appid, showapi_sign: this.secret
               }}, {
               emulateJSON: true})
                .then((res) => {
                    this.resData = res.data.showapi_res_body.contentlist.splice(1, 7);
//                    console.log(res.data.showapi_res_body.contentlist.splice(1, 6));
                 }).catch((err) => {
                    console.log(err);
           });
        },
        methods: {
            goback() {
                this.$router.go(-1);
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .smile
        width: 100%
        color: #fff
        margin-bottom: 60px
        font-size: 0
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
        .content-img
            width: 80%
            margin: 0 auto
            text-align: center
            padding: 10px
            border-bottom: 1px solid #eee
            font-size: 12px
            color: #455D7A
            line-height: 30px

</style>
