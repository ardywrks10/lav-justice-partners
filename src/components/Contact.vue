<template>
    <section id="contact" class="py-16 md:py-24 bg-slate-50">
        <div class="reveal delay-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
            <h2 class="text-2xl font-extrabold text-slate-900 sm:text-3xl md:text-4xl">Hubungi Kami</h2>
            <div class="w-20 h-1 bg-red-700 mx-auto mt-5"></div>
            <p class="mt-4 text-sm sm:text-sm md:text-lg text-slate-600 max-w-3xl mx-auto">
                Punya pertanyaan seputar pelatihan atau jaminan penempatan kerja? Silakan isi form di bawah ini atau hubungi langsung kontak kami.
            </p>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style="padding-bottom: 0;">
            <div class="bg-slate-50 rounded-2xl border border-slate-100 overflow-visible flex flex-col lg:flex-row">
                <div class="reveal delay-2 w-full lg:w-5/12 p-6 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-100">
                    <form @submit.prevent="submitForm" class="space-y-4">
                        <input type="text" v-model="formData.name" placeholder="Nama Lengkap" required
                            class="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-lg placeholder-slate-400 outline-none">

                        <div class="flex flex-row gap-3">
                            <input type="number" v-model="formData.age" placeholder="Umur" required
                                class="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-lg placeholder-slate-400 outline-none">
                            <select v-model="formData.gender" required
                                class="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-lg outline-none text-slate-600">
                                <option value="" disabled selected>Jenis Kelamin</option>
                                <option value="Laki-laki">Laki-laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                        </div>

                        <input type="text" v-model="formData.origin" placeholder="Asal Kota / Daerah" required
                            class="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-lg placeholder-slate-400 outline-none">

                        <textarea v-model="formData.experience" rows="4" placeholder="Ceritakan Pengalaman Anda" required
                            class="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-lg placeholder-slate-400 outline-none resize-none"></textarea>

                        <button type="submit"
                            class="w-full py-3 px-4 rounded-lg text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 tracking-wider">
                            Kirim Pesan
                        </button>
                        <div class="flex gap-2 px-1 py-1">
                            <svg class="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <p class="text-[11px] leading-tight text-slate-500 text-justify">
                                Setelah menekan tombol, Anda akan diarahkan untuk mengirim data melalui WhatsApp resmi kami.
                            </p>
                        </div>
                    </form>
                </div>

            <div class="reveal delay-2 w-full lg:w-7/12 p-6 md:p-10 lg:p-12 bg-slate-50 flex flex-col gap-6" style="position: relative; overflow: visible;">
                <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 bg-white border border-slate-100 rounded-xl flex items-center justify-center">
                        <svg class="w-5 h-5 md:w-5 md:h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-xs md:text-sm font-bold text-slate-900 tracking-tight">WhatsApp</h3>
                        <a href="https://wa.me/6287860744733" target="_blank" class="mt-1 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                            +62 878-6074-4733
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                        </a>
                    </div>
                </div>

                <div class="border-t border-slate-100"></div>

                <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 bg-white border border-slate-100 rounded-xl flex items-center justify-center">
                        <svg class="w-5 h-5 md:w-5 md:h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-xs md:text-sm font-bold text-slate-900 tracking-tight">Email</h3>
                        <a href="mailto:warnabaliinternationalschool@gmail.com" class="mt-1 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors break-all">
                            warnabaliinternationalschool@gmail.com
                            <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                        </a>
                    </div>
                </div>

                <div class="border-t border-slate-100"></div>

                <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 bg-white border border-slate-100 rounded-xl flex items-center justify-center">
                        <svg class="w-5 h-5 md:w-5 md:h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-xs md:text-sm font-bold text-slate-900 tracking-tight">Alamat LKP</h3>
                        <a href="https://maps.app.goo.gl/aWTw4gwSEuAJd78n9" target="_blank" class="mt-1 inline-flex items-start gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors text-justify max-w-md leading-relaxed">
                            <span>Perumahan Puri Dolpin 99 Blok B No. 34, Desa Kalibukbuk, Kec. Buleleng, Kab. Buleleng</span>
                            <svg class="w-3.5 h-3.5 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                        </a>
                    </div>
                </div>

                <div class="border-t border-slate-100"></div>

                <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 bg-white border border-slate-100 rounded-xl flex items-center justify-center">
                        <svg class="w-5 h-5 md:w-5 md:h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-xs md:text-sm font-bold text-slate-900 tracking-tight">Alamat Kantor</h3>
                        <a href="https://maps.app.goo.gl/Wvr15ibxhrgHRyzi7" target="_blank" class="mt-1 inline-flex items-start gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors text-justify max-w-md leading-relaxed">
                            <span>Jalan Tukad Unda, Sumerta Kelod, Denpasar Timur, Kota Denpasar</span>
                            <svg class="w-3.5 h-3.5 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </section>
</template>

<script setup>
    import { ref, onMounted } from 'vue';

    const formData = ref({
        name: '',
        age: '',
        gender: '',
        origin: '',
        experience: ''
    });

    onMounted(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, {
            threshold: 0.2
        });

        const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        reveals.forEach(el => {
            observer.observe(el);
        });
    });

    const submitForm = () => {
        const data = formData.value; 
        
        const pesan =
            `Halo, saya ingin menghubungi Anda.\n\n` +
            `*Nama Lengkap:* ${data.name}\n` +
            `*Umur:* ${data.age} tahun\n` +
            `*Jenis Kelamin:* ${data.gender}\n` +
            `*Asal Kota/Daerah:* ${data.origin}\n` +
            `*Pengalaman:*\n${data.experience}`;

        const encoded = encodeURIComponent(pesan);
        const waUrl = `https://wa.me/6287860744733?text=${encoded}`;

        window.open(waUrl, '_blank');

        formData.value = {
            name: '',
            age: '',
            gender: '',
            origin: '',
            experience: ''
        };
    };
</script>