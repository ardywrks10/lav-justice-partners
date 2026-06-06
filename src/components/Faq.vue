<template>
  <main class="relative overflow-hidden flex flex-col">
    
    <section ref="ctaSection" class="relative bg-white py-20 px-6 overflow-hidden">
      <img src="/public/images/justice-bg.png" class="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[400px] opacity-[0.1] pointer-events-none z-[5]" alt="decor logo" />
      <div class="absolute -top-[20%] -left-[10%] w-[40rem] h-[40rem] rounded-full border border-gray-100 pointer-events-none"></div>
      <div class="absolute -bottom-[20%] -right-[10%] w-[50rem] h-[50rem] rounded-full border border-gray-100 pointer-events-none"></div>

      <div class="relative z-10 max-w-4xl mx-auto text-center transform transition-all duration-1000 ease-out"
           :class="isCtaVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-12 scale-95 opacity-0'">
        <div class="flex items-center justify-center gap-3 mb-5">
          <div class="w-10 h-[2px] bg-gray-400"></div>
          <span class="text-sm font-bold tracking-widest text-gray-500 uppercase">LET'S TALK</span>
          <div class="w-10 h-[2px] bg-gray-400"></div>
        </div>

        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-5 font-serif tracking-tight">
          Siap Mengembangkan <span class="italic text-[#F2A900] font-serif">Bisnis</span> Anda?
        </h2>

        <p class="text-base md:text-lg font-semibold text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Mulai dari pendirian usaha hingga penyelesaian sengketa, kami siap menjadi mitra hukum terpercaya dalam setiap langkah perkembangan bisnis anda
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <router-link to="/booking" class="w-full sm:w-auto px-6 py-3 bg-[#002D72] text-white text-sm font-bold tracking-wider transition-all shadow-md transform hover:-translate-y-0.5 rounded-sm">
            Mulai Konsultasi
          </router-link>
          
          <a href="https://wa.me/6287861413066" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-6 py-3 bg-transparent text-[#212121] text-sm font-bold tracking-widest border border-gray-300 transition-colors shadow-md transform hover:-translate-y-0.5 rounded-sm">
            WhatsApp Kami
          </a>
        </div>
      </div>
    </section>

    <section ref="faqSection" class="relative py-20 px-6 bg-gray-100 overflow-hidden">
      
      <div class="relative z-10 max-w-4xl mx-auto text-center transform transition-all duration-700 ease-out"
           :class="isFaqVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'">
        <div class="flex items-center justify-center gap-3 mb-5">
          <div class="w-10 h-[2px] bg-gray-400"></div>
          <span class="text-sm font-bold tracking-widest text-gray-500 uppercase">F.A.Q</span>
          <div class="w-10 h-[2px] bg-gray-400"></div>
        </div>
        <h2 class="font-serif text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Pertanyaan yang Sering Diajukan
        </h2>
        <div class="w-12 h-1 bg-[#F2A900] mx-auto rounded-full mb-12"></div>
      </div>

      <div class="relative z-10 max-w-3xl mx-auto space-y-4 transform transition-all duration-1000 ease-out delay-[250ms]"
           :class="isFaqVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'">
        <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200">
          <button @click="toggleFaq(index)" class="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
            <h3 class="font-bold font-serif text-md text-slate-800 pr-4" :class="activeIndex === index ? 'text-[#F2A900]' : ''"> {{ faq.question }}</h3>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0" :class="{'rotate-180': activeIndex === index}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-show="activeIndex === index" class="px-6 pb-6">
            <p class="text-slate-700 text-base leading-relaxed text-justify">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { faq } from '../data/faqData.js';

  const faqs = ref(faq);
  const activeIndex = ref(0);
  const toggleFaq = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index
  };

  const ctaSection = ref(null);
  const faqSection = ref(null);

  const isCtaVisible = ref(false);
  const isFaqVisible = ref(false);

  let observer = null;

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === ctaSection.value) {
            isCtaVisible.value = true;
          } else if (entry.target === faqSection.value) {
            isFaqVisible.value = true;
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.3
    });

    if (ctaSection.value) observer.observe(ctaSection.value);
    if (faqSection.value) observer.observe(faqSection.value);
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });
</script>