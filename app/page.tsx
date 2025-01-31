import Title from '@/components/Title'
import SideNav from '@/components/SideNav'
import AppLayout from '@/components/AppLayout'
import Footer from '@/components/Footer'
import ThemeToggler from '@/components/ThemeToggler'
import SkillList from '@/components/SkillList'
import UserInfo from '@/components/UserInfo'
import WorkExperience from '@/components/WorkExperience'
import Awards from '@/components/Awards'
import ArtWorks from '@/components/ArtWorks'

export default function Index() {
  return (
    <>
      <SideNav />
      <ThemeToggler />
      <AppLayout>
        <UserInfo />
        <WorkExperience />
        <SkillList
          filterBy={[
            { title: 'Technical Stacks', filterKey: 'tech' },
            { title: 'Design Tools', filterKey: 'design' },
          ]}
        />
        <Awards />
        <Title id="arts" text="What I Enjoy in My Free Time" />
      </AppLayout>
      <ArtWorks />
      <Footer />
    </>
  )
}
