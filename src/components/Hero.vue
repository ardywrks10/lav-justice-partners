<template>
  <section id="home" ref="homeSection" class="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-gray-100">
    <img src="/public/images/images8.jpg" alt="bg-img" class="absolute right-0 top-0 h-full w-full object-cover lg:w-[60%] lg:rounded-bl-[120px]"/> 
    <div class="container mx-auto px-6 sm:px-10 relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 text-center lg:text-left">
        <div class="col-span-1 lg:col-span-6 xl:col-span-5 rounded-sm border border-white/70 bg-white/95 py-8 px-6 sm:px-8 shadow-2xl backdrop-blur-md backdrop-saturate-200 transform transition-all duration-1000 ease-out"
            :class="isVisible ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'">
          <h1 class="text-[#1A1A1A] font-serif font-bold text-2xl lg:text-3xl leading-tight lg:leading-[1.2] max-w-xl mx-auto lg:mx-0 min-h-[150px] md:min-h-[180px] flex items-center justify-center lg:justify-start">
            <span>
              {{ displayedText }}<span class="animate-blink font-light text-[#051962]">|</span>
            </span>
          </h1>
          <p class="text-lg font-semibold mb-4 mt-3 text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
            <span class="font-bold text-[#051962]">LAV Justice Partners</span> hadir sebagai mitra hukum profesional yang mengutamakan integritas, keadilan, dedikasi, dan kepercayaan
          </p>
          <div class="mb-8 flex flex-col sm:flex-row justify-center gap-4 lg:justify-start">
            <button class="px-7 py-3.5 bg-[#051962] text-white text-sm font-bold tracking-widest rounded-none border border-[#051962] shadow-md transition-all transform hover:-translate-y-0.5">
                Jelajahi Layanan
            </button>
            <button class="px-7 py-3.5 bg-transparent text-[#212121] text-sm font-bold tracking-widest rounded-none border border-gray-300 transition-all shadow-md transform hover:-translate-y-0.5">
                Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';
    const fullText      = "Mitra Hukum Terpercaya untuk Setiap Langkah Penting Anda";
    const displayedText = ref('');
    const typingSpeed   = 120;   
    const delayStart    = 700; 
    const homeSection   = ref(null);
    const isVisible     = ref(false);
    
    let observer        = null;
    const handleTypewriter = async () => {
      while (true) {
          for (let i = 0; i <= fullText.length; i++) {
            displayedText.value = fullText.slice(0, i);
            await new Promise((resolve) => setTimeout(resolve, typingSpeed));
          }

          await new Promise((resolve) => setTimeout(resolve, delayStart));
      }
    };

    onMounted(() => {
      handleTypewriter();
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting){
          isVisible.value = true;
          observer.unobserve(entry.target);
        }
      }, {
        threshold: 0.2 
      });

      if (homeSection.value) {
        observer.observe(homeSection.value);
      }
    });

    onUnmounted(() => {
      if (observer) observer.disconnect();
    });
</script>

<style scoped>
    @keyframes blink {
    50% { opacity: 0; }
    }
    .animate-blink {
    animation: blink 0.8s step-start infinite;
    }
</style>