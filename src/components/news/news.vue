<template>
    <div>
        <div class="news">
            <div class="splitBorder"></div>
            <p class="title">最新短讯</p>
            <div class='news-item' v-for='item in returnData'>
                <div class='news-title'>{{item.title}}</div>
                <img  v-if='item.imageurls[0]' :src='item.imageurls[0]?item.imageurls[0].url:""'
                      class= 'news-img'/>
                <!--<div class='news-time'>{{item.pubDate}}</div>-->
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios from 'axios';

    export default {
        data() {
            return {
                apiUrl: 'http://route.showapi.com/109-35',
                appid: '39157',
                secret: '75aab1e85b434a2e882a77fae333de3b',
                returnData: []
            };
        },
        mounted() {
            axios.get(this.apiUrl, {
                params: {
                    showapi_appid: this.appid, showapi_sign: this.secret
                }
            }, {
                emulateJSON: true})
                    .then((res) => {
                        this.returnData = res.data.showapi_res_body.pagebean.contentlist.splice(1, 4);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .news
        font-size: 0
        box-sizing: border-box
        margin-bottom: 50px
        .splitBorder
            width: 100%
            height: 8px
            font-size: 0
            background-color: #E3E3E3
        .title
            padding: 5px 20px
            font-size: 16px
            /*font-weight: 700*/
            color: #28CC9E
        .news-item
            width: 90%
            margin: 0 auto
            padding-bottom: 8px
            border-bottom: 1px solid #E3E3E3
            text-align: center
            .news-title
                font-size: 14px
                padding: 8px 0
                color: #455D7A
            .news-img
                width: 100%
</style>
