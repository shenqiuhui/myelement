<template>
  <div>
    <my-container>
      <my-header>Header</my-header>
      <my-main>Main</my-main>
      <my-footer>Footer</my-footer>
    </my-container>
    <hr>
    <my-container>
      <my-header>Header</my-header>
      <my-container>
        <my-aside width="200px">Aside</my-aside>
        <my-main>Main</my-main>
      </my-container>
    </my-container>
    <hr>
    <my-container>
      <my-aside width="200px">Aside</my-aside>
      <my-container>
        <my-header>Header</my-header>
        <my-main>Main</my-main>
        <my-footer>Footer</my-footer>
      </my-container>
    </my-container>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
body{
  width:1000px;
  margin:10px auto;
}
</style>
