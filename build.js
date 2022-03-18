// const dataSet = [1,2,3,4,5,6, 7]

// const mysearch = (array, target) =>{
//     let left = 0;
//     let right = array.length;

//     while (left < right){
//         let mid = Math.floor((left + right)/2)
//         if(target === array[mid]){
//             return mid
//         }else if (target < array[mid]){
//             left = mid -1
//         }else{
//             right = mid +1
//         }
//     }
//     return undefined
// }

// console.log("view Target")
// console.log(mysearch(dataSet,12))


// const dataSet = [1,2,3,4,5,6, 7]

// const mysearch= (array, target) =>{
//     return mysearchRecur(array, target, 0, array.length)

// }

// const mysearchRecur = (array, target, left, right) =>{
//     // while(left < right)
//         let mid = Math.floor((left + right)/2)
//       if(left > right){
//           return undefined;
//       }else if(target === array[mid]){
//           return mid;
//       }else if(target === array[mid]){
//           return mysearchRecur(array, target, mid -1, right)
//       }else {
//         return mysearchRecur(array, target, left, mid +1)
//       }
//     }
   


// console.log("view Target")
// console.log(mysearch(dataSet,6))

const familyTree =require("treeify")

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;

    }
}


class BinarySearchModel {
    constructor(){
        this.root = null;
    }
    push(value){
        const newNode= new Node(value)
        if(!this.root){
            this.root = newNode
            return this
        }
// setting the left to be the new node if there is no node(node means something)
        let starting = this.root
        if(value < starting.value){
            if(!starting.left){
                starting.left = newNode
                return this
            }
            //  this line of code now help the left to determine its own left and right by becoming a parent, meanwhile the root still remains the root of all parents
            starting.left = starting
            
        }else if(value > starting.value){
            if(!starting.right){
                starting.right = newNode
                return this
            }
            //  this line of code now help the left to determine its own left and right by becoming a parent, meanwhile the root still remains the root of all parents
            starting.left = starting
            
        }else if(value === starting.value)
        return eNoFitWork

    }
}

const newSearched = new BinarySearchModel();

newSearched.push(15)
newSearched.push(20)
newSearched.push(2)
// newSearched.push()
console.log(newSearched)
console.log(familyTree.asTree(newSearched,true))