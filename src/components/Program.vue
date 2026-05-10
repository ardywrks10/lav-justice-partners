<template>
    <section id="program" class="py-20 bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-white">
        <div class="max-w-7xl mx-auto lg:px-12 px-6">
            <h2 class="reveal delay-1 text-4xl font-bold text-white mb-4 lg:text-left md:text-left text-center">
                Program Pelatihan
            </h2>

            <div class="reveal delay-2 lg:flex lg:flex-col lg:flex-row justify-between items-center mb-10 space-y-6 md:space-y-0">
                <p class="text-red-100/70 text-sm lg:text-base leading-relaxed lg:text-left text-center max-w-md">
                    Pilih jalur suksesmu bersama instruktur berpengalaman dan jaringan kerja global.
                </p>                
                
                <div class="flex flex-wrap justify-center md:justify-end gap-2">
                    <button
                        v-for="filter in filters"
                        :key="filter"
                        @click="setFilter(filter)"
                        class="flex-shrink-0 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-sm font-semibold transition-all duration-200 whitespace-nowrap"
                        :class="activeFilter === filter
                            ? 'bg-white text-red-700 shadow-md'
                            : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/20'"
                    >
                        {{ filter }}
                    </button>
                </div>
            </div>
            <div v-show="filteredServices.length > 0" class="reveal delay-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style="min-height: 420px; align-items: start;">
                <div
                    v-for="(item, index) in paginatedServices"
                    :key="item.title"
                    class="group bg-white rounded-lg overflow-hidden flex flex-col h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl shadow-lg"
                >
                    <div class="relative h-48 flex-shrink-0">
                        <img
                            :src="item.image"
                            :alt="item.title"
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div class="absolute top-4 left-4 z-20">
                            <span v-if="item.country" :class="item.badgeColor" class="text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md">
                                {{ item.country }}
                            </span>
                        </div>
                    </div>

                    <div class="p-6 flex flex-col flex-1">
                        <h3 class="text-sm font-bold text-slate-900 leading-snug group-hover:text-red-700 transition-colors mb-2">
                            {{ item.title }}
                        </h3>
                        <p class="text-slate-500 text-xs text-justify leading-relaxed flex-1 pt-2">
                            {{ truncateWords(item.description, 16) }}
                        </p>
                        <div class="pt-2 border-t border-slate-100 flex justify-between items-center">
                            <div v-if="item.contract" class="text-left">
                                <p class="text-xs text-slate-800 font-bold tracking-widest">Kontrak</p>
                                <p class="text-xs font-bold text-red-600 mt-0.5">{{ item.contract }}</p>
                            </div>
                            <div v-if="item.duration" class="text-left">
                                <p class="text-xs text-slate-800 font-bold tracking-widest">Durasi</p>
                                <p class="text-xs font-bold text-red-600 mt-0.5">{{ item.duration }}</p>
                            </div>
                            <router-link 
                                :to="{ name: 'ProgramDetail', params: { slug: item.slug }}"
                                class="mt-4 py-2 px-3 rounded-lg text-xs font-semibold text-white 
                                bg-red-600 hover:bg-red-700 
                                transition-all duration-300 
                                flex items-center justify-center gap-2 
                                group/btn cursor-pointer">
                                Lihat Detail
                                <svg 
                                    class="w-3.5 h-3.5 transform transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5-5 5"/>
                                </svg>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div 
                v-show="filteredServices.length === 0" 
                class="flex flex-col items-center justify-center py-20 w-full border-2 border-dashed border-white/10 rounded-2xl bg-white/5" 
                style="min-height: 420px;"
            >
                <div class="p-4 bg-white/10 rounded-full mb-4">
                    <svg class="w-10 h-10 text-red-200/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-white/90 mb-1">Belum Tersedia</h3>
                <p class="text-red-100/50 text-sm text-center max-w-xs">
                    Program untuk kategori <span class="font-bold text-white italic">"{{ activeFilter }}"</span> sedang dalam tahap persiapan.
                </p>
            </div>
            <div v-if="totalPages > 1" class="mt-10 flex flex-wrap justify-center items-center gap-3">
                <button @click="prevPage" :disabled="currentPage === 1" class="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-20 transition-all">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                </button>

                <div class="flex gap-2">
                    <button 
                        v-for="(page, index) in displayedPages" 
                        :key="index"
                        @click="typeof page === 'number' ? currentPage = page : null"
                        class="w-10 h-10 rounded-xl text-sm font-bold transition-all duration-300"
                        :class="[
                            currentPage === page 
                                ? 'bg-white text-red-700 shadow-lg scale-110' 
                                : 'bg-white/10 text-white hover:bg-white/20',
                            typeof page !== 'number' ? 'cursor-default opacity-50' : 'cursor-pointer'
                        ]"
                    >
                        {{ page }}
                    </button>
                </div>

                <button @click="nextPage" :disabled="currentPage === totalPages" class="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-20 transition-all">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
    import { programData } from './Data.js';

    const activeFilter = ref('Semua');
    const currentPage = ref(1);
    const itemsPerPage = ref(4);
    const filters = ref(['Semua', 'SPA Therapist', 'Hospitality', 'Manufacturing']);
    const services = ref(programData);

    watch(itemsPerPage, () => {
        currentPage.value = 1;
    });

    const updateItemsPerPage = () => {
        if (typeof window !== 'undefined') {
            const width = window.innerWidth;
            if (width < 640) { 
                itemsPerPage.value = 1;
            } else if (width < 1024) { 
                itemsPerPage.value = 2;
            } else {
                itemsPerPage.value = 4;
            }
        }
    };

    const setFilter = (filter) => {
        activeFilter.value = filter;
        currentPage.value = 1;
    };

    const nextPage = () => {
        if (currentPage.value < totalPages.value) currentPage.value++;
    };

    const prevPage = () => {
        if (currentPage.value > 1) currentPage.value--;
    };

    const filteredServices = computed(() => {
        if (activeFilter.value === 'Semua') return services.value;
        return services.value.filter(s => s.category === activeFilter.value);
    });

    const totalPages = computed(() => {
        return Math.ceil(filteredServices.value.length / itemsPerPage.value);
    });

    const paginatedServices = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage.value;
        const end = start + itemsPerPage.value;
        return filteredServices.value.slice(start, end);
    });

    const displayedPages = computed(() => {
        const total = totalPages.value;
        const current = currentPage.value;

        if (itemsPerPage.value === 4) {
            return Array.from({ length: total }, (_, i) => i + 1);
        }

        if (total <= 3) {
            return Array.from({ length: total }, (_, i) => i + 1);
        }

        if (current > 1 && current < total) {
            return [1, current, total];
        }

        return [1, '...', total];
    });

    const truncateWords = (text, limit) => {
        if (!text) return '';
        const words = text.split(' ');
        if (words.length <= limit) return text;
        return words.slice(0, limit).join(' ') + '...';
    };

    onMounted(() => {
        updateItemsPerPage();
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', updateItemsPerPage);
        }
    });

    onBeforeUnmount(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', updateItemsPerPage);
        }
    });
</script>