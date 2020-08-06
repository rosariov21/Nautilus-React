import React, { Component } from 'react';

class Home extends Component{
    render(){
        return(
           <div>
 <h2 class='site logo'>...</h2>
 <img src='src/Components/nautilus_mockup-master/assets/matches.png'/>
 <nav className='NAVIGATION'>
     <ul>
         <li>
             <a href='issues'>ISSUES</a>
         </li>
         <li>
             <a href='topics'>TOPICS</a>
             <li>
                 <a href='/blog'>BLOG</a>
             </li>
             <li>
                 <a href='newsletter'>NEWSLETTER</a>
             </li>
             <li>
                 <a href='https://www.presspassnow.com/nautilus/subscriptions/' class='button' target='blank'>Subscribe</a>
             </li>

         </li>
     </ul>
 </nav>

           </div>
     
        )
    }
}



export default Home; 