<template>
  <div class="min-h-screen relative font-sans text-candy-text selection:bg-pop-pink selection:text-white cursor-none">
    <CustomCursor />
    <Marquee />
    <!-- Dotted Background -->
    <div class="fixed inset-0 z-[-1] bg-candy-bg">
        <div class="absolute inset-0 bg-dots pointer-events-none"></div>
    </div>
    
    <main class="container mx-auto px-6 py-8 relative z-10 max-w-6xl">
      <!-- Navbar -->
      <nav class="flex justify-between items-center mb-24 cartoon-box p-4 bg-white sticky top-4 z-50">
        <h1 class="text-2xl font-black cartoon-title bg-pop-yellow border-2 border-black shadow-[2px_2px_0px_0px_#000] px-3 py-1 -rotate-2">
            DEV_FOLIO
        </h1>
        <div class="flex gap-6 font-bold text-sm md:text-base">
          <a href="#work" class="hover:text-pop-purple hover:underline decoration-4 underline-offset-4 decoration-pop-yellow transition-all">WORK</a>
          <a href="#about" class="hover:text-pop-purple hover:underline decoration-4 underline-offset-4 decoration-pop-cyan transition-all">ABOUT</a>
          <a href="#contact" class="hover:text-pop-purple hover:underline decoration-4 underline-offset-4 decoration-pop-pink transition-all">SAY HI!</a>
        </div>
      </nav>

      <!-- Hero Section -->
      <header class="min-h-[50vh] flex flex-col justify-center items-center text-center mb-32 relative">
     
        <!-- Decorative Shapes -->
        <div class="absolute top-0 right-10 w-16 h-16 bg-pop-cyan rounded-full border-3 border-black shadow-[4px_4px_0px_0px_#000] animate-bounce delay-100 hidden md:block"></div>
        <div class="absolute bottom-10 left-10 w-12 h-12 bg-pop-pink transform rotate-45 border-3 border-black shadow-[4px_4px_0px_0px_#000] animate-pulse hidden md:block"></div>

        <div class="inline-block px-4 py-2 bg-pop-orange border-3 border-black shadow-[4px_4px_0px_0px_#000] text-white rounded-full mb-8 font-bold transform -rotate-3 hover:rotate-0 transition-transform cursor-default animate-enter">
          👋 HELLO WORLD!
        </div>
        
        <h2 class="text-6xl md:text-9xl font-black mb-8 leading-none cartoon-title animate-enter delay-100">
          CREATIVE<br>
          <span class="marker-highlight text-candy-text relative inline-block transform hover:-rotate-1 transition-transform">DEVELOPER</span>
        </h2>
        
        <p class="text-xl md:text-2xl max-w-2xl text-gray-700 mb-10 font-medium animate-enter delay-200">
          I build <span class="font-bold text-pop-purple">playful</span> web experiences. 
          Turning caffeine into code since 2020.
        </p>
        
        <div class="flex gap-4 animate-enter delay-300">
          <UButton 
            size="xl"
            class="rounded-xl border-3 border-black bg-pop-yellow text-black font-black text-lg px-8 py-3 shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all transform hover:rotate-1"
          >
            SEE MY WORK 👇
          </UButton>
           <UButton 
            size="xl"
            class="rounded-xl border-3 border-black bg-white text-black font-bold text-lg px-8 py-3 shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
          >
            GITHUB 👾
          </UButton>
        </div>
      </header>

      <!-- Project Grid -->
      <section id="work" class="mb-32">
        <h3 class="text-4xl md:text-5xl font-black mb-16 cartoon-title flex items-center gap-4">
            <span class="w-12 h-12 bg-pop-cyan rounded-lg border-3 border-black shadow-[4px_4px_0px_0px_#000]"></span>
            FUN PROJECTS
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <ProjectCard 
                title="SNEAKER_DROP"
                description="Hypebeast marketplace with real-time auctions. Built for speed and style."
                :tags="['NUXT', 'SUPABASE', 'PINIA']"
                class="transform md:rotate-1 hover:rotate-0"
            />
            <ProjectCard 
                title="DOODLE_DASH"
                description="Multiplayer drawing game played by 10k+ daily users. Uses WebSockets."
                :tags="['VUE 3', 'SOCKET.IO', 'CANVAS']"
                class="transform md:-rotate-1 hover:rotate-0"
            />
            <ProjectCard 
                title="RETRO_TUNES"
                description="Spotify integration with a 90s winamp aesthetic interface."
                :tags="['API', 'AUDIO', 'DESIGN']"
                class="transform md:rotate-1 hover:rotate-0"
            />
            <ProjectCard 
                title="PIXEL_UI"
                description="Open source component library for 8-bit lovers."
                :tags="['NPM', 'TYPESCRIPT', 'DOCS']"
                class="transform md:-rotate-1 hover:rotate-0"
            />
        </div>
      </section>

       <footer id="contact" class="border-t-3 border-black pt-16 pb-24 text-center bg-pop-pink/10 -mx-6 px-6 mt-20">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-5xl font-black cartoon-title mb-8">WANNA COLLAB?</h2>
                <p class="mb-10 text-xl font-medium">Have a cool idea? Let's make it happen!</p>
                <a href="mailto:hello@example.com" class="inline-block text-3xl font-black bg-white border-3 border-black shadow-[6px_6px_0px_0px_#000] px-8 py-4 hover:bg-pop-yellow hover:scale-105 transition-all transform rotate-2 hover:rotate-0 rounded-2xl">
                    hello@example.com
                </a>
                
                 <div class="mt-16 flex justify-center gap-8 opacity-70">
                    <span>© 2026 Dev Folio</span>
                    <span>Built with Nuxt 4 & Fun</span>
                </div>
            </div>
       </footer>

    </main>
  </div>
</template>
