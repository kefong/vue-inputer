import view from './view'
var Inputer = {
		
}
Inputer.install = function(Vue, options){
	// 注册组件
	Vue.component('inputer-view', view);
	//注入
	Vue.mixin({
		methods: {
		}
	});
}
export default Inputer;