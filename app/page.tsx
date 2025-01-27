import Footer from '@/components/Footer'
import UserInfo from '@/components/UserInfo'
import ContactInfo from '@/components/ContactInfo'
import SocialAccounts from '@/components/SocialAccounts'
import DetailList from '@/components/DetailList'

export default function Home() {
  return (
    <main className="w-full h-screen m-auto flex flex-col w-3xl max-w-3xl">
      <div className="w-full flex flex-col mb-10">
        <UserInfo />
        <ContactInfo />
        <SocialAccounts />
      </div>
      <div className="">
        <DetailList title="Core Skills" />
        <DetailList title="Employment History" />
        <DetailList title="Educational Qualifications" />
        <DetailList title="Awards and Recognitions" />
      </div>
      <Footer />
    </main>
  )
}
