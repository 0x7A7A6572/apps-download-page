<template>
  <div class="dp-summary">
    <div class="summary-text">
      <slot></slot>


      <el-button class="download-button" size="large" type="primary">
        <a :href="downloadLink">
        <el-icon>
          <Download />
        </el-icon>立即下载
        </a>
      </el-button>


      <el-row class="summary-link">
        <el-button type="warning" title="分享" circle>
          <el-icon>
            <Share />
          </el-icon>
        </el-button>
        <el-button type="success" title="应用市场下载" circle>
          <el-icon>
            <Box />
          </el-icon>
        </el-button>
        <el-button type="success" title="加入反馈群" circle>
          <el-icon>
            <ChatDotRound />
          </el-icon>
        </el-button>
      </el-row>
      <a href="#help-anchor-point">
        <div class="summary-goto-help">
          <el-icon>
            <ArrowDownBold />
          </el-icon>
        </div>
      </a>

    </div>
    <div class="summary-image">
      <el-carousel :interval="2000" type="card">
        <el-carousel-item class="carousel-img" v-for="item in showImages" :key="item">
          <h3 justify="center">{{ item.alt }}</h3>
          <el-image :src="item.src"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>

</template>

<script>
import { Share, Box, Download, ChatDotRound, ArrowDownBold } from '@element-plus/icons-vue';
export default {
  props: {
    downloadLink: { type: String },
    link: { type: Array },
    showImages: { type: Object },
  },
  data() {
    return {
    }
  },
  computed: {
  },
  components: {
    Share, Box, Download,
    ChatDotRound, ArrowDownBold
  }
}
</script>

<style >
.download-button {
  font-size: 1.1em;
  /* font-weight: bold; */
}


.dp-summary {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  text-decoration: dashed;
}

.download-button a{
  text-decoration: dashed;
   color: aliceblue;
}

/* 走马灯外部 */
.dp-summary .el-carousel__container {
  height: 500px;
}

/* 走马灯内部图片 */
.dp-summary .el-image__inner {
  width: 69%;
}

.summary-text {
  width: 60%;
  flex: 1;
}

.summary-image {
  /* height: 600px; */
  margin: 5%;
  min-width: 40%;
  flex: auto;
}

.summary-link {
  margin: 1.5em;
  display: flex;
  justify-content: center;
}

.summary-link .el-button {
  width: 1.5em;
  font-size: 1.5em;
  height: 1.5em;
}

.summary-goto-help {
  position: relative;
  height: auto;
  color: silver;
  font-size: 5em;
  top: 0.3em;
}

@media screen and (max-width: 600px) {

  /* 走马灯外部 */
  .dp-summary .el-carousel__container {
    height: 300px;
  }

  .dp-summary .el-image__inner {
    width: 100%;
  }
}
</style>