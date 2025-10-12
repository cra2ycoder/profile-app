'use server'

import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    {
      data: [
        {
          logo: 'https://cra2ycoder.sirv.com//logos/logo_iqvia.png',
          name: 'IQVIA',
          role: 'Mgr. Software Development Engineering',
          duration: 'September 2025 - Present',
          responsibilities: [],
        },
        {
          logo: 'https://cra2ycoder.sirv.com//logos/logo_infy.jpg',
          name: 'Infosys Equinox',
          role: 'Architect EQ',
          duration: 'August 2020 - September 2025',
          responsibilities: [
            'Leading a development team of <hlt>40+ engineers to build interactive, dynamic, and scalable web applications</hlt> using a modern technologies, including <hlt>JavaScript (ES6+), TypeScript, React.js with Hooks, Next.js and tools like TanStack React Query, Express.js, Webpack, Storybook, React Testing Library and Jest.</hlt>',
            'Architecting scalable solutions with <hlt>Mono Repo and Micro-Frontend (MFE) architectures using Turbo Repo</hlt>, reducing code duplication by <hlt>50%</hlt> and enhancing developer efficiency by <hlt>25%.</hlt>',
            'Developed <hlt>16+ reusable automation libraries and private NPM packages</hlt>, improving efficiency, maintainability, and reducing development time by <hlt>10%</hlt> across multiple projects.',
            'Building platform admin tools, managing key <hlt>eCommerce modules like Accounts, Customers, Orders, Loyalty, Subscriptions, Inventory, Payments, Shipments, and Attributes.</hlt>',
            'Collaborating with the DevOps team to <hlt>ensure efficient CI/CD pipeline</hlt> setup and streamline deployment processes.',
            'Enabled dynamic feature management by implementing <hlt>extension capabilities with a configuration-based model</hlt>, reducing the need for deployments and accelerating feature rollout by <hlt>20%.</hlt>',
            'Facilitating Agile practices through daily stand-ups, pair programming, live coding sessions, and cross-team collaboration.',
            'Overseeing code quality via code reviews, merge management, and deployment processes.',
            'Driving technical decision-making, evaluating design alternatives, and resolving complex technical challenges.',
            'Creating detailed documentation, including flow diagrams and architecture blueprints, to align development with business goals.',
            'Mentoring and training <hlt>50+ employees monthly</hlt>, focusing on code best practices, quality, and skill development, leading to a <hlt>10%</hlt> improvement in overall team efficiency and productivity.',
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
          role: 'Creative Manager, Sr. Creative Engineer, Creative Engineer',
          duration: 'March 2009 - August 2020',
          responsibilities: [
            `Led a design team to <hlt>12 engineers</hlt> for craft professional <hlt>User Interfaces (UI) & exceptional User Experiences (UX)</hlt> for web and mobile applications using Figma, Adobe XD.`,
            `Designed UI/UX for <hlt>Mini Cart and Cart, Checkout Pages</hlt> to enhance the eCommerce shopping experience.`,
            `Created UI/UX for <hlt>platform admin tools</hlt>, ensuring an intuitive and efficient interface for managing <hlt>Accounts, Customers Dashboards, Inventory, Payments, Shipments, and Asset Management</hlt> in eCommerce operations.`,
            `Developed <hlt>80+ static eCommerce pages by creating HTML & CSS outputs</hlt>, assisting developers and <hlt>reducing frontend development time by 30%.</hlt>`,
            `Built <hlt>Flash applications with ActionScript (AS3) for Facebook & web</hlt>, delivering engaging user experiences.`,
            `Conducted <hlt>Visual Quality Analysis (VQA) on 6+ projects</hlt>, ensuring pixel-perfect implementation and <hlt>reducing design-to-development inconsistencies by 35%</hlt>`,
            `Collaborated with BAs and stakeholders to gather requirements and execute them within Agile sprints.`,
            `Built automation tools to streamline development and enhance efficiency.`,
            `Implemented Agile design practices, including design critiques, collaborative brainstorming sessions, and iterative prototyping,to enhance team efficiency and product quality.`,
            `Drove technical decision-making, evaluated design alternatives, and resolved complex technical challenges.`,
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
