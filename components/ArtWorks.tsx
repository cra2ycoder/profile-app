import Image from 'next/image'

type TArtWorkProps = {
  data: string[]
}

export default async function ArtWorks() {
  const apiResponse: TArtWorkProps = (await fetch(
    `http://localhost:3000/api/artworks`
  ).then(res => res.json())) || { data: [] }

  return (
    <div className="w-full mb-10">
      <div className="flex flex-row gap-10 no-wrap snap-x snap-mandatory overflow-x-auto overflow-y-hidden pb-10 transform-3d">
        {apiResponse.data.map((photo: string, index: number) => {
          return (
            <div
              key={`artwork-${index}`}
              className={`flex shrink-0 snap-center w-[300px] h-[400px] rounded-3xl overflow-hidden origin-bottom-left relative drop-shadow-xl ${
                index % 2 === 0
                  ? 'translate-y-12 rotate-2'
                  : '-translate-y-4 -rotate-2'
              }`}
            >
              <Image
                src={photo}
                alt={`photo-${index}`}
                className="aspect-ratio-auto"
                fill={true}
                objectFit="contain"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
