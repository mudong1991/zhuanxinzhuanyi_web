/*
 * 通用到的函数
 */

//获取url中的搜索值函数
function getQueryStringKeyItem(key, query_string) {
    if (query_string.substr(0, 1) === "?") {
        query_string = query_string.substr(1)
    }
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");
    var r = query_string.match(reg);
    if (r != null)
        return decodeURI(r[2]);
    return null;
}