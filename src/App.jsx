import React, { useEffect, useState } from 'react'

const App = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [isPartialChecked, setIsPartialChecked] = useState({
    "check3":false,
    "check2":false,
    "check1":false,

  })

  
  const handleCheckAll = () =>{
  setIsChecked(!isChecked)
  setIsPartialChecked({
    "check3":!isChecked,
    "check2":!isChecked,
    "check1":!isChecked,

  })
  } 

  const handleSinglecheck = (e)=> {
    if(isChecked){
      setIsChecked(false)
      
    }
    console.log(e.target.name)
    setIsPartialChecked({...isPartialChecked,[e.target.name]: true})
  }
function flateMe  (arrr){
  
  let flatenArr = []
  arrr.forEach(element => {
    if (!Array.isArray(element) ){ flatenArr.push((element))}
    console.log(flatenArr)
    if (Array.isArray(element) ){
      flatenArr.push(...element)
    }
  });
  return flatenArr

}

console.log(isPartialChecked)
  useEffect(()=>{
    let arr = [ [1,2],[1,2,[2,4,[1,2],2],[3],1,3]]
    
console.log(    flateMe(arr)
)
  },[])

  return (
    <>
    <div style={{}}>
    <span>check All</span>  <input checked={isChecked} onClick={handleCheckAll} type='checkbox'/>
     <div>check me
      <input checked={isChecked || isPartialChecked.check1} name='check1'  onClick={handleSinglecheck} type='checkbox' />

     </div>
     <div>check me
      <input checked={isChecked || isPartialChecked.check2} name='check2'  onClick={handleSinglecheck}  type='checkbox' />

     </div>
     <div>check me
      <input checked={isChecked || isPartialChecked.check3} name='check3' onClick={handleSinglecheck}   type='checkbox' />

     </div>
  
   

    </div>
    
    
    </>
  )
}

export default App