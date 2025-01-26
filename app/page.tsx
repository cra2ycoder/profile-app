export default function Home() {
  return (
    <>
      <header className="py-5 fixed top-0 ">
        <div className="fill-gray-700">
          <svg
            className="size-16"
            width="512"
            height="512"
            viewBox="0 0 512 512"
          >
            <path d="M307.411,436L153.969,282.908l49.62-49.754L306.647,335.725,412.759,230.092l-102.3-103.337L360.085,77,512,230.092Zm0-156.154L204.353,177.275,98.241,282.908,200.536,386.245,150.915,436-1,282.908,203.589,77,357.031,230.092Z"></path>
          </svg>
        </div>
      </header>
      <main className="w-full h-screen m-auto flex flex-row">
        <div className="w-[50%] h-full fixed flex flex-col justify-center">
          <div className="flex justify-center flex-col gap-2 w-100 mt-10 w-3xl max-w-3xl">
            <h1 className="text-6xl font-weight-400 font-[Inter] font-extrabold text-gray-800 tracking-tight bg-gradient-to-r from-blue-800 to-purple-600 text-transparent bg-clip-text whitespace-nowrap leading-normal">
              Mohanraj Rangasamy
            </h1>
            <p className="text-2xl tracking-tight text-gray-500 font-[DM Sans]">
              Innovation Front End Developer with 7+ years experience building
              and maintaining responsive websites in the recruiting industry.
              Well-versed in HTML, CSS, Javascript/Typescript, React.js,
              Next.js; plus modern libraries and frameworks. Passionate about
              usability and possess working knowledge of Adobe Photoshop & XD.
            </p>
          </div>
          <div className="flex flex-row w-full items-center gap-4 mt-10">
            <div className="flex flex-row text-gray-700 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                className="h-6 w-6 fill-zinc-700"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
              </svg>
              <p>+91 770 829 629 5</p>
            </div>
            <div>|</div>
            <a
              className="flex flex-row text-gray-700 gap-2"
              href="mailto:mohaa.r.6789@gmail.com"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18px"
                height="18px"
                className="h-6 w-6 fill-zinc-700"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
              mohanraj.dev.6789@gmail.com
            </a>
          </div>
          <div className="w-full mt-10 flex flex-row gap-5 align-center">
            <a
              href="https://www.linkedin.com/in/mohanraj-rangasamy-b15b7125/"
              target="_blank"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 fill-zinc-700"
              >
                <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
              </svg>
            </a>
            <a href="https://github.com/cra2ycoder" target="_blank">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 fill-zinc-700"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                ></path>
              </svg>
            </a>
            <a href="https://stackshare.io/cra2ycoder/my-stack" target="_blank">
              <svg
                className="h-6 w-6 fill-zinc-700"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.209 6.697c-.035-.274 0-.594 0-.594v-.01a1.557 1.557 0 011.525-1.254l.014.001h.002c.859 0 1.557.698 1.557 1.556s-.697 1.556-1.557 1.556l-.009-.001h-.007a1.558 1.558 0 01-1.525-1.254zM24 1.54v20.92c0 .851-.646 1.54-1.443 1.54H1.444C.647 24 0 23.311 0 22.46V1.54C0 .69.647 0 1.444 0h21.113C23.354 0 24 .69 24 1.54zm-2.303 16.007a2.962 2.962 0 00-5.805-.828h-1.758l-2.74-4.717-.002-.004.002-.004 2.736-4.709h1.748a2.963 2.963 0 102.018-3.673 2.964 2.964 0 00-2.018 2.017h-2.665l-.026-.016-3.227 5.552-.025.042H8.018a2.962 2.962 0 10-5.69 1.657 2.964 2.964 0 005.69 0h1.961l3.208 5.52.015-.009h2.69a2.96 2.96 0 002.842 2.134h.002a2.961 2.961 0 002.961-2.962zm-2.933-1.619a1.56 1.56 0 00-1.527 1.254c-.004.029-.004.057-.007.085-.004.017-.015.029-.018.046-.041.301 0 .602 0 .602a1.553 1.553 0 001.837 1.209 1.543 1.543 0 001.164-1.088c.065-.172.105-.356.105-.551 0-.859-.697-1.557-1.554-1.557zM5.2 10.417c-.858 0-1.556.698-1.556 1.557l.002.018-.001.008a1.547 1.547 0 002.84.85c.171-.249.272-.551.272-.875 0-.86-.698-1.558-1.557-1.558z"></path>
              </svg>
            </a>
            <a href="https://codesandbox.io/u/cra2ycoder" target="_blank">
              <svg
                className="h-6 w-6 fill-zinc-700"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z"></path>
              </svg>
            </a>
          </div>
          <div className="mt-10">
            <button className="w-auto rounded-full bg-gradient-to-r from-blue-800 to-purple-600 px-8 py-2 font-bold drop-shadow-xs">
              Download CV
            </button>
          </div>
        </div>
        <div className="bg-white border-l w-[50%] h-full ml-[50%]">
          <footer className="border-t py-2 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Cra2y Coder. All rights reserved.
            </p>
          </footer>
        </div>
      </main>
    </>
  )
}
