import request from "./http";

class Apis {
    getTopics() {
        return request({
            method: 'get',
            url: '/api/v1/topics',
        });
    }
    getItem() {
        return request({
            method: 'get',
            url: '/api/v1/topic/5433d5e4e737cbe96dcef312',
        });
    }
    getIndexData() {
        return request({
            method: 'get',
            url: '/json1811.ashx',
            params: {
                "v": "1562765144584",
                "c": "NewIndexController",
                "m": "index"
            }
        });
    }
}
export default new Apis();
