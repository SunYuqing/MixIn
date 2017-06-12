<template>
    <div class="header">
        <div class="banner">
            <h1>MixIn</h1>
        </div>
        <div class="carousel">
            <img :src='now'>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                now: './static/img/computer2.jpg', // 当前显示的图片--一个坑--！
                _nowUrl: './static/img',
                _now: '',
                index: 0, // 图片的索引值
                imgList: ['/computer2.jpg', '/sea.jpg', '/road.jpg', '/fall-leave.jpg']  // 图片列表
            };
        },
        mounted: function() {
            this._now = this.imgList[this.index];
            this._nowUrl = './static/img';
            setInterval(() => {
                this.index++;
                this._now = this.imgList[this.index];
                this.now = this._nowUrl + this._now; // 进行路径拼接
                if (this.index >= this.imgList.length - 1) {
                    this.index = -1;
                }
            }, 3000);
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .header
        height: 180px
        width: 100%
        /*border-radius: 0 0 100%/50% 100%*/
        .banner
            height: 40px
            background-color: #28CC9E
            h1
                padding-left: 10px
                height: 40px
                line-height: 40px
                font-size: 18px
                color: #fff
        .carousel
            width: 100%
            height: 150px
            img
                width: 100%
                height: 100%


</style>
