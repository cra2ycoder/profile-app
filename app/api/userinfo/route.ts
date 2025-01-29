'use server'

import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    {
      data: {
        name: 'Mohanraj Rangasamy',
        description: `Front-End Developer with 7+ years of experience building responsive,
          user-friendly websites in the recruiting industry. Proficient in <span class="dark:text-white text-black ml-1 font-bold underline">
            HTML5, CSS3, JavaScript, TypeScript, Node.js, React.js, and Next.js
          </span>, with a passion for creating seamless, accessible user experiences.
          Skilled in Adobe Photoshop and XD, bridging design and development.
          Dedicated to clean code, performance optimization, and staying ahead
          of web development trends.`,
        phoneNumber: '+(91) 770 829 629 5',
        email: 'mohanraj.dev.6789@gmail.com',
        location: 'Bangalore, Karnataka',
      },
    },
    { status: 200 }
  )
}
