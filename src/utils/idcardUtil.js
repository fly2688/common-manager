// 身份证验证
function isTrueCodeBy18IdCard (idCard) {
  let Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]; // 加权因子
  let valideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; // 身份证验证位值.10代表X
  let sum = 0; // 声明加权求和变量
  if (idCard[17].toLowerCase() === 'x') {
    idCard[17] = 10; // 将最后位为x的验证码替换为10方便后续操作
  }
  for (let i = 0; i < 17; i++) {
    sum += Wi[i] * idCard[i]; // 加权求和
  }
  let valCodePosition = sum % 11; // 得到验证码所位置
  let tmp = Number(idCard[17]);
  if (tmp === valideCode[valCodePosition]) {
    return true;
  } else {
    return false;
  }
}

function isTrueBrithBy18IdCard (idCard) {
  let year = idCard.substring(6, 10);
  let month = idCard.substring(10, 12);
  let day = idCard.substring(12, 14);
  let tempDate = new Date(year, parseFloat(month) - 1, parseFloat(day));
  // 这里用getFullYear()获取年份，避免千年虫问题
  if ((tempDate.getFullYear() !== parseFloat(year)) || (tempDate.getMonth() !== parseFloat(month) - 1) || (tempDate.getDate() !== parseFloat(day))) {
    return false;
  } else {
    return true;
  }
}

function isTrueBrithBy15IdCard (idCard) {
  let year = idCard.substring(6, 8);
  let month = idCard.substring(8, 10);
  let day = idCard.substring(10, 12);
  let tempDate = new Date(year, parseFloat(month) - 1, parseFloat(day));
  // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
  if ((tempDate.getYear() !== parseFloat(year)) || (tempDate.getMonth() !== parseFloat(month) - 1) || (tempDate.getDate() !== parseFloat(day))) {
    return false;
  } else {
    return true;
  }
}

function idCardValidate (card) {
  let idCard = trim(card.replace(/ /g, ''));
  if (idCard.length === 15) {
    return isTrueBrithBy15IdCard(idCard);
  } else if (idCard.length === 18) {
    let aIdCard = idCard.split(''); // 得到身份证数组
    if (isTrueBrithBy18IdCard(idCard) && isTrueCodeBy18IdCard(aIdCard)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function trim (str) {
  return str.replace(/(^\s*)|(\s*$)/g, '');
}

export default {
  idCardValidate
};