<template>
    <div class="cm-button-cont flex f-center p-l-12px p-r-12px cs-pointer" :class="[size, type]">
      <slot></slot>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps } from 'vue'
  defineProps({
    size: {
      type: String,
      default: 'medium'
    },
    type: {
      type: String,
      default: ''
    },
  })
  // const emits = defineEmits(['click'])
  // const handleClick = () => {
  //     defineEmits
  // }
  </script>
  <style scoped lang='scss'>
  @import '~@/assets/css/handler.scss';
  
  .cm-button-cont {
    font-size: 14px;
    border-radius: 4px;
    @include font_color("btn_font_color");
    @include background_color("bg3_color");
    transition: all 0.3s;
  
    &:hover {
      color: #3468FE !important;
      background-color: rgba($color: #3468FE, $alpha: 0.2) !important;
    }
  
    &.medium {
      height: 36px;
      line-height: 36px;
    }
  
    &.primary {
      @include background_color("active_color");
      color: #fff !important;
  
      &:hover {
        background-color: #2b57d9 !important;
        color: rgba($color: #fff, $alpha: 0.8) !important;
      }
    }
  
    &.black {
      @include background_color("black_btn_color");
      color: #fff !important;
    }
  
    &.danger {
      @include background_color("danger_btn_color");
      color: #fff !important;
    }
  
    &.light {
      background-color: #fff !important;
      border: 1px solid #B3C3DB !important;
      color: #2E3547 !important;
  
      // &:hover {
      //   color: #363e52 !important;
      //   background-color: #eeeeee !important;
      // }
    }
  
    &.gray {
      @include background_color('gray_btn_bg_color');
    }
  
    &.disabled {
      opacity: 0.5;
      cursor: no-drop;
  
      &:hover {
        // color: inherit !important;
        // background-color: inherit !important;
  
        &.primary {
          // @include background_color("active_color");
        }
      }
  
      // background-color: #2E3547 !important;
    }
  }
  </style>