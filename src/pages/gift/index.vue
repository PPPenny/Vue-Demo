<template>
  <div class="gift-page">
    <div class="gift" @click="start">
      <div class="back" :style="styles">
        <img src="../../assets/single.png" />
      </div>
      <div class="pointer">
        <img src="../../assets/pointer.png" />
      </div>
    </div>
    <div class="showTxt">{{msg}}</div>
  </div>
</template>
<script>
import {GIFT_DATA} from '../../const/gift'
import { setTimeout } from 'timers';
// 选择圈数
const TIMES = 4
export default {
  data() {
    return {
      msg: "",
      allLength:GIFT_DATA.length,
      styles:''
    };
  },
  methods: {
    //   获取度数
    perRato(){
      return 360/this.allLength
    },
    // 获取索引
    getIndex(){
       return parseInt(Math.random() * this.allLength)
    },
    // 开始旋转
    start() {
        this.styles = ""
        this.msg=""  
        const index = this.getIndex()
         const allDegree = index * this.perRato() + 360 * TIMES
        setTimeout(()=>{
            this.styles = {
                    transform:"rotate("+allDegree+"deg)",
                    transition:'transform 2s ease-in-out'
            }
            document.getElementsByClassName("back")[0].addEventListener("transitionend",()=>{
              this.msg = GIFT_DATA[index].name
            })
        },0)


    }
  }
};
</script>
<style lang="less" scoped>
.gift-page {
  .gift {
    position: relative;
    overflow: hidden;
    .back {
      width: 80%;
      margin-left: 10%;
    }
    .pointer {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20%;
      transform: translate(-42%, -52%);
    }
    img {
      width: 100%;
    }
  }
  .showTxt{
      margin-top: 10px;
  }
}
</style>


