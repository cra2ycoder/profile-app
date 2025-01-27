'use server'

import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      data: [
        {
          name: 'Photoshop',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_ps.jpg',
        },
        { name: 'XD', logo: 'https://cra2ycoder.sirv.com//logos/logo_xd.png' },
        {
          name: 'Sketch',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_sketch.jpg',
        },
        {
          name: 'Figma',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_sketch.jpg',
        },
        {
          name: 'Nodejs',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_nodejs.png',
        },
        {
          name: 'HTML',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_html.png',
        },
        {
          name: 'CSS',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_css.png',
        },
        {
          name: 'Javascript',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_js.jpeg',
        },
        {
          name: 'Typescript',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_ts.jpg',
        },
        {
          name: 'SASS',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_sass.png',
        },
        {
          name: 'Markdown',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_md.png',
        },
        {
          name: 'Express.js',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_expressjs.png',
        },
        {
          name: 'Next.js',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_nextjs.png',
        },
        {
          name: 'Material UI',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_mui.png',
        },
        {
          name: 'MDB React',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_mdbreact.png',
        },
        {
          name: 'React Bootstrap',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_reactbootstrap.png',
        },
        {
          name: 'React.js',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_react.png',
        },
        {
          name: 'MobX',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_mobx.png',
        },
        {
          name: 'Styled Components',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_styledcomp.png',
        },
        {
          name: 'Webpack',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_webpack.png',
        },
        {
          name: 'Rollup',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_rollup.jpg',
        },
        {
          name: 'JQuery',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_jquery.jpg',
        },
        {
          name: 'Jest',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_jest.png',
        },
        {
          name: 'Cypress',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_cypress.webp',
        },
        {
          name: 'Docsify',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_docsify.png',
        },
        {
          name: 'Nextra',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_nextra.png',
        },
        {
          name: 'Git',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_git.png',
        },
        {
          name: 'Babel',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_babel.png',
        },
        {
          name: 'Prettier',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_prettier.jpg',
        },
        {
          name: 'ES Lint',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_eslint.jpg',
        },
        {
          name: 'Sonar Lint',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_sonarlint.png',
        },
        {
          name: 'Storybook',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_storybook.png',
        },
        {
          name: 'NPM',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_npm.png',
        },
        {
          name: 'YARN',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_yarn.jpg',
        },
        {
          name: 'PNPM',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_pnpm.png',
        },
        {
          name: 'Verdaccio',
          logo: 'https://cra2ycoder.sirv.com//logos/logo_verdaccio.jpg',
        },
      ],
    },
    { status: 200 }
  )
}
