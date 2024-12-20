'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Skeleton } from "@/components/ui/skeleton"
import { useState, useEffect } from "react"

export function AffiliateAccordion() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {
        return (
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="w-full">
                        <Skeleton className="h-12 w-full mb-2" />
                        <Skeleton className="h-20 w-full" />
                    </div>
                ))}
            </div>
        )
    }

    return (
      <Accordion 
        type="single" 
        collapsible 
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <AccordionItem 
          value="earning-potential" 
          className="border-b border-gray-200 dark:border-gray-700"
        >
          <AccordionTrigger className="text-base sm:text-lg hover:no-underline">
            How Can I Maximize My Affiliate Earnings?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base text-muted-foreground">
            Unlock your earning potential by leveraging our comprehensive tracking tools, 
            diverse product portfolio, and performance-based commission structures. 
            Our platform provides real-time analytics and strategic insights to help 
            you optimize your affiliate marketing efforts.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem 
          value="commission-structure" 
          className="border-b border-gray-200 dark:border-gray-700"
        >
          <AccordionTrigger className="text-base sm:text-lg hover:no-underline">
            What is the Commission Structure?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base text-muted-foreground">
            We offer tiered commission rates ranging from 10-30% based on your 
            performance. As you generate more sales, your commission percentage 
            increases. Top performers can access exclusive bonus programs and 
            higher commission brackets.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem 
          value="payment-methods" 
          className="border-b border-gray-200 dark:border-gray-700"
        >
          <AccordionTrigger className="text-base sm:text-lg hover:no-underline">
            How and When Do I Get Paid?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base text-muted-foreground">
            We provide multiple payment options including PayPal, bank transfer, 
            and cryptocurrency. Payments are processed monthly with a low 
            $50 minimum payout threshold. Choose your preferred method and 
            receive timely, transparent earnings.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem 
          value="tracking-support" 
          className="border-b border-gray-200 dark:border-gray-700"
        >
          <AccordionTrigger className="text-base sm:text-lg hover:no-underline">
            How Reliable is Your Tracking System?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base text-muted-foreground">
            Our advanced tracking technology ensures 99.9% accuracy in 
            attributing sales. We use multi-touch tracking, provide detailed 
            conversion reports, and offer 30-day cookie duration to maximize 
            your earning potential.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem 
          value="marketing-resources" 
          className="border-b border-gray-200 dark:border-gray-700"
        >
          <AccordionTrigger className="text-base sm:text-lg hover:no-underline">
            What Marketing Resources Are Available?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base text-muted-foreground">
            Access a comprehensive resource library including marketing 
            materials, banner ads, email templates, landing pages, and 
            strategic guides. Our dedicated affiliate support team provides 
            personalized coaching to accelerate your success.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem 
          value="getting-started" 
          className="border-b-0"
        >
          <AccordionTrigger className="text-base sm:text-lg hover:no-underline">
            How Do I Get Started as an Affiliate?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base text-muted-foreground">
            Getting started is simple: Create an account, complete your 
            profile, choose your preferred products, and start promoting. 
            Our onboarding process includes a welcome bonus and immediate 
            access to your personalized affiliate dashboard.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
}

export default AffiliateAccordion