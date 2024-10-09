"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-primary">
              WebDevMastery
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link
                href="#features"
                className="text-muted-foreground hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#testimonials"
                className="text-muted-foreground hover:text-primary"
              >
                Testimonials
              </Link>
              <Link
                href="#pricing"
                className="text-muted-foreground hover:text-primary"
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="text-muted-foreground hover:text-primary"
              >
                FAQ
              </Link>
            </div>
            <div className="hidden md:block">
              <Button>Enroll Now</Button>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="#features"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Features
                  </Link>
                  <Link
                    href="#testimonials"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="#pricing"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="#faq"
                    className="text-muted-foreground hover:text-primary"
                  >
                    FAQ
                  </Link>
                  <Button className="w-full">Enroll Now</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Master Web Development in 12 Weeks
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Learn to build modern, responsive websites and web applications from
            scratch
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button size="lg" className="text-lg px-8 py-6">
              Enroll Now - Limited Spots Available!
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            {...fadeIn}
          >
            What You'll Learn
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "HTML5 & CSS3",
                description: "Build the structure and style of modern websites",
              },
              {
                title: "JavaScript & ES6+",
                description: "Create interactive and dynamic web applications",
              },
              {
                title: "React & Next.js",
                description:
                  "Develop powerful, scalable front-end applications",
              },
              {
                title: "Node.js & Express",
                description: "Build robust back-end services and APIs",
              },
              {
                title: "Database & ORM",
                description: "Work with databases using modern ORM tools",
              },
              {
                title: "Deployment & DevOps",
                description: "Deploy and manage your applications in the cloud",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            {...fadeIn}
          >
            What Our Students Say
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah L.",
                quote:
                  "This course completely transformed my career. I went from a complete beginner to landing a job as a junior developer in just 6 months!",
              },
              {
                name: "Michael R.",
                quote:
                  "The instructors are top-notch, and the curriculum is constantly updated with the latest industry trends. Highly recommended!",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <p className="italic mb-4">"{testimonial.quote}"</p>
                    <p className="font-semibold">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 className="text-3xl font-bold mb-12" {...fadeIn}>
            Invest in Your Future
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Full Web Development Course
                </CardTitle>
                <CardDescription>
                  12 Weeks of Intensive Training
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold mb-4">$1,999</p>
                <ul className="text-left space-y-2 mb-6">
                  <li>✅ 60+ hours of video content</li>
                  <li>✅ 12 weekly live Q&A sessions</li>
                  <li>✅ Personal mentor support</li>
                  <li>✅ Real-world projects for your portfolio</li>
                  <li>✅ Job placement assistance</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg">
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            {...fadeIn}
          >
            Frequently Asked Questions
          </motion.h2>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            {[
              {
                question: "Is this course suitable for beginners?",
                answer:
                  "Our course is designed to take you from zero to hero, no prior experience required. We start with the basics and gradually build up to more advanced concepts, ensuring that even complete beginners can follow along and succeed.",
              },
              {
                question: "How much time do I need to dedicate per week?",
                answer:
                  "We recommend setting aside 15-20 hours per week for the best results. This includes time for watching video lessons, completing exercises, working on projects, and attending live Q&A sessions. However, the course is flexible, and you can adjust your pace based on your schedule and learning style.",
              },
              {
                question: "Is there a money-back guarantee?",
                answer:
                  "Yes, we offer a 14-day money-back guarantee. If you're not satisfied with the course content or find that it's not the right fit for you, you can request a full refund within the first 14 days of your enrollment. No questions asked!",
              },
              {
                question: "Will I receive a certificate upon completion?",
                answer:
                  "Yes, you'll receive a certificate of completion that you can share with potential employers or on your LinkedIn profile. This certificate demonstrates your commitment to learning and the skills you've acquired throughout the course.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 className="text-3xl font-bold mb-6" {...fadeIn}>
            Ready to Start Your Web Development Journey?
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Join thousands of successful graduates and transform your career
            today!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button size="lg" className="text-lg px-8 py-6">
              Enroll Now and Save 20% - Limited Time Offer!
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Web Dev Mastery Course. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/terms" className="text-primary hover:underline mr-4">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
