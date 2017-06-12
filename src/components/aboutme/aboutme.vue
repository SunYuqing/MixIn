<template>
    <div class="about">
        <div class="avatar" >
            <img :src=imgUrl  width="30%" class="avatarImg">
            <br><br>
            <p class="author">Lily Sun</p>
        </div>
        <div class="content">
            Github:  <p class="github text"><a href="https://github.com/sunyuqing">
            https://github.com/sunyuqing</a></p><br>
            我的博客：<p class="blog text"><a href="http://www.yuqingsun.com">yuqingsun.com</a></p><br>
            我的邮箱：<p class="email text">sunnyday0824@163.com</a></p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                imgUrl: './static/img/avatar.png'
//                imgBack: require('bridge.jpg')
            };
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .about
        width: 100%
        text-align: center
        margin-bottom: 100px
        .avatar
            margin: 40px 0
            /*background:url ('./static/img/bridge.jpg') no-repeat*/
            .avatarImg
                border-radius: 50%
            .author
                font-size: 18px
                color: #649DAD
        .content
            margin: 30px 0
            .text
                padding: 10px
                line-height: 20px

</style>
