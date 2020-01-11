// console.assert(typeof Vue !== 'undefined'); console.log(typeof Vue);
if(typeof Vue === 'undefined') var Vue = () => {};

var vmTitle = new Vue({ data: { items: [{title: 'bar'}], }, });
vmTitle.$mount('#title'); //console.log(vm.items);

var vmBtn = new Vue({ data: { title: 'btn', disable: false, }, });
vmBtn.$mount('#btn');