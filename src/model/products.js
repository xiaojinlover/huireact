import dva from 'dva';
import request from '../utils/request';
export default {
	namespace:'products',
	state:[
		{name:'产品一',id:1},
		{name:'产品二',id:2},
		{name:'产品s',id:3},
		{name:'产品4',id:4},
		{name:'产品5',id:5},
		{name:'产品6',id:6},
		{name:'产品7',id:7},
		{name:'产品8',id:8}
	],	
	reducers:{
		'delete'(state,{payload:id}){
			return state.filter(item=>item.id!==id);
		},
		'add'(state, { payload: id }) {		  
		  return [...state, id];
		},
	},
	
	
};