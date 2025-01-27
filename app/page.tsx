// 'use client'

// import useSwr from 'swr'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

import Footer from '@/components/Footer'
import UserInfo from '@/components/UserInfo'
import ContactInfo from '@/components/ContactInfo'
import SocialAccounts from '@/components/SocialAccounts'
import DetailList from '@/components/DetailList'
import AppLayout from '@/components/AppLayout'
import DownloadCV from '@/components/DownloadCV'
import WorkExperience from '@/components/WorkExperience'
import Awards from '@/components/Awards'
import ArtWorks from '@/components/ArtWorks'
// import { AwardIcon } from '@/components/BGIcons'

export default async function Home() {
  return (
    <>
      <AppLayout>
        <div className="w-full flex flex-col py-10">
          <UserInfo />
          <div className="flex flex-row gap-4 items-center mt-10">
            <DownloadCV />
            <div className="border-gray-600 border-r h-full" />
            <SocialAccounts />
          </div>
        </div>
        <WorkExperience />
        <DetailList
          title="Skills I've Developed"
          api="/api/skills"
          filterBy={[
            { title: 'Technical Stacks', filterKey: 'tech' },
            { title: 'Design Tools', filterKey: 'design' },
          ]}
        />
        <Awards />
        <div className="w-full flex gap-4 flex-col mb-10">
          <p className="w-auto inline-block text-4xl font-weight-400 font-[Inter] font-bold bg-gradient-to-r from-violet-800 to-pink-600 text-transparent bg-clip-text whitespace-nowrap leading-normal">
            What I Enjoy in My Free Time
          </p>
        </div>
        {/* <AwardIcon /> */}
      </AppLayout>
      <ArtWorks />
      <Footer />
    </>
  )
}
