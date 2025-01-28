import { LinkedInIcon, GithubIcon, CodeSandboxIcon } from './Icons'

export default function SocialAccounts() {
  return (
    <div className="flex flex-row gap-5 align-center">
      <a
        href="https://www.linkedin.com/in/mohanraj-rangasamy-b15b7125/"
        target="_blank"
      >
        <LinkedInIcon />
      </a>
      <a href="https://github.com/cra2ycoder" target="_blank">
        <GithubIcon />
      </a>
      <a href="https://codesandbox.io/u/cra2ycoder" target="_blank">
        <CodeSandboxIcon />
      </a>
    </div>
  )
}
