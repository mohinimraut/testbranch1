import React from 'react'

function File1() {
    const arr1=["aa","bb"]
   
  return (
    <div>
        {arr1.map((data) =>(
            <div>{data}</div>
        ) )}
   
    </div>
  )
}

export default File1