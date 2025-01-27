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
        },
        {
          logo: 'https://cra2ycoder.sirv.com//logos/logo_skava.png',
          name: 'Skava an Infosys',
          role: 'Creative Manager',
          duration: '2009 - 2019',
          styles: {
            backgroundColor: 'black',
          },
        },
      ],
    },
    { status: 200 }
  )
}
