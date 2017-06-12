<template>
    <div class='translate'>
        <div class='title'>
            <span class="helper"></span>
            <img :src=imgUrl @click="goback" class="back-img">
            <span class="text">英汉互译</span>
        </div>
        <div class='controller'>
            <div class="input">
                <input class='input-text' type='text' placeholder='输入英文/汉字' v-model='text'>
            </div>
            <div class="trans">
                <input type="button" value="立即翻译" @click='goApi()'>
            </div>
            <div class='show-content'>
                <div v-for='item in data' class="content-item">
                    {{item}}<br>
                </div>
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
                apiUrl: 'http://route.showapi.com/32-9',
                appid: '39157',
                secret: '75aab1e85b434a2e882a77fae333de3b',
                data: '',
                text: ''
            };
        },
        methods: {
            goApi() {
                axios.get(this.apiUrl, {
                            params: {
                                showapi_appid: this.appid, showapi_sign: this.secret, q: this.text
                            }}, {
                            emulateJSON: true})
                        .then((res) => {
                            this.data = res.data.showapi_res_body.basic.explains;
                            console.log(res);
                        }).catch((err) => {
                    console.log(err);
                });
            },
            goback() {
                this.$router.go(-1);
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .translate
        width: 100%
        /*font-size: 0*/
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
        .controller
            padding-top: 20px
            width: 80%
            margin: 0 auto
            input[type='text']
                border: 1px solid #87DFD6
                height: 30px
                border-radius: 4px
                outline: none
            input[type="text"]:focus
               border:1px solid #2F9296
            .input
                display: inline-block
                height: 20px
                padding: 10px
            .trans
                padding: 10px
                input[type='button']
                    display: block
                    background: #87DFD6
                    text-align: center
                    border-radius: 4px
                    padding: 4px 6px
                    color: #fff
                    outline: none
                    cursor: pointer
            .show-content
                color: #649DAD
                .content-item
                    padding: 10px

</style>
