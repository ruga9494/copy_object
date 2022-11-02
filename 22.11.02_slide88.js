
const hrTeam = {id:1, dname: '인사팀'};
const devTeam = {id:2, dname: '개발팀'};
const depts = [hrTeam, devTeam];

const hong = {id:1, name:'Hong', dept:1};
const Kim = {id:2, name:'Kim', dept:2};
const emps = [hong, Kim, {id:3, name:'Park', dept:2}, {id:4, name:'choi', dept:2}];

const deptMap = new Map(depts.map(d => [d.id, d]))
// deptMap.set(depts.hrTeam.id, hrTeam)
// deptMap.set(devTeam.id, devTeam)

const empMap = new Map(
  emps.map(e =>{
    const dept = deptMap.get(e.dept);
    return [e.id, {...e, dept}];
}))
// empMap.set(hong.id, hong)
// empMap.set(Kim.id, Kim)

const result = [...empMap]
  .filter(([_, emp]) => emp.dept.id === 2)
  .map(([_, emp]) => emp.name);

console.log(result);

const empDept = new Map()
empDept.set(deptMap)

console.log(deptMap)
console.log(empMap)
// console.log(empDept.get(Kim).dname);


// const hong = { id: 1, name: 'Hong' };
// const map = new Map([[1, 11], [2, 22]]);
// map.set('three', 333);  // {three: 333, four: [1,2]}
// map.set('four', [1, 2, 3, 4]);
// map.set(hong.name, hong);
// map.set(hong, hong.name);
// console.log(map);  // Map(6) {  1 => 11, 2 => 22, 'three' => 333, 'four' => [ 1, 2, 3, 4 ],
//                         //  'Hong' => { id: 1, name: 'Hong' }, { id: 1, name: 'Hong' } => 'Hong' }
// console.log(map.get(hong));  // 'Hong'
// map.delete(hong);
// map.has(hong);   // false
