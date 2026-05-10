<template>
    <section class="py-12 md:py-24 bg-gradient-to-br from-red-700 via-red-800 to-red-900 px-5"> 
        <div id="faq"
            class="relative w-full bg-white px-5 md:px-10 md:py-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto md:max-w-4xl rounded-lg">
            
            <div class="mx-auto py-12 lg:py-8">
                <div class="reveal delay-1 flex flex-col items-center">
                    <h4 class="mt-2 text-center text-xl md:text-2xl font-bold tracking-tight text-slate-900">Frequently Asked Question</h4>
                    <div class="w-20 h-1 bg-red-700 mx-auto mt-5"></div>
                    <p class="mt-4 text-sm sm:text-sm md:text-lg text-slate-600 max-w-3xl mx-auto text-center">
                        Temukan jawaban atas pertanyaan umum seputar program pelatihan, sistem pembiayaan, serta peluang penempatan kerja.
                    </p>
                </div>

                <div class="reveal delay-2 md:max-w-full mx-auto mt-6 md:mt-10 grid max-w-xl divide-y divide-neutral-200">
                    <div v-for="faq in paginatedItems" :key="faq.id" class="py-4">
                        <details class="group">
                            <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-slate-800 text-sm md:text-base">
                                <span class="pr-4"> {{ faq.qst }}</span>
                                <span class="transition group-open:rotate-180 shrink-0 text-red-600">
                                    <svg fill="none" height="18" width="18" class="md:h-6 md:w-6" shape-rendering="geometricPrecision"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" viewBox="0 0 24 24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p v-html="faq.ans" class="group-open:animate-fadeIn mt-3 text-xs md:text-sm text-neutral-600 leading-relaxed text-justify">
                            </p>
                        </details>
                    </div>
                </div>

                <div v-if="totalPages > 1" class="mt-10 flex items-center justify-center gap-2 border-t border-neutral-100 pt-6">
                    <button 
                        @click="currentPage > 1 ? currentPage-- : null"
                        :class="{'opacity-30 cursor-not-allowed': currentPage === 1}"
                        class="p-2 text-slate-500 hover:text-red-700 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    </button>

                    <div class="flex gap-1">
                        <button 
                            v-for="page in totalPages" 
                            :key="page"
                            @click="currentPage = page"
                            :class="page === currentPage ? 'bg-red-700 text-white shadow-md' : 'text-slate-600 hover:bg-neutral-100'"
                            class="w-8 h-8 md:w-10 md:h-10 rounded-md text-sm font-semibold transition-all duration-300">
                            {{ page }}
                        </button>
                    </div>

                    <button 
                        @click="currentPage < totalPages ? currentPage++ : null"
                        :class="{'opacity-30 cursor-not-allowed': currentPage === totalPages}"
                        class="p-2 text-slate-500 hover:text-red-700 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref, computed } from 'vue';

    const currentPage  = ref(1);
    const itemsPerPage = ref(5);
    const faqItems = ref([
        {id: 1, qst: 'Apa saja peluang pekerjaan (job opportunity) yang tersedia saat ini?', ans: 'Saat ini kami menyediakan berbagai peluang karier di industri hospitality, di antaranya posisi <span class="bold-main-text">spa therapist</span>, <span class="bold-main-text">housekeeping</span>, <span class="bold-main-text">steward</span>, <span class="bold-main-text">waiter/waitress</span>, <span class="bold-main-text">laundry management</span>, dan <span class="bold-main-text">public area</span>'},
        {id: 2, qst: 'Bagaimana sistem penggunaan dana talang?', ans: 'Dalam sistem dana talang, biaya awal seperti <span class="bold-main-text">pembuatan paspor</span>, <span class="bold-main-text">pengurusan visa</span>, <span class="bold-main-text">medical check-up</span>, dan kebutuhan administrasi lainnya akan ditanggung terlebih dahulu oleh perusahaan. Pembayaran dapat dilakukan oleh kandidat setelah menerima gaji dari perusahaan penempatan.'},
        {id: 3, qst: 'Berapa lama durasi pelatihan untuk setiap posisi pekerjaan?', ans: 'Durasi pelatihan berlangsung hingga maksimal <span class="bold-main-text">3 bulan</span>. Selama pelatihan, kandidat akan dibimbing oleh trainer berpengalaman sesuai dengan bidang pekerjaan yang dipilih.'},
        {id: 4, qst: 'Apakah selama pelatihan disediakan fasilitas tempat tinggal (mess) bagi kandidat?', ans: 'Kami menyediakan fasilitas mess sebagai tempat tinggal bagi kandidat selama proses pelatihan berlangsung. <span class="bold-main-text">Mess</span> dilengkapi dengan berbagai fasilitas penunjang, seperti <span class="bold-main-text">tempat tidur</span>, <span class="bold-main-text">alat masak</span>, serta kebutuhan dasar lainnya untuk menunjang kenyamanan selama masa pelatihan.'},
        {id: 5, qst: 'Negara mana saja yang biasanya menjadi tujuan penempatan kerja bagi kandidat?', ans: 'Saat ini, <span class="bold-main-text">Dubai</span> dan <span class="bold-main-text">Turki</span> menjadi destinasi penempatan kerja yang paling diminati oleh kandidat, mengingat pesatnya perkembangan industri hospitality di kedua negara tersebut. Selain itu, kami juga menyediakan peluang penempatan di beberapa negara lain seperti <span class="bold-main-text">Maldives</span>, <span class="bold-main-text">Polandia</span>, dan <span class="bold-main-text">Rusia</span>, yang turut menawarkan pengalaman kerja internasional dengan standar profesional.'},
        {id: 6, qst: 'Apakah bisa mendaftar pelatihan tanpa bekerja ke luar negeri?', ans: 'Kandidat dapat mendaftar dan mengikuti program pelatihan tanpa harus melanjutkan penempatan kerja di luar negeri. Setelah menyelesaikan pelatihan, kandidat akan memperoleh berbagai benefit, seperti <span class="bold-main-text">peningkatan keterampilan</span>, <span class="bold-main-text">pengalaman kerja di perhotelan sekitar</span>, serta <span class="bold-main-text">sertifikat resmi</span> dari LKP sebagai bukti kompetensi.'},
        {id: 7, qst: 'Dimana lokasi kantor dan LKP berada?', ans: 'Kantor kami berlokasi di Jl. Tukad Unda, Sumerta Kelod, Denpasar Timur, yang dapat diakses melalui tautan berikut: <a href="https://maps.google.com" target="_blank" class="text-red-700 font-semibold underline">Google Maps</a>. Sementara itu, lokasi LKP berada di Perumahan Puri Dolpin 99 Blok B No. 34, Kalibukbuk, Buleleng.'}
    ]);

    const totalPages = computed(()=>{
        return Math.ceil(faqItems.value.length / itemsPerPage.value);
    });

    const paginatedItems = computed(()=>{
        const start = (currentPage.value - 1) * itemsPerPage.value;
        const end = start + itemsPerPage.value;
        return faqItems.value.slice(start, end);
    });
</script>