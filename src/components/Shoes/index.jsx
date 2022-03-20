import React from "react";
import Product from "./../Product"
import './style.css';


const Shoes = () => {
    return (
      <div className="shoes">
        <h2>Boty</h2>
			  <div class="products">
          <Product name="Běhací tenisky" src="running-shoes.jpg" 
          description="Růžová s kontrastními šedými a bílými detaily? Veliká paráda! Tyhle tenisky jsou další srdcová záležitost" price={1790}/>

          <Product name="Třpytivé lodičky" src="shiny-shoes.jpg" 
          description="Elegantní třpyticé lodičky, které padnou skoro ke každému outfitu. Toto nesmí ve vašem šatníku chybět." price={2950}/>
          
          <Product name="Červené botičky" src="red-shoes.jpg" 
          description="Extravagantní červené boty s vysokým šnerováním. V těchto botách se zá vámi budou všichni otáčet." price={6200}/>
        </div>
		  	
		</div>

    );
  }

  export default Shoes;