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