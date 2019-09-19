<template>
  <div class="page-content">
    <quill-editor
      :content="content"
      :options="editorOption"
      @change="onEditorChange($event)"
    >
    </quill-editor>
    <van-button @click="clickPreCheck" type="primary">预览</van-button>
    <van-popup
      v-model="showPreHtml"
      class="pre-popup"
       position="top"
       transition="el-fade-in"
      :overlay="false"
      @click.native="handleTipsClick"
    >
      <div
        v-if="content"
        v-html="formatContent(content)"
        class="pre-content ql-editor"
      ></div>
    </van-popup>
  </div>
</template>
<script>
import Vue from 'vue'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import {quillEditor} from 'vue-quill-editor'
import { Button, Popup } from 'vant';

export default {
  components: {
    quillEditor,
    'van-popup':Popup,
    'van-button':Button
  },
  data() {
    return {
      content: '',
      editorOption: {
        modules: {
          toolbar: [
            [
              'bold',
              'italic',
              'underline',
              {color: []},
              {background: []},
              {font: []},
              {align: []},
              'strike',
              'blockquote',
              'image',
              'video',
              'clean',
              {list: 'ordered'},
              {list: 'bullet'},
              {size: ['small', false, 'large', 'huge']}
            ] // toggled buttons
          ]
        }
      },
      showPreHtml: false
    }
  },
  methods: {
    onEditorChange({editor, html, text}) {
      //富文本编辑器  文本改变时 设置字段值
      this.content = html
    },
    clickPreCheck() {
      this.showPreHtml = true
    },
    handleTipsClick() {
      this.showPreHtml = false
    },
    formatContent(html) {
      html = html.replace(/\\/, '')
      return html
    }
  }
}
</script>
<style lang="less">
// .page-content{
//   height: 100%;
//   width: 100%;
//   overflow: scroll;
//   -webkit-overflow-scrolling: touch;
  
.pre-popup {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  .pre-content {
    background: #fff;
    height: 90%;
    margin: 5%;
    padding: 10px;

    div,
    ul,
    ol,
    li,
    form,
    p,
    fieldset,
    input,
    img,
    article,
    details,
    footer,
    header,
    nav,
    progress,
    section,
    summary,
    time {
      max-width: 100% !important;
      box-sizing: border-box !important;
    }
  }
}

// }

</style>
