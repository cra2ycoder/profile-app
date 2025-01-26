// import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-5xl h-screen max-w-5xl m-auto px-10">
      <div className="flex justify-center flex-col gap-4 w-100">
        <div className="size-25 rounded-full overflow-hidden">
          {/* <Image
            src="https://cra2ycoder.sirv.com/mohaa.jpg"
            width="100"
            height="100"
            alt="profile-image"
          /> */}
        </div>
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r">
          Mohanraj Rangasamy
        </h1>
        <p className="text-2xl">
          Innovation Front End Developer with 7+ years experience building and
          maintaining responsive websites in the recruiting industry.
          Well-versed in HTML, CSS, Javascript/Typescript, React.js, Next.js;
          plus modern libraries and frameworks. Passionate about usability and
          possess working knowledge of Adobe Photoshop & XD.
        </p>
      </div>
    </div>
  )
}
