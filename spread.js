const slime = {
    name: "슬라임"
}
const cuteSlime = {
    name: "슬라임",
    attribute: "cute"
}
const purpleCuteSlime = {
    // << spread >> => ... 사용해서 객체 통째로 가져오는게 아닌 "값" 만 가져오기
    ...cuteSlime,
    color: "purple",
    // 같은 키값을 다시 다른값을 넣어주면 덮어쓰기가 된다
    name: "slime"
}

console.log(purpleCuteSlime);

// << 배열 spread >>
const nums = [1, 2, 3, 4, 5];
// 안에있는 요소들만 가져오기
const nums2 = [...nums, 6, 7, 8, 9, 10];
// filter 사용해서 요소들이 조건에 맞는 것만 가져오기
const nums3 = [...(nums2.filter(n => n % 2 === 0)), 11, 12, 13, 14, 15];
// 객체로 가져올 때
const users = [
    {
        id: 1,
        name: "김준일",
    },
    {
        id: 2,
        name: "김준이",
    },
    {
        id: 3,
        name: "김준삼",
    },
    {
        id: 4,
        name: "김준사",
    }

];

const evenUsers = [...users.filter(user => user.id % 2 === 0), {id: 5, name: "김준오"}];

console.log(evenUsers);