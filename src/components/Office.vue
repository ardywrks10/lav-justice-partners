<template>
  <section class="relative overflow-hidden bg-[#F5F5F5]  pb-20 px-4 sm:px-8">
    <div class="container mx-auto max-w-6xl relative z-10 p-6 md:p-8">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div class="w-full lg:w-[450px] flex flex-col justify-center">
          <h2 class="text-[#1A1A1A] font-extrabold text-xl md:text-2xl lg:text-3xl font-serif tracking-tight mb-8 relative">
            Office Hours
          </h2>
          <div class="space-y-4 max-w-md">
            <div class="flex justify-between items-center border-b border-gray-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-1 h-3 bg-[#F2A900] rounded-none"></span> 
                <span class="text-md font-bold tracking-wider">Monday - Friday</span>
              </div>
              <span class="text-md font-extrabold">08.00 AM - 05.00 PM</span>
            </div>
            
            <div class="flex justify-between items-center border-b border-gray-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-1 h-3 bg-[#F2A900] rounded-none"></span>
                <span class="text-md font-bold tracking-wider">Saturday</span>
              </div>
              <span class="text-md font-extrabold">08.00 AM - 03.00 PM</span>
            </div>
            
            <div class="flex justify-between items-center pb-1">
              <div class="flex items-center gap-2">
                <span class="w-1 h-3 bg-[#F2A900] rounded-none"></span>
                <span class="text-md font-bold tracking-wider">Sunday</span>
              </div>
              <span class="text-md font-bold tracking-widest bg-red-50 py-0.5 rounded-none">Emergency Only</span>
            </div>
            <div class="mt-6 flex items-center gap-2.5 text-green-600 font-semibold text-md tracking-wide">
              <ClockIcon class="w-4 h-4 flex-shrink-0 stroke-[2.5]" />
              <span>24/7 Emergency Legal Support Available</span>
            </div>
          </div>
        </div>
        <div class="w-full lg:flex-1 h-[220px] md:h-[260px] overflow-hidden rounded-none shadow-2xl shadow-[#051962]/15">
        <iframe 
            src="https://maps.google.com/maps?q=-8.673,115.224&t=k&z=17&output=embed" 
            class="w-full h-full rounded-xl rounded-none border-0 transition-all duration-500 ease-in-out"
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
  import { ClockIcon } from '@heroicons/vue/24/outline';
</script>