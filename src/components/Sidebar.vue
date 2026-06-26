<template>
  <aside class="sidebar">
    <div class="logo-section">
      <div class="logo">
        <div class="logo-icon">IFRS</div>
        <div class="logo-text">
          <h2>IFRS</h2>
          <p>PSAK 71</p>
          <span>Standar Pelaporan Keuangan Internasional</span>
        </div>
      </div>
    </div>
    <nav class="nav-menu">
      <router-link to="/" class="nav-item" :class="{ active: $route.path === '/' }">🏠 Beranda</router-link>
      <router-link to="/standards" class="nav-item" :class="{ active: $route.path === '/standards' }">📋 Standar</router-link>
      <router-link to="/interpretations" class="nav-item" :class="{ active: $route.path === '/interpretations' }">🔍 Interpretasi</router-link>
      <router-link to="/implementation" class="nav-item" :class="{ active: $route.path === '/implementation' }">✓ Implementasi</router-link>
      <router-link to="/guidance" class="nav-item" :class="{ active: $route.path === '/guidance' }">📚 Panduan</router-link>
      <a href="#" class="nav-item">🔔 Update</a>
      <a href="#" class="nav-item">⭐ Favorit</a>
      <a href="#" class="nav-item">⏱️ Riwayat</a>
      <a href="#" class="nav-item">⚙️ Pengaturan</a>
    </nav>
    <div class="sidebar-footer">
      <div class="version-info">
        <p>Versi Aplikasi<br>1.0.0</p>
      </div>
      <div class="user-profile">
        <div class="avatar">A</div>
        <div class="user-info">
          <p>Andi Pratama</p>
          <span>Akuntan</span>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default { name: 'Sidebar' }
</script>

<style scoped>
.sidebar { width: 240px; background: linear-gradient(135deg, #0f2d5c 0%, #1a3a6d 100%); color: white; height: 100vh; overflow-y: auto; display: flex; flex-direction: column; }
.logo-section { padding: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); }
.logo { display: flex; gap: 12px; }
.logo-icon { width: 50px; height: 50px; background: rgba(255,255,255,0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; }
.logo-text h2 { margin: 0; font-size: 18px; font-weight: bold; }
.logo-text p { margin: 2px 0; font-size: 14px; font-weight: 600; }
.logo-text span { font-size: 11px; opacity: 0.8; }
.nav-menu { flex: 1; padding: 10px; display: flex; flex-direction: column; gap: 5px; }
.nav-item { display: flex; align-items: center; gap: 12px; padding: 12px 16px; color: rgba(255,255,255,0.7); text-decoration: none; border-radius: 6px; transition: all 0.3s; font-size: 14px; }
.nav-item:hover { background: rgba(255,255,255,0.1); color: white; }
.nav-item.active { background: rgba(255,255,255,0.2); color: white; border-left: 3px solid #4a9eff; }
.sidebar-footer { padding: 15px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 12px; }
.version-info { margin-bottom: 15px; opacity: 0.8; }
.version-info p { margin: 0; line-height: 1.4; }
.user-profile { display: flex; gap: 10px; align-items: center; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 6px; }
.avatar { width: 35px; height: 35px; background: rgba(255,255,255,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; }
.user-info p { margin: 0; font-size: 13px; font-weight: 600; }
.user-info span { margin: 0; font-size: 11px; opacity: 0.8; }
</style>