<template>
    <br><br>
    <div class="main">
    <center>    
    <code><b></b></code><br>
    <code><b>The Idea 💡 is inspired by</b></code><br>
    <code><b>CCS Batch 1 2024</b></code><br>
    <code><b>I am grateful to our Professor at CMDC</b></code><br>
    <code><b>&</b></code><br>
    <code><b>Thank you to my classmates</b></code>
    <div class="typewriter-effect">
    <div class="text" id="typewriter-text"></div>
    <code><b>@ CONTACT CENTER SERVICES</b></code>
    </div>
  </center>
    <br>
    <div class="foot">
    <center>
      <code><b>" Thank you Always to my Wife ❤️❤️❤️ "</b></code><br>
      <code><b> & </b></code><br>
      <code><b> Family</b></code>
    </center>
    </div>
    </div>
</template>

<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
</script>
<style scoped>
.main {
  margin: 0 auto;
  padding: 0.5rem 1.5rem 4rem;
  max-width: 32rem;
}
.foot{
  margin-top: 200px;
  margin-bottom: 200px;
}
.typewriter-effect > .text {
  max-width: 0;
  animation: typing 3s steps(var(--characters)) infinite;
  white-space: nowrap;
  overflow: hidden;
}

.typewriter-effect::after {
  content: " |";
  animation: blink 1s infinite;
  animation-timing-function: step-end;
}

@keyframes typing {
  75%,
  100% {
    max-width: calc(var(--characters) * 1ch);
  }
}

@keyframes blink {
  0%,
  75%,
  100% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
}

.container {
  align-items: center; 
  float: left;
}
.image{
    float: left;
  padding: 5px;
}
</style>