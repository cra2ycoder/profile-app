'use server'

import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    {
      data: [
        {
          logo: 'https://cra2ycoder.sirv.com//logos/logo_infy.jpg',
          name: 'Infosys Equinox',
          role: 'Architect EQ',
          duration: 'present - 2019',
          responsibilities: [
            'Leading a development team to build interactive, dynamic, and scalable web applications using a modern tech stack: <span class="text-white font-bold">JavaScript (ES6+), React.js with Hooks, TypeScript, Next.js, HTML5, CSS3, and tools like TanStack React Query, Express.js, i18next, Webpack, Storybook, and Docsify.</span>',
            'Designing and implementing <span class="text-white font-bold">Micro-Frontend (MFE) architecture</span> for modular and scalable web applications.',
            'Setting up CICD pipelines to streamline builds and deployments across multiple environments.',
            'Conducting daily stand-ups, pair programming, live coding sessions, and ensuring smooth collaboration among team members.',
            'Performing code reviews, managing merges, and overseeing deployment processes.',
            'Identifying design alternatives, evaluating technical feasibility, and troubleshooting technical issues.',
            'Crafting detailed flow diagrams, architecture diagrams, and documentation to align the team with business objectives.',
            'Driving a team with a mix of fresh graduates and experienced professionals, mentoring and fostering growth.',
            'Building UI/UX components following the <span class="text-white font-bold">Atomic Design Methodology</span>, ensuring consistency and reusability.',
          ],
        },
        {
          logo: 'https://cra2ycoder.sirv.com//logos/logo_skava.png',
          name: 'Skava an Infosys',
          role: 'Creative Manager',
          duration: '2009 - 2019',
          responsibilities: [
            'Leading a design team to build professional user interfaces (UI) with best user experiences (UX) defined by use of software tools: <span class="text-white font-bold">Adobe Photoshop, Adobe XD, and Figma.</span>',
            'Designing UI/UX components based on the <span class="text-white font-bold">Atomic Design Methodology</span>.',
            'Creating the wire-frames',
            'Designs & prototype reviews',
            'Creating the design & video presentation for multiple products to promote them for sales perspective.',
            'Elicit requirements from BA team and executing in Agile sprints',
            'Identify design alternatives and conduct technical feasibility.',
            'Building automation tools for reducing the development and developer efforts',
            'Conducting daily stand-ups, pair programming, live coding sessions, and ensuring smooth collaboration among team members.',
            'Driving team which includes from fresh college grads to experienced laterals.',
          ],
          styles: {
            backgroundColor: 'black',
          },
        },
      ],
    },
    { status: 200 }
  )
}
