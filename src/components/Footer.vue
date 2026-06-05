<template>
  <footer class="bg-[#19191a] text-white pt-16 pb-8 border-t border-[#002D72]/20">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 pb-16">
      
      <div class="lg:col-span-2 flex flex-col gap-6">
        <div class="flex items-center">
          <img src="/images/logo/lav.png" alt="LAV Logo" class="h-16 w-auto object-contain brightness-0 invert opacity-95">
        </div>
        <p class="text-gray-400 text-md leading-relaxed pr-4 text-justify">
            LAV Justice Partners hadir sebagai mitra hukum profesional yang mengutamakan integritas, keadilan, dedikasi, dan kepercayaan</p>
      </div>

      <div class="lg:col-span-1 flex flex-col gap-6">
        <div>
          <h3 class="text-xl text-white tracking-wide relative inline-block pb-2">
            Sitemaps
            <span class="absolute bottom-0 left-0 w-12 h-[2px] bg-[#F2A900]"></span>
          </h3>
        </div>
        <ul class="flex flex-col gap-3 text-sm text-gray-400">
          <li><a href="#home" class="hover:text-[#F2A900] transition-colors">Home</a></li>
          <li><a href="#services" class="hover:text-[#F2A900] transition-colors">Services</a></li>
          <li><a href="#about" class="hover:text-[#F2A900] transition-colors">About Us</a></li>
          <li><a href="#articles" class="hover:text-[#F2A900] transition-colors">Articles</a></li>
          <li><a href="#contact" class="hover:text-[#F2A900] transition-colors">Contact Us</a></li>
        </ul>
      </div>

      <div class="lg:col-span-1 flex flex-col gap-6">
        <div>
          <h3 class="text-xl text-white tracking-wide relative inline-block pb-2">
            Headquarter
            <span class="absolute bottom-0 left-0 w-12 h-[2px] bg-[#F2A900]"></span>
          </h3>
        </div>
         <div class="flex flex-col gap-5 text-sm">
            <div class="flex gap-3 items-start">
                <svg class="w-5 h-5 text-[#F2A900] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                <h4 class="text-xs font-bold text-gray-400 tracking-wider uppercase mb-1">Address</h4>
                <a href="https://maps.app.goo.gl/FoMisn5HktmjrGH36" target="_blank" rel="noopener noreferrer" class="text-gray-300 leading-relaxed">Tukad Unda St No.8, Panjer, Denpasar Selatan, Denpasar City</a>
                </div>
            </div>

            <div class="flex gap-3 items-start">
                <svg class="w-5 h-5 text-[#F2A900] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                <h4 class="text-xs font-bold text-gray-400 tracking-wider uppercase mb-1">Phone</h4>
                <a href="https://wa.me/6287861413066" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-[#F2A900] transition-colors">+62 878 - 6141 - 3066</a>
                </div>
            </div>

            <div class="flex gap-3 items-start">
                <svg class="w-5 h-5 text-[#F2A900] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                <h4 class="text-xs font-bold text-gray-400 tracking-wider uppercase mb-1">Email</h4>
                <a href="mailto:lawvina90@gmail.com" class="text-gray-300 hover:text-[#F2A900] transition-colors">lawvina90@gmail.com</a>
                </div>
            </div>
         </div>
      </div>

      <div class="lg:col-span-2 flex flex-col gap-6">
        <div>
          <h3 class="text-xl text-white tracking-wide relative inline-block pb-2">
            Contact Us
            <span class="absolute bottom-0 left-0 w-12 h-[2px] bg-[#F2A900]"></span>
          </h3>
        </div>
        
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-3">
          <input v-model="formInquiry.name" type="text" placeholder="Nama Lengkap" class="w-full bg-[#222224] border border-gray-800 focus:border-[#002D72] focus:outline-none p-3 text-sm text-gray-200 rounded-sm" required>
          <input v-model="formInquiry.email" type="email" placeholder="Email" class="w-full bg-[#222224] border border-gray-800 focus:border-[#002D72] focus:outline-none p-3 text-sm text-gray-200 rounded-sm" required>
          <textarea v-model="formInquiry.needs" rows="3" placeholder="Ceritakan kebutuhanmu kepada kami......." class="w-full bg-[#222224] border border-gray-800 focus:border-[#002D72] focus:outline-none p-3 text-sm text-gray-200 rounded-sm resize-none" required></textarea>
          
          <button type="submit" class="w-full md:w-auto self-start mt-2 px-8 py-3 bg-[#F2A900] hover:bg-[#D49400] text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-sm shadow-md">
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
    <div class="border-t border-gray-800 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] text-gray-500 tracking-[0.2em]">
      <p>Copyright 2026 © LAV Justice Partners.</p>
      <p>All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script setup>
  import { ref } from 'vue';
  const formInquiry = ref({
    name: '',
    email: '',
    needs: ''
  });

  const handleSubmit = () => {
    const targetPhone = '6282235102856'; 
    const textMessage = `Halo saya ingin melakukan konsultasi, berikut beberapa rincian saya.\n- Nama : ${formInquiry.value.name}\n- Email  : ${formInquiry.value.email}\n- Detail : ${formInquiry.value.needs}`;
    const encodedText = encodeURIComponent(textMessage);
    
    window.open(`https://wa.me/${targetPhone}?text=${encodedText}`, '_blank');
    
    formInquiry.value.name = '';
    formInquiry.value.email = '';
    formInquiry.value.needs = '';
  };
</script>