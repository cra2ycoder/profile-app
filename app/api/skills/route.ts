'use server'

import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    {
      data: [
        {
          name: 'Photoshop',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_ps.jpg',
          category: 'design',
        },
        {
          name: 'XD',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_xd.png',
          category: 'design',
        },
        {
          name: 'Sketch',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_sketch.jpg',
          category: 'design',
        },
        {
          name: 'Figma',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_figma.png',
          category: 'design',
        },
        {
          name: 'HTML5',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_html.png',
          category: 'languages',
        },
        {
          name: 'CSS3',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_css.png',
          category: 'languages',
        },
        {
          name: 'Javascript',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_js.jpeg',
          category: 'languages',
        },
        {
          name: 'Typescript',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_ts.jpg',
          category: 'languages',
        },
        {
          name: 'Python',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_python.png',
          category: 'languages',
        },
        {
          name: 'Nodejs',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_nodejs.png',
          category: 'fb-libs',
        },
        {
          name: 'Express.js',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_expressjs.png',
          category: 'fb-libs',
        },
        {
          name: 'Next.js',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_nextjs.png',
          category: 'fb-libs',
        },
        {
          name: 'React.js',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_react.png',
          category: 'fb-libs',
        },
        {
          name: 'Tanstack Query',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_tsq.png',
          category: 'fb-libs',
        },
        {
          name: 'Tailwindcss',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_tailwind.png',
          category: 'fb-libs',
        },
        {
          name: 'SASS',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_sass.png',
          category: 'languages',
        },
        {
          name: 'Styled Components',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_styledcomp.png',
          category: 'fb-libs',
        },
        {
          name: 'Material UI',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_mui.png',
          category: 'fb-libs',
        },
        {
          name: 'MobX',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_mobx.png',
          category: 'fb-libs',
        },
        {
          name: 'Jest',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_jest.png',
          category: 'test',
        },
        {
          name: 'RTL',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_rtl.png',
          category: 'test',
        },
        {
          name: 'Cypress',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_cypress.webp',
          category: 'test',
        },
        {
          name: 'Webpack',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_webpack.png',
          category: 'fb-libs',
        },
        {
          name: 'Rollup',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_rollup.jpg',
          category: 'fb-libs',
        },
        {
          name: 'Markdown',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_md.png',
          category: 'languages',
        },
        {
          name: 'JQuery',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_jquery.jpg',
          category: 'fb-libs',
        },
        {
          name: 'MDB React',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_mdbreact.png',
          category: 'fb-libs',
        },
        {
          name: 'React Bootstrap',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_reactbootstrap.png',
          category: 'fb-libs',
        },
        {
          name: 'Docsify',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_docsify.png',
          category: 'fb-libs',
        },
        {
          name: 'Nextra',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_nextra.png',
          category: 'fb-libs',
        },
        {
          name: 'Git',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_git.png',
          category: 'tech',
        },
        {
          name: 'Babel',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_babel.png',
          category: 'tech',
        },
        {
          name: 'Prettier',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_prettier.jpg',
          category: 'tech',
        },
        {
          name: 'ES Lint',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_eslint.jpg',
          category: 'tech',
        },
        {
          name: 'Sonar Lint',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_sonarlint.png',
          category: 'tech',
        },
        {
          name: 'Storybook',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_storybook.png',
          category: 'fb-libs',
        },
        {
          name: 'NPM',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_npm.png',
          category: 'tech',
        },
        {
          name: 'YARN',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_yarn.jpg',
          category: 'tech',
        },
        {
          name: 'PNPM',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_pnpm.png',
          category: 'tech',
        },
        {
          name: 'Verdaccio',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_verdaccio.jpg',
          category: 'tech',
        },
        {
          name: 'JIRA',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_jira.jpg',
          category: 'tech',
        },
      ],
    },
    { status: 200 }
  )
}
