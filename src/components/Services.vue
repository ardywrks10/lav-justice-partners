<template>
  <section id="services" ref="servicesSection" class="bg-white text-slate-900 pt-12 pb-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
    <div class="max-w-6xl mx-auto space-y-12">
      
      <!-- Header: Datang dari atas -->
      <div class="flex flex-col items-start text-left transform transition-all duration-1000 ease-out"
           :class="isVisible ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'">
        <div class="flex items-center justify-start gap-3 mb-4">
            <div class="w-10 h-[2px] bg-gray-400"></div>
            <span class="text-sm font-bold tracking-widest text-gray-500 uppercase">SERVICES</span>
        </div>
        
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-5 font-serif tracking-tight">
          <span class="text-[#F2A900] font-serif">Layanan</span> Kami
        </h2>

        <p class="text-base md:text-lg font-semibold text-gray-600 max-w-2xl">
          Lima bidang keahlian yang dirancang untuk memandu bisnis anda menghadapi regulasi dengan penuh keyakinan        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- Main Service: Datang dari atas -->
        <div class="lg:col-span-1 rounded-sm overflow-hidden border border-gray-100 relative shadow-md h-[228px] lg:h-auto lg:min-h-[480px] flex flex-col justify-between group cursor-pointer transform transition-all duration-1000 ease-out delay-100"
             :class="isVisible ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'">
          <img 
            :src="mainService.image" 
            :alt="mainService.title"
            class="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-500"></div>
          
          <div class="absolute inset-0 p-8 flex flex-col items-start justify-center text-left z-10">
            <div class="space-y-6 flex flex-col items-start">
              <div 
                v-html="mainService.icon" 
                class="w-10 h-10 rounded-sm bg-white/10 backdrop-blur-md flex items-center justify-center text-white transform group-hover:bg-white group-hover:text-slate-950 transition-all duration-500 shadow-sm p-2.5 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:transition-transform [&>svg]:duration-500 group-hover:[&>svg]:rotate-6"
              ></div>
              
              <div class="flex flex-col items-start gap-3 transform group-hover:translate-y-[-2px] transition-transform duration-300">
                <h3 class="text-lg lg:text-2xl font-bold text-white tracking-wide leading-snug">
                  {{ mainService.title }}
                </h3>
                <span class="text-sm lg:text-base text-gray-400 group-hover:text-amber-400 transition-colors duration-300 font-medium">
                  {{ mainService.subtitle }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Side Services: Datang dari bawah (Secara terurut) -->
        <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div 
            v-for="(service, index) in sideServices" 
            :key="service.id"
            class="relative h-[228px] rounded-sm overflow-hidden border border-gray-100 shadow-md group cursor-pointer transform transition-all duration-700 ease-out"
            :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'"
            :style="{ transitionDelay: isVisible ? `${200 + (index * 100)}ms` : '0ms' }"
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
    import { computed, ref, onMounted, onUnmounted } from 'vue';
    import { allServices } from '../data/servicesData.js';

    const mainService = computed(() => allServices[0]);
    const sideServices = computed(() => allServices.slice(1));

    const servicesSection = ref(null);
    const isVisible = ref(false);
    let observer = null;

    onMounted(() => {
        observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                isVisible.value = true;
                observer.unobserve(entry.target);
            }
        }, {
            threshold: 0.3
        });

        if (servicesSection.value) {
            observer.observe(servicesSection.value);
        }
    });

    onUnmounted(() => {
        if (observer) observer.disconnect();
    });
</script>