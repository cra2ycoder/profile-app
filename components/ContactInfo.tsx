export default function ContactInfo() {
  return (
    <div className="flex flex-row w-full items-center gap-4 mt-10">
      <div className="flex flex-row text-gray-100 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          className="h-6 w-6 fill-gray-100"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
        </svg>
        <p>+(91) 770 829 629 5</p>
      </div>
      <div className="text-gray-600">|</div>
      <a
        className="flex flex-row text-gray-100 gap-2"
        href="mailto:mohaa.r.6789@gmail.com"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18px"
          height="18px"
          className="h-6 w-6 fill-gray-100"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
        </svg>
        mohanraj.dev.6789@gmail.com
      </a>
    </div>
  )
}
