import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import showBlog from '../components/ShowBlog.vue'
import writeBlog from '../components/WriteBlog.vue'
import blogDetails from '../components/blogDetails.vue'
import alterBlog from '../components/alterBlog.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		redirect:'/showBlog',
		component: Home,
		children: [{
			path: '/showBlog',
			component: showBlog
		},
		{
			path: '/writeBlog',
			component: writeBlog
		},
		{
			path: '/blogDetails/:id',
			component: blogDetails
		},
		{
			path: '/alterBlog/:id',
			component: alterBlog
		},]
	},

]

const router = new VueRouter({
	routes
})

export default router
