import React from 'react'
import {Text, View, StyleSheet} from 'react-native'


//setData
import {userData} from './userData'
const simpleArray = [ " kucing ", " buaya ", " bebek ", " itik "]

export default function App(){
  const [array,setArray] = React.useState(simpleArray)


  React.useEffect(
    ()=>{
      //userData.map((data,idx)=> console.log(data.name))

      //  for (let i=0; i<userData.length; i++){
      //    console.log(userData[i].name)
      //  }

      //for Remove and repelace
      // let del =  simpleArray.splice(1,2, "aaa","bbb") 
      // console.log(simpleArray)
      // console.log(del)

      //remove only
      // simpleArray.splice(2,1)
      // console.log(simpleArray)

      //Push Array
      //setArray((x) => [...x, " aa ", " bb "])

      //Sort Array
      // array.sort()
      // console.log(array)

      //Reverse Array
      // array.reverse()
      // console.log(array)
      

      //.................................................
      //Number manipulation

      let num = [5,3,2,1,4,2,4,5,7,8,8]
      
      //Max Number
      // console.log(Math.max.apply(null, num))

      //Min Number
      // console.log(Math.min.apply(null, num))

    },[]
  )
  return(
    <>
      <View style= {myStyle.container}>
          <Text style={myStyle.fontStyle}>
            {array}
          </Text>
      </View>
      
    </>
  )
}

const myStyle = StyleSheet.create({
  container:{
    backgroundColor:"yellow",
    flex:1, 
    justifyContent:"center", 
    alignItems:"center"
  },
  fontStyle:{
    fontSize:30,
    backgroundColor:"grey", 
    color:"white"
  }
})