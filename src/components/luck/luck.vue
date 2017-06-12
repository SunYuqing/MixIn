<template>
    <div class='luck'>
        <div class='title'>
            <span class="helper"></span>
            <img class="back-img" :src=this.imgUrl @click="goback">
            <span class="text">今日运势</span>
        </div>
        <div class='content-item'>公历：{{data.gongli}}</div>
        <div class='content-item'>农历：{{data.nongli}}</div>
        <div class='content-item'>节气：{{data.jieqi24}}</div>
        <div class='content-item'>冲煞：{{data.chongsha}}</div>
        <div class='content-item'>运势：{{data.jrhh}}</div>
        <div class='content-item'>宜：{{data.yi}}</div>
        <div class='content-item'>忌：{{data.ji}}</div>
        <div class='content-item'>星座：{{data.xingzuo}}</div>
        <div class='content-item'>日：{{data.zhiri}}</div>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios from 'axios';
    export default {
        data() {
            return {
                apiUrl: 'http://route.showapi.com/856-1',
                appid: '39157',
                secret: '75aab1e85b434a2e882a77fae333de3b',
                data: {},
                imgUrl: './static/img/back.png'
            };
        },
        mounted() {
            axios.get(this.apiUrl, {
                params: {
                    showapi_appid: this.appid, showapi_sign: this.secret
                }
            }).then((res) => {
                this.data = res.data.showapi_res_body;
            })
            .catch((err) => {
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
    .luck
        width: 100%
        font-size: 0
        color: #fff
        margin-bottom: 60px
        .title
            font-size: 16px
            height: 40px
            background-color: #28CC9E
            font-family: cursive
            width: 100%
            .helper
                display: inline-block
                height: 100%
                vertical-align: middle
            .text
                color: #fff
                vertical-align: middle
            .back-img
                vertical-align: middle
        .content-item
            width: 80%
            margin: 0 auto
            border-bottom: 1px solid #eee
            padding: 10px 20px
            line-height: 20px
            color: #455D7A
            font-size: 14px

</style>
