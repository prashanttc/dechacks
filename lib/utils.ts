import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const problemstatement =[
  {
    "id":1,
  "domain":"Personal Portfolio Website Builder ",
  "statement":" Create a simple web application that allows users to build and customize their personal portfolio website without needing to code. Users can choose from pre-designed templates, add their information, and download the HTML/CSS files."
  },
  {
    "id":2,
  "domain":"Mobile-Based Smart Expense Splitter ",
  "statement":"Managing shared expenses can be difficult, leading to confusion and miscalculations. A mobile-based expense splitter will simplify this process by allowing users to quickly add expenses, divide costs, and track payments efficiently."
  },
  {
    "id":3,
  "domain":"Voting System",
  "statement":"Create a simple blockchain-based voting system where users can vote for their favorite option. The system should ensure transparency and immutability of votes."
  },
  {
    "id":4,
  "domain":"AI-Powered Career Counseling System",
  "statement":"Many students and professionals struggle to choose the right career path. An AI-driven career counseling system can provide guidance based on skills, interests, and industry trends."
  },
]
export const faqs =[
  {
       'value':"item-1",
       'trigger':"Who can participate in Dev Hacks?",
       'content':"Anyone currently enrolled in any college and degree is welcome!"
  },
  {
       'value':"item-2",
       'trigger':"Do I need a team to participate?",
       'content':"Yes! Team work makes the dream work and you’d need a team of at least 2 members, with a maximum of 5."
  },
  {
       'value':"item-3",
       'trigger':"Is there a registration fee?",
       'content':"Yes, the registration fee is ₹500 per team."
  },
  {
       'value':"item-4",
       'trigger':"What’s the duration of the hackathon?",
       'content':"It's an 8-hour sprint to build and showcase your project."
  },
  {

       'value':"item-5",
       'trigger':"Will there be mentors?",
       'content':" Yes! Industry experts and experienced developers will be around to guide you."
  },
  {
       'value':"item-6",
       'trigger':"What if I’ve never been to a hackathon before?",
       'content':"Perfect! Dev Hacks is beginner-friendly, and you’ll learn a lot along the way."
  },
  {
       'value':"item-7",
       'trigger':"What’s in it for me?",
       'content':" Apart from the ₹30,000 prize pool, you’ll gain experience, connections, and a killer project for your portfolio."
  },
  {
       'value':"item-8",
       'trigger':"How do I register?",
       'content':"Register on Unstop here and secure your spot!🚀"
  },
]

export const socials = [
  {
    name: 'twitter',
    url: '/twitter.svg',
     link:'https://x.com/devsociety_CDGI'
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
    link:'https://www.linkedin.com/company/echelondevsociety/'
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
    link:'https://www.instagram.com/echelondevsociety/'
  },
];