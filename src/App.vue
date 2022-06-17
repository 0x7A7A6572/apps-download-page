<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane name="first">
      <template #label>
        <span class="custom-tabs-label summary-app-head">
          <el-avatar :src="logo_img"></el-avatar>
          <el-row>
            <a>{{ appName }}</a>
            <el-button type="primary" size="small" plain>{{ appVersion }}</el-button>
          </el-row>
        </span>
      </template>
      <dp-summary :showImages="showImages" :downloadLink="downloadLink">
        <h1><span style="color:#F8C964">逃离</span>
        <span style="color:#F86944">"时间黑洞"</span>
        </h1>
        <h5 v-for="index in summary.length"  :key="summary[index]">{{ summary[index-1] }}</h5>
        <p style="color:#409eff">"你需要一个能提醒你的工具" —— 律已</p>
      </dp-summary>
    </el-tab-pane>
  </el-tabs>

  <dp-some-help :helpList="helplist"></dp-some-help>
  <footer-icp owner="zzerX" icp="桂公网安备 45010502000772号">
  </footer-icp>
</template>

<script>
import DpSummary from './components/DpSummary.vue';
import DpSomeHelp from './components/DpSomeHelp.vue';
import FooterIcp from './components/FooterIcp.vue';
import show_img_1 from '@/assets/ui_show_1.png';
import show_img_2 from '@/assets/ui_show_2.png';
import show_img_3 from '@/assets/ui_show_3.png';
import show_img_4 from '@/assets/ui_show_4.png';
import logo_img from '@/assets/logo.png';
import help_img_01 from '@/assets/q_01.gif';
// import { Calendar } from '@element-plus/icons-vue'
export default {
  name: 'App',
  data() {
    return {
      activeName:"first",
      appName: "律己",
      slogan: "逃离\"时间黑洞\"",
      appVersion: "v1.0.1",
      downloadLink: "https://zzerx.cn/download/selfruler-new.apk",
      summary: ["你每天会刷多长时间短视频呢？",
                 "或许你有许多要做的事情，却在琳琅满目的信息中迷失,一刷就停不下来? 短视频丶社区丶游戏本质只是丰富我们的生活，但也会无形中把我们带进时间黑洞。" ],
      mainSummary: "",
      showImages: [{
        alt: "",
        src: show_img_1,
      }, {
        alt: "",
        src: show_img_2,
      }, {
        alt: "",
        src: show_img_3,
      }, {
        alt: "",
        src: show_img_4,
      }],
      logo_img,
      helplist: [
        {
          title: "通知栏操作按钮消失了？",
          txt: "律己通知栏[设置 ，停止服务]操作按钮消失了？在很多厂商自定义ROM下，通知栏条目有可能自动收缩，通过长按律己的通知，按钮就会显示。（MIUI）",
          image: help_img_01
        },
        {
          title: "无障碍服务总是每次打开都需要授权？",
          txt: "检查是否给与软件【自启动】权限（也叫开机自启），和开启了电池优化，在应用不被非正常关闭时，再次启动无需授权",
          image: ""
        },
        {
          title: "怎么添加黑/白名单？",
          txt: "进入应用主页面，上方功能栏有添加的按钮，开启之后会显示一个悬浮窗用于添加，此时需要你手动去到需要加入名单的页面，再点击添加。\nps：同步按钮提供了一些预置的名单",
          image: ""
        },
         {
          title: "紧急情况下被惩罚怎么强制关闭服务？",
          txt: "\n1.在有电话响铃时，服务会自动关闭。(微信，QQ，钉钉电话暂时不会) \n2.下滑通知栏找到律己停止服务. \n3.可以使用手机自带的语音助手，使用语音”关闭律己“来强制关闭. \n4.重启手机",
          image: ""
        },
         {
          title: "重启手机之后没有自动启动服务？",
          txt: "\n1.重启之后手机系统会自行按需启动相应的自启应用，所以律已可能不会马上被启动，可能会持续0~2分钟 \n2.检查自启动权限是否开启. \n3.检查无障碍权限是否授权.",
          image: ""
        },
        {
          title: "这里没有解决我的问题？",
          txt: "\n1.加反馈群 \n2.给我发邮件，附上问题描述和图片.",
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
  margin-left: 5%;
  margin-right: 5%;

}

.dp-summary h5{
    margin: 0.2em;
}
.summary-app-head {
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
}

.summary-app-head a {
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
