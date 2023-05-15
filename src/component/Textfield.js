import React from 'react'

const Textfield = ({lable,inputProps,onChange,value}) => {
  return (
    <div id='update_user'>
        <label id='lable' htmlFor="">{lable}</label>
        <input id='input' type="text" {...inputProps} onChange={onChange} value={value} />
      
    </div>
  )
}

export default Textfield
