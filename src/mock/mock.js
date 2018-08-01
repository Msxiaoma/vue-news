import Mock from 'mockjs'

// belong: 0 为热点，1为娱乐.....
let list = [{
  title: '新时代巡视利剑作用更加彰显——十九届中央第一轮巡视工作综述',
  sign: '置顶',
  source: '中国网',
  comment: 49,
  time: 44,
  showType: 0,
  belong: 0,
  href: 'https://m.toutiao.com/i6584321024441975310/'
}, {
  title: '暑假啦，这份抖音清单送给爱知识的你',
  sign: '热',
  source: '北京日报',
  comment: 46,
  time: 0,
  imgUrl: 'https://p3.pstatp.com/list/pgc-image/1533029781457b83ed218cb',
  showType: 1,
  belong: 1,
  href: 'https://m.toutiao.com/i6584314357033730563/'
}, {
  title: '墨西哥载约100人客机起飞后坠毁 官方：未造成人员死亡',
  sign: '热',
  source: '环球网',
  comment: 46,
  time: 0,
  imgUrl: 'https://p3.pstatp.com/list/9fd2000fc3214c6af68a',
  showType: 1,
  belong: 2,
  href: 'https://3w.huanqiu.com/a/73af740365f662a5/7F04VrtRdrW?agt=20'
}, {
  title: '新进展！北京首批积分落户初核结果今起可查询！',
  sign: '',
  source: '北京晨报',
  imgArr: ['https://p3.pstatp.com/list/pgc-image/1532990533258be89a710f1', 'https://p3.pstatp.com/list/pgc-image/1532990533071b8ea66b8d9', 'https://p3.pstatp.com/list/pgc-image/153299053305349195a3480'],
  comment: 4336,
  time: 21,
  showType: 2,
  belong: 3,
  href: 'https://3w.huanqiu.com/a/73af740365f662a5/7F04VrtRdrW?agt=20'
}, {
  title: '皇后镇令人惊艳的酒店，你会选哪家？',
  sign: '广告',
  bigImgUrl: 'http://sf3-ttcdn-tos.pstatp.com/img/web.business.image/201805315d0d66cf34fe705d4cf2a71a~640x0.image',
  source: 'TripAdvisor猫途鹰',
  comment: 0,
  time: 0,
  showType: 3,
  belong: 4,
  href: 'https://www.tripadvisor.cn/SmartDeals-g255122-Queenstown_Otago_Region_South_Island-Hotel-Deals.html'
}, {
  title: '中国习观｜未来十年，金砖合作将面临什么？习近平这样说',
  sign: '置顶',
  source: '中国网',
  comment: 49,
  time: 44,
  showType: 0,
  belong: 5,
  href: 'https://3w.huanqiu.com/a/73af740365f662a5/7F04VrtRdrW?agt=20'
}, {
  title: '新进展！北京首批积分落户初核结果今起可查询！',
  sign: '热',
  source: '北京日报',
  comment: 46,
  time: 0,
  imgUrl: 'https://p3.pstatp.com/list/pgc-image/1532990701079236bdfcce4',
  showType: 1,
  belong: 7,
  href: 'https://3w.huanqiu.com/a/73af740365f662a5/7F04VrtRdrW?agt=20'
}, {
  title: '墨西哥载约100人客机起飞后坠毁 官方：未造成人员死亡',
  sign: '热',
  source: '环球网',
  comment: 46,
  time: 0,
  imgUrl: 'https://p3.pstatp.com/list/9fd2000fc3214c6af68a',
  showType: 1,
  belong: 8,
  href: 'https://3w.huanqiu.com/a/73af740365f662a5/7F04VrtRdrW?agt=20'
}, {
  title: '新进展！北京首批积分落户初核结果今起可查询！',
  sign: '',
  source: '北京晨报',
  imgArr: ['https://p3.pstatp.com/list/pgc-image/1532990533258be89a710f1', 'https://p3.pstatp.com/list/pgc-image/1532990533071b8ea66b8d9', 'https://p3.pstatp.com/list/pgc-image/153299053305349195a3480'],
  comment: 4336,
  time: 21,
  showType: 2,
  belong: 9,
  href: 'https://3w.huanqiu.com/a/73af740365f662a5/7F04VrtRdrW?agt=20'
}, {
  title: '皇后镇令人惊艳的酒店，你会选哪家？',
  sign: '广告',
  bigImgUrl: 'http://sf3-ttcdn-tos.pstatp.com/img/web.business.image/201805315d0d66cf34fe705d4cf2a71a~640x0.image',
  source: 'TripAdvisor猫途鹰',
  comment: 0,
  time: 0,
  showType: 3,
  belong: 10,
  href: 'https://www.tripadvisor.cn/SmartDeals-g255122-Queenstown_Otago_Region_South_Island-Hotel-Deals.html'
}]

let newList = []
Mock.mock('/api/getvedio', function (options) {
  let obj = JSON.parse(options.body)
  console.log(obj)
  let startIndex = obj.pageId * 5 - 5
  let endIndex = obj.pageId * 5
  if(endIndex < list.length) {
    newList = list.slice(startIndex, endIndex)
  } else {
    newList = list.slice(startIndex, endIndex)
  }
  switch (obj.id) {
    case 0:
      return newList
    case 1:
      return newList.filter(item => {
        return item.belong === 1
      })
    case 2: // 娱乐
      return newList.filter(item => {
        return item.belong === 2
      })
    default:
      return newList
  }
})


// 搜索
Mock.mock('/api/search', function (options) {
  let obj = JSON.parse(options.body)
  let result = list.filter(item => {
    if (item.title.indexOf(obj.value) !== -1) {
      return item
    }
  })
  let data = {
    result: result,
    stat: 'OK'
  }
  return data
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
