<template>
  <nav class="bg-white backdrop-blur-sm border-b border-gray-100 fixed top-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <router-link to="/" class="flex items-center">
          <img src="/images/logo/balina.png" alt="Balina Logo" class="h-12 w-auto object-contain">
        </router-link>

        <div class="hidden md:flex space-x-8">
          <div v-for="item in menuItems" :key="item.id" class="relative group">
            <router-link 
              :to="item.link" 
              class="inline-flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-red-800 transition-colors py-6"
            >
              {{ item.name }}
              <svg v-if="item.subItems" class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <span class="absolute left-0 bottom-4 w-0 h-0.5 bg-red-800 transition-all duration-300 group-hover:w-full"></span>
            </router-link>

            <div v-if="item.subItems" class="absolute left-0 top-full w-40 bg-white border border-gray-100 shadow-xl rounded-md py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
              <router-link 
                v-for="sub in item.subItems" 
                :key="sub.name" 
                :to="sub.link" 
                class="block px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-slate-50 hover:text-red-800 transition-colors"
              >
                {{ sub.name }}
              </router-link>
            </div>
          </div>
        </div>

        <div class="hidden lg:flex items-center">
          <router-link to="/#contact" class="px-6 py-2.5 text-sm tracking-tighter font-bold rounded-sm bg-red-600 text-white hover:bg-red-800 transition-all shadow-sm">
            Apply Now
          </router-link>
        </div>

        <button class="md:hidden p-2 text-slate-600" @click="toggleMobileMenu">
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
      <div v-show="isMobileMenuOpen" class="md:hidden bg-white border-t border-gray-100 shadow-2xl">
        <div class="px-6 py-6 space-y-1">
          <div v-for="item in menuItems" :key="item.id" class="border-b border-slate-50 last:border-none">
            <template v-if="item.subItems">
              <button @click="toggleSubmenu(item.id)" class="flex items-center justify-between w-full py-4 text-sm font-bold text-slate-600 hover:text-red-600">
                {{ item.name }}
                <svg class="w-4 h-4 transition-transform duration-300" :class="{ 'rotate-180': activeMobileSubmenu === item.id }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-show="activeMobileSubmenu === item.id" class="pl-4 pb-4 space-y-3 transition-all duration-300">
                <router-link 
                  v-for="sub in item.subItems" 
                  :key="sub.name" 
                  :to="sub.link" 
                  @click="isMobileMenuOpen = false" 
                  class="block text-sm font-medium text-slate-500 hover:text-red-600"
                >
                  {{ sub.name }}
                </router-link>
              </div>
            </template>

            <router-link 
              v-else 
              :to="item.link" 
              @click="isMobileMenuOpen = false" 
              class="block py-4 text-sm font-bold text-slate-600 hover:text-red-600"
            >
              {{ item.name }}
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
    { 
        id: 1, 
        name: 'Profil', 
        link: '/#profil',
        subItems: [
        { name: 'Visi', link: '/#visi' },
        { name: 'Misi', link: '/#misi' },
        { name: 'Sejarah', link: '/#sejarah' }
        ]
    },
    { id: 2, name: 'Program', link: '/#program' },
    { id: 3, name: 'Karir', link: '/karir' }, 
    { id: 4, name: 'Testimoni', link: '/#testimoni' },
    { id: 5, name: 'F.A.Q', link: '/#faq' },
    { id: 6, name: 'Contact', link: '/#contact' }
    ];

    const toggleMobileMenu = () => isMobileMenuOpen.value = !isMobileMenuOpen.value;
    const toggleSubmenu = (id) => activeMobileSubmenu.value = activeMobileSubmenu.value === id ? null : id;
</script>