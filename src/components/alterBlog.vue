<template>
	<div class="content">
		<el-input placeholder="标题" v-model="blog.title"> </el-input>
		<el-radio-group v-model="radio">
		    <el-radio :label="3">技术</el-radio>
		    <el-radio :label="6">日常</el-radio>
		    <el-radio :label="9">生活</el-radio>
		  </el-radio-group>
		<div id="demo1"></div>
		<el-button type="primary" @click="goBack">返回</el-button>
		<el-button type="primary" @click="submit">提交</el-button>
	</div>
</template>

<script>
	// 引入 wangEditor
	import wangEditor from 'wangeditor'
	//console.log(vm.radio)
	export default {
		name: 'writeBlog',
		data() {
			return {
				radio:null,
				editor: null, //文本编辑器对象
				blog: {
					title: '',
					type:'',
					content: ''
				},
				blogId:this.$route.params.id,
				blogs:JSON.parse(window.localStorage.getItem('blogs'))
			}
		},
		watch:{
			radio:function(){
				//console.log(this.radio)
				this.radio === 3?this.blog.type = '技术':this.radio === 6?this.blog.type = '日常':this.blog.type = '生活'
				//console.log(this.blog.type)
			}
		},
		mounted() {
			const editor = new wangEditor(`#demo1`)
			editor.config.height = 540
			// 创建编辑器
			editor.create()
			this.editor = editor
			//挂载数据
			this.blog = this.blogs[this.blogId]
			this.blog.type === '技术'?this.radio = '3':this.blog.type === '日常'?this.radio = 6:this.radio = 9
			 editor.txt.html('<p>'+ this.blog.content +'</p>')
			console.log(this.blog)
		},
		methods: {
			//返回
			goBack() {
				this.$router.push('/')
			},
			//提交
			submit() {
				//let blogs = JSON.parse(window.localStorage.getItem('blogs'))
				this.blog.content = this.editor.txt.text()
				this.blogs.splice(this.blogId,1)
				this.blogs.unshift(this.blog)
				window.localStorage.setItem('blogs',JSON.stringify(this.blogs))
				console.log(this.blogs)
				this.$router.push('/')
				//console.log(this.blog)
				//console.log(this.editor.txt.text())
				
			}
		},
		
		beforeDestroy() {
			// 调用销毁 API 对当前编辑器实例进行销毁
			this.editor.destroy()
			this.editor = null
		}
	}
</script>

<style scoped="scoped" lang="less">


</style>
