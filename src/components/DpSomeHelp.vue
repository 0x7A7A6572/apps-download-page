<template>
    <caption class="summary-explan-title">
        <el-icon>
            <Guide />
        </el-icon>常见问题
    </caption>
    <div class="summary-explan">
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item v-for="item in helpList" :key="item" :title="item.title" :name="item">
                <el-image v-if="item.image != null && item.image != ''" style="width: 100px; height: 100px" :src="item.image" fit="fit" />
                <div>
                  {{item.txt}}
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
import { Guide } from '@element-plus/icons-vue';
export default {
    props:{
        helpList: {
            type: Object,
        }
    },
    components: {
        Guide
    }
}
</script>

<style>
.summary-explan {
    padding: 2% 5%;
}

.summary-explan-title {
    margin-left: 2em;
    display: block;
    width: 95%;
    text-align: left;
    font-weight: bold;
    font-size: 1.2em;
}

.summary-explan-title el-icon{
    font-weight: bold;
    font-size: 1.2em;
}

.el-collapse-item__header{
    font-weight: bold;
    font-size: 1.0em;
}
.el-collapse-item__content{
    text-align: left;
}

</style>