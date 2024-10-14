'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Car, Users, Clock, MapPin, CreditCard, PhoneCall, Shield, Fuel } from 'lucide-react'
import { createClient } from '@supabase/supabase-js'


// Initialize Supabase client
const supabase = createClient('https://scbwxiptrfhlfucvcqsr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjYnd4aXB0cmZobGZ1Y3ZjcXNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4NzIxNDUsImV4cCI6MjAzNDQ0ODE0NX0.oPWlIurNskQ24ZoXgzdZrCnxZ2Pvu-GTQEDiT6J-dus')

export function LandingPageComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const { data, error } = await supabase
        .from('eltigre_customers')
        .insert([formData])

      if (error) throw error

      console.log('Form submitted:', data)
      setFormData({ name: '', email: '', phone: '', message: '' })
      alert('Thank you for your inquiry! We will get back to you soon.')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your inquiry. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <section className="bg-yellow-400 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/elr-fUJX5KukvVlMW7BOvTzDRwouNzGWVF.jpg"
              alt="El Tigre Logo"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">El Tigre Car Rental</h1>
            <p className="text-xl md:text-2xl text-black mb-6">PRICE STARTS AT 1,000 ₱</p>
            <p className="text-2xl md:text-3xl font-semibold text-black mb-8">Need a ride with a driver? BOOK with us NOW!</p>
            <Button className="bg-black text-yellow-400 hover:bg-gray-800 text-lg py-2 px-6">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Car className="mr-2 h-5 w-5" /> Wide Range of Vehicles
                </CardTitle>
              </CardHeader>
              <CardContent>
                Choose from our diverse fleet of well-maintained vehicles to suit your needs.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" /> Professional Drivers
                </CardTitle>
              </CardHeader>
              <CardContent>
                Our experienced and courteous drivers ensure a safe and comfortable journey.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" /> 24/7 Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                Book a ride anytime, day or night. We're always here for you.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" /> Flexible Pick-up & Drop-off
                </CardTitle>
              </CardHeader>
              <CardContent>
                We offer convenient pick-up and drop-off locations across the Philippines.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="mr-2 h-5 w-5" /> Easy Payment Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                Multiple payment methods available for your convenience, including cash and cards.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PhoneCall className="mr-2 h-5 w-5" /> 24/7 Customer Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                Our dedicated support team is always ready to assist you with any queries or issues.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" /> Comprehensive Insurance
                </CardTitle>
              </CardHeader>
              <CardContent>
                Travel with peace of mind knowing that all our vehicles are fully insured.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Fuel className="mr-2 h-5 w-5" /> Fuel-Efficient Fleet
                </CardTitle>
              </CardHeader>
              <CardContent>
                Our vehicles are regularly maintained to ensure optimal fuel efficiency and performance.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="bg-yellow-400 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Request a Booking</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500 text-lg py-2">
                  Book Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-yellow-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 El Tigre Car Rental. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}