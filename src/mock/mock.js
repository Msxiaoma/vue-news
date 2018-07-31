import Mock from 'mockjs'

// 获取视屏新闻api
Mock.mock('/api/getvedio', {
    'name': 'hello'
})