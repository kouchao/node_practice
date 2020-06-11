const {resolve} = require('path')
const fs = require('fs')
module.exports.getRouter = (path = resolve('./')) => {
  const files = fs.readdirSync(path)
  let routes = ''
  files.forEach((file) => {
    file = file.replace('.vue', '')
    routes += `{
    path: '/${file}',
    name: '${file}',
    component: () => import('./views/${file}.vue')
},
`
  })

  return `
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
${routes}
    ]
})`
}