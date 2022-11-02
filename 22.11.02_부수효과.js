const weeks = ['일','월','화','수','목','금','토']


const getNextWeek = () => {
  let widx = -1;
  return () => {
    widx += 1; // side - effect! 부수효과
    if (widx >= weeks.length) widx = 0;
    return `${weeks[widx]}요일` ;
  };
};


const nextWeek = getNextWeek();
console.log(nextWeek());
console.log(nextWeek());
console.log(nextWeek());
console.log(nextWeek());
console.log(nextWeek());
console.log(nextWeek());
console.log(nextWeek());


// let cnt = 0;
// const intl = setInterval(() => {
//   console.log('call', cnt, getNextWeek());
//   if ((cnt +=1) ===8) clearInterval(intl);
// }, 1000);
