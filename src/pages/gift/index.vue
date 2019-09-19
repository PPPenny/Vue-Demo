<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-17 13:57:30
 * @LastEditTime: 2019-07-17 13:57:30
 * @LastEditors: your name
 -->

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
    <count-down :seconds="creatSeconds()">
        <template slot-scope="props">
         距离双十一剩余： {{ countdownFormat(props) }}
        </template>
      </count-down> 
  </div>
</template>
<script>
import {GIFT_DATA} from '@/const/gift'
import CountDown from '@femessage/count-down'
// 选择圈数
const TIMES = 4
export default {
  components:{
     'count-down':CountDown
  },

  data() {
    return {
      msg: "",
      allLength:GIFT_DATA.length,
      styles:'',
      startTime:'2020-11-11 00:00:00',
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


    },
    // 设计倒计时
    creatSeconds(){
      return (new Date(this.startTime).getTime() - Date.now()) / 1000
    },

    //时间倒计时
    countdownFormat({days,hours,minutes,seconds}) {
      return `${days}天${hours}时${minutes}分${seconds}秒`
    },
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


