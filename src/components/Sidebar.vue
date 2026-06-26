<template>
  <aside class="sidebar" :class="{ 'sidebar-open': sidebarOpen }">
    <div class="logo-section">
      <div class="logo">
        <div class="logo-icon">IFRS</div>
        <div class="logo-text">
          <h2>IFRS</h2>
          <p>PSAK 71</p>
          <span>Standar Pelaporan</span>
        </div>
      </div>
      <button class="close-sidebar" @click="toggleSidebar" v-if="isMobile">✕</button>
    </div>

    <nav class="nav-menu">
      <router-link to="/" class="nav-item" :class="{ active: $route.path === '/' }">
        <span class="icon">🏠</span>
        <span class="label">Beranda</span>
      </router-link>

      <router-link to="/standards" class="nav-item" :class="{ active: $route.path === '/standards' }">
        <span class="icon">📋</span>
        <span class="label">Standar</span>
      </router-link>

      <!-- Menu dengan Sub-menu -->
      <div class="nav-item-group">
        <button class="nav-item nav-toggle" :class="{ active: submenuOpen }" @click="toggleSubmenu">
          <span class="icon">📚</span>
          <span class="label">Referensi</span>
          <span class="arrow" :class="{ open: submenuOpen }">›</span>
        </button>
        <div class="submenu" v-show="submenuOpen">
          <router-link to="/interpretations" class="submenu-item">🔍 Interpretasi IFRIC</router-link>
          <router-link to="/implementation" class="submenu-item">✓ Panduan Implementasi</router-link>
          <a href="#" class="submenu-item">📖 Contoh Praktis</a>
          <a href="#" class="submenu-item">💡 Tips & Trik</a>
        </div>
      </div>

      <router-link to="/guidance" class="nav-item" :class="{ active: $route.path === '/guidance' }">
        <span class="icon">🎓</span>
        <span class="label">Panduan</span>
      </router-link>

      <a href="#" class="nav-item">
        <span class="icon">🔔</span>
        <span class="label">Update</span>
      </a>

      <a href="#" class="nav-item">
        <span class="icon">⭐</span>
        <span class="label">Favorit</span>
      </a>

      <a href="#" class="nav-item">
        <span class="icon">⏱️</span>
        <span class="label">Riwayat</span>
      </a>

      <!-- Menu Settings dengan Sub-menu -->
      <div class="nav-item-group">
        <button class="nav-item nav-toggle" :class="{ active: settingsOpen }" @click="toggleSettings">
          <span class="icon">⚙️</span>
          <span class="label">Pengaturan</span>
          <span class="arrow" :class="{ open: settingsOpen }">›</span>
        </button>
        <div class="submenu" v-show="settingsOpen">
          <a href="#" class="submenu-item">👤 Profil Saya</a>
          <a href="#" class="submenu-item">🔐 Keamanan</a>
          <a href="#" class="submenu-item">🌙 Tema</a>
          <a href="#" class="submenu-item">🌐 Bahasa</a>
        </div>
      </div>
    </nav>

    <div class="sidebar-footer">
      <div class="version-info">
        <p>v1.0.0</p>
        <p class="updated">Mei 2024</p>
      </div>
      <div class="user-profile">
        <div class="avatar">A</div>
        <div class="user-info">
          <p>Andi Pratama</p>
          <span>Akuntan</span>
        </div>
      </div>
      <button class="btn-logout" @click="handleLogout" title="Logout">
        <span class="icon">🚪</span>
        <span class="label">Logout</span>
      </button>
    </div>
  </aside>

  <!-- Overlay untuk mobile -->
  <div class="sidebar-overlay" v-if="isMobile && sidebarOpen" @click="toggleSidebar"></div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      submenuOpen: false,
      settingsOpen: false,
      sidebarOpen: false,
      isMobile: false
    }
  },
  mounted() {
    this.checkMobile()
    window.addEventListener('resize', this.checkMobile)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile)
  },
  methods: {
    toggleSubmenu() {
      this.submenuOpen = !this.submenuOpen
    },
    toggleSettings() {
      this.settingsOpen = !this.settingsOpen
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },
    checkMobile() {
      this.isMobile = window.innerWidth < 768
      if (!this.isMobile) {
        this.sidebarOpen = false
      }
    },
    handleLogout() {
      if (confirm('Apakah Anda yakin ingin keluar?')) {
        localStorage.removeItem('auth_token')
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 240px;
  background: linear-gradient(135deg, #0f2d5c 0%, #1a3a6d 100%);
  color: white;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1000;
  transition: all 0.3s ease;
}

.logo-section {
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  gap: 12px;
  flex: 1;
}

.logo-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;
  flex-shrink: 0;
}

.logo-text h2 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.logo-text p {
  margin: 2px 0;
  font-size: 14px;
  font-weight: 600;
}

.logo-text span {
  font-size: 11px;
  opacity: 0.8;
}

.close-sidebar {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
}

.nav-menu {
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow-y: auto;
}

.nav-item,
.nav-toggle {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
  font-size: 14px;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
}

.nav-item:hover,
.nav-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.nav-item.active {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-left: 3px solid #4a9eff;
  padding-left: 13px;
}

.nav-toggle {
  justify-content: space-between;
}

.nav-toggle .arrow {
  font-size: 20px;
  transition: transform 0.3s ease;
}

.nav-toggle .arrow.open {
  transform: rotate(90deg);
}

.nav-item-group {
  display: flex;
  flex-direction: column;
}

.submenu {
  display: flex;
  flex-direction: column;
  gap: 0;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  margin: 0 8px 5px 8px;
  overflow: hidden;
}

.submenu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 13px;
  transition: all 0.3s ease;
  border-left: 2px solid transparent;
}

.submenu-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-left-color: #4a9eff;
  padding-left: 18px;
}

.icon {
  font-size: 18px;
  display: flex;
  align-items: center;
}

.label {
  white-space: nowrap;
}

.sidebar-footer {
  padding: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.version-info {
  font-size: 11px;
  opacity: 0.7;
  text-align: center;
}

.version-info p {
  margin: 0;
  line-height: 1.4;
}

.updated {
  opacity: 0.6;
  font-size: 10px;
}

.user-profile {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.user-profile:hover {
  background: rgba(255, 255, 255, 0.15);
}

.avatar {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  flex-shrink: 0;
}

.user-info p {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
}

.user-info span {
  margin: 0;
  font-size: 11px;
  opacity: 0.8;
}

.btn-logout {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 12px;
  background: rgba(255, 76, 76, 0.2);
  border: 1px solid rgba(255, 76, 76, 0.4);
  color: #ff6b6b;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-logout:hover {
  background: rgba(255, 76, 76, 0.3);
  border-color: rgba(255, 76, 76, 0.6);
  color: #ff8787;
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    transform: translateX(-100%);
  }

  .sidebar.sidebar-open {
    transform: translateX(0);
  }

  .close-sidebar {
    display: flex;
  }

  .logo-text span {
    display: none;
  }

  .label {
    display: none;
  }

  .nav-item,
  .nav-toggle {
    justify-content: center;
    padding: 12px;
  }

  .nav-item.active {
    border-left: 3px solid #4a9eff;
    padding-left: 9px;
  }

  .submenu {
    display: none !important;
  }

  .sidebar-footer {
    padding: 10px 8px;
  }

  .user-profile {
    flex-direction: column;
    padding: 8px;
  }

  .user-info {
    display: none;
  }

  .avatar {
    width: 35px;
    height: 35px;
    font-size: 14px;
  }

  .btn-logout {
    padding: 8px;
    justify-content: center;
  }

  .btn-logout .label {
    display: none;
  }
}

@media (max-width: 480px) {
  .sidebar {
    width: 200px;
  }

  .logo-icon {
    width: 40px;
    height: 40px;
    font-size: 10px;
  }

  .logo-text h2 {
    font-size: 16px;
  }

  .logo-text p {
    font-size: 12px;
  }
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>