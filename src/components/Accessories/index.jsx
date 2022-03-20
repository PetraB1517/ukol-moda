import React from "react";
import Product from "./../Product"
import './style.css';


const Accessories = () => {
    return (
      <div className="accessories">
        <h2>Doplňky</h2>
			  <div class="products">
          <Product name="Modrá kabelka" src="blue-handbag.jpg" 
          description="Efektní kožená kabelka v krásné modré barvě poskytne dostatek prostoru pro váš mobil, peněženku a další nezbytnosti." price={3590}/>

          <Product name="Šedá vlněná šála" src="grey-scarf.jpg" 
          description="Stylová unisexová šála vyrobená ze 100% extra jemné merino vlny. Moderní, jednoduché a věčné." price={970}/>
          
          <Product name="Brýle" src="glasses.jpg" 
          description="Holky nezlobte se, já už fakt nevím, co bych si tady měl vymyslet za text. Šaty, boty a kabelky mě zcela vyčerpaly." price={1620}/>
        </div>
		  	
		</div>

    );
  }

  export default Accessories;