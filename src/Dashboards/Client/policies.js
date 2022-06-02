import React from 'react'

function policies() {
  return (
    <div id = 'forms'>
    <div id = 'apply-form'>
    
    <h3>Policies</h3>
    <form>
        <label>License Type:</label>
        <select class = 'form-control'>
            <option>Motor Insurance</option>
            <option>Life Insurance</option>
            <option>Health Insurance</option>
            
        </select>


        <label>Description:</label>
        <input type = 'text' class = 'form-control' />
        
        <label>Expired:</label>
        <input type = 'text' class = 'form-control' />

        <label>Monthly Payment:</label>
        <input type = 'text' class = 'form-control' placeholder = 'GHS' />

        <label>Quarterly Payment:</label>
        <input type = 'text' class = 'form-control' placeholder = 'GHS'/>

        <label>Yearly Payment:</label>
        <input type = 'text' class = 'form-control' placeholder = 'GHS' />

        <label>Premium:</label>
        <input type = 'text' class = 'form-control' placeholder = 'GHS'/>

        <label>Terms:</label>
        <input type = 'text' class = 'form-control' />

        <label>Details:</label>
        <input type = 'text' class = 'form-control' />

        <button class = 'sub-btn'>Apply</button>

    </form>
    
    </div>  
</div>
  )
}

export default policies;