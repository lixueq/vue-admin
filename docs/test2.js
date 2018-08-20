const str = '105,104,101,117,104,101,129,111,103,125,0,110,125,131,110,125,132,110,125,133,110,125,136,110,125,137,110,125,159,110,125,145,0,146,145,148,146,145,'

// Set 是一种数据结构，可以实现去重
// 将字符串转成数组传递给 Set 构造函数
// Set 构造函数会对数组中的数据自动完成去重
const s = new Set(str.split(','))

// 把 Set 中空字符串内容删除
s.delete('')

// 重新将 Set 数组转换成一个以 , 分隔的字符串
const rids = [...s].join(',')