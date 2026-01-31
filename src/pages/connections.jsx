import { PageLayout } from '@/layouts/PageLayout'
import Connections from '@/components/connections/Connections'

function ConnectionsPage() {
  return (
    <PageLayout>
      <h1 id="main-heading" className="sr-only">
        Connections
      </h1>
      <Connections />
    </PageLayout>
  )
}

export default ConnectionsPage
