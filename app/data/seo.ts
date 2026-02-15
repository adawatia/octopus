export const seoData = [
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
