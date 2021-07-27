<template>
	<div class="tmpl">
		<el-container class="home-container">
			<!-- //头部 -->
			<el-header>
				<div class="head-main">
					<div>
						<img src="../assets/logo.png" alt="">
						<span>用户名</span>
					</div>
					<el-button type="info" @click="writeBlog">写博客</el-button>
					<el-button type="info" @click="change">{{isDark?`小月亮`:`大太阳`}}</el-button>
				</div>

			</el-header>
			<div :class="isDark?`main-container-light`:`main-container-dark`">
				<el-container :class="isDark?`main`:`dark`">
					<!-- //主体内容 -->
					<el-main>
						<router-view></router-view>
					</el-main>
				</el-container>
			</div>
		</el-container>


	</div>
</template>

<script>
	export default {
		methods: {
			writeBlog() {
				this.$router.push('/writeBlog')
			},
			change() {
				this.isDark = !this.isDark
			}
		},
		data() {
			return {
				isDark: true
			}
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.home-container {
		height: 100%;
	}

	.el-header {
		background-color: #373d41;

	}

	.head-main {
		width: 1000px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: white;
		font-size: 20px;
		line-height: 60px;

		>div {
			display: flex;
			align-items: center;
			flex: 1;

			img {
				width: 40px;
				height: 40px;
			}

			span {
				margin-left: 15px;
			}
		}
	}

	.main-container-light {
		width: 100%;
		height: 100%;
		background-color: white;
	}
	
	.main-container-dark{
		width: 100%;
		height: 100%;
		background-color: black;
		color: gold;
	}
	.main {
		background-color: #eaedf1;
		width: 1000px;
		margin: 0 auto;
		height: 100%;
	}

	.dark {
		/* 黑夜模式 */
		background-color: #000026;
		width: 1000px;
		margin: 0 auto;
		height: 100%;
	}

	.el-main {}
</style>
