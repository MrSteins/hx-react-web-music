export function getCount(num) {
  if(num < 10000){
    return num
  }else {
    return Math.floor(num / 10000) + '万'
  }
}

export function getSizeImage(imgUrl, size) {
  return `${imgUrl}?param=${size}x${size}`;
}

export function formatDate(time, fmt) {
  let date = new Date(time)
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  for(let k in o) {
    if((new RegExp(`(${k})`)).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length))
    }
  }

  return fmt
}

export function getPlaySong(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}