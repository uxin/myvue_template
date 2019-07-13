import request from "./http";
import mock from "@/mock/index"

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
    getPhp() {
        return request({
            method: 'post',
            url: '/test/php/json.php',
            data: {
                uname: "小明",
                upwd: "123"
            },
            // `headers` 是即将被发送的自定义请求头
            // headers: {'Content-type': 'x-www-form-urlencoded'},
        });
    }



    // 利用mock模拟get请求
    login(data) {
        return mock.get("/login", {
            params: data
        })
    }
}
export default new Apis();