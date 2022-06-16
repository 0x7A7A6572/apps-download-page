<template>
  <div class="dp-summary">
    <div class="summary-text">
      <h1>{{ appName }} </h1>
      <p>{{ summary }}</p>
      <el-button class="download-button" size="large" type="primary" href="#">
         <el-icon>
            <Download />
          </el-icon>立即下载</el-button>
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
      </el-row>
    </div>
    <div class="summary-image">
      <el-carousel class="i-el-carousel" trigger="click">
        <el-carousel-item v-for="item in 4" :key="item">
          <el-image :src="srcs[item]">
            <template #placeholder>
              <div class="image-slot">Loading<span class="dot">...</span></div>
            </template>
          </el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>

</template>

<script>
import { Share, Box ,Download } from '@element-plus/icons-vue';
export default {
  props: {
    link: { type: Array },
    appName: { type: String },
    summary: { type: String },
    srcs: { type: Array },
  },
  data() {
    return {
    }
  },
  components: {
    Share,
    Box,
    Download
  }
}
</script>

<style >
.download-button {
  font-size: 1.1em;
  font-weight: bold;
}

.el-carousel__container {
  background-color: coral;
}


.dp-summary {
  justify-content: center;
  display: flex;
  width: 96%;
  flex-wrap: wrap;
}

.summary-text {
  width: 50%;
  flex: 1;
}

.summary-image {
  margin: 5%;
  min-width: 50%;
  flex: auto;
}

.summary-link{
    margin: 1.5em;
    display: flex;
    justify-content: center;
}
.summary-link .el-button{
    width: 1.5em;
    font-size: 1.5em;
    height: 1.5em;
}

</style>