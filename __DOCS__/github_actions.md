
# GitHub Actions

- [INTRO](https://docs.github.com/en/actions/about-github-actions/understanding-github-actions)
- [JOBS](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/using-jobs-in-a-workflow)
- [RUNNERS](https://docs.github.com/en/actions/using-github-hosted-runners/using-github-hosted-runners/about-github-hosted-runners#standard-github-hosted-runners-for-public-repositories)
- [CONTEXTS](https://docs.github.com/en/enterprise-cloud@latest/actions/writing-workflows/choosing-what-your-workflow-does/accessing-contextual-information-about-workflow-runs)
- [EVENTS](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows)
- [ACTIONS](https://github.com/marketplace?type=actions)

## keywords

- name
- on
- needs
- jobs 
- steps
- runs
- runs-on
- uses
- with

*properties*
- version
- node-version
- cache

## events

- `repo related`
  - push
  - pull_request
  - create
  - fork
  - issues
  - issue_comment
  - watch
  - discussion
  
- `others`
  - workflow_dispatch
  - repository_dispatch
  - schedule
  - workflow_call

## runners

- ubuntu-latest

## actions

- actions/checkout@v4
- actions/setup-node@v4

## context

- echo "${{ toJSON(github) }}"

## run scripts

- echo "__log_message__"