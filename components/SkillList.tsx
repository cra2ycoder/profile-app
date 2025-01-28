import Image from 'next/image'
import Title from './Title'

type TSkillFilterItem = {
  title: string
  filterKey: string
}

type TSkillListProps = {
  filterBy?: TSkillFilterItem[]
}

type TSkillItem = {
  name: string
  logo: string
  category: string
}

type TSkillList = {
  data: TSkillItem[]
}

type TFilteredDataType = {
  [key: string]: {
    title?: string
    items: TSkillItem[]
  }
}

export default async function SkillList(props: TSkillListProps) {
  const { filterBy = [] } = props

  const apiResponse: TSkillList = (await fetch(
    `http://localhost:3000/api/skills`
  ).then(res => res.json())) || {
    data: [],
  }

  const filteredData: TFilteredDataType = {}

  apiResponse.data.forEach((x: TSkillItem) => {
    if (!filteredData[x.category]) {
      filteredData[x.category] = {
        title: filterBy.find(
          (y: TSkillFilterItem) => y.filterKey === x.category
        )?.title,
        items: [],
      }
    }
    filteredData[x.category].items.push(x)
  })

  return (
    <div className="w-full flex gap-4 flex-col mb-10">
      <Title text="Skills I've Developed" />
      <div className="flex flex-row flex-wrap gap-3">
        {filterBy.map((x: TSkillFilterItem, index: number) => {
          const data = filteredData[x.filterKey]
          const { title, items } = data || {}

          return (
            <div
              key={`category-${index}`}
              className="flex flex-row flex-wrap gap-2 my-2"
            >
              <p className="w-full text-1xl text-gray-400 font-bold mb-4">
                {title}
              </p>
              {items?.map((item: TSkillItem, id: number) => (
                <div
                  key={id}
                  className="flex flex-row w-12 h-12 items-center mr-2 flex-wrap drop-shadow-md bg-white rounded-full overflow-hidden p-2 justify-center items-center"
                >
                  <Image
                    src={item.logo}
                    alt={`tool-logo-${item.name}`}
                    className="overflow-hidden"
                    width={12 * 16}
                    height={12 * 16}
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
