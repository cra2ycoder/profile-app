'use server'

import { NextResponse } from 'next/server'

// <span class="dark:text-white text-black font-bold underline ">
export async function GET() {
  return NextResponse.json(
    {
      data: {
        name: 'Mohanraj Rangasamy',
        role: [
          'Frontend Architect',
          'JS / TS, Node.js, Next.js, React.js, React Query, Cypress',
          'MFE',
        ],
        description: `Frontend Developer (7+ years) & UI/UX Designer (8 years) with extensive experience in building responsive, user-friendly web applications in the recruiting industry. Proficient in <hlt>JavaScript, TypeScript, Node.js, React.js, Next.js, and TanStack React Query</hlt>, with a strong focus on performance, accessibility, and seamless user experiences. Skilled in <hlt>Figma, Sketch, Adobe Photoshop, and XD</hlt>, bridging design and development. Passionate about clean code, optimization, and staying ahead of web development trends.`,
        phoneNumber: '+(91) 770 829 629 5',
        email: 'mohanraj.dev.6789@gmail.com',
        location: 'Bangalore, Karnataka',
      },
    },
    { status: 200 }
  )
}
