<template>
  <main class="min-h-screen bg-[#f4f7fb] pt-24 pb-12 px-6">
    <div class="max-w-5xl mx-auto">      
      <div class="text-center mb-10">
        <div class="flex items-center justify-center gap-3 mb-5">
          <div class="w-10 h-[2px] bg-gray-400"></div>
          <span class="text-sm font-bold tracking-widest text-gray-500 uppercase">CONSULTATION</span>
          <div class="w-10 h-[2px] bg-gray-400"></div>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-4">
          Jadwalkan Konsultasi Hukum
        </h1>
        <p class="text-slate-600 max-w-2xl mx-auto text-base">
          Silakan pilih slot waktu yang tersedia pada kalender di bawah ini. Tim <strong class="text-[#051962]">LAV Justice Partners</strong> akan segera mengonfirmasi jadwal Anda.
        </p>
      </div>

      <div class="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        <div class="calendly-inline-widget" data-url="https://calendly.com/ardywirakusuma16/30min?primary_color=051962" style="min-width:320px;height:700px;"></div>
        <component :is="'script'" type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></component>
      </div>
    </div>
  </main>
</template>