import Image from 'next/image'
import { ViewAnimationWrapper } from './TransitionWrapper'

type TArtWorkProps = {
  data: string[]
}

export default async function ArtWorks() {
  const apiResponse: TArtWorkProps = (await fetch(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/artworks`
  ).then(res => res.json())) || { data: [] }

  return (
    <div className="w-full mb-10">
      <div className="flex flex-row gap-10 no-wrap snap-x snap-mandatory overflow-x-auto overflow-y-hidden pb-10 transform-3d">
        {apiResponse.data.map((photo: string, index: number) => {
          return (
            <ViewAnimationWrapper
              key={`artwork-${index}`}
              delay={0.2 + index * 0.001}
            >
              <div
                className={`flex shrink-0 snap-center sm:w-[300px] sm:h-[400px] w-[200px] h-[200px] rounded-3xl overflow-hidden origin-bottom-left relative drop-shadow-xl ${
                  index % 2 === 0
                    ? 'sm:translate-y-12 rotate-2'
                    : 'sm:-translate-y-4 -rotate-2'
                }`}
              >
                <Image
                  src={photo}
                  alt={`photo-${index}`}
                  className="aspect-ratio-auto"
                  fill={true}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </ViewAnimationWrapper>
          )
        })}
      </div>
    </div>
  )
}
