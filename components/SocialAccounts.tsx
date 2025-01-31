import { AnimButtonWrapper } from './TransitionWrapper'
import { LinkedInIcon, GithubIcon, CodeSandboxIcon } from './Icons'

export default function SocialAccounts() {
  return (
    <div className="flex flex-row gap-5 align-center">
      <AnimButtonWrapper size="xl">
        <a
          href="https://www.linkedin.com/in/mohanraj-rangasamy-b15b7125/"
          target="_blank"
          aria-label="LinkedIn Account"
          className="w-[21px] overflow-hidden"
        >
          <LinkedInIcon />
        </a>
      </AnimButtonWrapper>
      <AnimButtonWrapper size="xl">
        <a
          href="https://github.com/cra2ycoder"
          target="_blank"
          aria-label="GitHub Account"
        >
          <GithubIcon />
        </a>
      </AnimButtonWrapper>
      <AnimButtonWrapper size="xl">
        <a
          href="https://codesandbox.io/u/cra2ycoder"
          target="_blank"
          aria-label="Code sandbox Account"
        >
          <CodeSandboxIcon />
        </a>
      </AnimButtonWrapper>
    </div>
  )
}
