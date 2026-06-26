<template>
  <div id="app" class="app-container">
    <Sidebar ref="sidebar" />
    <div class="main-wrapper">
      <Header />
      <main class="main-content">
        <router-view />
      </main>
    </div>
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

.main-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #f5f7fa;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  #app {
    flex-direction: column;
  }

  .main-wrapper {
    flex: 1;
    min-height: 0;
  }
}
</style>