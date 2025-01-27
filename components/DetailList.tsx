type TDetailListProps = {
  title: string
  api?: string
  filterBy?: string[]
}

export default async function DetailList(props: TDetailListProps) {
  const apiResponse = (await fetch(`http://localhost:3000/${props.api}`).then(
    res => res.json()
  )) || { data: [] }

  console.log(apiResponse)

  return (
    <div className="w-full">
      <p className="text-4xl font-weight-400 font-[Inter] font-bold text-gray-800 tracking-tight bg-gradient-to-r from-purple-800 to-pink-600 text-transparent bg-clip-text whitespace-nowrap leading-normal">
        {props.title}
      </p>
      <div className="flex flex-row flex-wrap gap-2 my-6">
        {apiResponse.data?.map(item => (
          <div
            key={item.id}
            className="flex flex-row w-auto h-10 gap-3 items-center mr-2"
          >
            <img
              src={item.logo}
              alt={`tool-logo-${item.name}`}
              className="overflow-hidden w-10 bg-white rounded-full"
            />
            {/* <p className="text-xs text-gray-800 font-[Inter]">{item.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  )
}
