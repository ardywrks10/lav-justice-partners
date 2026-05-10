<template>
    <div>
        <section id="stats-counter" class="pb-4 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
                <h2 class="text-4xl font-bold text-gray-800 mb-4">Testimoni Kandidat</h2>
                <div class="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-center">
                    <div v-for="stat in stats" :key="stat.label" 
                         class="bg-slate-50 rounded-2xl py-10 px-4 transition-transform hover:-translate-y-1 duration-300">
                        <div class="mb-4 flex justify-center">
                            <img :src="'/images/icon/' + stat.icon" 
                                 :alt="stat.label" 
                                 class="w-9 h-9 object-contain" 
                                 style="filter: invert(24%) sepia(91%) saturate(2365%) hue-rotate(346deg) brightness(91%) contrast(92%);"/>
                        </div>
                        <div class="uppercase text-slate-500 font-bold text-xs md:text-sm tracking-widest mb-1">
                            {{ stat.label }}
                        </div>
                        <div class="text-4xl font-extrabold text-slate-800 mb-0">
                            {{ Math.floor(stat.displayValue) }}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="testimoni" class="py-16 bg-gray-100 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center mb-12">
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                        Dengarkan langsung kisah dan pengalaman luar biasa dari para alumni LKP kami
                    </p>
                </div>

                <div class="relative group">
                    <button @click="prevSlide" class="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-8 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-red-700 hover:text-white transition-all duration-300">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                    </button>
                    
                    <button @click="nextSlide" class="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-8 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-red-700 hover:text-white transition-all duration-300">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                    </button>

                    <div class="overflow-hidden">
                        <div class="flex transition-transform duration-500 ease-in-out" 
                            :style="{ transform: 'translateX(-' + (currentIndex * (100 / visibleCards)) + '%)' }">
                            <div v-for="(item, index) in testimonials" 
                                 :key="index"
                                 :style="{ minWidth: (100 / visibleCards) + '%' }"
                                 class="px-4 transition-all duration-500">
                                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                    <div class="flex space-x-1 text-yellow-400 mb-4">
                                        <svg v-for="star in 5" class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    </div>
                                    
                                    <p class="text-gray-600 mb-6 italic text-sm leading-relaxed">
                                        "{{ item.message }}"
                                    </p>
                                    
                                    <div class="flex items-center mt-auto">
                                        <img :src="item.image" :alt="item.name" class="w-12 h-12 rounded-full object-cover mr-4 border-2 border-red-50">
                                        <div>
                                            <h4 class="font-bold text-gray-800 text-sm">{{ item.name }}</h4>
                                            <p class="text-red-700 text-xs font-medium">{{ item.position }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-center mt-10 space-x-2">
                        <button 
                            v-for="(_, index) in totalSteps" 
                            :key="index"
                            @click="currentIndex = index"
                            class="h-2 transition-all duration-300 rounded-full"
                            :class="currentIndex === index ? 'w-8 bg-red-700' : 'w-2 bg-gray-300 hover:bg-gray-400'"
                        ></button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

    const hasAnimated = ref(false);
    const stats = ref([
        { label: 'Spa Therapist', targetValue: 247, displayValue: 0, icon: 'spa.png' },
        { label: 'Hospitality', targetValue: 210, displayValue: 0, icon: 'housekeeper.png' },
        { label: 'Public Area', targetValue: 45, displayValue: 0, icon: 'public_area.png' }
    ]);
    const currentIndex = ref(0);
    const visibleCards = ref(3);
    const autoSlideInterval = ref(null);
    const testimonials = ref([
        {
            name: "Ni Made Indah Sari",
            position: "Spa Therapist - Dubai",
            message: "Selama pelatihan di sini, saya banyak belajar teknik massage yang rapi dan sesuai standar kerja di hotel. Pengalaman ini cukup membantu saya saat mulai bekerja di Dubai.",
            image: "public/images/tester/tester_1.avif"
        },
        {
            name: "I Kadek Wiadnyana",
            position: "Spa Therapist - Turki",
            message: "Materinya cukup jelas dan langsung ke praktik. Saya juga belajar soal kedisiplinan kerja, yang ternyata penting saat mulai bekerja di industri perhotelan di Turki.",
            image: "public/images/tester/tester_2.avif"
        },
        {
            name: "Luh Putu Ayu Lestari",
            position: "Spa Therapist - Maldives",
            message: "Selain teknik, saya juga dibantu dalam bahasa dan etika hospitality. Itu sangat membantu saat harus berinteraksi dengan tamu dari berbagai negara di Maldives.",
            image: "public/images/tester/tester_3.avif"
        },
        {
            name: "I Nyoman Gede Putra",
            position: "Spa Therapist - Polandia",
            message: "Instrukturnya membimbing dengan sabar sampai saya cukup siap untuk kerja. Dari sini saya jadi lebih percaya diri saat mulai bekerja di luar negeri.",
            image: "public/images/tester/tester_4.avif"
        }
    ]);

    const totalSteps = computed(() => {
        return Math.max(0, testimonials.value.length - visibleCards.value + 1);
    });

    const animateNumbers = () => {
        const duration = 2000; 
        const frameRate = 1000 / 60;
        const totalFrames = Math.round(duration / frameRate);

        stats.value.forEach(stat => {
            const increment = stat.targetValue / totalFrames;
            let currentFrame = 0;
            const counter = setInterval(() => {
                currentFrame++;
                stat.displayValue += increment;
                if (currentFrame === totalFrames) {
                    stat.displayValue = stat.targetValue;
                    clearInterval(counter);
                }
            }, frameRate);
        });
    };

    const nextSlide = () => {
        if (currentIndex.value >= totalSteps.value - 1) {
            currentIndex.value = 0;
        } else {
            currentIndex.value++;
        }
    };

    const prevSlide = () => {
        if (currentIndex.value <= 0) {
            currentIndex.value = totalSteps.value - 1;
        } else {
            currentIndex.value--;
        }
    };

    const updateVisibleCards = () => {
        if (window.innerWidth >= 1024) visibleCards.value = 3;
        else if (window.innerWidth >= 768) visibleCards.value = 2;
        else visibleCards.value = 1;
    };

    const startAutoSlide = () => {
        autoSlideInterval.value = setInterval(nextSlide, 5000);
    };

    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval.value);
    };

    onMounted(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated.value) {
                    animateNumbers();
                    hasAnimated.value = true; 
                }
            });
        }, { threshold: 0.5 }); 

        const statsCounter = document.querySelector('#stats-counter');
        if (statsCounter) observer.observe(statsCounter);

        updateVisibleCards();
        window.addEventListener('resize', updateVisibleCards);
        startAutoSlide();
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', updateVisibleCards);
        stopAutoSlide();
    });
</script>