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
              class="inline-flex items-center gap-1.5 text-base text-[#002D72] hover:text-[#002D72]/80 transition-colors py-2 relative "
            >
              {{ item.name }}
              <svg v-if="item.subItems" class="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-[#002D72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
              <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F2A900] transition-all duration-300 group-hover:w-full"></span>
            </router-link>

            <div v-if="item.subItems" class="absolute left-0 top-[80%] w-44 bg-white/95 backdrop-blur-sm border border-gray-100 shadow-xl rounded-md py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
              <router-link 
                v-for="sub in item.subItems" 
                :key="sub.name" 
                :to="sub.link" 
                class="block px-4 py-2.5 text-base font-medium text-[#002D72] hover:bg-[#002D72]/5 hover:text-[#F2A900] transition-colors"
              >
                {{ sub.name }}
              </router-link>
            </div>
          </div>
        </div>

        <div class="hidden lg:flex items-center">
          <router-link to="/booking" class="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold rounded-sm bg-[#002D72] text-white hover:bg-[#0A3161] transition-all shadow-md transform hover:-translate-y-0.5">
            <span class="w-2.5 h-2.5 rounded-full bg-[#F2A900]"></span>
            Book Consultation
          </router-link>
        </div>

        <button class="md:hidden p-2 text-[#002D72] hover:bg-black/5 rounded-sm transition-colors" @click="toggleMobileMenu">
          <svg v-if="!isMobileMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

<transition name="fade">
      <div v-show="isMobileMenuOpen" class="md:hidden w-full bg-[#002D72]/85 backdrop-blur-md border-t border-white/10 shadow-2xl overflow-hidden">
        <div class="px-6 py-4 space-y-1">
          <div v-for="item in menuItems" :key="item.id" class="border-b border-white/10 last:border-none">
            
            <template v-if="item.subItems">
              <button @click="toggleSubmenu(item.id)" class="flex items-center justify-between w-full py-3.5 text-base font-semibold text-white hover:text-[#F2A900]">
                {{ item.name }}
                <svg class="w-4 h-4 transition-transform duration-300 text-white" :class="{ 'rotate-180': activeMobileSubmenu === item.id }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-show="activeMobileSubmenu === item.id" class="pl-4 pb-3 space-y-2.5 transition-all duration-300">
                <router-link 
                  v-for="sub in item.subItems" 
                  :key="sub.name" 
                  :to="sub.link" 
                  @click="isMobileMenuOpen = false" 
                  class="block text-sm font-semibold text-white/70 hover:text-[#F2A900]"
                >
                  {{ sub.name }}
                </router-link>
              </div>
            </template>

            <router-link 
              v-else
              :to="item.link" 
              @click="isMobileMenuOpen = false" 
              class="block py-3.5 text-sm font-bold text-white hover:text-[#F2A900]"
            >
              {{ item.name }}
            </router-link>
            
          </div>
          
          <div class="pt-4 pb-2">
            <router-link to="/booking" @click="isMobileMenuOpen = false" class="flex justify-center items-center gap-2 w-full py-3 text-sm font-bold rounded-sm bg-[#F2A900] text-white">
              Book Consultation
            </router-link>
          </div>
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
        { name: 'Visi', link: '/#visi' },
        { name: 'Misi', link: '/#misi' },
        { name: 'Sejarah', link: '/#sejarah' }
        ]
    },
    { id: 3, name: 'About Us', link: '/#about' },
    { id: 4, name: 'Articles', link: '/#article' },
    { id: 5, name: 'Contact Us', link: '/#contact' }
    ];

    const toggleMobileMenu = () => isMobileMenuOpen.value = !isMobileMenuOpen.value;
    const toggleSubmenu = (id) => activeMobileSubmenu.value = activeMobileSubmenu.value === id ? null : id;
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>