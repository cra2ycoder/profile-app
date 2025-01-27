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
    <div className="w-full flex gap-4 flex-col">
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
              className="flex flex-row flex-wrap gap-4 my-6"
            >
              <p className="w-full text-lg text-zinc-100 font-[Inter]">
                {title}
              </p>
              {items?.map((item: any, id: number) => (
                <div
                  key={id}
                  className="flex flex-row w-auto h-10 gap-3 items-center mr-2 flex-wrap drop-shadow-lg"
                >
                  <img
                    src={item.logo}
                    alt={`tool-logo-${item.name}`}
                    className="overflow-hidden w-10 bg-white rounded-full"
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
