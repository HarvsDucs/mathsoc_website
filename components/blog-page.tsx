'use client'


import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Twitter, Github, Linkedin, Rss, Mail, Sun, Search } from 'lucide-react'
import { useState } from "react";

export function BlogPageComponent() {
  const [filter, setFilter] = useState('')
  const [sortBy, setSortBy] = useState('latest')

  const posts = [
    {
      id: 1,
      title: "How I made a note sharing app on v0.dev",
      excerpt: "In today's fast-paced tech world, developers are constantly seeking ways to streamline their workflow and bring ideas to life quickly. Enter v0.dev, an AI-powered development assistant that's revolutionizing the way we build web applications. This to...",
      image: "/placeholder.svg?height=400&width=600",
      author: "Harvey Ducay",
      readTime: "2 min read",
      category: "Tutorial"
    },
    {
      id: 2,
      title: "How I made a Morningside AI landing page clone using v0.dev",
      excerpt: "Discover how I recreated the Morningside AI landing page using v0.dev, showcasing the power of AI-assisted development.",
      image: "/placeholder.svg?height=200&width=300",
      author: "Harvey Ducay",
      readTime: "2 min read",
      category: "Case Study"
    },
    {
      id: 3,
      title: "Step-by-Step Guide to Creating a Snake Game with v0.dev",
      excerpt: "Learn how to create a classic Snake game using v0.dev's AI-powered development tools.",
      image: "/placeholder.svg?height=200&width=300",
      author: "Harvey Ducay",
      readTime: "2 min read",
      category: "Tutorial"
    },
    {
      id: 4,
      title: "How to Deploy v0.dev Generations to Vercel: A Step-by-Step Guide",
      excerpt: "A comprehensive guide on deploying your v0.dev generated projects to Vercel for seamless hosting and continuous deployment.",
      image: "/placeholder.svg?height=200&width=300",
      author: "Harvey Ducay",
      readTime: "3 min read",
      category: "Guide"
    },
  ]

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(filter.toLowerCase()) ||
    post.category.toLowerCase().includes(filter.toLowerCase())
  ).sort((a, b) => {
    if (sortBy === 'latest') return b.id - a.id
    if (sortBy === 'oldest') return a.id - b.id
    return 0
  })

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-blue-900 text-white sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold">The v0.dev Hub</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="#" className="hover:text-yellow-400 transition-colors">Home</Link></li>
                <li><Link href="#" className="hover:text-yellow-400 transition-colors">Newsletter</Link></li>
                <li><Link href="#" className="hover:text-yellow-400 transition-colors">Members</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-64">
            <Input
              type="text"
              placeholder="Filter posts..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <Select
            value={sortBy}
            onValueChange={setSortBy}
          >
            <Select.Trigger className="w-full md:w-48 border border-gray-300">
              <Select.Value placeholder="Sort by" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="latest">Latest</Select.Item>
              <Select.Item value="oldest">Oldest</Select.Item>
            </Select.Content>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post, index) => (
            <div key={post.id} className={index === 0 ? "col-span-full" : ""}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={index === 0 ? 600 : 300}
                  height={index === 0 ? 400 : 200}
                  className="w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-blue-900">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      alt={post.author}
                      width={32}
                      height={32}
                      className="rounded-full mr-2"
                    />
                    <span>{post.author}</span>
                    <span className="mx-2">·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-blue-900 text-white mt-12 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 The v0.dev Hub. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-yellow-400 transition-colors">Archive</Link>
              <Link href="#" className="hover:text-yellow-400 transition-colors">Privacy policy</Link>
              <Link href="#" className="hover:text-yellow-400 transition-colors">Terms</Link>
            </div>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <Twitter className="w-5 h-5 hover:text-yellow-400 cursor-pointer" />
            <Github className="w-5 h-5 hover:text-yellow-400 cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-yellow-400 cursor-pointer" />
            <Rss className="w-5 h-5 hover:text-yellow-400 cursor-pointer" />
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 flex space-x-2">
        <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
          <Mail className="w-4 h-4 mr-2" />
          Follow
        </Button>
        <Button variant="outline" className="bg-white text-blue-900 border-blue-900 hover:bg-blue-100">
          <Sun className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}