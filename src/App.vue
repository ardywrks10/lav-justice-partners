<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';

  const isScrollVisible = ref(false);
  const checkScroll = () => {
    if (window.scrollY > 300) {
      isScrollVisible.value = true;
    } else {
      isScrollVisible.value = false;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  onMounted(() => { window.addEventListener('scroll', checkScroll);});
  onUnmounted(() => {window.removeEventListener('scroll', checkScroll);});
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <Navbar />
    <main class="flex-grow pt-20">
      <router-view />
    </main>
    <Footer /> 

    <transition name="fade">
      <button 
        v-if="isScrollVisible"
        @click="scrollToTop"
        class="fixed bottom-6 left-6 z-50 bg-[#F2A900] hover:bg-[#D49400] text-white p-3.5 shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center rounded-sm group"
        aria-label="Kembali ke atas"
      >
        <svg class="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>
        </svg>
      </button>
    </transition>

    <a href="https://wa.me/6287861413066" target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"aria-label="Hubungi kami melalui WhatsApp">
      <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a10.022 10.022 0 001.337 4.97l-1.413 5.163 5.285-1.386a9.983 9.983 0 004.777 1.22h.005c5.507 0 9.99-4.478 9.99-9.985C22.002 6.478 17.519 2 12.012 2zm6.059 14.125c-.249.702-1.445 1.34-1.996 1.425-.5.077-1.15.143-3.298-.717-2.747-1.1-4.522-3.892-4.659-4.076-.138-.184-1.12-1.488-1.12-2.839 0-1.35.705-2.011.956-2.28.25-.269.543-.336.724-.336.181 0 .363.002.52.01.166.007.387-.064.606.463.22.527.753 1.838.819 1.97.066.132.11.285.022.46-.087.175-.132.285-.263.438-.131.153-.275.342-.393.459-.132.131-.269.274-.117.535.151.261.672 1.108 1.439 1.787.989.875 1.82 1.144 2.083 1.275.262.132.415.11.569-.065.153-.175.656-.765.832-1.026.175-.262.35-.219.59-.131.241.087 1.53.722 1.793.853.263.131.438.197.504.307.066.11.066.635-.183 1.337z"/>
      </svg>
      <span class="absolute right-16 bg-white text-slate-800 text-xs font-bold px-3 py-2 rounded-sm shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-slate-100">
        Konsultasi Sekarang
      </span>
    </a>
  </div>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>