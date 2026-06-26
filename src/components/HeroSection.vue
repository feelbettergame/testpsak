<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <div class="badge">PSAK 71</div>
        <h1>Instrumen Keuangan</h1>
        <p>Mengatur penyajian, pengungkapan, dan pengakuan instrumen keuangan untuk memberikan informasi yang relevan dan andal.</p>
        <button class="btn-primary">Pelajari PSAK 71 →</button>
      </div>
      <div class="hero-icon">📊</div>
    </div>
    <div class="hero-dots">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </section>
</template>

<script>
export default { name: 'HeroSection' }
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #1a3a6d 0%, #0f2d5c 100%);
  color: white;
  border-radius: 12px;
  padding: 40px;
  margin: 30px;
  position: relative;
  overflow: hidden;
}

.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

.hero-text {
  flex: 1;
}

.badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 15px;
}

.hero-text h1 {
  margin: 0 0 15px 0;
  font-size: 36px;
  font-weight: bold;
}

.hero-text p {
  margin: 0 0 20px 0;
  font-size: 16px;
  opacity: 0.9;
  line-height: 1.5;
}

.btn-primary {
  background: white;
  color: #0f2d5c;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
}

.hero-icon {
  flex: 0 0 auto;
  width: 180px;
  height: 180px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
}

.hero-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
}

.hero-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: background 0.3s ease;
}

.hero-dots span:first-child {
  background: white;
}

.hero-dots span:hover {
  background: rgba(255, 255, 255, 0.6);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .hero {
    margin: 20px;
    padding: 30px 20px;
  }

  .hero-content {
    flex-direction: column;
    gap: 30px;
  }

  .hero-text h1 {
    font-size: 28px;
  }

  .hero-text p {
    font-size: 14px;
  }

  .hero-icon {
    width: 150px;
    height: 150px;
    font-size: 60px;
  }
}

@media (max-width: 480px) {
  .hero {
    margin: 15px;
    padding: 20px;
    border-radius: 8px;
  }

  .hero-text h1 {
    font-size: 24px;
  }

  .hero-text p {
    font-size: 13px;
  }

  .btn-primary {
    padding: 10px 20px;
    font-size: 14px;
  }

  .hero-icon {
    width: 120px;
    height: 120px;
    font-size: 50px;
  }
}
</style>