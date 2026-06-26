<template>
  <header class="header">
    <div class="header-content">
      <div class="greeting">
        <h1>Selamat pagi, Andi Pratama 👋</h1>
        <p>{{ currentDate }}</p>
      </div>
      <div class="header-actions">
        <div class="search-bar">
          <input type="text" placeholder="Cari standar, topik, atau kata kunci..." />
          <span class="search-hint">Ctrl K</span>
        </div>
        <button class="btn-bookmark">🔖</button>
        <div class="notification-bell"><span>🔔</span><span class="badge">2</span></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() { return { currentDate: '' } },
  mounted() { this.updateDate() },
  methods: {
    updateDate() {
      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
      this.currentDate = new Date().toLocaleDateString('id-ID', options)
    }
  }
}
</script>

<style scoped>
.header { background: white; border-bottom: 1px solid #e0e0e0; padding: 20px 30px; position: sticky; top: 0; z-index: 100; }
.header-content { display: flex; justify-content: space-between; align-items: center; gap: 30px; }
.greeting h1 { margin: 0; font-size: 24px; color: #1a1a1a; }
.greeting p { margin: 5px 0 0 0; color: #666; font-size: 13px; }
.header-actions { display: flex; align-items: center; gap: 15px; }
.search-bar { display: flex; align-items: center; background: #f5f5f5; border-radius: 8px; padding: 10px 15px; flex: 1; min-width: 300px; }
.search-bar input { border: none; background: transparent; outline: none; font-size: 14px; flex: 1; color: #333; }
.search-bar input::placeholder { color: #999; }
.search-hint { font-size: 11px; color: #999; background: #e0e0e0; padding: 4px 8px; border-radius: 4px; }
.btn-bookmark, .notification-bell { background: none; border: none; font-size: 20px; cursor: pointer; position: relative; padding: 8px 12px; border-radius: 6px; transition: background 0.3s; }
.btn-bookmark:hover, .notification-bell:hover { background: #f0f0f0; }
.notification-bell { display: flex; align-items: center; }
.badge { position: absolute; top: 0; right: 0; background: #ff4444; color: white; font-size: 10px; width: 18px; height: 18px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; }
</style>