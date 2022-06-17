<template>
    <footer class="footer-icp">
        <p>Copyright©2022 {{ owner }}</p>
        <span> | </span>
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=45010502000772">
            <img src="https://zzerx.cn/images/beian.png" style="float:left;box-shadow: none;">
            <p>{{ icp }}</p>
        </a>
    </footer>
</template>

<script>
export default {
    props: {
        owner: { type: String },
        icp: { type: String }
    },
    data() {
        return {

        }
    }
}
</script>

<style>
.footer-icp {
    display: flex;
    justify-content: center;
    width: 100%;
    text-align: center;
    font-size: 0.8em;
}

.footer-icp p {
    float: left;
    height: 20px;
    line-height: 20px;
    margin: 0px 0px 0px 5px;
    color: #939393;
}

.footer-icp span {

    margin: 0em 1em;
}
</style>