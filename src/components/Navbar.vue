<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-white/75 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="flex justify-between h-20 items-center">
        
        <router-link to="/" class="flex items-center">
          <img src="/images/logo/lav.png" alt="LAV Logo" class="h-10 sm:h-12 w-auto object-contain">
        </router-link>

        <div class="hidden md:flex space-x-8 h-full items-center">
          <div v-for="item in menuItems" :key="item.id" class="relative group h-full flex items-center">
            <router-link 
              :to="item.link" 
              class="inline-flex items-center gap-1.5 font-bold text-base text-[#002D72] hover:text-[#002D72]/80 transition-colors py-2 relative"
            >
              {{ item.name }}
              <svg v-if="item.subItems" class="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-[#002D72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
              <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F2A900] transition-all duration-300 group-hover:w-full"></span>
            </router-link>

            <div v-if="item.subItems" class="absolute left-1/2 -translate-x-1/2 top-[90%] w-[calc(100vw-3rem)] max-w-4xl bg-white border border-gray-100 shadow-2xl rounded-sm p-6 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
              <div class="border-b border-gray-100 pb-3 mb-4">
                <h3 class="text-xl font-black tracking-tight text-[#002D72]">{{ item.name }}</h3>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <router-link 
                  v-for="sub in item.subItems" 
                  :key="sub.name" 
                  :to="sub.link" 
                  class="block p-3 rounded-sm hover:bg-[#002D72]/5 transition-all group/item"
                >
                  <div class="text-base font-bold text-[#002D72] group-hover/item:text-[#F2A900] transition-colors">
                    {{ sub.name }}
                  </div>
                  <div class="text-xs text-gray-500 mt-1 font-normal leading-relaxed">
                    {{ sub.desc }}
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden lg:flex items-center">
          <router-link to="/booking" class="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold rounded-sm bg-[#002D72] text-white hover:bg-[#0A3161] transition-all shadow-md transform hover:-translate-y-0.5">
            <span class="w-2.5 h-2.5 rounded-full bg-[#F2A900]"></span>
            Book Consultation
          </router-link>
        </div>

        <button class="md:hidden p-2 text-[#002D72] hover:bg-black/5 rounded-sm transition-colors z-50" @click="toggleMobileMenu">
          <svg v-if="!isMobileMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <div v-if="isMobileMenuOpen" @click="isMobileMenuOpen = false" class="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"></div>
    <transition name="slide">
      <div v-show="isMobileMenuOpen" class="md:hidden fixed top-0 right-0 h-screen w-[320px] max-w-[85vw] bg-[#002D72] z-40 shadow-2xl flex flex-col justify-between pt-24 overflow-y-auto">
        <div class="px-6 py-2 space-y-2 flex-1">
          <div v-for="item in menuItems" :key="item.id" class="border-b border-white/5 last:border-none">
            
            <template v-if="item.subItems">
              <button @click="toggleSubmenu(item.id)" class="flex items-center justify-between w-full py-4 text-lg font-bold text-white hover:text-[#F2A900] transition-colors">
                {{ item.name }}
                <svg class="w-5 h-5 transition-transform duration-300 text-white/70" :class="{ 'rotate-180 text-[#F2A900]': activeMobileSubmenu === item.id }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div v-show="activeMobileSubmenu === item.id" class="pl-4 pb-4 space-y-3.5">
                <router-link 
                  v-for="sub in item.subItems" 
                  :key="sub.name" 
                  :to="sub.link" 
                  @click="isMobileMenuOpen = false" 
                  class="block text-base font-medium text-white/80 hover:text-[#F2A900] transition-colors"
                >
                  {{ sub.name }}
                </router-link>
              </div>
            </template>

            <router-link 
              v-else
              :to="item.link" 
              @click="isMobileMenuOpen = false" 
              class="block py-4 text-lg font-bold text-white hover:text-[#F2A900] transition-colors"
            >
              {{ item.name }}
            </router-link>
            
          </div>
        </div>
        
        <div class="p-6 border-t border-white/10 bg-[#001E4D]">
          <router-link to="/booking" @click="isMobileMenuOpen = false" class="flex justify-center items-center gap-2 w-full py-3.5 text-base font-bold rounded-sm bg-[#F2A900] text-white hover:bg-[#d69500] transition-colors shadow-lg">
            Book Consultation
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
    import { ref } from 'vue';

    const isMobileMenuOpen = ref(false);
    const activeMobileSubmenu = ref(null);

    const menuItems = [
    { id: 1, name: 'Home', link: '/#home'},
    { 
        id: 2, 
        name: 'Services', 
        link: '/#services',
        subItems: [
          { name: 'Pendirian Badan Usaha', link: '/services/pendirian-badan-usaha', desc: 'Pendirian PT, CV, & PMA, Legalitas Korporasi, dan Anggaran Dasar & Kepatuhan' },
          { name: 'Konsultasi Pajak', link: '/services/konsultasi-pajak', desc: 'Pendampingan Pemeriksaan Pajak, Restitusi Pajak, dan Penasihat Keuangan' },
          { name: 'Litigasi dan Insolvensi', link: '/services/litigasi-dan-insolvensi', desc: 'Pidana & Perdata, Pengadilan Hubungan Industrial & Pajak, dan PKPU & Insolvensi' },
          { name: 'Ketenagakerjaan dan SDM', link: '/services/ketenagakerjaan-dan-sdm', desc: 'Rekrutmen & Outsourcing, Manajemen Payroll & SOP, dan Pendampingan & Konsultasi KPI' },
          { name: 'Lisensi dan Permit Bisnis', link: '/services/lisensi-dan-permit-bisnis', desc: 'Izin Operasional & Komersial, Sertifikasi Sektoral (OSS-RBA), dan Pemenuhan Komitmen Regulasi' }
        ]
    },
    { id: 3, name: 'About Us', link: '/#about' },
    { id: 4, name: 'Articles & News', link: '/#article' },
    { id: 5, name: 'Contact Us', link: '/#contact' }
    ];

    const toggleMobileMenu = () => isMobileMenuOpen.value = !isMobileMenuOpen.value;
    const toggleSubmenu = (id) => activeMobileSubmenu.value = activeMobileSubmenu.value === id ? null : id;
</script>

<style scoped>
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(100%);
  }
</style>