'use server'

import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      data: [
        {
          title: 'MVP (Most Valuable Player)',
          for: 'Innovation: Building Extensions for Admin Tool',
          from: 'Vishy, Platform Engineering VP, Infosys Equinox',
        },
        {
          title: 'Employee of the Year 2018',
          for: 'For overall performance of the year and elected by voting methods',
          from: 'Arish, Former CEO, Skava an Infosys',
        },
        {
          title: 'Founder Award 2017',
          for: 'Innovation: Automation tool for Photoshop to HTML (P2H)',
          from: 'Arish, Former CEO, Skava an Infosys',
        },
        {
          title: 'Founder Award 2016',
          for: 'Innovation: SASS Library (ADZE)',
          from: 'Sudha Arish, Former CEO, Skava an Infosys',
        },
        {
          title: 'Star Awards',
          for: 'Best performance (2011, 2013, 2015)',
          from: 'Former CTO, CEO and VPs',
        },
        {
          title: 'Distinguished Service Awards',
          for: 'Excellence of Service from 2009 - 2024',
          from: 'Amit Kelly, CEO, Infosys Equinox',
        },
      ],
    },
    { status: 200 }
  )
}
