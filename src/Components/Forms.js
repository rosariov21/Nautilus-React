import React, { Component } from 'react';

class Forms extends Component{
    render(){
        return(
 <section class="issue-landing-newsletter-signup">
<form>
<label> Notify me as new chapters and issues are released </label>
     <span> Thanks for Joining the Newsletter </span>
     <div>
         <input type="email" name="newsletter-signup" id="issue-landing-newsletter-email-field" placeholder="Subscribe To Newsletter"/>
         <input type="submit" value="Sign Up" class="button"/>
         </div>
</form>

 </section>
 
 

)
    }
    }; 

export default Forms ; 