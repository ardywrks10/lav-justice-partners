<template>
  <section ref="statSection" class="px-6 py-16 bg-gray-100 overflow-hidden">
    <div class="container mx-auto max-w-6xl">
      <div class="grid gap-y-8 gap-x-6 md:grid-cols-2 lg:grid-cols-4">  
        <div 
          v-for="(stat, index) in STATS" 
          :key="index"
          class="p-6 md:p-8 bg-gray-50 border-t-4 border-[#051962] shadow-md flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="p-3 bg-[#F2A900]/5 text-[#F2A900] mb-4">
            <component :is="stat.icon" class="w-8 h-8 md:w-9 md:h-9" />
          </div>

          <div class="text-2xl md:text-3xl font-black text-[#1A1A1A] tracking-tight mb-1.5 font-serif">
            {{ stat.current }}{{ stat.suffix }}
          </div>

          <p class="text-xs font-bold text-gray-600 uppercase tracking-widest">
            {{ stat.title }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';
    import { BriefcaseIcon, UserGroupIcon, ScaleIcon, ShieldCheckIcon } from '@heroicons/vue/24/solid';
    
    const statSection = ref(null);
    let observer = null;
    const STATS = ref([
        {
            icon: BriefcaseIcon,
            current: 0,
            target: 15,
            suffix: " Years", 
            title: "Experience", 
        },
        {
            icon: UserGroupIcon,
            current: 0,
            target: 50,
            suffix: "+",
            title: "Total Clients", 
        },
        {
            icon: ScaleIcon,
            current: 0,
            target: 8,
            suffix: "",
            title: "Legal Services", 
        },
        {
            icon: ShieldCheckIcon,
            current: 0,
            target: 100,
            suffix: "%",
            title: "Transparency",
        },
    ]);

    const animateCounters = () => {
      const duration = 1500; 
      const startTime = performance.now();

      const updateNumber = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1); 
        const easeProgress = progress * (2 - progress);

        STATS.value.forEach((stat) => {
          stat.current = Math.floor(easeProgress * stat.target);
        });

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        }
      };

      requestAnimationFrame(updateNumber);
    };

    onMounted(() => {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          animateCounters(); 
          observer.unobserve(entry.target);
        } else {
          STATS.value.forEach(stat => stat.current = 0);
        }
      }, {
        threshold: 0.3
      });

      if (statSection.value) {
        observer.observe(statSection.value);
      }
    });

    onUnmounted(() => {
      if (observer) observer.disconnect();
    });
</script>