import HelloWorld from '@/components/HelloWorld'

const routeConfig = [

  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('@/views/login/index')
  //   // component:Login
  // },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/layout/index'),
    children: [
      {
        path: '/index',
        name: 'HelloWorld',
        component: HelloWorld,
        meta:{
          title:'首页'
        }
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index'),
        meta:{
          title:'登录页'
        }

        // component:Login
      },
    ]
  }
]

export default routeConfig