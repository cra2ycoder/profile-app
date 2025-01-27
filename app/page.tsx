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

export default async function Home() {
  return (
    <AppLayout>
      <div className="w-full flex flex-col mb-10">
        <UserInfo />
        <ContactInfo />
        <SocialAccounts />
        <DownloadCV />
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
      <Footer />
    </AppLayout>
  )
}
