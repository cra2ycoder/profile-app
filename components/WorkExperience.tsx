export default async function WorkExperience() {
  const apiResponse = (await fetch(`http://localhost:3000/api/work`).then(res =>
    res.json()
  )) || { data: [] }

  return (
    <div className="w-full flex gap-4 flex-col mb-10">
      <p className="w-auto inline-block text-4xl font-weight-400 font-[Inter] font-bold bg-gradient-to-r from-violet-800 to-pink-600 text-transparent bg-clip-text whitespace-nowrap leading-normal">
        Companies I’ve Worked With
      </p>
      <div className="flex flex-row gap-3 w-[100%] mt-6">
        {apiResponse.data?.map((company, index: number) => {
          return (
            <div
              className="flex flex-col pb-4 w-[50%]"
              key={`company-${index}`}
            >
              <div className="flex flex-row gap-2 items-center">
                <div className="flex flex-row w-20 h-20 items-center mr-2 flex-wrap drop-shadow-md bg-white rounded-full overflow-hidden p-3 justify-center items-center overflow-hidden">
                  <img
                    src={company.logo}
                    alt={`company-logo-${company.name}`}
                    className="overflow-hidden"
                    style={company.styles || {}}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-200 font-light text-2xl font-[DM Sans]">
                    {company.name}
                  </p>
                  <p className="text-gray-500">
                    {company.role} | {company.duration}
                  </p>
                  <a
                    href={`/roles/?company=${company.name}`}
                    className="text-blue-800 underline font-bold text-sm"
                  >
                    View My Works
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
