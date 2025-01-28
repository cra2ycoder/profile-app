import Footer from '@/components/Footer'
import UserInfo from '@/components/UserInfo'
// import ContactInfo from '@/components/ContactInfo'
import SocialAccounts from '@/components/SocialAccounts'
import SkillList from '@/components/SkillList'
import AppLayout from '@/components/AppLayout'
import DownloadCV from '@/components/DownloadCV'
import WorkExperience from '@/components/WorkExperience'
import Awards from '@/components/Awards'
import ArtWorks from '@/components/ArtWorks'
import Title from '@/components/Title'
// import { AwardIcon } from '@/components/BGIcons'
import ThemeToggler from '@/components/ThemeToggler'
import SideNav from '@/components/SideNav'

export default async function Home() {
  return (
    <>
      <SideNav />
      <ThemeToggler />
      <AppLayout>
        <div className="w-full flex flex-col mb-10">
          <UserInfo />
          <div className="flex flex-row gap-4 items-center mt-10">
            <DownloadCV />
            <div className="border-gray-600 border-r h-full" />
            <SocialAccounts />
          </div>
        </div>
        <WorkExperience />
        <SkillList
          filterBy={[
            { title: 'Technical Stacks', filterKey: 'tech' },
            { title: 'Design Tools', filterKey: 'design' },
          ]}
        />
        <Awards />
        <div className="w-full flex gap-4 flex-col mb-10">
          <Title text="What I Enjoy in My Free Time" />
        </div>
        {/* <AwardIcon /> */}
      </AppLayout>
      <ArtWorks />
      <Footer />
    </>
  )
}
