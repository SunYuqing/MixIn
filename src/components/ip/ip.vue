<template>
    <div class='ip'>
        <div class='title'>
            <span class="helper"></span>
            <img :src=imgUrl @click="goback" class="back-img">
            <span class="text">获取当前ip地址</span>
        </div>
        <div>
            <div class='ip-content'>
                城市：{{resData.city}}<br><br>
                省份：{{resData.region}}<br><br>
                国家：{{resData.en_name}}<br><br>
                互联网服务提供商：
                {{resData.isp}}<br><br>
                <span class='show-ip'>
                ip地址：
                {{resData.ip}}
                </span>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios from 'axios';

    export default {
        data() {
            return {
                imgUrl: './static/img/back.png',
                apiUrl: 'http://route.showapi.com/632-1',
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
                        this.resData = res.data.showapi_res_body;
//                        console.log(res.data.showapi_res_body);
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
    .ip
        width: 100%
        color: #fff
        margin-bottom: 60px
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
    .ip-content
        padding: 15px 30px
        color: #649DAD
</style>
