import Mock from 'mockjs'

Mock.mock('/api/getvedio', function (options) {
  let obj = JSON.parse(options.body)
  let list = [{
    title: '中国习观｜未来十年，金砖合作将面临什么？习近平这样说',
    sign: '置顶',
    source: '中国网',
    comment: 49,
    time: 44,
    showType: 0
  }, {
    title: '新进展！北京首批积分落户初核结果今起可查询！',
    sign: '热',
    source: '北京日报',
    comment: 46,
    time: 0,
    imgUrl: 'https://p3.pstatp.com/list/pgc-image/1532990701079236bdfcce4',
    showType: 1
  }, {
    title: '新进展！北京首批积分落户初核结果今起可查询！',
    sign: '',
    source: '北京晨报',
    imgArr: ['https://p3.pstatp.com/list/pgc-image/1532990533258be89a710f1', 'https://p3.pstatp.com/list/pgc-image/1532990533071b8ea66b8d9', 'https://p3.pstatp.com/list/pgc-image/153299053305349195a3480'],
    comment: 4336,
    time: 21,
    showType: 2
  }, {
    title: '皇后镇令人惊艳的酒店，你会选哪家？',
    sign: '广告',
    bigImgUrl: 'http://sf3-ttcdn-tos.pstatp.com/img/web.business.image/201805315d0d66cf34fe705d4cf2a71a~640x0.image',
    source: 'TripAdvisor猫途鹰',
    comment: 0,
    time: 0,
    showType: 3
  }]
  switch (obj.id) {
    case 0:
      return list
    case 1:
      list = [{
        title: '最穷上市公司涉犯罪移送公安机关，账面仅剩53元，惨遭估值0元',
        sign: '热',
        source: 'AI财经社',
        comment: 0,
        time: 0,
        imgUrl: 'https://p3.pstatp.com/list/pgc-image/153302400148290b956de91',
        showType: 1
      }]
      return list
    case 2: // 娱乐
      list = [{
        title: '鹿晗发微博宣布好消息，粉丝们激动了，并且直呼：终于开窍了！',
        sign: '热',
        source: '韩式第一娱乐',
        comment: 8,
        time: 10,
        imgArr: ['https://p3.pstatp.com/list/pgc-image/153301297039665c3283d13', 'https://p3.pstatp.com/list/pgc-image/1533012970818c277cefd97', 'https://p3.pstatp.com/list/pgc-image/1533012970358d12c57b5ad'],
        showType: 2
      }]
      return list
    default:
        return list
  }
  
})

function json(str) {
  let arr = str.split('&')
  let obj = {}
  arr.forEach(item => {
    let key = item.split('=')[0]
    let value = item.split('=')[1]
    obj[key] = value
  })
  return obj
}
