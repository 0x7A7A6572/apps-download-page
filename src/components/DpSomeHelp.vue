<template>
  <el-card class="box-card"  id="help-anchor-point">
    <template #header>
      <div class="card-header">
      <caption class="summary-explan-title">
        <el-icon>
            <Guide />
        </el-icon>常见问题
    </caption>
      </div>
    </template>

    <div class="summary-explan">
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item v-for="item in helpList" :key="item" :title="item.title" :name="item">
                <el-image v-if="item.image != null && item.image != ''" style="width: 100px; height: 100px" :src="item.image" fit="fit" />
                <pre>
                  {{item.txt}}
                </pre>
            </el-collapse-item>
        </el-collapse>
    </div>
  </el-card>

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
.box-card {
    margin: 5% 0% ;
    width: 50%;
}
.summary-explan pre{
 white-space: pre-line;
}

.summary-explan-title {
    /* margin-left: 2em; */
    display: block;
    /* width: 95%; */
    text-align: left;
    font-weight: bold;
    font-size: 1.2em;
}

.summary-explan-title el-icon{
    font-weight: bold;
    font-size: 1.2em;
}

.summary-explan .el-image{
    min-width: 200px;
    min-height: 200px;
}
.el-collapse-item__header{
    font-weight: bold;
    font-size: 1.0em;
}
.el-collapse-item__content{
    text-align: left;
}
@media screen and (max-width: 600px) {

.box-card {
    margin: 5% 0% ;
    width: 100%;
}
}
</style>