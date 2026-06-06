<template>
  <section ref="scamAlertSection" class="bg-white pt-20 pb-12 px-6 border-t border-gray-100 overflow-hidden">
    <div class="max-w-4xl mx-auto">      
      <div class="bg-amber-50/40 border-l-4 border-[#F2A900] p-6 md:p-8 rounded-r-xl shadow-sm transform transition-all duration-1000 ease-out"
           :class="isVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-12 scale-[0.97] opacity-0'">        
        <div class="flex items-center gap-3 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-[#F2A900]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <h2 class="text-xl font-bold font-serif tracking-wider text-slate-900">
            Peringatan Penipuan — Scam Alert
          </h2>
        </div>

        <div class="space-y-4 text-base text-slate-600 leading-relaxed text-justify">
          <p>
            Apabila menerima email, surat, pesan instan, atau bentuk korespondensi lain yang mengatasnamakan <strong>LAV Justice Partners</strong> maupun advokat kami, termasuk surat kuasa, somasi, atau dokumen hukum lainnya, dan anda meragukan keasliannya, kami mengimbau anda untuk melakukan verifikasi melalui email resmi kami di <a href="mailto:lawvina90@gmail.com" class="text-blue-600 hover:underline font-semibold">lawvina90@gmail.com</a>.
          </p>
          <p>
            Selain itu, jika anda dihubungi oleh pihak yang mengaku sebagai advokat, rekan (<span class="italic">partner</span>), atau staf dari <strong class="text-slate-900">LAV Justice Partners</strong> dan meminta tindakan yang tidak lazim, seperti menggunakan platform komunikasi non-resmi, memberikan data sensitif, atau melakukan pembayaran ke rekening selain rekening resmi firma, kami menyarankan untuk tidak segera menindaklanjutinya dan terlebih dahulu melakukan verifikasi melalui email resmi kami sebelum mengambil langkah lebih lanjut.
          </p>
          <p class="text-slate-500 italic border-t border-gray-200/60 pt-3">
            *LAV Justice Partners tidak bertanggung jawab atas segala bentuk kerugian, materiil maupun immateriil, yang timbul akibat transaksi, penyerahan dana, atau komunikasi yang dilakukan di luar jalur komunikasi resmi yang telah kami tetapkan.
          </p>
        </div>

        <div class="mt-6 pt-4 border-t border-gray-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span class="text-base font-semibold text-slate-700">Untuk verifikasi, konfirmasi, dan pelaporan:</span>
          <a href="mailto:info@lavjustice.com" class="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-slate-900 hover:text-[#F2A900] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            lawfina90@gmail.com
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scamAlertSection = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true;
      observer.unobserve(entry.target);
    }
  }, {
    threshold: 0.3
  });

  if (scamAlertSection.value) {
    observer.observe(scamAlertSection.value);
  }
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>