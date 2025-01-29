import { LinkedInIcon, GithubIcon, CodeSandboxIcon } from './Icons'

export default function SocialAccounts() {
  return (
    <div className="flex flex-row gap-5 align-center">
      <a
        href="https://www.linkedin.com/in/mohanraj-rangasamy-b15b7125/"
        target="_blank"
        aria-label="LinkedIn Account"
        className="w-[21px] overflow-hidden"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://github.com/cra2ycoder"
        target="_blank"
        aria-label="GitHub Account"
      >
        <GithubIcon />
      </a>
      <a
        href="https://codesandbox.io/u/cra2ycoder"
        target="_blank"
        aria-label="Code sandbox Account"
      >
        <CodeSandboxIcon />
      </a>
    </div>
  )
}
