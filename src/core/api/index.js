import request from "./http";

class Apis {
    getTopics() {
        return request({
            method: 'get',
            url: '/api/v1/topics',
        });
    }
}
export default new Apis();

// 发送 POST 请求
