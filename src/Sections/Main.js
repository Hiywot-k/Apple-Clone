import React from "react";
import Alert from "./Alert"
import TopHighlights from "./TopHighlights"
import MidSec from "./MidSec"
import LastSec from "./LastSec";
import AppleYou from "./AppleYoutube/AppleYou";


function Main (){
    return(
        <div>
            <Alert/>
            <TopHighlights/>
            <MidSec/>
            <LastSec/>
            {/* <AppleYou/> */}
        </div>
        
    )
    
}
export default Main