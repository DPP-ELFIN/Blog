<template>
	<div class="blogDetails">
		<h1>{{blog.title}}</h1>
		<p>{{blog.content}}</p>
		<el-button type="primary" @click="goBack">返回</el-button>
		<el-button type="warning" @click="deleteBlog">删除</el-button>
	</div>
</template>

<script>
	export default {
		mounted() {
			//console.log(this.$route.params.id)
			this.blog = JSON.parse(window.localStorage.getItem('blogs'))[this.$route.params.id]
			console.log(this.blog)
		},
		data() {
			return {
				blog: {
					title: '',
					content: ''
				},
				blogId:this.$route.params.id
			}

		},
		methods: {
			//返回
			goBack() {
				this.$router.go(-1)
			},
			//删除功能
			deleteBlog(){
				let blogs = JSON.parse(window.localStorage.getItem('blogs'))
				blogs.splice(this.blogId,1)
				window.localStorage.setItem('blogs',JSON.stringify(blogs))
				console.log(blogs)
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped">
	h1{
		text-align: center;
	}
</style>
