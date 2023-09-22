import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { OpenTemplate } from '../atomicDesign/templates/open'
import { LoginTemplate } from '../atomicDesign/templates/login'

export const AllRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<OpenTemplate />}>
        <Route path={'/'} element={<LoginTemplate />} />
      </Route>
    </Routes>
  )
}
