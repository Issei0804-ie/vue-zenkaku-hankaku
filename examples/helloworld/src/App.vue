<script setup lang="ts">
import {useZenkakuHankaku} from "vue-zenkaku-hankaku";
const {rawText, convertedText } = useZenkakuHankaku();

</script>

<template>
  <div>
    <p>rawText is {{rawText}}</p>
    <p>convertedText is {{convertedText}}</p>
    <input v-model="rawText" />
  </div>
</template>
