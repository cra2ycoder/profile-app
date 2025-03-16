'use server'

import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    {
      data: [
        {
          logo: 'https://cra2ycoder.sirv.com//logos/logo_infy.jpg',
          name: 'Infosys Equinox',
          role: 'Architect EQ',
          duration: 'August 2020 - Present',
          responsibilities: [
            'Leading a development team of 40+ engineers to build interactive, dynamic, and scalable web applications using a modern technologies, including JavaScript (ES6+), TypeScript, React.js with Hooks, Next.js and tools like TanStack React Query, Express.js, Webpack, Storybook, React Testing Library and Jest.',
            'Architecting scalable solutions with Mono Repo and Micro-Frontend (MFE) architectures using Turbo Repo, reducing code duplication by 50% and enhancing developer efficiency by 25%.',
            'Developed 16+ reusable automation libraries and private NPM packages, improving efficiency, maintainability, and reducing development time by 10% across multiple projects.',
            'Building platform admin tools, managing key eCommerce modules like Accounts, Customers, Orders, Loyalty, Subscriptions, Inventory, Payments, Shipments, and Attributes.',
            'Collaborating with the DevOps team to ensure efficient CI/CD pipeline setup and streamline deployment processes.',
            'Enabled dynamic feature management by implementing extension capabilities with a configuration-based model, reducing the need for deployments and accelerating feature rollout by 20%.',
            'Facilitating Agile practices through daily stand-ups, pair programming, live coding sessions, and cross-team collaboration.',
            'Overseeing code quality via code reviews, merge management, and deployment processes.',
            'Driving technical decision-making, evaluating design alternatives, and resolving complex technical challenges.',
            'Creating detailed documentation, including flow diagrams and architecture blueprints, to align development with business goals.',
            'Mentoring and training 50+ employees monthly, focusing on code best practices, quality, and skill development, leading to a 10% improvement in overall team efficiency and productivity.',
          ],
          clients: [
            'Platform Admin Tools',
            'NuSkin',
            'Tractor Supply',
            'Kraft',
            'YoungLiving',
          ],
        },
        {
          logo: 'https://cra2ycoder.sirv.com//logos/logo_skava.png',
          name: 'Skava an Infosys',
          role: 'Creative Manager',
          duration: '2009 - 2017',
          responsibilities: [
            'Leading a design team to craft professional <span class="dark:text-white text-black font-bold">User Interfaces (UI)</span> and deliver exceptional <span class="dark:text-white text-black font-bold">User experiences (UX)</span> for web applications and mobile apps, leveraging tools like <span class="dark:text-white text-black font-bold">Adobe Photoshop, Sketch, Adobe XD, and Figma.</span>',
            'Designing <span class="dark:text-white text-black font-bold">UI/UX components</span> following the <span class="dark:text-white text-black font-bold">Atomic Design Methodology</span> for consistency and scalability.',
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
          clients: [
            `Macy's`,
            'Kohls',
            'ToysRus',
            'BabiesRus',
            'Kraft',
            'YoungLiving',
          ],
        },
      ],
    },
    { status: 200 }
  )
}
