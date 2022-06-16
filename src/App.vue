<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane name="first">
      <template #label>
        <span class="custom-tabs-label summary-app-head">
          <el-avatar src="https://zzerx.cn/APP/images/logo.png"></el-avatar>
          <el-row> 
            <a>{{appName}}</a>
            <el-button type="primary" size="small" plain>{{appVersion}}</el-button>
          </el-row>
        </span>
      </template>
      <dp-summary :appName="appName" :summary="summary" :srcs="srcs"></dp-summary>
    </el-tab-pane>
  </el-tabs>

  <dp-some-help :helpList="helplist"></dp-some-help>
  <footer-icp owner="zzerX" icp="桂公网安备 45010502000772号">
  </footer-icp>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import { ref } from 'vue'
// import { TabsPaneContext } from 'element-plus'
// const activeName = ref('first')
// const handleClick = (tab: TabsPaneContext, event: Event) => {
//   console.log(tab, event)
// }
import DpSummary from './components/DpSummary.vue';
import DpSomeHelp from './components/DpSomeHelp.vue';
import FooterIcp from './components/FooterIcp.vue';
// import { Calendar } from '@element-plus/icons-vue'
export default {
  name: 'App',
  data() {
    return {
      activeName: "first",
      appName: "律己",
      appVersion: "v1.0.1",
      summary: "这是一个能让你 <strong>看到成功</strong> 的应用. 集<strong>便签</strong>、<strong>日记让你方便快捷的完成并记录每一件小事，积跬步，以至千里；积小流，汇成江海",
      srcs: ["https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg", "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg", "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"],
      helplist: [
        {
          title: "通知栏操作按钮消失了？",
          txt: "律己通知栏[设置 ，停止服务]操作按钮消失了？在很多厂商自定义ROM下，通知栏条目有可能自动收缩，通过长按律己的通知，按钮就会显示。（MIUI）",
          image: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        },
        {
          title: "",
          txt: "",
          image: ""
        },
      ]
    }
  },
  components: {
    // Calendar,
    DpSummary,
    DpSomeHelp,
    FooterIcp
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;

}

.summary-app-head{
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
}

.summary-app-head a{
   margin: 0 0.5em;
}
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 20px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}

</style>
