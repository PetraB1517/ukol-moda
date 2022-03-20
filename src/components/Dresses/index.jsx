import React from "react";
import Product from "./../Product"

import './style.css';


const Dresses = () => {
    return (
      <div className="dresses">
        <h2>Šaty</h2>
			  <div class="products">
          <Product name="Červené šaty" src="red-dress.jpg" 
          description="V barvě jahod! Krátké šaty v sytě červeném odstínu Váš šatník nekompromisně nabijí energií." price={2290}/>
          <Product name="Květované šaty" src="flower-dress.jpg" 
          description="Vzdušné, rozevláté a především velmi pohodlné! Tyhle šaty od dánské značky zkrátka nebudete chtít sundat." price={3100}/>
          <Product name="Žluté šaty" src="yellow-dress.jpg" 
          description="Žluté jako slunce! Volnější plátěné šaty s vypasovanou siluetou mají potenciál slušet opravdu každé postavě." price={4250}/>
        </div>
		  	
		</div>

    );
  }

  export default Dresses;