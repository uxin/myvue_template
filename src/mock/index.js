import { UsersData } from './data/userInfo'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';  //拦截

let mock = new MockAdapter(axios);  //初始化拦截对象
// console.log(mock);  //两方法:onGet onpost

// 模拟get请求
mock.onGet("/login").reply((config) => {
	// console.log(config);
	// console.log(UsersData);
	// return [200, UsersData[0]];
	return [200, UsersData];
})
export default axios  //暴露axios






// import axios from 'axios'
// import MockAdapter from 'axios-mock-adapter';
// import {UsersData} from './data/userInfo'

// let mock = new MockAdapter(axios);

// mock.onGet('/login').reply(config => {
// 	console.log(config)
// 	console.log(UsersData[0])
// 	// 做一个数据效验
// 	var data={
// 				code: 200,
// 				msg: ''
// 			};

// 	if(false) {
// 			data.msg="登陆成功";
// 			data.code=200;
// 	}else{
// 			data.msg="账号或者密码错误";
// 			data.code=500
// 	}
// 	return [200,UsersData[0]];
// });

// mock.onPost('/test').reply(config => {
// 	console.log(config)
// 	console.log(UsersData[0])
// 	// 做一个数据效验
// 	var data={
// 				code: 200,
// 				msg: ''
// 			};

// 	if(false) {
// 			data.msg="登陆成功";
// 			data.code=200;

// 	}else{
// 			data.msg="账号或者密码错误";
// 			data.code=500
// 	}
// 	return [200,UsersData[0]];
// });

// // 例子
// /*
//  login(data){
//     return mock.post("/login",{
//       data: data
//     })
//   }
//    login(data){
//     return mock.get("/login",{
//       params: data
//     })
//   }
// */
// export default axios;	//注意暴露axios
