const routeUser = '/user'
const routeApp = '/app'

export const endpoint = {
  login: {
    authentication: `${routeApp}/login`,
  },
  user: {
    create: `${routeUser}/create`,
  },
}
