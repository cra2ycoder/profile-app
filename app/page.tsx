import Title from '@/components/Title'
// import SideNav from '@/components/SideNav'
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
      {/* <SideNav /> */}
      <ThemeToggler />
      <AppLayout>
        <UserInfo />
        <SkillList
          filterBy={[
            { title: 'Programming Languages', filterKey: 'languages' },
            {
              title: 'Frontend and Backend Frameworks/Libraries',
              filterKey: 'fb-libs',
            },
            { title: 'Testing & Development Tools', filterKey: 'test' },
            { title: 'Additional Tools', filterKey: 'tech' },
            { title: 'Design Tools', filterKey: 'design' },
          ]}
        />
        <WorkExperience />
        <Awards />
        <Title id="arts" text="What I Enjoy in My Free Time" />
      </AppLayout>
      <ArtWorks />
      <Footer />
    </>
  )
}
