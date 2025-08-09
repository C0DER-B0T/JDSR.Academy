'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useMotionVariants } from './MotionProvider'
import { ReadingProgress } from './ReadingProgress'

const blogPosts = [
  {
    id: 1,
    title: 'UPSC CSE 2024 Notification Released - Important Dates & Eligibility',
    excerpt: 'The Union Public Service Commission has released the official notification for Civil Services Examination 2024. Here are the key details you need to know...',
    content: `
      The Union Public Service Commission (UPSC) has officially released the notification for Civil Services Examination 2024. This is one of the most prestigious examinations in India, offering opportunities to serve in various government departments.

      **Important Dates:**
      - Application Start Date: February 14, 2024
      - Application End Date: March 5, 2024
      - Preliminary Exam: May 26, 2024
      - Main Exam: September 20, 2024 (tentative)

      **Eligibility Criteria:**
      - Age Limit: 21-32 years (relaxation for reserved categories)
      - Educational Qualification: Bachelor's degree from recognized university
      - Nationality: Indian citizen

      **Vacancy Details:**
      - Total Vacancies: 1056 posts
      - IAS: 180 posts
      - IPS: 200 posts
      - IFS: 40 posts
      - Other services: 636 posts

      **Preparation Strategy:**
      1. Focus on NCERT books for basic concepts
      2. Read newspapers daily for current affairs
      3. Practice previous year papers
      4. Join our WhatsApp group for regular updates
      5. Subscribe to our YouTube channel for video lectures

      **How to Apply:**
      - Visit upsconline.nic.in
      - Register and fill the application form
      - Upload required documents
      - Pay the application fee
      - Submit the form before the deadline

      Stay connected with us for more updates and preparation guidance!
    `,
    author: 'Monika Singh',
    date: '2024-02-15',
    category: 'UPSC',
    readTime: '5 min read',
    image: '/images/blog/upsc-2024.jpg',
    tags: ['UPSC', 'CSE', 'Government Jobs', 'Exam Notification']
  },
  {
    id: 2,
    title: 'Best Study Materials for Banking Exams - Complete Guide 2024',
    excerpt: 'Looking for the best study materials for banking examinations? Here\'s a comprehensive guide covering all the essential books and resources...',
    content: `
      Banking examinations are among the most competitive government job tests in India. With proper preparation and the right study materials, you can crack these exams successfully.

      **Essential Study Materials:**

      **Quantitative Aptitude:**
      - R.S. Aggarwal - Quantitative Aptitude
      - Arun Sharma - How to Prepare for Quantitative Aptitude
      - Fast Track Objective Arithmetic by Rajesh Verma

      **Reasoning Ability:**
      - R.S. Aggarwal - A Modern Approach to Verbal & Non-Verbal Reasoning
      - Arihant - Reasoning Book
      - Kiran Prakashan - Reasoning

      **English Language:**
      - Wren & Martin - High School English Grammar
      - S.P. Bakshi - Objective General English
      - Norman Lewis - Word Power Made Easy

      **General Awareness:**
      - Lucent General Knowledge
      - Arihant - General Knowledge
      - Manorama Yearbook

      **Computer Knowledge:**
      - Arihant - Computer Awareness
      - Lucent - Computer

      **Preparation Tips:**
      1. Start with basic concepts
      2. Practice daily mock tests
      3. Focus on speed and accuracy
      4. Stay updated with current affairs
      5. Join our Telegram channel for daily updates

      **Recommended Study Plan:**
      - Morning: Quantitative Aptitude (2 hours)
      - Afternoon: Reasoning (2 hours)
      - Evening: English & GK (1 hour)
      - Night: Mock tests and revision

      Remember, consistency is the key to success in banking examinations!
    `,
    author: 'Monika Singh',
    date: '2024-02-10',
    category: 'Banking',
    readTime: '7 min read',
    image: '/images/blog/banking-study.jpg',
    tags: ['Banking', 'Study Materials', 'Exam Preparation', 'Books']
  },
  {
    id: 3,
    title: 'Railway Recruitment 2024 - New Vacancies Announced',
    excerpt: 'Indian Railways has announced new vacancies for various posts. Check the complete details including eligibility, salary, and application process...',
    content: `
      Indian Railways has released a new notification for recruitment to various posts. This is a great opportunity for candidates looking for government jobs in the railway sector.

      **Vacancy Details:**
      - Total Posts: 15,000+
      - Posts: Group D, Technician, Clerk, Station Master
      - Salary: Rs. 18,000 - 56,900 per month
      - Job Location: All India

      **Eligibility Criteria:**
      - Age Limit: 18-33 years
      - Educational Qualification: 10th/12th/Graduation (as per post)
      - Physical Standards: As per railway norms

      **Important Dates:**
      - Notification Date: February 1, 2024
      - Application Start: February 15, 2024
      - Application End: March 15, 2024
      - Exam Date: May 2024 (tentative)

      **Selection Process:**
      1. Computer Based Test (CBT)
      2. Physical Efficiency Test (PET)
      3. Medical Examination
      4. Document Verification

      **Syllabus:**
      - General Awareness
      - Mathematics
      - General Intelligence & Reasoning
      - General Science

      **Application Fee:**
      - General/OBC: Rs. 500
      - SC/ST/EWS: Rs. 250
      - Female/Minority: Rs. 250

      **How to Apply:**
      1. Visit rrcb.gov.in
      2. Register with valid email and mobile
      3. Fill application form
      4. Upload documents
      5. Pay application fee
      6. Submit application

      **Preparation Tips:**
      - Focus on previous year papers
      - Practice time management
      - Stay updated with railway news
      - Join our WhatsApp group for updates

      Don't miss this opportunity! Start your preparation today.
    `,
    author: 'Monika Singh',
    date: '2024-02-05',
    category: 'Railway',
    readTime: '6 min read',
    image: '/images/blog/railway-recruitment.jpg',
    tags: ['Railway', 'Recruitment', 'Government Jobs', 'Vacancy']
  }
]

export function NewsPage() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null)
  const [readingProgress, setReadingProgress] = useState(0)
  const variants = useMotionVariants()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setReadingProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-primary-black py-20">
      <ReadingProgress progress={readingProgress} />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={variants.fadeIn}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold font-poppins mb-6"
            variants={variants.slideInLeft}
          >
            Latest <span className="text-gradient">News</span> & Updates
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={variants.slideInRight}
          >
            Stay updated with the latest government job notifications, exam updates, 
            and expert preparation tips from JDSR Academy.
          </motion.p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={variants.staggerContainer}
          initial="initial"
          animate="animate"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="card cursor-pointer group"
              variants={variants.staggerItem}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedPost(post)}
            >
              {/* Post Image */}
              <div className="aspect-video bg-gradient-to-br from-glitter-gold/20 to-slight-blue/20 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-4xl">📰</div>
              </div>

              {/* Post Meta */}
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="bg-glitter-gold/20 text-glitter-gold px-2 py-1 rounded">
                  {post.category}
                </span>
                <span>{post.readTime}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>

              {/* Post Title */}
              <h2 className="text-xl font-bold text-white mb-4 group-hover:text-glitter-gold transition-colors">
                {post.title}
              </h2>

              {/* Post Excerpt */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Post Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-card-dark border border-gray-700 text-gray-400 px-2 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-6 h-6 bg-glitter-gold/20 rounded-full flex items-center justify-center text-xs text-glitter-gold">
                  MS
                </div>
                <span>By {post.author}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="card text-center max-w-2xl mx-auto"
          variants={variants.scaleIn}
          initial="initial"
          animate="animate"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-300 mb-6">
            Get the latest government job notifications and preparation tips directly in your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="form-input flex-1"
            />
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Modal for Full Post */}
      {selectedPost && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPost(null)}
        >
          <motion.div
            className="bg-card-dark border border-gray-800 rounded-xl p-6 max-w-4xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-white">{selectedPost.title}</h2>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                {selectedPost.content}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
