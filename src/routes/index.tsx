import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { OpenTemplate } from '../atomic-design/templates/open-page-default'
import { LoginTemplate } from '../atomic-design/templates/login'
import { CreateAccountTemplate } from '../atomic-design/templates/create-account'
import { ResetPasswordTemplate } from '../atomic-design/templates/reset-password'
import { HomeTemplate } from '../atomic-design/templates/home'

export const AllRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<OpenTemplate />}>
        <Route path={'/'} element={<LoginTemplate />} />
        <Route path={'/criar/conta'} element={<CreateAccountTemplate />} />
        <Route path={'/esqueci/senha'} element={<ResetPasswordTemplate />} />
      </Route>

      <Route path={'/home'} element={<HomeTemplate />} />
    </Routes>
  )
}
