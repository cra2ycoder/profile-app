'use server'

import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    {
      data: [
        'https://cra2ycoder.sirv.com//works/arts/pencil/p13.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p29.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p23.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p18.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p10.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p30.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p11.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p12.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p1.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p2.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p3.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p4.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p5.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p8.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p9.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p28.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p14.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p15.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p16.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p17.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p19.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p20.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p21.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p22.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p24.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p25.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p26.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p27.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p31.jpg',
        'https://cra2ycoder.sirv.com//works/arts/pencil/p32.jpg',
      ],
    },
    { status: 200 }
  )
}
