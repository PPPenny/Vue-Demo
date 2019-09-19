<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 16:20:59
 * @LastEditTime: 2019-09-17 16:20:59
 * @LastEditors: your name
 -->
<template>
  <div class="page-content">
    <div ref="animation"></div>
    <div class="btn" @click="handleClick">按钮</div>
  </div>
</template>
<script>
import lottie from "lottie-web";
import Run from "./run.json";
export default {
  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.animation,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: Run, //动画json
    });
  },
  methods: {
    stopAnimate() {
      this.anim.stop()
    },
    handleClick() {
      // 第一种
      // this.anim.play()
      // setTimeout(() => {
      //   this.stopAnimate()
      // }, 2000);
      // 第二种
      // 播放0-30帧动画，以为已经知道有30帧了的
      this.anim.playSegments([0,30], false); 
      // this.anim.play()
      this.anim.addEventListener('loopComplete',()=>{
        this.stopAnimate()
      })
      

      
    }
  }
};
</script>
<style lang="less" scoped>
.page-content {
  padding: 20px;
  .btn {
    background: #eee;
    padding: 10px;
    margin-top: 30px;
    width: 50%;
    margin-left: 25%;
  }
}
</style>