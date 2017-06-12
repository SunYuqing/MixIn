<template>
    <div id="app">
        <v-header></v-header>
        <nav-box></nav-box>
        <news></news>
        <v-footer></v-footer>
    </div>
</template>

<script type="text/ecmascript-6">
    import header from '@/components/Header/Header';
    import navBox from '@/components/nav-box/nav-box';
    import news from '@/components/news/news';
    import footer from '@/components/Footer/Footer';

    export default {
        components: {
            'v-header': header,
            navBox,
            news,
            'v-footer': footer
        }
    };
</script>
<style>
</style>
