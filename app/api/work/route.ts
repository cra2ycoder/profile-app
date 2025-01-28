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
            'Leading a design team to craft professional <span class="text-white font-bold">User Interfaces (UI)</span> and deliver exceptional <span class="text-white font-bold">User experiences (UX)</span> for web applications and mobile apps, leveraging tools like <span class="text-white font-bold">Adobe Photoshop, Adobe XD, and Figma.</span>',
            'Designing <span class="text-white font-bold">UI/UX components</span> following the <span class="text-white font-bold">Atomic Design Methodology</span> for consistency and scalability.',
            'Creating wireframes, prototypes, and conducting design reviews to ensure alignment with user and business needs.',
            'Developing design and video presentations to promote multiple products from a sales perspective.',
            'Collaborating with the BA team to elicit requirements and executing them within Agile sprints.',
            'Exploring design alternatives, conducting technical feasibility analyses, and implementing effective solutions.',
            'Building automation tools to reduce development effort and improve efficiency.',
            'Facilitating daily stand-ups, pair programming, and live coding sessions to maintain team productivity and collaboration.',
            'Mentoring and managing a diverse team, from fresh graduates to experienced professionals, fostering skill development and teamwork.',
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
