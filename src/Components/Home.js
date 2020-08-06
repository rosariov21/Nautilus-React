import React, { Component } from 'react';

class Home extends Component{
    render(){
        return(
           <div>
 <h2 class='site logo'>Catalystys</h2>
 <p>Agents of change</p>
 <a href="catalysts/catalysts" class="button">Read Issue Overview</a>
 </div>

<h2 class="chapter-number">Chapter one</h2>
<h3 class="chapter-title">Art</h3>
<p class="chapter-meta">Published December 05, 2019</p>

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
 <img src='src/Components/nautilus_mockup-master/assets/clover_card.jpg'/>

           </div>
     
        )
    };
}



export default Home; 