"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { imagePaths } from "@/app/lib/image-paths"

const testimonials = [
  {
    id: 1,
    name: "Sarah Thompson",
    role: "Business Owner",
    image: imagePaths.testimonials.client1,
    quote:
      "Meridian Law Group provided exceptional guidance during our company's merger. Their attention to detail and strategic advice saved us from potential legal pitfalls.",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Family Law Client",
    image: imagePaths.testimonials.client2,
    quote:
      "During my difficult divorce, the attorneys at Meridian showed both compassion and fierce advocacy. They helped me secure a fair settlement and custody arrangement.",
  },
  {
    id: 3,
    name: "Jennifer Chen",
    role: "Real Estate Developer",
    image: imagePaths.testimonials.client3,
    quote:
      "I've worked with Meridian Law on multiple property developments. Their expertise in real estate law and negotiation skills have been invaluable to my business.",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }

  const prev = () => {
    setCurrent((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 flex items-center justify-between"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
          onClick={prev}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
          onClick={next}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="relative overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4 flex items-center">
                    <Quote className="mr-2 h-8 w-8 text-primary opacity-70" />
                  </div>
                  <p className="mb-6 text-lg italic text-muted-foreground">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image || "/placeholder.svg?height=48&width=48"}
                        alt={`Portrait of ${testimonial.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${current === index ? "bg-primary" : "bg-muted-foreground/30"}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
