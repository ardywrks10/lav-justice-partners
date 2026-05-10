<template>
  <div v-if="program" class="min-h-screen bg-gray-100">
    <section class="relative pt-32 pb-16 bg-red-900 text-white">
      <div class="max-w-7xl mx-auto px-6">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ program.title }}</h1>
        <p class="text-red-100/80">{{ program.description }}</p>
      </div>
    </section>

    <main class="max-w-7xl mx-auto px-6 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <!-- Main Content Area -->
        <div class="lg:col-span-3 space-y-10">
          
          <!-- SEKSI ESTIMASI GAJI -->
          <div v-if="program.salaryIdr" class="bg-gradient-to-br from-red-700 via-red-800 to-red-900 rounded-3xl p-8 text-white shadow-xl">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div class="space-y-2">
                <div class="text-red-200 text-xs font-bold uppercase tracking-wider">Gaji Utama</div>
                <div class="flex items-baseline gap-2">
                  <h2 class="text-3xl font-extrabold tracking-tight">{{ program.salaryForeign || 'USD 600' }}</h2>
                  <span class="text-red-200/80 font-medium">/ Bulan</span>
                </div>
                <p class="text-sm text-red-100/60 font-medium">Nett (Bersih)</p>
              </div>

              <div class="md:border-l md:border-white/10 md:pl-12 space-y-2">
                <div class="text-red-200 text-xs font-bold uppercase tracking-wider">Estimasi IDR</div>
                <div class="text-2xl font-bold tracking-tight">Rp. {{ program.salaryIdr }}</div>
                <div class="text-[11px] text-red-100/50 space-y-1 uppercase font-bold tracking-tighter">
                  <p>Kurs: {{ program.exchangeRate || '17.007' }}</p>
                  <p>Update kurs: 02 Apr 2026</p>
                </div>
              </div>
            </div>
          </div>
          <!-- SEKSI RINGKASAN DURASI & NEGARA -->
          <div class="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            <div class="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              <div v-if="program.contract" class="p-8 bg-slate-50/30">
                <p class="text-[11px] font-bold text-red-700 mb-1 uppercase tracking-wider">Durasi Kontrak</p>
                <p class="font-bold text-slate-800 text-lg">{{ program.contract }}</p>
              </div>
              <div v-if="program.duration" class="p-8 bg-slate-50/30">
                <p class="text-[11px] font-bold text-red-700 mb-1 uppercase tracking-wider">Durasi Pelatihan</p>
                <p class="font-bold text-slate-800 text-lg">{{ program.duration }}</p>
              </div>
              <div class="p-8 bg-slate-50/30">
                <div class="flex items-center justify-between gap-4">
                  <div>
                    <p class="text-[11px] font-bold text-red-700 mb-1 uppercase tracking-wider">
                      {{ program.duration ? 'Lokasi Pelatihan' : 'Tujuan Penempatan' }}
                    </p>
                    <p class="font-bold text-slate-800 text-lg leading-tight">{{ program.country }}</p>
                  </div>
                  <div v-if="program.countryCode" class="flex-shrink-0">
                    <img :src="`https://flagcdn.com/${program.countryCode}.svg`" :alt="`Bendera ${program.country}`" class="w-12 h-auto shadow-sm border border-slate-200 rounded-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- SEKSI KUALIFIKASI KANDIDAT -->
          <div v-if="program.gender" class="space-y-6">
            <h2 class="text-xl font-bold text-slate-800 border-l-4 border-red-600 pl-4">Kualifikasi Kandidat</h2>
            <div class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                <div v-for="(qual, idx) in [
                  { label: 'Jenis Kelamin', value: program.gender, icon: 'gender' },
                  { label: 'Rentang Usia', value: program.age, icon: 'age' },
                  { label: 'Tinggi Badan', value: program.height, icon: 'height' },
                  { label: 'Berat Badan', value: program.weight, icon: 'weight' },
                  { label: 'Level Bahasa', value: program.language, icon: 'language' },
                  { label: 'Pendidikan', value: program.education, icon: 'education' },
                  { label: 'Pengalaman Kerja', value: program.experience, icon: 'experience' }
                ]" :key="idx" class="flex items-center gap-4">
                  
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-black">
                    <svg v-if="qual.icon === 'gender'" class="w-5 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <svg v-else-if="qual.icon === 'age'" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    <svg v-else-if="qual.icon === 'height'" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m0-15h6m-6 3h3m-3 3h4.5m-4.5 3h3m-3 3h4.5m-4.5 3h3" />
                    </svg>
                    <svg v-else-if="qual.icon === 'weight'" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="4" stroke-linecap="round" stroke-linejoin="round" />
                      <circle cx="12" cy="9" r="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg v-else-if="qual.icon === 'language'" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" />
                    </svg>
                    <svg v-else-if="qual.icon === 'education'" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479L12 21l-6.83-4l.005-4.004a12.08 12.08 0 01.665-6.479L12 14z" />
                    </svg>
                    <svg v-else-if="qual.icon === 'experience'" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 .414-.336.75-.75.75H4.5a.75.75 0 0 1-.75-.75V14.15M3.75 14.15h16.5M3.75 14.15c0-1.15.93-2.08 2.08-2.08h12.34c1.15 0 2.08.93 2.08 2.08M15 7.5V6a2.25 2.25 0 0 0-2.25-2.25h-1.5A2.25 2.25 0 0 0 9 6v1.5" />
                    </svg>
                  </div>

                  <div>
                    <p class="text-[10px] font-bold text-red-700 uppercase tracking-widest mb-0.5">{{ qual.label }}</p>
                    <p class="text-base leading-tight font-semibold text-slate-800">
                      {{ qual.value || 'Tidak ada persyaratan' }}
                    </p>              
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <h2 class="text-xl font-bold text-slate-800 border-l-4 border-red-600 pl-4">Sudah Termasuk Dalam Paket</h2>
            <div class="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
              <div class="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-slate-100">
                <div v-for="(benefit, index) in program.benefits" :key="index" class="flex items-center gap-4 p-6 border-b border-slate-50 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0">
                  <div class="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                    <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span class="text-slate-800 font-semibold text-sm lg:text-base">{{ benefit }}</span>
                </div>
                <div v-if="program.benefits.length % 2 !== 0" class="hidden md:block p-6 bg-slate-50/10"></div>
              </div>
            </div>
          </div>

          <!-- SEKSI PEMBAYARAN -->
          <div class="space-y-6">
            <h2 class="text-xl font-bold text-slate-800 border-l-4 border-red-600 pl-4">Metode Pembayaran</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <!-- Mandiri -->
              <div class="bg-white p-8 border-b md:border-b-0 md:border-r border-slate-100">
                <p class="text-xs font-bold text-red-700 mb-3 uppercase tracking-tight">Mandiri / Cash</p>
                <div class="flex items-baseline gap-1">
                  <span class="text-2xl font-bold text-slate-800">Rp. </span>
                  <span class="text-3xl font-extrabold text-slate-800">######</span>
                </div>
              </div>
              <!-- Dana Talang -->
              <div class="bg-red-50/30 p-8">
                <p class="text-xs font-bold text-red-700 mb-3 uppercase tracking-tight">Dana Talang 100%</p>
                <div v-if="program.contract">
                  <div class="flex items-baseline gap-1 mb-3 text-slate-800">
                    <span class="text-2xl font-bold">Rp. </span>
                    <span class="text-3xl font-extrabold text-slate-800">######</span>
                  </div>
                </div>
                <div v-else class="flex items-center h-full">
                  <p class="text-sm font-bold text-red-700 italic">Maaf, tidak tersedia dana talang untuk program ini</p>
                </div>
              </div>
            </div>
            <p class="text-center text-xs text-red-700 italic pt-2">*Syarat & ketentuan berlaku. Hubungi admin untuk rincian biaya.</p>
          </div>

          <!-- TOMBOL AKSI -->
          <div class="flex flex-col md:flex-row overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <a href="https://wa.me/nomor-wa-balina" target="_blank" class="flex-1 py-5 bg-[#C23A2B] hover:bg-red-800 text-white text-center font-bold transition-all uppercase tracking-wider text-sm">
              Daftar Sekarang
            </a>
            <router-link to="/#program" class="flex-1 py-5 bg-white hover:bg-slate-50 text-slate-700 text-center font-bold transition-all border-t md:border-t-0 md:border-l border-slate-200 uppercase tracking-wider text-sm">
              Lihat Program Lain
            </router-link>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <div class="flex items-center gap-3 px-1">
            <span class="w-8 h-[2px] bg-red-600"></span>
            <h3 class="text-sm font-bold text-slate-800 uppercase tracking-widest">Program Terkait</h3>
          </div>
          <div class="grid grid-cols-1 gap-6">
            <div v-for="item in relatedPrograms" :key="item.slug" class="group bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl shadow-xl border border-slate-100">
              <div class="relative h-40 flex-shrink-0">
                <img :src="item.image" :alt="item.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div class="absolute top-3 left-3 z-20">
                  <span v-if="item.country" :class="item.badgeColor || 'bg-red-600'" class="text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md uppercase">
                    {{ item.country }}
                  </span>
                </div>
              </div>
              <div class="p-5 flex flex-col flex-1">
                <h3 class="text-sm font-bold text-slate-900 leading-snug group-hover:text-red-700 transition-colors mb-4 line-clamp-2">{{ item.title }}</h3>
                <div class="pt-4 border-t border-slate-50 flex justify-between items-center mt-auto">
                  <div v-if="item.contract" class="text-left">
                    <p class="text-[10px] text-red-700 font-bold tracking-widest uppercase">Kontrak</p>
                    <p class="text-[11px] font-bold text-red-600 mt-0.5">{{ item.contract }}</p>
                  </div>
                  <div v-if="item.duration" class="text-left">
                    <p class="text-[10px] text-red-700 font-bold tracking-widest uppercase">Durasi</p>
                    <p class="text-[11px] font-bold text-red-600 mt-0.5">{{ item.duration }}</p>
                  </div>
                </div>
                <router-link :to="{ name: 'ProgramDetail', params: { slug: item.slug }}" class="mt-4 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-red-100">
                  Lihat Detail
                  <svg class="w-3.5 h-3.5 transform transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5-5 5"/>
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
    import { computed, onMounted, watch } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { programData } from '../components/Data.js';

    const route = useRoute();
    const router = useRouter();

    const program = computed(() => {
        return programData.find(p => p.slug === route.params.slug);
    });

    const relatedPrograms = computed(() => {
        if (!program.value) return [];
        const otherPrograms = programData.filter(p => p.slug !== route.params.slug);

        const sameCategory = otherPrograms.filter(p => p.category === program.value.category);

        if (sameCategory.length < 3) {
            const differentCategory = otherPrograms.filter(p => p.category !== program.value.category);
            return [...sameCategory, ...differentCategory].slice(0, 3);
        }

        return sameCategory.slice(0, 3);
    });

    const truncateWords = (text, limit) => {
        if (!text) return '';
        const words = text.split(' ');
        if (words.length <= limit) return text;
        return words.slice(0, limit).join(' ') + '...';
    };

    watch(() => route.params.slug, () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    onMounted(() => {
        if (!program.value) {
            router.push('/');
        }
    });
</script>