<template>
  <div id="app" class="app-container">
    <Sidebar ref="sidebar" />
    <main class="main-content">
      <Header />
      <router-view />
    </main>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: { Sidebar, Header }
}
</script>

<style scoped>
#app {
  display: flex;
  height: 100vh;
  background-color: #f5f7fa;
  overflow: hidden;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  background-color: #f5f7fa;
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  #app {
    flex-direction: column;
  }
}
</style>