<template>
  <section class="px-8 pt-24 pb-20 bg-gray-100">
    <div class="container mx-auto">
      <div class="grid gap-y-12 gap-x-8 md:grid-cols-2 lg:grid-cols-4">  
        <div 
          v-for="(stat, index) in STATS" 
          :key="index"
          class="p-8 bg-gray-50 border-t-4 border-[#051962] shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div class="p-3 bg-[#F2A900]/5 text-[#F2A900] mb-5">
            <component :is="stat.icon" class="w-7 h-7" />
          </div>
          <h3 class="text-3xl font-black text-[#1A1A1A] tracking-tight mb-2">
            {{ stat.count }}
          </h3>
          <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">
            {{ stat.title }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
    import { BriefcaseIcon, UserGroupIcon, ScaleIcon, ShieldCheckIcon } from '@heroicons/vue/24/solid';

    const STATS = [
        {
            icon: BriefcaseIcon,
            count: "15 Years", 
            title: "Experience", 
        },
        {
            icon: UserGroupIcon,
            count: "50+",
            title: "Total Clients", 
        },
        {
            icon: ScaleIcon,
            count: "8",
            title: "Legal Services", 
        },
        {
            icon: ShieldCheckIcon,
            count: "100%",
            title: "Transparency",
        },
    ];
</script>