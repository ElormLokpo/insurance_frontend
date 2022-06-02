import React from 'react'

function lifeInsurance() {
  return (
    <div id = 'forms'>
    <div id = 'apply-form'>
    
    <h3>Apply for Life Insurance</h3>
    <form>
        <label>Adhaar:</label>
        <input type = 'file' class = 'form-control' />

        <label>Drivers License:</label>
        <input type = 'file' class = 'form-control' />
        
        <label>Passport:</label>
        <input type = 'file' class = 'form-control' />

        <label>Adhaar:</label>
        <input type = 'file' class = 'form-control' />

        <label>Pen Card:</label>
        <input type = 'text' class = 'form-control' />

        <label>Salary Slip:</label>
        <input type = 'file' class = 'form-control' />

        <label>Bank Statement:</label>
        <input type = 'file' class = 'form-control' />

        <label> Itr: </label>
        <input type = 'file' class = 'form-control' />

        <button class = 'sub-btn'>Apply</button>

    </form>
    
    </div>

   
</div>
)
  
}

export default lifeInsurance;