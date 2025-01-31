import Title from './Title'

type TAwardItem = {
  title: string
  for: string
  from: string
}

type TAwardsProps = {
  data: TAwardItem[]
}

export default async function Awards() {
  const apiResponse: TAwardsProps = (await fetch(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/awards`
  ).then(res => res.json())) || { data: [] }

  return (
    <div className="w-full flex lg:flex-col sm:flex-row mb-10 flex-wrap">
      <Title id="awards" text="Professional Recognition" />
      <div className="w-full gap-y-8 flex flex-wrap mt-6">
        {apiResponse.data.map((awards: TAwardItem, index: number) => {
          return (
            <div
              className="flex flex-col lg:w-[50%] sm:w-full pr-4"
              key={`awards-${index}`}
            >
              <h3 className="text-2xl font-bold tracking-tight dark:text-gray-300 text-blue-950">
                {awards.title}
              </h3>
              <p className="font-light dark:text-sky-600 text-slate-800 mt-1">
                {awards.for}
              </p>
              <p className="font-light dark:text-slate-600 text-slate-500 mt-2">
                {awards.from}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
