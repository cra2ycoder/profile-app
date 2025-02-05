import { AnimButtonWrapper, ViewAnimationWrapper } from './TransitionWrapper'
import { LinkedInIcon, GithubIcon, CodeSandboxIcon } from './Icons'

export default function SocialAccounts() {
  return (
    <div className="flex flex-row gap-5 align-center">
      <ViewAnimationWrapper delay={0.3} directions="zoomout-to-zoomin">
        <AnimButtonWrapper size="xl">
          <a
            href="https://www.linkedin.com/in/mohanrajr-frontend-dev"
            target="_blank"
            aria-label="LinkedIn Account"
            className="w-[21px] overflow-hidden"
          >
            <LinkedInIcon />
          </a>
        </AnimButtonWrapper>
      </ViewAnimationWrapper>
      <ViewAnimationWrapper delay={0.4} directions="zoomout-to-zoomin">
        <AnimButtonWrapper size="xl">
          <a
            href="https://github.com/cra2ycoder"
            target="_blank"
            aria-label="GitHub Account"
          >
            <GithubIcon />
          </a>
        </AnimButtonWrapper>
      </ViewAnimationWrapper>
      <ViewAnimationWrapper delay={0.5} directions="zoomout-to-zoomin">
        <AnimButtonWrapper size="xl">
          <a
            href="https://codesandbox.io/u/cra2ycoder"
            target="_blank"
            aria-label="Code sandbox Account"
          >
            <CodeSandboxIcon />
          </a>
        </AnimButtonWrapper>
      </ViewAnimationWrapper>
    </div>
  )
}
