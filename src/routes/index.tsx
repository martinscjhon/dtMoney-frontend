import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { OpenTemplate } from '../atomicDesign/templates/open'
import { LoginTemplate } from '../atomicDesign/templates/login'
import { CreateAccountTemplate } from '../atomicDesign/templates/createAccount'
import { ResetPasswordTemplate } from '../atomicDesign/templates/resetPassword'

export const AllRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<OpenTemplate />}>
        <Route path={'/'} element={<LoginTemplate />} />
        <Route path={'/criar/conta'} element={<CreateAccountTemplate />} />
        <Route path={'/esqueci/senha'} element={<ResetPasswordTemplate />} />
      </Route>
    </Routes>
  )
}
