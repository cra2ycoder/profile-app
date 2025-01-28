import { PhoneIcon, MailIcon } from './Icons'

export default function ContactInfo() {
  return (
    <div className="flex flex-row w-full items-center gap-2 flex-wrap">
      <div className="flex flex-row text-gray-500 gap-2">
        <PhoneIcon />
        <p>+(91) 770 829 629 5</p>
      </div>
      <div className="text-gray-600">|</div>
      <a
        className="flex flex-row text-gray-500 gap-2"
        href="mailto:mohaa.r.6789@gmail.com"
      >
        <MailIcon />
        <p>mohanraj.dev.6789@gmail.com</p>
      </a>
      <p className="w-full text-gray-400">Location: Bangalore, Karnataka.</p>
    </div>
  )
}
