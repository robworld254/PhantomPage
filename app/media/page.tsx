"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Instagram, TikTok } from 'lucide-react'
import { Button } from "@/components/ui/button"

// This would be replaced with actual API calls to Instagram and TikTok
const mockPosts = [
  { id: 1, type: 'instagram', imageUrl: '/instagram-post-1.jpg', likes: 1234, comments: 56 },
  { id: 2, type: 'tiktok', videoUrl: '/tiktok-video-1.mp4', likes: 5678, comments: 90 },
  { id: 3, type: 'instagram', imageUrl: '/instagram-post-2.jpg', likes: 2345, comments: 78 },
  { id: 4, type: 'tiktok', videoUrl: '/tiktok-video-2.mp4', likes: 6789, comments: 12 },
  // Add more mock posts as needed
]

export default function Media() {
  const [posts, setPosts] = useState(mockPosts)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    // In a real application, you would fetch posts from Instagram and TikTok APIs here
  }, [])

  const filteredPosts = posts.filter(post => filter === 'all' || post.type === filter)

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-center mb-8"
        >
          Our Social Media
        </motion.h1>
        <div className="flex justify-center space-x-4 mb-8">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
          >
            All
          </Button>
          <Button
            variant={filter === 'instagram' ? 'default' : 'outline'}
            onClick={() => setFilter('instagram')}
          >
            <Instagram className="w-4 h-4 mr-2" />
            Instagram
          </Button>
          <Button
            variant={filter === 'tiktok' ? 'default' : 'outline'}
            onClick={() => setFilter('tiktok')}
          >
            <TikTok className="w-4 h-4 mr-2" />
            TikTok
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg shadow-lg overflow-hidden"
            >
              {post.type === 'instagram' ? (
                <img src={post.imageUrl} alt="Instagram post" className="w-full h-64 object-cover" />
              ) : (
                <video src={post.videoUrl} className="w-full h-64 object-cover" controls />
              )}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.likes} likes</span>
                  <span className="text-sm text-muted-foreground">{post.comments} comments</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

