import Vue, { AsyncComponent } from 'vue'
import VueRouter, { RouteConfig, Route, NavigationGuard } from 'vue-router'

const Login: AsyncComponent = (): any => import('@/views/Login.vue')

const Home:AsyncComponent=(): any => import('@/views/Home.vue')

const EPage:AsyncComponent=(): any => import('@/views/EPage.vue')

const IArticle:AsyncComponent=():any=>import('@/base/IArticle.vue')

const DArticle:AsyncComponent=():any=>import('@/base/DArticle.vue')

Vue.use(VueRouter)
const routes: Array<RouteConfig> = [
	{
		path:'*',
		redirect:'/Login'
	},
   {
     path: '/Login',
     name: 'Login',
     component: Login
   },
   {
	   path:'/Home',
	   name:'Home',
	   component:Home,
	   children:[
		   {
			   path:'/Home/IArticle',
			   name:'IArticle',
			   component:IArticle
		   },
		   {
			    path:'/Home/DArticle',
				name:'DArticle',
			    component:DArticle
		   }
	   ]
   },
   {
   	   path:'/EPage',
   	   name:'EPage',
   	   component:EPage,
   }
]
const router = new VueRouter({
  routes
})

export default router
