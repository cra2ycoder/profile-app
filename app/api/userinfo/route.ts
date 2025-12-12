'use server'

import { NextResponse } from 'next/server'

// <span class="dark:text-white text-black font-bold underline ">
export async function GET() {
  return NextResponse.json(
    {
      data: {
        name: 'Mohanraj Rangasamy',
        role: [
          'Fullstack Developer',
          'JS / TS, Node.js, SQL, Fastify, Next.js, React.js, React Query, Jest, Cypress',
          'MFE',
        ],
        description: `Fullstack Developer & UI/UX Designer with <hlt>16 years of experience (8 years in each)</hlt>, specializing in responsive, user-friendly, and <hlt>microfrontend-based web applications</hlt>. Proficient in <hlt>JavaScript, TypeScript, React.js, SQL, Fastify, Next.js, Node.js, Jest and TanStack React Query</hlt>, with expertise in performance, accessibility, and seamless UX. Skilled in <hlt>Figma, Sketch, Adobe Photoshop, and XD</hlt>, bridging design and development. Passionate about clean code, optimization, and staying ahead of web trends.`,
        phoneNumber: '+(91) 770 829 629 5',
        email: 'mohanraj.dev.6789@gmail.com',
        location: 'Bangalore, Karnataka',
      },
    },
    { status: 200 }
  )
}
