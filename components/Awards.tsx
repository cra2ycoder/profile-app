import Title from './Title'

export default async function Awards() {
  const apiResponse = (await fetch(`http://localhost:3000/api/awards`).then(
    res => res.json()
  )) || { data: [] }

  return (
    <div className="w-full flex gap-4 flex-col mb-10">
      <Title text="Professional Recognition" />
      <div className="w-full gap-y-8 flex flex-wrap mt-6">
        {apiResponse.data.map((awards, index: number) => {
          return (
            <div className="flex flex-col w-[50%]" key={`awards-${index}`}>
              <h2 className="text-2xl font-bold tracking-tight font-[DM Sans] text-gray-300">
                {awards.title}
              </h2>
              <p className="text-md tracking-tight font-[Inter] font-light text-gray-600 mt-1">
                {awards.for}
              </p>
              <p className="text-sm tracking-tight font-[Inter] font-light text-gray-400 mt-2">
                -{` `}
                {awards.from}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
