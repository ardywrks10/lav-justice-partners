<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-white/75 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300">
    
    <!-- ================= BARIS INFORMASI TAMBAHAN (TOP BAR) ================= -->
    <div class="bg-[#002D72] text-white text-xs py-2.5 px-6 sm:px-8 lg:px-12 border-b border-white/10">
      <div class="max-w-7xl mx-auto flex flex-row justify-between items-center w-full tracking-wide font-medium">
        
        <!-- SISI KIRI: Ikon Telepon, Email, dan (Sosmed khusus Mobile) -->
        <div class="flex items-center gap-4 sm:gap-4">
          <!-- Telepon -->
          <a href="https://wa.me/6287861413066" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:text-[#F2A900] transition-colors group">
            <svg class="w-4 h-4 sm:w-3.5 sm:h-3.5 text-[#F2A900] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span class="hidden sm:inline">+62 878-6141-3066</span>
          </a>
          
          <span class="text-white/20 hidden sm:inline">|</span>
          
          <!-- Email -->
          <a href="mailto:lawvina90@gmail.com" class="flex items-center gap-2 hover:text-[#F2A900] transition-colors group">
            <svg class="w-4 h-4 sm:w-3.5 sm:h-3.5 text-[#F2A900] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span class="hidden sm:inline">lawvina90@gmail.com</span>
          </a>

          <!-- Sosial Media (Hanya Muncul di Sisi Kiri Saat Mobile) -->
          <a href="https://www.facebook.com/lavjustice" target="_blank" rel="noopener noreferrer" class="sm:hidden hover:text-[#F2A900] transition-colors" aria-label="LAV Justice Partners di Facebook">
            <svg class="w-4 h-4 text-[#F2A900]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.141 2.375h-2.518c-3.111 0-5.12 2.062-5.12 5.247v2.421h-2.833v3.197h2.833v8.085h3.316v-8.085h2.846l.423-3.197h-3.269V8.04c0-1.077.297-1.81 1.832-1.81h1.961v-2.855z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/lavjustice/" target="_blank" rel="noopener noreferrer" class="sm:hidden hover:text-[#F2A900] transition-colors" aria-label="LAV Justice Partners di Instagram">
            <svg class="w-4 h-4 text-[#F2A900]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <rect width="18" height="18" x="3" y="3" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="3.5"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
            </svg>
          </a>
        </div>
        
        <!-- SISI KANAN: Ikuti Kami (Desktop) & Bantuan (Mobile + Desktop) -->
        <div class="flex items-center gap-4">
          
          <!-- Sosial Media (Hanya Muncul di Sisi Kanan Saat Desktop) -->
          <div class="hidden sm:flex items-center gap-3">
            <span class="text-white">Ikuti kami di</span>
            <div class="flex items-center gap-3">
              <a href="https://www.facebook.com/lavjustice" target="_blank" rel="noopener noreferrer" class="hover:text-[#F2A900] transition-colors" aria-label="LAV Justice Partners di Facebook">
                <svg class="w-3.5 h-3.5 text-[#F2A900]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.141 2.375h-2.518c-3.111 0-5.12 2.062-5.12 5.247v2.421h-2.833v3.197h2.833v8.085h3.316v-8.085h2.846l.423-3.197h-3.269V8.04c0-1.077.297-1.81 1.832-1.81h1.961v-2.855z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/lavjustice/" target="_blank" rel="noopener noreferrer" class="hover:text-[#F2A900] transition-colors" aria-label="LAV Justice Partners di Instagram">
                <svg class="w-3.5 h-3.5 text-[#F2A900]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <rect width="18" height="18" x="3" y="3" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="3.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          <span class="text-white/20 hidden sm:inline">|</span>

          <!-- Bantuan -->
          <router-link to="/help" class="flex items-center gap-1.5 hover:text-[#F2A900] transition-colors font-bold" aria-label="Halaman Bantuan">
            <svg class="w-4 h-4 text-[#F2A900]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Bantuan</span>
          </router-link>
        </div>

      </div>
    </div>
    
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

        <button 
          class="md:hidden p-2 text-[#002D72] hover:bg-black/5 rounded-sm transition-colors z-50" 
          @click="toggleMobileMenu"
          :aria-label="isMobileMenuOpen ? 'Tutup Menu Navigasi' : 'Buka Menu Navigasi'"
          :aria-expanded="isMobileMenuOpen"
        >
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
      <div v-show="isMobileMenuOpen" class="md:hidden fixed top-0 right-0 h-screen w-[320px] max-w-[85vw] bg-[#002D72] z-40 shadow-2xl flex flex-col justify-between pt-28 overflow-y-auto">
        
        <div class="px-5 py-4 divide-y divide-white/10 flex-1">
          <div v-for="item in menuItems" :key="item.id" class="py-1">
            
            <template v-if="item.subItems">
              <button 
                @click="toggleSubmenu(item.id)" 
                class="flex items-center justify-between w-full py-3.5 text-base font-bold text-white hover:text-[#F2A900] transition-colors" 
                :aria-label="`Opsi Submenu ${item.name}`"
                :aria-expanded="activeMobileSubmenu === item.id"
              >
                <span class="tracking-wide">{{ item.name }}</span>
                <svg class="w-4 h-4 transition-transform duration-300 text-white/50" :class="{ 'rotate-180 text-[#F2A900]': activeMobileSubmenu === item.id }" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div v-show="activeMobileSubmenu === item.id" class="mt-1 mb-3 ml-2 pl-3 border-l-2 border-[#F2A900] bg-[#001E4D]/40 rounded-sm divide-y divide-white/5 overflow-hidden">
                <router-link 
                  v-for="sub in item.subItems" 
                  :key="sub.name" 
                  :to="sub.link" 
                  @click="isMobileMenuOpen = false" 
                  class="block py-3 px-2 text-sm font-medium text-white/80 hover:text-[#F2A900] hover:bg-[#002D72]/30 transition-all"
                >
                  {{ sub.name }}
                </router-link>
              </div>
            </template>

            <router-link 
              :to="item.link" 
              @click="isMobileMenuOpen = false" 
              class="block py-3.5 text-base font-bold text-white hover:text-[#F2A900] transition-colors tracking-wide"
            >
              {{ item.name }}
            </router-link>
            
          </div>
        </div>
        
        <div class="p-5 border-t border-white/10 bg-[#001E4D]">
          <router-link to="/booking" @click="isMobileMenuOpen = false" class="flex justify-center items-center gap-2 w-full py-3.5 text-base font-black rounded-sm bg-[#F2A900] text-slate-950 hover:bg-[#d69500] transition-colors shadow-lg tracking-wide">
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
    { id: 3, name: 'About Us', link: '/about' },
    { id: 4, name: 'Articles & News', link: '/#articles' },
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