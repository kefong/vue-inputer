<template>
	<div class="inputer-view">
		<div v-if="write">
			<input class="inputer-input" v-model="props.value" type="text" v-on:blur="makeOnlyRead" v-focus="true">
		</div>
		<div v-else>
			<input v-model="props.value" type="hidden">
			<label class="inputer-label" v-on:click="makeWrite">{{ props.value }}</label>
		</div>
	</div>
</template>
<script>
export default {
	name: 'inputer-view',
	data: function(){
		return {
			props: {
				value: this.value
			},
			write: false
		}
	},
	props: {
		value: {
			type: String,
			required: true
		},
		type: {
			type: String,
			default: 'text'
		}
	},
	directives: {
		focus: {
			// 指令的定义---
		    inserted: function (el, {value}) {
		    	if(value){
		    		// 聚焦元素
			        el.focus()
		    	}		    	
		    }
		}
	},
	methods: {
		makeWrite: function(){
			this.write = true;
		},
		makeOnlyRead: function(){
			this.write = false;
		}
	}
}
</script>
<style>
.inputer-input {
	width: 100%;
}
.inputer-label {
	display: block;
}
</style>