// 验证手机格式
const isPhone = function (obj) {
  let verify = /^1[3|4|5|7|8]\d{9}$/;
  return verify.test(obj);
}
// 验证固话格式
const isTel = function (obj) {
  let verify = /^0\d{2,3}-?\d{7,8}$/;
  return verify.test(obj);
}
// 英文和数字
const isNumWord = function (obj) {
  let verify = /^[A-Za-z0-9]+$/;
  return verify.test(obj);
}
// 邮箱验证格式
const isEmail = function (obj) {
  let verify = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  return verify.test(obj);
}
// 判空
const isEmtpy = function (obj) {
  let temp = obj || '';
  return temp === '';
}
// 禁止输入空格键
const forbiddenSpace = function (event) {
  if (event.which) { // Netscape/Firefox/Opera
    if (event.which === 32) event.preventDefault();
  } else {
    if (event.keyCode === 32) return (event.returnValue = false);
  }
}
// 只能是中文或英文
const onlyWord = function (event) {
  if (event.which) { // Netscape/Firefox/Opera
    if (!(event.which === 8 || (event.which > 65 && event.which < 90) || (event.which > 97 && event.which < 122))) {
      event.preventDefault();
    }
  } else {
    if (!(event.keyCode === 8 || (event.keyCode > 65 && event.keyCode < 90) || (event.keyCode > 97 && event.keyCode < 122))) {
      return (event.returnValue = false);
    }
  }
}
// 数字不能为0
const isZero = function (value) {
  if (value > 0) return true;
  return false;
}
// 数字验证
const Numerical = function (obj, noAuto, isXian) {
  let flag = noAuto || false;
  let num = obj;
  if (flag) num = (num.toString()).trim();
  if (num === '' && flag) {
    return '';
  } else {
    let tmp = Math.abs(parseFloat(num) || 0);
    let str = tmp.toString();
    let hasDot = str.indexOf('.') > 0;
    if (str.length > 7) {
      return str.substr(0, 7);
    } else {
      if (isXian && hasDot) {
        return Number(tmp.toFixed(2));
      } else {
        return tmp;
      }
    }
  }
}
// 四舍五入
const intoBigNumber = function (obj, noAuto) {
  let num = Numerical(obj, noAuto);
  if (num !== '') num = Math.ceil(num);
  return num;
}
// 去空格
const clearSpace = function (obj) {
  return obj.replace(/(^\s*)|(\s*$)/g, '');
}
// 数字大于100
const isExceedHundred = function (value) {
  if (value) {
    if (value > 100) {
      return 100;
    } else {
      return value;
    }
  }
}
// 校验手机位数，去除多余的空格（用于xml里的导入，修复微信的bug）
const fixedPhone = function (phone) {
  let str = phone.replace(/[^x00-xFF]/g, '**');
  // 号码字节长度为13且号码只包含11个数字  或者  号码长度只为11
  if (str.length === 13 && str.replace(/[^0-9]/ig, '').length === 11) {
    return phone.substring(0, 11);
  } else if (phone.replace(/[^0-9]/ig, '').length !== 11) {
    return '';
  } else {
    return phone;
  }
}
// 校验密码强度
const fixedPassWord = function (item) {
  let num = /[0-9]/.test(item) === true ? 2 : 0;
  let sword = /[a-z]/.test(item) === true ? 4 : 0;
  let bword = /[A-Z]/.test(item) === true ? 6 : 0;
  let special = /[~`!@#$%^&*()_+-]/.test(item) === true ? 8 : 0;
  special = (special === 0) ? (/[=[\]|{};':",./<>?]/.test(item) === true ? 8 : 0) : special;
  return num + sword + bword + special;
}
// 特殊符号的限制（中文分隔号、英文斜杠、中英文括号除外）
const limitSymbol = function (item, can) {
  let special = /[~`!@#$%^&*_+-]/.test(item) === true ? 8 : 0;
  special = (special === 0) ? (/[=[\]|{};':",.<>?]/.test(item) === true ? 8 : 0) : special;
  special = (special === 0) ? (/[\u3002\uff0c\uff1a\u201c\u201d\u3001\uff1f\u300a\u300b]/.test(item) === true ? 8 : 0) : special;
  let flag = can || false;
  if (flag) special = (special === 0) ? (/[\uff1b]/.test(item) === true ? 8 : 0) : special;
  if (special !== 0) {
    return item.substr(0, item.length - 1);
  } else {
    return item;
  }
}
// 除去一切符号，除了\
const clearSymbol = function (item) {
  let tmp = item.replace(/[~`!@#$%^&*()_+-]/g, '');
  tmp = tmp.replace(/[=[\]|{};':",.<>?]/g, '');
  tmp = tmp.replace(/[\u3002\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b]/g, '');
  return tmp;
}
// url验证
const isUrl = function (obj) {
  let strRegex = '^((https|http|ftp|rtsp|mms)?://)' + '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' + '(([0-9]{1,3}.){3}[0-9]{1,3}' + '|' + '([0-9a-z_!~*\'()-]+.)*' + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' + '[a-z]{2,6})' + '(:[0-9]{1,4})?' + '((/?)|' + '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$';
  let re = new RegExp(strRegex);
  if (re.test(obj)) {
    return true;
  } else {
    return false;
  }
}

export default {
  isPhone,
  isTel,
  isEmail,
  forbiddenSpace,
  onlyWord,
  isZero,
  Numerical,
  isExceedHundred,
  clearSpace,
  intoBigNumber,
  fixedPhone,
  isNumWord,
  isEmtpy,
  fixedPassWord,
  limitSymbol,
  clearSymbol,
  isUrl
};