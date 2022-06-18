//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"

const repeatString=(string,num,separator)=>{
    let arr =[]
    for (let i = 0; i <num ; i++) {
        arr[i]=string
    }
   return  arr.join(separator)

}

console.log(repeatString("hello",3,","))







//6. Реализуйте функцию, котрая принимает параметрами две строки. Если все символы второй строки содержаться в первой - возвращает true, если нет - возвращает false. Проверка проводится без учёта регистра.
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false



const isInclude=(string,str)=>{
   let newStr = str.split('')
    let boolean;
    for (let i = 0; i < newStr.length; i++) {
         boolean = string.split('').includes(newStr[i])
    }
return boolean
}
console.log(isInclude("Incubator", "bUr"))