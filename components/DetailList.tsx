type TDetailListProps = {
  title: string
  api?: string
  filterBy?: string[]
}

export default async function DetailList(props: TDetailListProps) {
  const { api, filterBy = [] } = props

  const apiResponse = (await fetch(`http://localhost:3000/${api}`).then(res =>
    res.json()
  )) || { data: [] }

  const filteredData: any = {}

  apiResponse.data.forEach((x: any) => {
    if (!filteredData[x.category]) {
      filteredData[x.category] = {
        title: filterBy.find(y => y.filterKey === x.category)?.title,
        items: [],
      }
    }
    filteredData[x.category].items.push(x)
  })

  return (
    <div className="w-full flex gap-4 flex-col mb-10">
      <p className="w-auto inline-block text-4xl font-weight-400 font-[Inter] font-bold bg-gradient-to-r from-violet-800 to-pink-600 text-transparent bg-clip-text whitespace-nowrap leading-normal">
        {props.title}
      </p>
      <div className="flex flex-row flex-wrap gap-3">
        {filterBy.map((x: any, index: number) => {
          const data = filteredData[x.filterKey]
          const { title, items } = data || {}

          return (
            <div
              key={`category-${index}`}
              className="flex flex-row flex-wrap gap-2 my-2"
            >
              <p className="w-full text-1xl text-gray-600 font-[DM Sans] font-bold mb-4">
                {title}
              </p>
              {items?.map((item: any, id: number) => (
                <div
                  key={id}
                  className="flex flex-row w-12 h-12 items-center mr-2 flex-wrap drop-shadow-md bg-white rounded-full overflow-hidden p-2 justify-center items-center"
                >
                  <img
                    loading="lazy"
                    src={item.logo}
                    alt={`tool-logo-${item.name}`}
                    className="overflow-hidden"
                  />
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}
