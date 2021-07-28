<template>
	<div class="content">
		 <el-input placeholder="请搜索输入内容" v-model="search" class="input-with-select">
		    <el-select v-model="select" slot="prepend" placeholder="类型">
		      <el-option label="技术" value="技术"></el-option>
		      <el-option label="日常" value="日常"></el-option>
		      <el-option label="生活" value="生活"></el-option>
		    </el-select>
		  </el-input>
		<h1>博客总览</h1>
		<div class="single-blog" v-for="(blog,index) in filterBlogs" @click="goBlogDetail(index)">
			<h2>{{blog.title}}</h2>
			<p>{{blog.type}}</p>
			<hr>
			<article>{{blog.content | showAll}}</article>
		</div>
	</div>
</template>

<script>
	import blogDetails from './blogDetails.vue'
	
	export default {
		data() {
			return {
				select:'',
				search:'',
				blogs: [{
						title: '测试标题1',
						type:'技术',
						content: '测试内容1'
					},
					{
						title: '测试标题2',
						type:'日常',
						content: '测试内容2'
					},
					{
						title: '测试标题3',
						type:'生活',
						content: '测试内容3'
					}
				]
			}
		},
		watch:{
			select:function(){
				//console.log(this.select)
				return this.blogs.filter((value)=>{
					return value.type.match(this.select)
					})
			}
		},
		computed:{
			//搜索功能实现
			filterBlogs:function(){
				this.blogs = JSON.parse(window.localStorage.getItem('blogs'))
				return this.blogs.filter((value)=>{
					return value.title.match(this.search)
				})
			},
		},
		beforeRouteLeave(to,from,next) {
			window.localStorage.setItem('blogs',JSON.stringify(this.blogs))
			next()
		}, 
		methods:{
			goBlogDetail(index){
				this.$router.push('/blogDetails/'+index)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.single-blog {
		border-radius: 10px;
		background-color: #fff;
		padding: 10px;
		margin-bottom: 10px;

		h2 {
			margin-top: 0;
		}
	}
</style>
