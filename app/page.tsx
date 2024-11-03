import React from 'react'
import Main from '@/app/components'
import { useRouter } from 'next/router'

const App = () => {
  const router = useRouter()
  const { query } = router

  // يمكنك الآن تمرير query كـ props إلى الـ component Main
  return (
    <Main query={query} />
  )
}

export default React.memo(App)
