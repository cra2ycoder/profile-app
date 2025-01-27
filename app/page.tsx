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

export default async function Home() {
  // const { data, error, isLoading } = useSwr('/api/skills', fetcher)
  // console.log({ data, error, isLoading })

  return (
    <AppLayout>
      <div className="w-full flex flex-col mb-10">
        <UserInfo />
        <ContactInfo />
        <SocialAccounts />
        <DownloadCV />
      </div>
      {/* <DetailList title="Employment History" api="/api/work" /> */}
      <DetailList
        title="Core Skills"
        api="/api/skills"
        filterBy={['design', 'technical']}
      />
      {/* <DetailList title="Educational Qualifications" api="api/education" />
      <DetailList title="Awards and Recognitions" api="api/awards" /> */}
      <Footer />
    </AppLayout>
  )
}
