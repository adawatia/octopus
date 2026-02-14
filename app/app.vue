<script setup lang="ts">
const toast = useToast()
const config = useRuntimeConfig()
const resumeLink = `${config.app.baseURL}resume.pdf`

const handleNotify = () => {
  try {
    toast.add({
      title: 'Newsletter',
      description: "You're on the list! Stay tuned for updates.",
      icon: 'i-heroicons-check-circle-solid',
      color: 'success'
    })
  } catch (error) {
    console.error('Failed to show notification:', error)
  }
}

// Smooth scroll to section without router interference
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Update URL hash without triggering router
    window.history.replaceState(null, '', `#${sectionId}`)
  }
}

// SEO: Structured Data (JSON-LD) for rich search results
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Devansh Sharma',
        alternateName: 'adawatia',
        url: 'https://adawatia.github.io/octopus/',
        image: 'https://github.com/adawatia.png',
        sameAs: [
          'https://github.com/adawatia',
          'https://linkedin.com/in/adawatia'
        ],
        jobTitle: 'AI Backend Engineer',
        worksFor: {
          '@type': 'Organization',
          name: 'Zryth Solutions'
        },
        alumniOf: [
          {
            '@type': 'CollegeOrUniversity',
            name: 'Chandigarh University'
          },
          {
            '@type': 'CollegeOrUniversity',
            name: 'IIT Guwahati'
          }
        ],
        knowsAbout: [
          'FastAPI',
          'Django',
          'Python',
          'AWS',
          'GCP',
          'Docker',
          'Machine Learning',
          'Cloud Architecture',
          'Backend Development',
          'API Design'
        ],
        email: 'dv.adawatia@gmail.com',
        telephone: '+91-8437330408'
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Devansh Sharma Portfolio',
        alternateName: 'adawatia Portfolio',
        url: 'https://adawatia.github.io/octopus/',
        description: 'AI Backend Engineer specializing in FastAPI, Django, AWS, and scalable cloud architecture',
        author: {
          '@type': 'Person',
          name: 'Devansh Sharma',
          alternateName: 'adawatia'
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        mainEntity: {
          '@type': 'Person',
          name: 'Devansh Sharma',
          alternateName: 'adawatia',
          description: 'AI Backend Engineer specializing in scalable API architecture, cloud infrastructure, and production-grade AI pipelines',
          hasOccupation: {
            '@type': 'Occupation',
            name: 'AI Backend Engineer',
            skills: 'FastAPI, Django, Python, AWS, GCP, Docker, Kubernetes, PostgreSQL, MongoDB, Machine Learning, LangChain'
          }
        }
      })
    }
  ]
})
</script>

<template>
  <UApp>
    <div class="min-h-screen relative font-sans text-candy-text selection:bg-pop-pink selection:text-white md:cursor-none">
      <CustomCursor class="hidden md:block" />
      <Marquee />
      <!-- Dotted Background -->
      <div class="fixed inset-0 z-[-1] bg-candy-bg">
          <div class="absolute inset-0 bg-dots pointer-events-none"></div>
      </div>
      
      <main class="container mx-auto px-4 md:px-6 py-4 md:py-8 relative z-10 max-w-6xl pb-24 md:pb-8">
        <!-- Desktop Navbar -->
        <nav class="hidden md:flex justify-between items-center mb-20 cartoon-box p-4 bg-white sticky top-4 z-50">
          <h1 class="text-xl md:text-2xl font-black cartoon-title bg-pop-yellow border-2 border-black shadow-hover px-3 py-1 -rotate-2">
              DEV_FOLIO
          </h1>
          <div class="flex gap-6 font-bold text-sm">
            <a @click.prevent="scrollToSection('about')" href="#about" class="hover:text-pop-purple hover:underline decoration-4 underline-offset-4 decoration-pop-cyan transition-all cursor-pointer">ABOUT</a>
            <a @click.prevent="scrollToSection('experience')" href="#experience" class="hover:text-pop-purple hover:underline decoration-4 underline-offset-4 decoration-pop-pink transition-all cursor-pointer">QUESTS</a>
            <a @click.prevent="scrollToSection('work')" href="#work" class="hover:text-pop-purple hover:underline decoration-4 underline-offset-4 decoration-pop-yellow transition-all cursor-pointer">PROJECTS</a>
            <a @click.prevent="scrollToSection('blog')" href="#blog" class="hover:text-pop-purple hover:underline decoration-4 underline-offset-4 decoration-pop-orange transition-all cursor-pointer">BLOG</a>
          </div>
        </nav>

        <!-- Mobile Floating Bottom Navbar -->
        <nav class="md:hidden fixed bottom-4 left-4 right-4 z-50 cartoon-box bg-white p-2.5 flex justify-around items-center gap-1">
          <a @click.prevent="scrollToSection('about')" href="#about" class="flex flex-col items-center gap-0.5 text-[10px] font-bold hover:text-pop-cyan transition-colors active:scale-95 flex-1 cursor-pointer">
            <UIcon name="i-heroicons-user-circle-solid" class="w-5 h-5" />
            <span>ABOUT</span>
          </a>
          <a @click.prevent="scrollToSection('experience')" href="#experience" class="flex flex-col items-center gap-0.5 text-[10px] font-bold hover:text-pop-pink transition-colors active:scale-95 flex-1 cursor-pointer">
            <UIcon name="i-heroicons-bolt-solid" class="w-5 h-5" />
            <span>QUESTS</span>
          </a>
          
          <!-- DEV_FOLIO Logo in Center -->
          <div class="flex flex-col items-center justify-center px-2 flex-1">
            <div class="text-xs font-black cartoon-title bg-pop-yellow border-2 border-black shadow-hover px-2 py-0.5 -rotate-2 whitespace-nowrap">
              DEV_FOLIO
            </div>
          </div>
          
          <a @click.prevent="scrollToSection('work')" href="#work" class="flex flex-col items-center gap-0.5 text-[10px] font-bold hover:text-pop-yellow transition-colors active:scale-95 flex-1 cursor-pointer">
            <UIcon name="i-heroicons-rocket-launch-solid" class="w-5 h-5" />
            <span>PROJECTS</span>
          </a>
          <a @click.prevent="scrollToSection('blog')" href="#blog" class="flex flex-col items-center gap-0.5 text-[10px] font-bold hover:text-pop-orange transition-colors active:scale-95 flex-1 cursor-pointer">
            <UIcon name="i-heroicons-pencil-square-solid" class="w-5 h-5" />
            <span>BLOG</span>
          </a>
        </nav>

        <!-- Hero Section -->
        <header class="min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center items-center text-center mb-16 md:mb-32 relative px-2 mt-12 md:mt-0">
          <div class="absolute top-10 left-10 w-16 h-16 bg-pop-purple rounded-full border-3 border-black shadow-hard animate-bounce delay-75 hidden lg:block opacity-20"></div>
          <div class="absolute bottom-20 right-20 w-12 h-12 bg-pop-orange rotate-12 border-3 border-black shadow-hard animate-pulse hidden lg:block opacity-20"></div>

          <div class="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-pop-orange border-3 border-black shadow-hard text-white rounded-full mb-6 md:mb-8 font-bold transform -rotate-3 hover:rotate-0 transition-transform cursor-default animate-enter text-xs md:text-base">
            <UIcon name="i-heroicons-hand-raised-solid" class="w-4 h-4 md:w-5 md:h-5 text-yellow-300" /> HELLO WORLD! I'M DEVANSH SHARMA
          </div>
          
          <h2 class="text-4xl md:text-8xl font-black mb-4 md:mb-6 leading-tight md:leading-none cartoon-title animate-enter delay-100">
            AI BACKEND<br>
            <span class="marker-highlight text-candy-text relative inline-block transform hover:-rotate-1 transition-transform">ENGINEER</span><br>
            & ARCHITECT
          </h2>
          
          <p class="text-base md:text-2xl max-w-2xl text-gray-700 mb-6 md:mb-10 font-medium animate-enter delay-200 px-4">
            Specializing in scalable API architecture, cloud infrastructure, and production-grade AI pipelines.
          </p>
          
          <div class="flex flex-col md:flex-row gap-3 md:gap-4 animate-enter delay-300 w-full md:w-auto px-4">
            <a 
              @click.prevent="scrollToSection('experience')"
              href="#experience"
              class="inline-flex items-center justify-center rounded-xl border-3 border-black bg-pop-yellow text-black font-black text-base md:text-lg px-6 md:px-8 py-3 shadow-hard hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all transform hover:rotate-1 w-full md:w-auto cursor-pointer"
            >
              VIEW MY QUESTS <UIcon name="i-heroicons-arrow-down-circle-solid" class="w-5 h-5 md:w-6 md:h-6 ml-2" />
            </a>
             <UTooltip ignore-non-keyboard-focus text="Check my Repos">
               <UButton 
                size="xl"
                variant="ghost"
                class="rounded-xl border-3 border-black bg-white text-black font-bold text-base md:text-lg px-6 md:px-8 py-3 shadow-hard hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all w-full md:w-auto justify-center"
                to="https://github.com/adawatia"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB <UIcon name="i-logos-github-icon" class="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </UButton>
            </UTooltip>
             <UTooltip ignore-non-keyboard-focus text="Download Resume">
               <UButton 
                size="xl"
                variant="ghost"
                class="rounded-xl border-3 border-black bg-pop-cyan text-black font-bold text-base md:text-lg px-6 md:px-8 py-3 shadow-hard hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all w-full md:w-auto justify-center"
                :to="resumeLink"
                target="_blank"
                rel="noopener noreferrer"
                download="Devansh-Sharma-Resume.pdf"
                external
              >
                RESUME <UIcon name="i-heroicons-document-arrow-down-solid" class="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </UButton>
            </UTooltip>
          </div>
        </header>

        <!-- About Me Sections -->
        <section id="about" class="mb-16 md:mb-32 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div class="cartoon-box p-6 md:p-8 bg-white rotate-1">
            <h3 class="text-2xl md:text-3xl font-black cartoon-title mb-4 md:mb-6 flex items-center gap-3 md:gap-4">
              <div class="w-12 h-12 bg-pop-purple rounded-lg border-3 border-black shadow-hard flex items-center justify-center text-white">
                <UIcon name="i-heroicons-user-circle-solid" class="w-6 h-6" />
              </div>
              ABOUT ME
            </h3>
            <p class="text-lg leading-loose font-medium text-gray-800 mb-6">
              I am a <span class="font-bold text-pop-purple">Backend Developer</span> specializing in scalable API architecture and cloud infrastructure. Check out my work on 
              <UTooltip ignore-non-keyboard-focus text="Check my code">
                <a href="https://github.com/adawatia" class="underline decoration-pop-cyan decoration-4" target="_blank" rel="noopener noreferrer">GitHub</a>
              </UTooltip>
               or connect with me on 
              <UTooltip ignore-non-keyboard-focus text="Let's connect!">
                <a href="https://linkedin.com/in/adawatia" class="underline decoration-pop-pink decoration-4" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </UTooltip>.
            </p>
            <p class="text-lg leading-loose font-medium text-gray-800 mb-6">
              Proficient in Python (FastAPI, Django) and orchestrating containerized workloads on AWS and GCP. Experienced in engineering robust server-side solutions and integrating production-grade AI pipelines.
            </p>
            <div class="flex flex-wrap gap-2 mt-4">
               <UTooltip ignore-non-keyboard-focus text="Black Belt in coding?">
                 <span class="px-3 py-1 bg-gray-100 border border-black rounded font-bold text-sm cursor-default flex items-center gap-1">
                   <UIcon name="i-fluent-emoji-martial-arts-uniform" class="w-4 h-4" /> Karate
                 </span>
               </UTooltip>
               <UTooltip ignore-non-keyboard-focus text="Knowledge sponge">
                 <span class="px-3 py-1 bg-gray-100 border border-black rounded font-bold text-sm cursor-default flex items-center gap-1">
                   <UIcon name="i-fluent-emoji-open-book" class="w-4 h-4" /> Reading
                 </span>
               </UTooltip>
               <UTooltip ignore-non-keyboard-focus text="I use Linux Mint btw">
                 <span class="px-3 py-1 bg-gray-100 border border-black rounded font-bold text-sm cursor-default flex items-center gap-1">
                   <UIcon name="i-logos-linux-tux" class="w-4 h-4" /> Linux
                 </span>
               </UTooltip>
            </div>
          </div>

          <div>
            <!-- Tech Stack -->
            <div class="mb-8 md:mb-12">
              <h3 class="text-2xl md:text-3xl font-black cartoon-title mb-4 md:mb-6 transform -rotate-1 flex items-center gap-3 md:gap-4">
                <div class="w-12 h-12 bg-pop-orange rounded-lg border-3 border-black shadow-hard flex items-center justify-center text-white">
                  <UIcon name="i-heroicons-wrench-screwdriver-solid" class="w-6 h-6" />
                </div>
                INVENTORY
              </h3>
              <div class="flex flex-wrap gap-3">
                <TechPill name="Python" icon="i-logos-python" class="bg-blue-50" />
                <TechPill name="FastAPI" icon="i-logos-fastapi-icon" class="bg-teal-50" />
                <TechPill name="Django" icon="i-logos-django-icon" class="bg-green-50" />
                <TechPill name="C++" icon="i-logos-c-plusplus" class="bg-blue-50" />
                <TechPill name="AWS" icon="i-logos-aws" class="bg-yellow-50" />
                <TechPill name="GCP" icon="i-logos-google-cloud" class="bg-red-50" />
                <TechPill name="Docker" icon="i-logos-docker-icon" class="bg-blue-50" />
                <TechPill name="Linux" icon="i-logos-linux-tux" class="bg-gray-50" />
                <TechPill name="PostgreSQL" icon="i-logos-postgresql" class="bg-blue-50" />
                <TechPill name="MongoDB" icon="i-logos-mongodb-icon" class="bg-green-50" />
                <TechPill name="ImageKit" icon="https://cdn.brandfetch.io/id8c1BII23/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1712150692788" class="bg-blue-50" />
                <TechPill name="LangChain" icon="i-heroicons-link-solid" class="bg-green-50" />
                <TechPill name="React" icon="i-logos-react" class="bg-cyan-50" />
                <TechPill name="Streamlit" icon="https://cdn.brandfetch.io/idiyFucwEQ/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1668515715588" class="bg-red-50" />
              </div>
            </div>
            
            <!-- Education -->
             <div class="cartoon-box p-6 bg-pop-cyan/10 border-dashed">
               <h3 class="text-2xl font-black cartoon-title mb-4 flex items-center gap-4">
                 <div class="w-10 h-10 bg-pop-cyan rounded-lg border-3 border-black shadow-hard flex items-center justify-center text-white">
                    <UIcon name="i-heroicons-academic-cap-solid" class="w-5 h-5" />
                 </div>
                 EDUCATION
               </h3>
               <div class="space-y-6">
                  <div>
                    <div class="flex justify-between items-start gap-2">
                      <h4 class="font-bold text-lg">B.E. Computer Science</h4>
                      <span class="text-sm font-bold bg-white border border-black px-2 rounded whitespace-nowrap shrink-0">2021-2025</span>
                    </div>
                    <div class="text-gray-600 font-medium">Chandigarh University</div>
                    <div class="text-sm font-bold text-pop-purple mt-1">CGPA: 7.79</div>
                  </div>
                  <div class="border-t border-black/10 pt-4">
                     <h4 class="font-bold text-sm mb-2 text-gray-500 uppercase tracking-wider">Relevant Loot (Coursework)</h4>
                     <div class="flex flex-wrap gap-2">
                       <UTooltip ignore-non-keyboard-focus text="Design & Analysis of Algorithms">
                         <span class="text-xs bg-white px-2 py-1 rounded border border-black/20 hover:bg-pop-purple/20 cursor-default transition-colors">Algorithms</span>
                       </UTooltip>
                       <UTooltip ignore-non-keyboard-focus text="Advanced Data Structures">
                         <span class="text-xs bg-white px-2 py-1 rounded border border-black/20 hover:bg-pop-cyan/20 cursor-default transition-colors">Data Structures</span>
                       </UTooltip>
                       <UTooltip ignore-non-keyboard-focus text="Deep Learning & Neural Networks">
                         <span class="text-xs bg-white px-2 py-1 rounded border border-black/20 hover:bg-pop-yellow/20 cursor-default transition-colors">Machine Learning</span>
                       </UTooltip>
                       <UTooltip ignore-non-keyboard-focus text="Image Processing & CNNs">
                         <span class="text-xs bg-white px-2 py-1 rounded border border-black/20 hover:bg-pop-pink/20 cursor-default transition-colors">Computer Vision</span>
                       </UTooltip>
                       <UTooltip ignore-non-keyboard-focus text="Network Security & Protocols">
                         <span class="text-xs bg-white px-2 py-1 rounded border border-black/20 hover:bg-pop-pink/20 cursor-default transition-colors">Computer Networks</span>
                       </UTooltip>
                       <UTooltip ignore-non-keyboard-focus text="Hadoop, Spark & Data Mining">
                         <span class="text-xs bg-white px-2 py-1 rounded border border-black/20 hover:bg-pop-purple/20 cursor-default transition-colors">Big Data Analytics</span>
                       </UTooltip>
                       <UTooltip ignore-non-keyboard-focus text="Visual Analytics & Dashboards">
                         <span class="text-xs bg-white px-2 py-1 rounded border border-black/20 hover:bg-pop-cyan/20 cursor-default transition-colors">Data Visualization</span>
                       </UTooltip>
                       <UTooltip ignore-non-keyboard-focus text="Database Management Systems">
                         <span class="text-xs bg-white px-2 py-1 rounded border border-black/20 hover:bg-pop-yellow/20 cursor-default transition-colors">DBMS</span>
                       </UTooltip>
                       <UTooltip ignore-non-keyboard-focus text="Computer Organization & Architecture">
                         <span class="text-xs bg-white px-2 py-1 rounded border border-black/20 hover:bg-pop-pink/20 cursor-default transition-colors">Computer Architecture</span>
                       </UTooltip>
                       <UTooltip ignore-non-keyboard-focus text="OS Internals & Virtualization">
                         <span class="text-xs bg-white px-2 py-1 rounded border border-black/20 hover:bg-pop-orange/20 cursor-default transition-colors">Operating System</span>
                       </UTooltip>
                     </div>
                  </div>
               </div>
             </div>
          </div>
        </section>

        <!-- Experience Log -->
        <section id="experience" class="mb-16 md:mb-32">
           <h3 class="text-3xl md:text-5xl font-black mb-8 md:mb-12 cartoon-title flex items-center gap-3 md:gap-4">
              <div class="w-12 h-12 bg-pop-purple rounded-lg border-3 border-black shadow-hard flex items-center justify-center text-white">
                <UIcon name="i-heroicons-bolt-solid" class="w-6 h-6" />
              </div>
              QUEST LOG
          </h3>
          <div class="space-y-8">
             <ExperienceCard 
               role="Artificial Intelligence Engineer Intern"
               company="Zryth Solutions"
               period="Oct 2025 – Present"
               description="Designed robust backend services and orchestrated scalable AI workloads on AWS."
               :achievements="[
                 'Designed robust backend services using FastAPI and Django',
                 'Orchestrated AI workloads on AWS (Fargate, Step Functions, Lambda)',
                 'Containerized applications using Docker'
               ]"
               :tags="['FastAPI', 'Fargate', 'Lambda', 'Docker']"
               link="https://www.zryth.com/"
             />
              <ExperienceCard 
                role="Mentee (ML Engineering)"
                company="GrowthPurple Technologies"
                period="June 2023 – October 2023"
                description="Engaged in a focused mentorship experience, actively participating in the development of a PDF chatbot using LLMs, Streamlit, and LangChain for real-time document interaction."
                :achievements="[
                  '90% accuracy on complex PDF formats',
                  'Integrated RAG for better context retrieval',
                  'Reduced support tickets by 35%'
                ]"
                :tags="['Python', 'Streamlit', 'LangChain', 'Hugging Face', 'LLMs']"
                link="https://growthpurple.com/"
              />
              <ExperienceCard 
                role="Research Intern"
                company="IIT Guwahati"
                period="May 2023 – July 2023"
                description="Accelerated Deep Neural Network inference on NoC architectures using Timeloop, C++ and Python. Contributed to AI hardware-software co-design."
                :achievements="[
                  'Achieved 23% latency reduction via optimized data mapping',
                  'Built NoC simulation models for workload testing',
                  'Contributed to research on AI accelerator design'
                ]"
                :tags="['C++', 'Python', 'Timeloop', 'NoC Architecture']"
                link="https://iitg.ac.in/cseweb/marslab/"
              />
          </div>
        </section>

        <!-- Projects -->
        <section id="work" class="mb-16 md:mb-32">
          <h3 class="text-3xl md:text-5xl font-black mb-8 md:mb-12 cartoon-title flex items-center gap-3 md:gap-4">
              <div class="w-12 h-12 bg-pop-cyan rounded-lg border-3 border-black shadow-hard flex items-center justify-center text-white">
                <UIcon name="i-heroicons-rocket-launch-solid" class="w-6 h-6" />
              </div>
              SIDE MISSIONS
          </h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard 
                  title="DeoAI"
                  description="Modular pipeline to transform scripts into faceless videos with AI-generated visuals and voiceovers."
                  :tags="['Python', 'PyTorch', 'Diffusers', 'FFmpeg']"
                  link="https://github.com/adawatia/deoAI"
                  class="transform hover:rotate-1"
              />
              <ProjectCard 
                  title="PaperWise"
                  description="Engineered an intelligent PDF assistant using PySide6, Ollama, and PyMuPDF for seamless document interaction, smart Q&A, and offline AI processing."
                  :tags="['PySide6', 'Ollama', 'PyMuPDF', 'Requests']"
                  link="https://github.com/adawatia/PaperWise"
                  class="transform hover:-rotate-1"
              />
              <ProjectCard 
                  title="Kuebiko Comics"
                  description="Full-stack comic platform connecting independent Indian artists with readers. Features auth, RBAC, and neobrutalist design."
                  :tags="['Vue.js', 'FastAPI', 'PostgreSQL', 'Render','ImageKit']"
                  link="https://comic-eight-dusky.vercel.app/"
                  class="transform hover:rotate-1"
                  wip
              />
               <ProjectCard 
                  title="Big Defend"
                  description="An open-source real-time Cybersecurity incident response system using Big Data."
                  :tags="['NumPy', 'Nmap', 'Requests', 'Scapy', 'Scikit-learn']"
                  link="https://github.com/adawatia/BigDefend"
                  class="transform hover:rotate-1"
              />
          </div>
        </section>

        <!-- Publications & Certs -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-32">
          <section class="lg:col-span-2">
             <h3 class="text-2xl md:text-3xl font-black cartoon-title mb-6 md:mb-8 flex items-center gap-3 md:gap-4">
              <div class="w-12 h-12 bg-pop-cyan rounded-lg border-3 border-black shadow-hard flex items-center justify-center text-white">
                <UIcon name="i-heroicons-document-text-solid" class="w-6 h-6" />
              </div>
              PUBLICATIONS
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PublicationCard 
                title="A Cloud-Based Telemedicine Platform: Enhancing Healthcare Accessibility through Technology"
                venue="IEEE Computer Society (IEEE Xplore)"
                type="Conference"
                date="December 2024"
                link="https://ieeexplore.ieee.org/abstract/document/10974157"
              />
               <PublicationCard 
                title="Efficient Parking & Toll Management: A RFID-Enabled Approach with Vega Aries Development Board"
                venue="International Journal of Innovative Science and Research Technology"
                type="Journal"
                date="November 2023"
                link="https://zenodo.org/records/10251059"
              />

            </div>
          </section>

          <section>
             <h3 class="text-2xl md:text-3xl font-black cartoon-title mb-6 md:mb-8 flex items-center gap-3 md:gap-4">
              <div class="w-12 h-12 bg-pop-yellow rounded-lg border-3 border-black shadow-hard flex items-center justify-center text-white">
                <UIcon name="i-heroicons-trophy-solid" class="w-6 h-6" />
              </div>
              CERTIFICATIONS
            </h3>
            <div class="cartoon-box p-6 bg-pop-yellow/10">
              <ul class="space-y-4">
                  <li class="flex items-center gap-3 font-bold text-sm">
                    <UTooltip ignore-non-keyboard-focus text="Verified Credential">
                       <div class="flex items-center gap-3 cursor-default">
                         <UIcon name="i-heroicons-check-badge-solid" class="w-5 h-5 text-pop-purple" /> Summer School on AI (UUST Russia)
                       </div>
                    </UTooltip>
                </li>
                <li class="flex items-center gap-3 font-bold text-sm">
                  <UTooltip ignore-non-keyboard-focus text="Verified Credential">
                     <div class="flex items-center gap-3 cursor-default">
                       <UIcon name="i-heroicons-check-badge-solid" class="w-5 h-5 text-pop-purple" /> AWS Cloud Architecting (AWS Academy)
                     </div>
                  </UTooltip>
                </li>
                <li class="flex items-center gap-3 font-bold text-sm">
                  <UTooltip ignore-non-keyboard-focus text="Verified Credential">
                     <div class="flex items-center gap-3 cursor-default">
                       <UIcon name="i-heroicons-check-badge-solid" class="w-5 h-5 text-pop-purple" /> ROBO AI Diamond Cert
                     </div>
                  </UTooltip>
                </li>
                <li class="flex items-center gap-3 font-bold text-sm">
                   <UTooltip ignore-non-keyboard-focus text="Verified Credential">
                     <div class="flex items-center gap-3 cursor-default">
                       <UIcon name="i-heroicons-check-badge-solid" class="w-5 h-5 text-pop-purple" /> Data Science using R (Chandigarh Univ)
                     </div>
                   </UTooltip>
                </li>
              </ul>
            </div>
          </section>
        </div>

         <!-- Blog -->
         <section id="blog" class="mb-16 md:mb-32">
            <h3 class="text-3xl md:text-4xl font-black cartoon-title mb-6 md:mb-10 flex items-center gap-3 md:gap-4">
               <div class="w-12 h-12 bg-pop-pink rounded-lg border-3 border-black shadow-hard flex items-center justify-center text-white">
                  <UIcon name="i-heroicons-pencil-square-solid" class="w-6 h-6" />
                </div>
              LATEST LOGS
            </h3>
            <div class="cartoon-box p-12 text-center bg-gray-50 border-dashed">
               <UIcon name="i-heroicons-cog-6-tooth-solid" class="w-16 h-16 mb-4 text-pop-pink" />
               <h4 class="text-2xl font-black mb-2">WRITING IN PROGRESS</h4>
               <p class="text-gray-600 mb-6">Compiling thoughts on Linux, Architecture, and Gaming benchmarks.</p>
               <UButton class="border-2 border-black" @click="handleNotify">Notify Me</UButton>
            </div>
         </section>
         
         <footer id="contact" class="border-t-3 border-black pt-12 md:pt-16 pb-24 md:pb-24 text-center bg-pop-pink/10 -mx-4 md:-mx-6 px-4 md:px-6 mt-12 md:mt-20">
              <div class="max-w-4xl mx-auto">
                  <h2 class="text-3xl md:text-5xl font-black cartoon-title mb-6 md:mb-8">WANNA COLLAB?</h2>
                  <p class="mb-6 md:mb-10 text-lg md:text-xl font-medium px-4">Have a cool idea? Let's make it happen!</p>
                  <a href="mailto:dv.adawatia@gmail.com" class="inline-block text-lg md:text-3xl font-black bg-white border-3 border-black shadow-[6px_6px_0px_0px_#000] px-4 md:px-8 py-3 md:py-4 hover:bg-pop-yellow hover:scale-105 transition-all transform rotate-2 hover:rotate-0 rounded-2xl break-all">
                      dv.adawatia@gmail.com
                  </a>
                  <div class="mt-6 md:mt-8 text-base md:text-xl font-bold flex flex-col gap-2">
                      <span>+91-8437330408</span>
                  </div>
                  
                  <div class="mt-12 md:mt-16 flex flex-col items-center gap-6 opacity-70 font-mono text-xs md:text-sm">
                      <div class="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
                          <span>© 2026 Adawatia</span>
                          <span>Built with Nuxt 4 & Fun</span>
                      </div>
                      <div class="flex flex-row justify-center gap-8 grayscale hover:grayscale-0 transition-all duration-300">
                          <UTooltip ignore-non-keyboard-focus text="Chat on WhatsApp">
                              <a href="https://wa.me/918437330408" target="_blank" rel="noopener noreferrer" class="block hover:scale-125 transition-transform">
                                  <UIcon name="i-logos-whatsapp-icon" class="w-6 h-6" />
                              </a>
                          </UTooltip>
                          <UTooltip ignore-non-keyboard-focus text="Connect on LinkedIn">
                              <a href="https://linkedin.com/in/adawatia" target="_blank" rel="noopener noreferrer" class="block hover:scale-125 transition-transform">
                                  <UIcon name="i-logos-linkedin-icon" class="w-6 h-6" />
                              </a>
                          </UTooltip>
                           <UTooltip ignore-non-keyboard-focus text="View Source Code">
                              <a href="https://github.com/adawatia/octopus" target="_blank" rel="noopener noreferrer" class="block hover:scale-125 transition-transform">
                                  <UIcon name="i-heroicons-code-bracket-square-solid" class="w-6 h-6 text-pop-purple" />
                              </a>
                          </UTooltip>
                           <UTooltip ignore-non-keyboard-focus text="Download Resume">
                              <a :href="resumeLink" download="Devansh-Sharma-Resume.pdf" class="block hover:scale-125 transition-transform">
                                  <UIcon name="i-heroicons-document-arrow-down-solid" class="w-6 h-6 text-pop-pink" />
                              </a>
                          </UTooltip>
                      </div>
                  </div>
              </div>
         </footer>

      </main>
    </div>
  </UApp>
</template>



<style>
html {
  scroll-behavior: smooth;
}
</style>
