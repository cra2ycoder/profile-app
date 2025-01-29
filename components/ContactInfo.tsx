import { PhoneIcon, MailIcon } from './Icons'

type TContactInfo = {
  phone: string
  email: string
  location: string
}

export default function ContactInfo(props: TContactInfo) {
  return (
    <div className="flex flex-row w-full items-center gap-2 flex-wrap">
      <div className="flex flex-row dark:text-gray-500 text-gray-800 gap-2">
        <PhoneIcon />
        <p>{props.phone}</p>
      </div>
      <div className="text-gray-600">|</div>
      <a
        className="flex flex-row dark:text-gray-500 text-gray-800 gap-2"
        href={`mailto:${props.email}`}
      >
        <MailIcon />
        <p>{props.email}</p>
      </a>
      <p className="w-full dark:text-gray-400 text-gray-500">
        Location: {props.location}
      </p>
    </div>
  )
}
