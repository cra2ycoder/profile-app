import Title from './Title'

export default async function WorkExperience() {
  const apiResponse = (await fetch(`http://localhost:3000/api/work`).then(res =>
    res.json()
  )) || { data: [] }

  return (
    <div className="w-full flex gap-4 flex-col">
      <Title text="Companies I’ve Worked With" />
      <div className="flex flex-row gap-3 w-[100%] mt-6 flex-wrap">
        {apiResponse.data?.map((company, index: number) => {
          return (
            <div
              className="flex flex-row pb-10 w-full flex-wrap mb-10 border-b border-gray-800"
              key={`company-${index}`}
            >
              <div className="flex flex-row gap-2 items-center">
                <div className="flex flex-row w-20 h-20 items-center mr-2 flex-wrap drop-shadow-md bg-white rounded-full overflow-hidden p-3 justify-center items-center overflow-hidden">
                  <img
                    loading="lazy"
                    src={company.logo}
                    alt={`company-logo-${company.name}`}
                    className="overflow-hidden"
                    style={company.styles || {}}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h6 className="text-gray-200 font-bold text-2xl font-[DM Sans]">
                    {company.name}
                  </h6>
                  <p className="text-gray-500">
                    {company.role} | {company.duration}
                  </p>
                  {/* <a
                    href={`/roles/?company=${company.name}`}
                    className="text-indigo-800 underline font-bold text-sm"
                  >
                    View My Works
                  </a> */}
                </div>
              </div>
              <ol className="flex gap-3 flex-col mt-6 list-disc max-w-3xl pl-[6rem]">
                {company.responsibilities?.map((x: string, index: number) => (
                  <li
                    key={`resp-${index}`}
                    className="font-[Inter] text-md text-gray-400"
                    dangerouslySetInnerHTML={{ __html: x }}
                  />
                ))}
              </ol>
            </div>
          )
        })}
      </div>
    </div>
  )
}
