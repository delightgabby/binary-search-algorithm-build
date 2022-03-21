// const x =[22,4,66,23,70,50,21]

// console.log(x.sort((a,b)=>{
//     return b-a

// })
// )

const x =[22,4,66,23,70,50,21]

const xx = [
    {name: "peter", age : 22},
    {name: "Ndidi", age : 24},
    {name: "Nelson", age : 21},
    {name: "cliton", age : 20},


]

console.log(xx.sort((a,b)=>{
    return b.age - a.age

})
)