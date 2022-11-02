// function copyobject(obj) {

const { type } = require("os");
const { arrayBuffer } = require("stream/consumers");

//   newobj = {};
//   for (k in obj) {
//     newobj[k] = obj[k]
//   }
//   return newobj
// }

// const kim = { nid:3, nm: 'Hong', addr: 'pusan'};
// const newKim = copyobject(kim);

// newKim.addr = 'daegu';
// newKim.national = 'Korea';
// newKim.age = 17;

// console.log(newKim)
// console.log(kim)
// console.log(kim.addr, newKim.addr)
// console.log(kim.addr !== newKim.addr);
//-------------------------------------------------------------------------------------------------
// function copyArray(arr) {
// 	const ret = [];
// 	for (const v of arr) {
// 		if (Array.isArray(v)) ret.push(copyArray(v));
// 		else if (typeof v === 'objct') ret.push(deepCopyObject(v));
// 		else ret.push(v);
// 	}
// 	return ret;
// }

// function deepCopyObject(obj) {
// 	const ret = {};
// 	for (const k in obj) {
// 		const v = obj[k];
// 		console.log(k, '=', v, typeof v, Array.isArray(v));
// 		if (Array.isArray(v)) ret[k] = copyArray(v);
// 		else if (typeof v === 'objct') ret[k] = deepCopyObject(v);
// 		else ret[k] = obj[k]; // ret['nm'] = obj['nm']
// 	}
// 	return ret;
// }
//-------------------------------------------------------------------------------------------------
// function deepCopyObject(obj) {
//   const ret = {};
//   for (k in obj) {
//     const v = obj[k]
//     // console.log('v = ', v)
//     if (Array.isArray(v)) {
//       deepCopyObject(v)
//     }
//     else if (typeof v === 'object') {
//       deepCopyObject(v)
//     }
//     else {
//       ret[k] = v
//     }
//   }
// }
// ----------------------------------------------------------------------
function deepCopyObject(obj) {
  const ret1 = [];
  const ret2 = {};
  for (k in obj) {
    const v = obj[k]
    // console.log(k)
    console.log("1층 -",v, typeof(v))
    if (Array.isArray(v)) {
      console.log("2층 어레이",v, "-개별 인덱스 :",v[0],v[1],v[2],v[3],v[4])
      for (let s = 0; s<v.length; s+=1) {
        console.log(v[s], typeof(v[s]))
      }
    }
    else if (typeof(v) === 'object') {
      console.log("2층 타입오브", v)
      for (i in v) {
        console.log("3층: ", i)
      }
    }
    else {
      ret2[k] = obj[k]
    }
    // if (Array.isArray(v)) {
    //   deepCopyObject(v)
    // }
    // else if (typeof v === 'object') {
    //   deepCopyObject(v)
    // }
    // else {
    //   ret.push(v)
    // }
  }
  return ret2
}
// ----------------------------------------------------------------------

// function abc(obj) {
//   const newobj = {};
//   for (k in obj) {
//     newobj[k] = obj[k]
//   }
//   return newobj
// }

const kim = {
	nid: 3,
	addr: 'Pusan',
	arr: [1, 2, 3, { aid: 1 }, [10, 20]],
	oo: { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
};



const newkim = deepCopyObject(kim);
newkim.addr = 'Daegu';
// newkim.oo.name = 'kim';
// newkim.arr[0] = 100;
// newkim.arr[3] = 200;
// newkim.arr[4][1] = 300;
// newkim.oo.addr.city = 'Daejeon';
console.log('kim = ', kim)
console.log('new kim = ', newkim);

for (i in newkim) {
  console.log("현재 newkim의 키의 값 : ",i,)
}

// const newKim = deepCopyObject(kim);
// newKim.addr = 'Daegu';
// newKim.oo.name = 'Kim';
// newKim.arr[0] = 100;
// newKim.arr[3].aid = 200;
// newKim.arr[4][1] = 300;
// newKim.oo.addr.city = 'Daejeon';
// console.log('kim= ',kim, 'newkim =', newKim);
// console.log(kim, newKim); // oo와 arr이 다르면 통과!




