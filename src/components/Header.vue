<template>
  <header class="header">
    <button class="btn-menu" @click="toggleSidebar" v-if="isMobile">
      <span class="hamburger">☰</span>
    </button>
    <div class="header-content">
      <div class="greeting">
        <h1>Selamat {{ greeting }}, Andi Pratama 👋</h1>
        <p>{{ currentDate }}</p>
      </div>
      <div class="header-actions">
        <div class="search-bar">
          <input type="text" placeholder="Cari standar, topik, atau kata kunci..." />
          <span class="search-hint">Ctrl K</span>
        </div>
        <button class="btn-action">🔖</button>
        <div class="notification-bell">
          <span>🔔</span>
          <span class="badge">2</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      currentDate: '',
      greeting: 'pagi',
      isMobile: false
    }
  },
  mounted() {
    this.updateDate()
    this.setGreeting()
    this.checkMobile()
    window.addEventListener('resize', this.checkMobile)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile)
  },
  methods: {
    updateDate() {
      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
      const today = new Date()
      this.currentDate = today.toLocaleDateString('id-ID', options)
    },
    setGreeting() {
      const hour = new Date().getHours()
      if (hour < 12) this.greeting = 'pagi'
      else if (hour < 15) this.greeting = 'siang'
      else if (hour < 19) this.greeting = 'sore'
      else this.greeting = 'malam'
    },
    checkMobile() {
      this.isMobile = window.innerWidth < 768
    },
    toggleSidebar() {
      this.$parent.$refs.sidebar?.toggleSidebar?.()
    }
  }
}
</script>

<style scoped>
.header {
  background: white;
  border-bottom: 1px solid #e0e0e0;
  padding: 15px 20px;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.btn-menu {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background 0.3s ease;
  margin-right: 10px;
}

.btn-menu:hover {
  background: #f0f0f0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.greeting h1 {
  margin: 0;
  font-size: 24px;
  color: #1a1a1a;
}

.greeting p {
  margin: 5px 0 0 0;
  color: #666;
  font-size: 13px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.search-bar {
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 8px;
  padding: 10px 15px;
  flex: 1;
  min-width: 250px;
  position: relative;
}

.search-bar input {
  border: none;
  background: transparent;
  outline: none;
  font-size: 14px;
  flex: 1;
  color: #333;
}

.search-bar input::placeholder {
  color: #999;
}

.search-hint {
  font-size: 11px;
  color: #999;
  background: #e0e0e0;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
}

.btn-action,
.notification-bell {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  position: relative;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background 0.3s ease;
}

.btn-action:hover,
.notification-bell:hover {
  background: #f0f0f0;
}

.notification-bell {
  display: flex;
  align-items: center;
}

.badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ff4444;
  color: white;
  font-size: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: 2px solid white;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .header {
    padding: 12px 15px;
  }

  .btn-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-content {
    gap: 10px;
  }

  .greeting h1 {
    font-size: 18px;
  }

  .greeting p {
    font-size: 12px;
  }

  .search-bar {
    min-width: 150px;
    padding: 8px 12px;
  }

  .search-hint {
    display: none;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 10px 12px;
  }

  .header-content {
    flex-direction: column;
    align-items: stretch;
  }

  .greeting h1 {
    font-size: 16px;
  }

  .greeting p {
    font-size: 11px;
  }

  .header-actions {
    width: 100%;
    gap: 10px;
  }

  .search-bar {
    flex: 1;
    min-width: auto;
  }

  .btn-action {
    padding: 6px 10px;
    font-size: 18px;
  }
}
</style>