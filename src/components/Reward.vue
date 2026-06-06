<template>
  <section ref="whyChooseSection" class="bg-[#19191a] text-white py-20 px-6 sm:px-8 lg:px-12 border-b border-gray-800 overflow-hidden">
    <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      <div class="flex flex-col gap-8">
        
        <div class="space-y-4 transform transition-all duration-700 ease-out"
             :class="isVisible ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'">
          <h2 class="text-3xl md:text-4xl font-bold tracking-wide font-serif leading-tight">
            Mengapa Memilih <span class="text-[#F2A900]">LAV Justice Partners</span>
          </h2>
          <p class="text-gray-400 text-md leading-relaxed text-justify">
            Lebih dari sekadar penasihat hukum, kami bertindak sebagai mitra strategis yang berdedikasi penuh dalam memberikan perlindungan hukum yang komprehensif terhadap bisnis anda
          </p>
        </div>

        <div class="flex flex-col gap-6">
          <div class="flex gap-4 items-center group transform transition-all duration-700 ease-out delay-[200ms]"
               :class="isVisible ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'">
            <div class="w-12 h-12 rounded-xl bg-[#222224] border border-gray-800 flex items-center justify-center shrink-0 shadow-md transition-colors group-hover:border-[#F2A900]">
              <svg class="w-6 h-6 text-[#F2A900]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-100 tracking-wide">Advokat Senior & Berpengalaman</h3>
          </div>

          <div class="flex gap-4 items-center group transform transition-all duration-700 ease-out delay-[400ms]"
               :class="isVisible ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'">
            <div class="w-12 h-12 rounded-xl bg-[#222224] border border-gray-800 flex items-center justify-center shrink-0 shadow-md transition-colors group-hover:border-[#F2A900]">
              <svg class="w-6 h-6 text-[#F2A900]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-100 tracking-wide">Integritas Tinggi & Kerahasiaan Klien Absolut</h3>
          </div>
          
          <div class="flex gap-4 items-center group transform transition-all duration-700 ease-out delay-[600ms]"
               :class="isVisible ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'">
            <div class="w-12 h-12 rounded-xl bg-[#222224] border border-gray-800 flex items-center justify-center shrink-0 shadow-md transition-colors group-hover:border-[#F2A900]">
              <svg class="w-6 h-6 text-[#F2A900]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-100 tracking-wide">Respons Cepat & Layanan Prioritas 24/7</h3>
          </div>

          <div class="flex gap-4 items-center group transform transition-all duration-700 ease-out delay-[800ms]"
               :class="isVisible ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'">
            <div class="w-12 h-12 rounded-xl bg-[#222224] border border-gray-800 flex items-center justify-center shrink-0 shadow-md transition-colors group-hover:border-[#F2A900]">
              <svg class="w-6 h-6 text-[#F2A900]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-100 tracking-wide">Pendekatan Hukum Berbasis Bisnis (Business-Oriented)</h3>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center w-full transform transition-all duration-1000 ease-out"
           :class="isVisible ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'">
        
        <div class="relative w-full aspect-[16/10] bg-gradient-to-tr from-[#051962]/20 to-[#F2A900]/10 rounded-sm p-8 flex items-center justify-center border border-gray-800/50 overflow-hidden group">
          <div class="absolute -inset-10 bg-[#051962]/10 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <transition name="slide-fade" mode="out-in">
            <div :key="activeSlide" class="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-[#222224] border border-gray-700/50 rounded-sm shadow-2xl relative z-10">
              <h4 class="text-xl font-bold mb-3">{{ slides[activeSlide].title }}</h4>
              <p class="text-sm text-gray-400 max-w-sm">{{ slides[activeSlide].desc }}</p>
            </div>
          </transition>
        </div>

        <div class="flex gap-2.5 mt-6">
          <button v-for="(slide, index) in slides" 
            :key="index"
            @click="activeSlide = index"
            :class="[
              'h-2 transition-all duration-300 ease-in-out',
              activeSlide === index 
                ? 'w-6 bg-[#F2A900] rounded-sm' 
                : 'w-2 bg-gray-700 hover:bg-gray-500 rounded-sm'
            ]"
            :aria-label="'Go to slide ' + (index + 1)"
          ></button>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  const activeSlide = ref(0);
  const slides = ref([
    { 
      title: 'Advokat Berlisensi PERADI', 
      desc: 'Advokat kami terdaftar resmi dan berlisensi di bawah naungan PERADI, menjamin profesionalisme dan kepatuhan kode etik tertinggi.' 
    },
    { 
      title: 'Legalitas Kemenkumham RI', 
      desc: 'Kantor hukum kami mengantongi izin resmi dan terdaftar sah di Kemenkumham RI, memberikan kepastian hukum yang mutlak.' 
    },
    { 
      title: 'Jangkauan Seluruh Indonesia', 
      desc: 'Siap memberikan layanan dan pendampingan hukum terbaik untuk masyarakat serta pelaku bisnis di seluruh wilayah Indonesia.' 
    }
  ]);

  const whyChooseSection = ref(null);
  const isVisible = ref(false);
  
  let slideInterval = null;
  let observer = null;

  onMounted(() => {
    slideInterval = setInterval(() => {
      activeSlide.value = (activeSlide.value + 1) % slides.value.length;
    }, 4000);

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.3
    });

    if (whyChooseSection.value) {
      observer.observe(whyChooseSection.value);
    }
  });

  onUnmounted(() => {
    clearInterval(slideInterval);
    if (observer) observer.disconnect();
  });
</script>

<style scoped>
  .slide-fade-enter-active {
    transition: all 0.4s ease-out;
  }
  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter-from {
    transform: translateX(15px);
    opacity: 0;
  }
  .slide-fade-leave-to {
    transform: translateX(-15px);
    opacity: 0;
  }
</style>