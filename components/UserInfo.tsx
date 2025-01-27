export default function UserInfo() {
  return (
    <>
      <div className="rounded-full w-[150px] h-[150px] overflow-hidden drop-shadow-lg mt-10">
        <img src="./mohaa.jpeg" alt="profile picture" />
      </div>
      <div className="flex justify-center flex-col gap-2 w-100 w-3xl max-w-3xl">
        <h1 className="text-5xl font-weight-400 mt-5 font-[Inter] font-extrabold text-gray-800 tracking-tight bg-gradient-to-r from-blue-800 to-pink-600 text-transparent bg-clip-text whitespace-nowrap leading-normal">
          Mohanraj Rangasamy
        </h1>
        <p className="text-2xl tracking-tight text-gray-400 font-[DM Sans] font-extralight">
          Front-End Developer with 7+ years of experience building responsive,
          user-friendly websites in the recruiting industry. Proficient in HTML,
          CSS, JavaScript/TypeScript, React.js, and Next.js, with a passion for
          creating seamless, accessible user experiences. Skilled in Adobe
          Photoshop and XD, bridging design and development. Dedicated to clean
          code, performance optimization, and staying ahead of web development
          trends.
        </p>
      </div>
    </>
  )
}
