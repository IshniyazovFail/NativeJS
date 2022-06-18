console.log('yo !')


const todolistID1 = "123-kdcui-54"
const todolistID2 = "122-kdfui-59"

const todolists = [
    {
        id: todolistID1,
        title: "What to learn",
        filter: "all",
    },
    {
        id: todolistID2,
        title: "What to bye",
        filter: "all",
    },
]

const tasks = {
    [todolistID1]: [
        {id: 1, name: "JS", isDone: false},
        {id: 2, name: "REACT", isDone: false},
        {id: 3, name: "HTML", isDone: false},
        {id: 4, name: "CSS", isDone: false},],
    [todolistID2]: [    {id: 1, name: "Bread", isDone: true},
        {id: 2, name: "Salt", isDone: true},
        {id: 3, name: "Butter", isDone: true},
        {id: 4, name: "Apples", isDone: true},],
}
console.log(tasks)

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

console.log(students.reduce((ac,st)=>ac.scores>st.scores?ac:st,0))

console.log(students.reduce((ac,st)=>ac +st.age,0))
console.log(students.reduce((ac,st)=>{
    ac[st.name] ={...st}
    delete ac[st.name].name
return ac
},{}))