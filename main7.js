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



//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false

    const checkStart= (string,substring)=>{
    return string.toLowerCase().startsWith(substring.toLowerCase())
    }
console.log(checkStart("Incubator", "iNc"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString=(string,number)=>{
    return string.slice(0,number).concat("...")
}

console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null

 const getMinLengthWord=(string)=>{
    let newString=string.split(" ").sort((a,b)=>a.length>b.length)
     return string.trim()==="" ? null : newString[0]
 }
console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))
console.log(" ")

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

const setUpperCase=(String)=>{
    let array = String.split(" ")
    return array.map(el=>el[0].toUpperCase().concat(el.slice([1],el.length).toLowerCase())).join(" ")
}
console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))


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