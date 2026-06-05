<template>
  <section class="bg-white text-slate-900 pt-12 pb-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
    <div class="max-w-6xl mx-auto space-y-12">
      
     <div class="flex flex-col items-start text-left">
        <div class="flex items-center justify-start gap-3 mb-4">
            <div class="w-10 h-[2px] bg-gray-400"></div>
            <span class="text-sm font-bold tracking-widest text-gray-500 uppercase">OUR SERVICES</span>
        </div>
        
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-5 font-serif tracking-tight">
          Apa Saja <span class="italic text-[#F2A900] font-serif">Layanan</span> Kami?
        </h2>

        <p class="text-base md:text-lg font-semibold text-gray-600 max-w-2xl">
          Lima bidang keahlian yang dirancang untuk memandu bisnis anda menghadapi regulasi dengan penuh keyakinan        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <div class="lg:col-span-1 rounded-sm overflow-hidden border border-gray-100 relative shadow-md min-h-[480px] flex flex-col justify-between group cursor-pointer">
          <img 
            :src="mainService.image" 
            :alt="mainService.title"
            class="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-500"></div>
          
          <div class="absolute inset-0 p-8 flex flex-col justify-between z-10">
            <div class="space-y-6">
              <div 
                v-html="mainService.icon" 
                class="w-10 h-10 rounded-sm bg-white/10 backdrop-blur-md flex items-center justify-center text-white transform group-hover:bg-white group-hover:text-slate-950 transition-all duration-500 shadow-sm p-2.5 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:transition-transform [&>svg]:duration-500 group-hover:[&>svg]:rotate-6"
              ></div>
              
              <div class="space-y-2 transform group-hover:translate-y-[-2px] transition-transform duration-300">
                <h3 class="text-2xl font-bold tracking-tight text-white leading-tight">
                  {{ mainService.title }}
                </h3>
                <span class="text-base text-gray-400 font-bold tracking-widest group-hover:text-amber-400 block">
                  {{ mainService.subtitle }}
                </span>
              </div>
            </div>

            <div class="pt-6">
              <a 
                :href="'/services/' + mainService.slug" 
                class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-amber-400 transition-colors"
              >
                Read More
                <svg class="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div 
            v-for="service in sideServices" 
            :key="service.id"
            class="relative h-[228px] rounded-sm overflow-hidden border border-gray-100 shadow-md group cursor-pointer"
          >
            <img 
              :src="service.image" 
              :alt="service.title"
              class="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500"></div>
            
            <div class="absolute inset-0 p-6 flex flex-col justify-between z-10">
              <div 
                v-html="service.icon" 
                class="w-10 h-10 rounded-sm bg-white/10 backdrop-blur-md flex items-center justify-center text-white transform group-hover:bg-white group-hover:text-slate-950 transition-all duration-500 shadow-sm p-2.5 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:transition-transform [&>svg]:duration-500 group-hover:[&>svg]:rotate-6"
              ></div>

              <div class="space-y-1 transform group-hover:translate-y-[-2px] transition-transform duration-300">
                <h4 class="text-lg font-bold text-white tracking-wide leading-snug">
                  {{ service.title }}
                </h4>
                <p class="text-sm text-gray-400 group-hover:text-amber-400 transition-colors duration-300 font-medium">
                  {{ service.subtitle }}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
    import { computed, ref } from 'vue';
    import { allServices } from '../data/servicesData.js';

    const mainService = computed(() => allServices[0]);
    const sideServices = computed(() => allServices.slice(1));
</script>