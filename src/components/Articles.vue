<template>
  <section class="bg-white text-slate-900 pt-12 pb-12 px-6 sm:px-8 lg:px-12 border-b border-gray-100">
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
      <div class="lg:col-span-1 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-200 pb-8 lg:pb-0 lg:pr-8">
        <div class="space-y-4">
          <div class="w-12 h-1 bg-[#051962] rounded-sm"></div>
          <h2 class="text-4xl font-extrabold tracking-tight font-serif text-slate-950">Artikel & Berita</h2>
          <p class="text-base text-gray-500 leading-relaxed text-justify">
            Artikel ilmiah, opini hukum, dan pembaruan regulasi terkini yang dikurasi langsung untuk bisnis anda.
          </p>
        </div>
      </div>

      <div class="lg:col-span-3 flex flex-col gap-6 overflow-hidden">
        <div class="w-full overflow-hidden">
          <div class="flex transition-transform duration-500 ease-in-out -mx-4" :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }">
            <div v-for="item in articlesList" :key="item.id" class="w-full md:w-1/3 shrink-0 px-4 transition-all duration-500">
              <article class="flex flex-col bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div class="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <img :src="item.image" :alt="item.title" class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" loading="lazy"/>
                </div>
                <div class="p-4 flex-grow flex flex-col justify-between">
                  <div class="space-y-4">
                    <div class="flex items-center gap-3 text-xs">
                      <span class="bg-amber-50 text-[#amber-800] border border-amber-200/60 px-2.5 py-1 font-bold tracking-wider rounded-sm text-sm"> {{ item.category }}</span>
                      <span class="text-gray-400 font-medium">—</span>
                      <time :datetime="item.date" class="text-sm text-gray-500 font-medium">{{ item.date }}</time>
                    </div>

                    <h3 class="text-xl font-bold text-slate-950 leading-snug tracking-wide group-hover:text-[#051962] transition-colors">
                      <a :href="'/article/' + item.slug"> {{ item.title }} </a>
                    </h3>
                    <p class="text-sm text-gray-500 leading-relaxed text-justify line-clamp-3"> {{ item.desc }} </p>
                  </div>

                  <div class="pt-6 mt-4 border-t border-gray-50">
                    <a :href="'/article/' + item.slug" class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-950 hover:text-[#051962] transition-colors">
                      Selengkapnya
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div class="flex justify-end items-center gap-3 mt-2">
          <button @click="prevSlide" :disabled="currentIndex === 0" class="w-10 h-10 border border-slate-300 bg-slate-50 text-slate-900 rounded-sm flex items-center justify-center transition-all duration-300 hover:bg-[#051962] hover:border-[#051962] hover:text-white disabled:opacity-20 disabled:bg-slate-50 disabled:border-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed" aria-label="Previous slide">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <span class="text-xs font-mono font-bold tracking-wider text-slate-800 select-none">
            {{ String(currentIndex + 1).padStart(2, '0') }} / {{ String(maxIndex + 1).padStart(2, '0') }}
          </span>

          <button @click="nextSlide" :disabled="currentIndex >= maxIndex" class="w-10 h-10 border border-slate-300 bg-slate-50 text-slate-900 rounded-sm flex items-center justify-center transition-all duration-300 hover:bg-[#051962] hover:border-[#051962] hover:text-white disabled:opacity-20 disabled:bg-slate-50 disabled:border-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed" aria-label="Next slide">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
    import { ref, computed, onMounted, onUnmounted } from 'vue';
    import { articles } from '../data/articlesData.js';

    const articlesList = ref(articles);
    const currentIndex = ref(0);
    const itemsPerView = ref(3);
    const maxIndex = computed(() => {
        return Math.max(0, articlesList.value.length - itemsPerView.value);
    });

    const prevSlide = () => {
        if (currentIndex.value > 0) {
            currentIndex.value--;
        }
    };

    const nextSlide = () => {
        if (currentIndex.value < maxIndex.value) {
            currentIndex.value++;
        }
    };

    const handleResize = () => {
        if (window.innerWidth >= 768) {
            itemsPerView.value = 3;
        } else {
            itemsPerView.value = 1;
            if (currentIndex.value > maxIndex.value) {
            currentIndex.value = maxIndex.value;
            }
        }
    };

    onMounted(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    });
</script>