<template>
  <div class="about-bio-container">
    <!-- HERO SECTION -->
    <section class="pt-20 pb-12 bg-gradient-to-b from-slate-100/70 to-white relative">
      <div class="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <nav class="flex items-center space-x-2 text-sm text-gray-500 mb-12 tracking-wide font-medium">
          <router-link to="/" class="hover:text-[#002D72] transition-colors underline underline-offset-4">Beranda</router-link>
          <span class="text-gray-300">/</span>
          <router-link to="/about" class="hover:text-[#002D72] transition-colors underline underline-offset-4">Tentang Kami</router-link>
          <span class="text-gray-300">/</span>
          <span class="text-[#002D72] font-bold">Luh Ayu Vinayanti</span>
        </nav>

        <div class="mb-8 space-y-3">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#19191a] tracking-tight">
            Luh Ayu Vinayanti
          </h1>          
          <div class="w-12 h-[3px] bg-[#F2A900] rounded-full"></div>          
          <p class="text-base sm:text-lg lg:text-xl text-gray-500 font-medium tracking-widest">
            Pendiri Firma Hukum
          </p>
        </div>

        <div class="bg-[#002D72] text-white rounded-sm shadow-2xl py-5 px-6 sm:py-6 sm:px-8 lg:py-7 lg:px-10 flex flex-col lg:flex-row justify-between items-stretch gap-4 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/15 border border-white/10">
          <div class="lg:w-[32%] lg:pr-8 lg:justify-center items-center lg:items-start pt-1 pb-2 lg:py-0">
            <div>
              <span class="text-white/60 text-[11px] uppercase tracking-widest font-semibold block mb-0.5">Posisi</span>
              <div class="text-lg sm:text-xl lg:text-2xl font-bold text-[#F2A900] tracking-wide">
                Managing Partner
              </div>
            </div>
            <div class="flex items-center gap-1.5 text-white/90 text-xs sm:text-sm lg:text-base font-medium mt-0 lg:mt-2">
              <svg class="w-4 h-4 text-[#F2A900] shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5a2 2 0 002 2h.5a2 2 0 012 2 2 2 0 002 2h3a2 2 0 012 2v1.234M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" /></svg>
              <span>Indonesia, English, Turkish</span>
            </div>
          </div>

          <div class="lg:w-[48%] lg:px-8 py-3 lg:py-0 flex flex-row items-center justify-between gap-3 w-full">
            <div class="space-y-0.5 min-w-0">
              <span class="text-white/60 text-[11px] uppercase tracking-widest font-semibold block lg:hidden">Kontak</span>
              <div class="text-base sm:text-lg lg:text-xl font-bold tracking-wider text-white truncate">+62 878-6141-3066</div>
              <a href="mailto:lawvina90@gmail.com" class="text-xs sm:text-sm lg:text-base text-white/80 hover:text-[#F2A900] transition-colors block truncate">lawvina90@gmail.com</a>
            </div>
            <div class="flex items-center gap-2 sm:gap-3 shrink-0">
              <a href="https://wa.me/6287861413066" target="_blank" rel="noopener noreferrer" class="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-[#F2A900] hover:border-[#F2A900] hover:text-[#002D72] transition-all duration-300 shadow-sm group">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.579-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </a>
              <a href="mailto:lawvina90@gmail.com" class="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-[#F2A900] hover:border-[#F2A900] hover:text-[#002D72] transition-all duration-300 shadow-sm group">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform -translate-y-0.5 translate-x-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </a>
            </div>
          </div>

          <div class="lg:w-[20%] lg:pl-8 pt-3 pb-1 lg:py-0 flex flex-row lg:flex-col justify-between lg:justify-center items-center lg:items-end w-full">
            <span class="text-white/60 text-[11px] uppercase tracking-widest font-semibold block lg:hidden">Media Sosial</span>
            <div class="flex items-center gap-2.5">
              <a href="https://www.instagram.com/lavjustice/" target="_blank" rel="noopener noreferrer" class="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-white/10 hover:bg-[#F2A900] text-white hover:text-[#002D72] flex items-center justify-center transition-all duration-200">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="5" ry="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
              </a>
              <a href="https://www.facebook.com/lavjustice" target="_blank" rel="noopener noreferrer" class="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-white/10 hover:bg-[#F2A900] text-white hover:text-[#002D72] flex items-center justify-center transition-all duration-200">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.141 2.375h-2.518c-3.111 0-5.12 2.062-5.12 5.247v2.421h-2.833v3.197h2.833v8.085h3.316v-8.085h2.846l.423-3.197h-3.269V8.04c0-1.077.297-1.81 1.832-1.81h1.961v-2.855z"/></svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- CONTENT SECTION -->
    <section class="pb-12 bg-white relative">
      <div class="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-12 items-start">
          
          <!-- KOLOM KIRI: TEKS BIOGRAFI -->
          <div class="lg:col-span-7 space-y-8 text-justify">
            <p class="text-lg text-gray-800 leading-relaxed font-medium">
              Luh Ayu Vinayanti (lahir 4 Maret 1990) adalah seorang advokat dan pebisnis asal Kabupaten Buleleng, Bali.
            </p>
            
            <h2 class="text-3xl font-serif font-bold text-[#002D72] border-b border-gray-300 pb-2">Kehidupan awal dan pendidikan</h2>
            <div class="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>Vina lahir di Selat, Kabupaten Buleleng, Bali, pada 4 Maret 1990. Ia menempuh pendidikan dasar, menengah, dan atas di Buleleng sebelum melanjutkan studi pada Fakultas Hukum <a href="https://id.wikipedia.org/wiki/Universitas_Tritunggal_Surabaya" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-[#002D72] hover:underline transition-colors font-medium">Universitas Tritunggal Surabaya</a>, Jawa Timur.</p>
              <p>Ia menyelesaikan pendidikan sarjana hukum pada tahun 2013 dan pada tahun 2025, ia melanjutkan pendidikan Magister Ilmu Hukum di <a href="https://universitasmahendradatta.ac.id/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-[#002D72] hover:underline transition-colors font-medium">Universitas Mahendradatta</a>, Denpasar, Bali.</p>
            </div>

            <h2 class="text-3xl font-serif font-bold text-[#002D72] border-b border-gray-300 pb-2">Karier</h2>
            <div class="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                Vina aktif sebagai konsultan hukum bagi sejumlah perusahaan di Bali, khususnya dalam bidang pendirian badan usaha, perizinan, hukum korporasi, serta perusahaan penanaman modal asing (PMA). Pada 25 Agustus 2025, ia lulus 
                <a href="https://peradi.id/ujian-profesi-advokat/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-[#002D72] hover:underline transition-colors font-medium">Ujian Profesi Advokat (UPA)</a> 
                yang diselenggarakan oleh 
                <a href="https://www.peradi.or.id/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-[#002D72] hover:underline transition-colors font-medium">PERADI</a>. Ia kemudian menjalani pengambilan sumpah advokat pada 24 Februari 2026.
              </p>
              <p>
                Selain berkarier di bidang hukum, Vina juga aktif dalam kegiatan usaha, sosial, dan pendidikan. Ia terlibat dalam Yayasan Warna Bangsa Mandiri serta menjabat sebagai Direktur Utama 
                <a href="https://companieshouse.id/asian-balina-international" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-[#002D72] hover:underline transition-colors font-medium">PT Asian Balina International</a> 
                sejak Juli 2023. Perusahaan tersebut bergerak di bidang penempatan dan pemberangkatan tenaga kerja ke luar negeri. Ia juga menjabat sebagai Kepala Cabang Bali pada 
                <a href="https://yunivaberkahkencana-penyalurkerja.com/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-[#002D72] hover:underline transition-colors font-medium">PT Berkah Yuniva Kencana</a>.
              </p>
            </div>

            <h2 class="text-3xl font-serif font-bold text-[#002D72] border-b border-gray-300 pb-2">Riwayat pendidikan</h2>
            <ul class="list-disc pl-6 space-y-2 text-lg text-gray-700">
              <li>SMK Negeri 3 Singaraja, Bali</li>
              <li>Fakultas Hukum Universitas Tritunggal Surabaya, Jawa Timur</li>
              <li>Magister Ilmu Hukum Universitas Mahendradatta, Bali</li>
            </ul>

            <h2 class="text-3xl font-serif font-bold text-[#002D72] border-b border-gray-300 pb-2">Referensi</h2>
            <ol class="list-decimal pl-6 space-y-2 text-lg text-gray-700">
              <li>
                <a href="https://universitasmahendradatta.ac.id/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-[#002D72] hover:underline transition-colors font-medium">
                  "Universitas Mahendradatta"
                </a>. Diakses tanggal 20 Juni 2026.
              </li>
              <li>
                <a href="https://peradi.or.id/files/DENPASAR-UPA-2025.pdf" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-[#002D72] hover:underline transition-colors font-medium">
                  "Lampiran Surat Keputusan Panitia Ujian Profesi Advokat 2025"
                </a> (PDF). PERADI. Diakses tanggal 20 Juni 2026.
              </li>
              <li>
                <a href="https://companieshouse.id/asian-balina-international" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-[#002D72] hover:underline transition-colors font-medium">
                  "PT Asian Balina International"
                </a>. Indonesia Companies Registry Search. Diakses tanggal 20 Juni 2026.
              </li>
            </ol>
          </div>

          <div class="lg:col-span-5 w-full">
            <div class="w-full bg-white border border-gray-300 shadow-sm text-base">
              <div class="bg-gray-100 p-2 text-center border-b border-gray-300 font-extrabold text-gray-900">PROFIL SINGKAT</div>
              <div class="p-2 space-y-2">
                <div class="grid grid-cols-[110px_1fr] gap-x-3 gap-y-1.5 px-1">
                  <span class="text-blue-800 font-semibold">Nama lahir</span>
                  <span class="text-gray-900">Luh Ayu Vinayanti</span>
                  <span class="text-blue-800 font-semibold">Alias</span>
                  <span class="text-gray-900">Vina</span>
                  <span class="text-blue-800 font-semibold">Pekerjaan</span>
                  <span class="text-gray-900">Advokat, Pebisnis</span>
                </div>
                <div class="text-center font-bold bg-gray-100 py-1 text-blue-800 border-y border-gray-200">Kelahiran</div>
                <div class="grid grid-cols-[110px_1fr] gap-x-3 gap-y-1.5 px-1">
                  <span class="text-blue-800 font-semibold">Tanggal lahir</span>
                  <span class="text-gray-900">04 Maret 1990</span>
                  <span class="text-blue-800 font-semibold">Tempat lahir</span>
                  <span class="text-gray-900">Selat, Buleleng, Bali</span>
                  <span class="text-blue-800 font-semibold">Kewarganegaraan</span>
                  <span class="text-gray-900">Indonesia</span>
                </div>
                <div class="text-center font-bold bg-gray-100 py-1 text-blue-800 border-y border-gray-200">Pendidikan</div>
                <div class="grid grid-cols-[110px_1fr] gap-x-3 gap-y-1.5 px-1 pb-1">
                  <span class="text-blue-800 font-semibold">Pendidikan</span>
                  <span class="text-gray-900">Univ. Tritunggal Surabaya (S.H.)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>