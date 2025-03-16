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
          role: 'Creative Manager, Sr. Creative Engineer, Creative Engineer',
          duration: 'March 2009 - August 2020',
          responsibilities: [
            `Led a design team to 12 engineers for craft professional User Interfaces (UI) & exceptional User Experiences (UX) for web and mobile applications using Figma, Adobe XD.`,
            `Designed UI/UX for Mini Cart and Cart, Checkout Pages to enhance the eCommerce shopping experience.`,
            `Created UI/UX for platform admin tools, ensuring an intuitive and efficient interface for managing Accounts, Customers Dashboards, Inventory, Payments, Shipments, and Asset Management in eCommerce operations.`,
            `Developed 80+ static eCommerce pages by creating HTML & CSS outputs, assisting developers and reducing frontend development time by 30%.`,
            `Built Flash applications with ActionScript (AS3) for Facebook & web, delivering engaging user experiences.`,
            `Conducted Visual Quality Analysis (VQA) on 6+ projects, ensuring pixel-perfect implementation and reducing design-to-development inconsistencies by 35%`,
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
