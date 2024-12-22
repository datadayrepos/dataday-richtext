<template>
    <div @click="onClick" @mouseleave="onMouseleave" @mouseenter="onMouseenter">
      <button class="px-4 py-2 bg-blue-500 text-white rounded">HELLO</button>
    </div>
  </template>
  
  <script lang="ts" setup>
  function onClick() {
    console.log('Clicked!')
  }
  function onMouseenter() {
    console.log('Mouse entered!')
  }
  function onMouseleave() {
    console.log('Mouse left!')
  }
  </script>