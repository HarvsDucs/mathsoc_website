'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Users, BookOpen, Mail } from 'lucide-react'

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-900 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ljYpWZspIIX3lcV7bDtsL7E6xNOInh.png"
              alt="FEU Mathematics Society Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-lg">FEU Math Society</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-yellow-300 transition-colors">About</a></li>
              <li><a href="#events" className="hover:text-yellow-300 transition-colors">Events</a></li>
              <li><a href="#resources" className="hover:text-yellow-300 transition-colors">Resources</a></li>
              <li><a href="#members" className="hover:text-yellow-300 transition-colors">Members</a></li>
              <li><a href="#contact" className="hover:text-yellow-300 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover the Power of Mathematics</h1>
              <p className="text-xl mb-8">Join FEU Mathematics Society and unlock your potential in the world of numbers and logic.</p>
              <div className="flex space-x-4">
                <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-500 font-semibold px-6 py-3 rounded-full">
                  Join Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold px-6 py-3 rounded-full">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Mathematics Illustration"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">About Us</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-700 mb-6">
                  FEU Mathematics Society is the official academic organization of BS Applied Mathematics students in Far Eastern University Manila. We are dedicated to fostering a community of passionate mathematics enthusiasts and future mathematicians.
                </p>
                <p className="text-gray-700">
                  Our mission is to enhance our members' academic experience through various activities, events, and resources that promote mathematical thinking and problem-solving skills.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Goals</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Promote the love for mathematics among students</li>
                  <li>Provide academic support and resources</li>
                  <li>Organize events that challenge and inspire</li>
                  <li>Foster collaboration and networking opportunities</li>
                  <li>Prepare members for future careers in mathematics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Upcoming Events</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Annual Math Olympiad", date: "March 15, 2024", description: "Test your skills in our competitive mathematics challenge." },
                { title: "Guest Lecture Series", date: "April 5, 2024", description: "Learn from industry experts and renowned mathematicians." },
                { title: "Math Tutoring Sessions", date: "Every Saturday", description: "Get help with your math courses from our experienced tutors." }
              ].map((event, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <Calendar className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-2">{event.date}</p>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="resources" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Resources</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">Study Materials</h3>
                <p className="text-gray-700 mb-4">Access our comprehensive collection of math resources, including textbooks, problem sets, and study guides.</p>
                <Button className="bg-blue-600 text-white hover:bg-blue-700">Browse Materials</Button>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">Peer Tutoring</h3>
                <p className="text-gray-700 mb-4">Get help from fellow students or volunteer to tutor others in various mathematics subjects.</p>
                <Button className="bg-blue-600 text-white hover:bg-blue-700">Join Tutoring Program</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="members" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Members</h2>
            <div className="text-center mb-8">
              <p className="text-gray-700 max-w-2xl mx-auto">
                Our society is made up of passionate mathematics students from diverse backgrounds. Here's what some of our members have to say:
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Alex Doe", year: "3rd Year", quote: "Joining the Math Society has been the highlight of my university experience!" },
                { name: "Sam Smith", year: "2nd Year", quote: "The support and resources provided by the society have greatly improved my understanding of complex mathematical concepts." },
                { name: "Jamie Lee", year: "4th Year", quote: "The networking opportunities through the society have opened doors for my future career in mathematics." }
              ].map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-20 h-20 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">{member.name[0]}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.year}</p>
                  <p className="text-gray-700 italic">"{member.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="max-w-md mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-blue-600 mr-3" />
                <p>mathsociety@feu.edu.ph</p>
              </div>
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                <p>Follow us: @FEUMathSociety</p>
              </div>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" />
                <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded" />
                <textarea placeholder="Your Message" rows={4} className="w-full p-2 border border-gray-300 rounded"></textarea>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ljYpWZspIIX3lcV7bDtsL7E6xNOInh.png"
                alt="FEU Mathematics Society Logo"
                width={50}
                height={50}
                className="rounded-full mb-2"
              />
              <p>&copy; 2024 FEU Mathematics Society. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}