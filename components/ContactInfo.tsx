import { PhoneIcon, MailIcon } from './Icons'
import { ViewAnimationWrapper } from './TransitionWrapper'

type TContactInfo = {
  phone: string
  email: string
  location: string
}

export default function ContactInfo(props: TContactInfo) {
  return (
    <div className="flex flex-row w-full items-center gap-2 flex-wrap">
      <ViewAnimationWrapper delay={0.3}>
        <div className="flex flex-row dark:text-gray-500 text-gray-800 gap-2">
          <PhoneIcon />
          <p>{props.phone}</p>
        </div>
      </ViewAnimationWrapper>
      <ViewAnimationWrapper delay={0.35} className="flex gap-2">
        <div className="text-gray-600 invisible sm:visible">|</div>
        <a
          className="flex flex-row dark:text-gray-500 text-gray-800 gap-2"
          href={`mailto:${props.email}`}
        >
          <MailIcon />
          <p>{props.email}</p>
        </a>
      </ViewAnimationWrapper>
      <ViewAnimationWrapper delay={0.4} className="w-full">
        <p className="w-full dark:text-gray-400 text-gray-500">
          Location: {props.location}
        </p>
      </ViewAnimationWrapper>
    </div>
  )
}
