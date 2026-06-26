<template>
  <div id="app" class="app-container">
    <Sidebar />
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
}
.main-content {
  flex: 1;
  overflow-y: auto;
  background-color: #f5f7fa;
}
</style>