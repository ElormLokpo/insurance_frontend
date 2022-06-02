import React from 'react'
const HomeInsurance = ()=>{
  return(
    <div id = 'forms'>
    <div id = 'apply-form'>
    
    <h3>Apply for Home Insurance</h3>
    <form>
        <label>Property Document:</label>
        <input type = 'file' class = 'form-control' />

        <label>Building Type:</label>
        <select class = 'form-control'>
            <option>Detached</option>
            <option>Semi-Detached</option>
            <option>Apartment</option>
        </select>
        
        <label>Number of Storeys:</label>
        <input type = 'text' class = 'form-control' />

        <label>Value of Home:</label>
        <input type = 'text' class = 'form-control' placeholder = "GHS"/>

        <label>Value of Home and Items:</label>
        <input type = 'text' class = 'form-control' placeholder = "GHS" />


        <button class = 'sub-btn'>Apply</button>

    </form>
    
    </div>

    <div id = 'apply-form'>
        <h3>Make Claim : Home Insurance</h3>
    <form>
        <label>Claim Form:</label>
        <input type = 'file' class = 'form-control' />

        <label>Policy Document:</label>
        <input type = 'file' class = 'form-control' />
        
        <label>Chassis Number:</label>
        <input type = 'text' class = 'form-control' />

        <label>Loss Incured:</label>
        <input type = 'text' class = 'form-control' />

        <label>Property Rate Receipt:</label>
        <input type = 'file' class = 'form-control' />

        <label>Repair Bill:</label>
        <input type = 'text' class = 'form-control' placeholder = 'GHS' />

        <label>Surveyor Report:</label>
        <input type = 'file' class = 'form-control' />

        <label>Police NonTraceable Certificate:</label>
        <input type = 'file' class = 'form-control' />

        <label>Accident Case:</label>
        <input type = 'file' class = 'form-control' />

        <label>Witness:</label>
        <input type = 'file' class = 'form-control' />

        <label>Claim Reference:</label>
        <input type = 'text' class = 'form-control' />
    
            <button class = 'sub-btn'>Make Claim</button>
    </form>
    
    </div>
</div>
  )
  
}

export default HomeInsurance;