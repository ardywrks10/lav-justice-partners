<template>
    <section class="relative bg-white text-slate-800 py-20 lg:py-28 overflow-hidden">
        <div class="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-72 h-72 bg-slate-100 rounded-full blur-2xl"></div>

        <div class="container mx-auto px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div class="reveal-left relative w-full max-w-lg mx-auto lg:max-w-none px-4 sm:px-10 lg:px-4">
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-sm bg-gradient-to-tr from-red-200 to-red-50 rounded-full blur-3xl opacity-50 -z-10"></div>
                    <div class="relative z-10 w-full rounded-lg overflow-hidden shadow-2xl aspect-[3/2] bg-slate-100">
                        <div
                            class="flex h-full transition-transform duration-500 ease-in-out"
                            :style="{ transform: 'translateX(-' + (activeIndex * 100) + '%)' }"
                        >
                            <img
                                v-for="(img, i) in images"
                                :key="i"
                                :src="img"
                                :alt="'Photo ' + (i+1)"
                                class="w-full h-full object-cover flex-shrink-0"
                                style="min-width: 100%;"
                            />
                        </div>
                    </div>

                    <div class="relative mt-4 w-full flex items-center">
                        <button
                            @click="prev"
                            class="absolute -left-5 md:-left-6 lg:-left-7 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition-all border border-slate-100 focus:outline-none"
                        >
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
                            </svg>
                        </button>

                        <div class="flex gap-2 w-full overflow-hidden rounded-xl">
                            <div
                                v-for="(img, i) in images"
                                :key="i"
                                @click="goTo(i)"
                                class="flex-1 cursor-pointer rounded-lg overflow-hidden transition-all duration-300 relative group"
                                :class="activeIndex === i
                                    ? 'opacity-100 shadow-md scale-105 z-10'
                                    : 'border-transparent opacity-50 hover:opacity-100'"
                            >
                                <img :src="img" :alt="'Thumb ' + (i+1)" class="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                        </div>

                        <button
                            @click="next"
                            class="absolute -right-5 md:-right-6 lg:-right-7 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition-all border border-slate-100 focus:outline-none"
                        >
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>

                    </div>

                    <div class="flex items-center justify-center gap-2 mt-5">
                        <button
                            v-for="(img, i) in images"
                            :key="i"
                            @click="goTo(i)"
                            class="rounded-full transition-all duration-300 focus:outline-none"
                            :class="activeIndex === i
                                ? 'w-5 h-2.5 bg-red-500'
                                : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'"
                        ></button>
                    </div>

                </div>

                <div class="reveal-right space-y-6">
                    <span class="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-semibold tracking-wider border border-red-100"> 
                        {{ tagline }} 
                    </span>
                    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900"> 
                        {{ heading }} 
                    </h2>

                    <div class="space-y-4">
                        <p v-for="(desc, index) in descriptions" 
                        :key="'desc-'+index" 
                        class="text-base text-slate-600 leading-relaxed text-justify" 
                        v-html="desc">
                        </p>
                    </div>

                    <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 pt-4 border-t border-slate-100">
                        <li v-for="(feature, index) in features" 
                            :key="'feat-'+index" 
                            class="flex items-start gap-3 group">
                            
                            <div class="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-colors">
                                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            
                            <span class="pt-1 text-slate-700 text-sm md:text-sm font-semibold leading-tight" v-html="feature"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref, onMounted } from 'vue';

    const tagline = "Tentang Kami";
    const heading = "Langkah Awal Menuju Karir Internasional";
    const descriptions = [
        "<span class='bold-main-text'>LKP Balina Duta Karya International School</span> hadir sebagai jembatan bagi masyarakat yang ingin membangun karir di kancah internasional tanpa terkendala biaya dan akses.",
        "Dengan fokus pada pelatihan <span class='bold-main-text'>Spa Therapist</span> dan <span class='bold-main-text'>Hospitality</span>, kami berkomitmen mencetak tenaga kerja profesional yang siap bersaing di industri global.",
    ];
    const features = [
        "Tersedia Dana Talang Hingga 100%",
        "Kurikulum Berstandar Industri",
        "Pendampingan hingga Siap Kerja",
        "Sertifikasi Resmi dan Diakui",
        "Penempatan Kerja di Berbagai Negara",
        "Lembaga Terjamin dan Terpercaya"
    ];

    const activeIndex = ref(0);
    const images = [
        new URL('/images/galeri/spa_5.jpg', import.meta.url).href,
        new URL('/images/galeri/spa_1.jpeg', import.meta.url).href,
        new URL('/images/galeri/spa_2.jpeg', import.meta.url).href,
        new URL('/images/galeri/spa_3.JPEG', import.meta.url).href,
        new URL('/images/galeri/spa_4.jpeg', import.meta.url).href,
    ];

    const next = () => {
        activeIndex.value = (activeIndex.value + 1) % images.length;
    };
    const prev = () => {
        activeIndex.value = (activeIndex.value - 1 + images.length) % images.length;
    };
    const goTo = (i) => {
        activeIndex.value = i;
    };

    onMounted(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-left, .reveal-right').forEach(el => {
            observer.observe(el);
        });
    });
</script>