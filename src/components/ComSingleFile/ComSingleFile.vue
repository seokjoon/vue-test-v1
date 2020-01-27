<template>
	<div>
		<p class="message">메시지: {{ msg }}</p>
		<p :class="$style.message">메시지: {{ msg }}</p>
	</div>
</template>

<script>
	export default {
		data: () => ({ msg: 'msg comSingleFile' }),
	};
</script>

<style src="./ComSingleFile.css"></style> <!-- 외부 -->
<style> .message { color: #1e8ad6 } </style> <!-- 전역 -->
<style scoped></style> <!-- 지역 -->
<style module> .message { color: #42b983 } </style> <!-- 모듈 -->