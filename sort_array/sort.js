// 定义数组
var arr = ['a', 'x', 'x', 'x', 'm', 'a', 'k', 'm', 'p', 'j', 'a'];

// 打印数组
console.log(arr);

var count = {};
var pos = {};
// 遍历数组
arr.forEach(function(value, index) {
  if (count[value]) {
    count[value]++;
    pos[value] += ',' + index;
  } else {
    count[value] = 1;
    pos[value] = '' + index;
  }
});

console.log(count);
console.log(pos);

// 获取出现最多的字母
var max = 0;
var letter;

// 遍历对象，获取下标最大的字母
for (i in count) {
  if (count[i] > max) {
    max = count[i];
    letter = i;
  }
}

var maxArr = [];
for (i in count) {
  if (count[i] == max) {
    maxArr.push(i);
    console.log(count[i]);
    console.log(i);
  }
}
console.log(maxArr);

maxArr.forEach(function(index, ele, array) {
  console.log('字母' + index + '出现次数' + count[index] + ',出现的位置是'+ pos[index])
  console.log(index);
  console.log(ele);
  console.log(array);
});

// 输出到DOM

// 输出数组
document.getElementById('array').appendChild(document.createTextNode('[' + arr + ']'));

// 输出最多的字母
document.getElementById('most').appendChild(document.createTextNode(letter));

// 输出出现次数
document.getElementById('sum').appendChild(document.createTextNode(count.a));

// 输出位置数组
document.getElementById('location').appendChild(document.createTextNode(pos[letter]));
