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
const names =['bob','Alex','Nick','John']
/*

const getNames=(arr)=>{
    const result=[]
    for (let i = 0; i < arr.length; i++) {
        let newValue= arr[i].name
        result[i]=newValue
    }
    return result

}
console.log(getNames(students));

const getTrueStudents =(arr)=>{
    const result =[]
    for (let i = 0; i <arr.length ; i++) {
        let newArr ={... arr[i],students:true}
        result[i]=newArr
    }

    return result
}
console.log(getTrueStudents(students))
*/

const getMappedArray=(Arr,func)=>{
    const result=[]
    for (let i = 0; i <Arr.length ; i++) {
        const newValue=func(Arr[i])
        result[i]=newValue
    }

    return result
}

console.log(getMappedArray(students,s=>s.name))
console.log(getMappedArray(students,s=>({...s,isStudents:true})))
console.log(students.map(s=>s.name))

const getFilteredArray=(arr,func)=>{
    const result=[]
    for (let i = 0; i <arr.length ; i++) {
        if(func(arr[i])===true){
            result.push(arr[i])
        }

    }
    return result
}
console.log(getFilteredArray(students,s=>s.age>=20))

const myFind=(arr,func)=>{
    for (let i = 0; i <arr.length ; i++) {
        if(func(arr[i])){
            return  arr[i]
        }

    }
}
console.log(myFind(students,s=>s.age>=20))