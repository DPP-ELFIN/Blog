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
				}
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
		},
		methods: {
			//返回
			goBack() {
				this.$router.go(-1)
			},
			//提交
			submit() {
				this.blog.content = this.editor.txt.text() //获取文本编辑器的数据			
				var blogs = JSON.parse(window.localStorage.getItem('blogs'))
				//var blog = window.localStorage.getItem('blog')
				if (this.blog.title === '' || this.blog.content === '') return this.$router.go(-1);				
				blogs.unshift(this.blog)
				window.localStorage.setItem('blogs', JSON.stringify(blogs))
				console.log(blogs)
				this.$router.go(-1)
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
