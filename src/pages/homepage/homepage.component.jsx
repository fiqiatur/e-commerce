import React from "react";
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'
import Footer from '../../components/Footer/footer'

export default function homepagecomponent() {
   return (
      <div>
         <div className="homepage">
           <Directory />
         </div>
           <Footer />
      </div>
   );
}
 