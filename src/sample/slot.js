if(typeof Vue === 'undefined') var Vue = () => {};

var ButtonSlotPlural = {
	template: `
		<div>
			<slot name="header"></slot>
			<slot></slot>
			<slot name="footer"></slot>
		</div>
	`,
};

var ButtonSlotSingle = {
	template: '<button><slot>ok</slot></button>',
};

new Vue({
	el: '#slot',
	components: {
		ButtonSlotSingle: ButtonSlotSingle,
		ButtonSlotPlural: ButtonSlotPlural,
	},
});