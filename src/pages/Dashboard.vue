<template>
  <div class="dashboard">
    <HeroSection />
    <div class="dashboard-content">
      <section class="section">
        <h2>Kategori Utama</h2>
        <div class="category-grid">
          <div class="card purple">
            <div class="icon">📋</div>
            <h3>Jelajahi Standar</h3>
            <p>Akses IFRS Accounting Standards dan PSAK terkini.</p>
          </div>
          <div class="card green">
            <div class="icon">🏢</div>
            <h3>Interpretasi</h3>
            <p>Lihat IFRIC Interpretations dan SIC Interpretations.</p>
          </div>
          <div class="card orange">
            <div class="icon">✓</div>
            <h3>Implementasi</h3>
            <p>Panduan penerapan standar dan ilustrasi praktis.</p>
          </div>
          <div class="card blue">
            <div class="icon">🎓</div>
            <h3>Panduan & Edukasi</h3>
            <p>Materi edukasi, artikel, dan video tentang IFRS/PSAK.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'
export default {
  name: 'Dashboard',
  components: { HeroSection }
}
</script>

<style scoped>
.dashboard { padding: 0; }
.dashboard-content { padding: 30px; max-width: 1400px; margin: 0 auto; }
.section { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
.section h2 { margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #1a1a1a; }
.category-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; }
.card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); position: relative; cursor: pointer; transition: all 0.3s; border-left: 4px solid; }
.card:hover { transform: translateY(-5px); box-shadow: 0 8px 16px rgba(0,0,0,0.15); }
.card.purple { border-left-color: #9b59b6; }
.card.green { border-left-color: #27ae60; }
.card.orange { border-left-color: #e67e22; }
.card.blue { border-left-color: #3498db; }
.card .icon { font-size: 32px; margin-bottom: 10px; }
.card h3 { margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #1a1a1a; }
.card p { margin: 0; font-size: 13px; color: #666; line-height: 1.5; }
</style>