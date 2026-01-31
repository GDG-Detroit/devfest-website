import { PageLayout } from '@/layouts/PageLayout'
import ForHire from '@/components/careers/ForHire'
import JobOpen from '@/components/careers/JobOpen'

function CareersHub() {
  return (
    <PageLayout>
      <h1 id="main-heading" className="sr-only">
        Careers Hub
      </h1>
      <ForHire />
      <JobOpen />
    </PageLayout>
  )
}

export default CareersHub
