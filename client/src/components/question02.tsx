import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import CustomHead from '../components/customhead'
import { useContext } from 'react'
import { clickProp } from '../pages/_app'


export default function Gamepage() {
  const {clickedObj, setClickedObj} = useContext(clickProp)
    return (
      <div className='{styles.container}'>
         <CustomHead/>

          <div className = "boxborder">
           <ul>
              <div>
              <div className="questionbox" >
                <img src="/2.png" width="60%" style={{left:"20%"}}  alt="aaaa" />
              </div>
            
               <div className = "scorebox"></div>
              </div>
              <div className = "displaybox">
                
                {/* ans=2 */}
               <img src="/24.png" className = "cardbox1" id="1" onClick={(e)=>{setClickedObj(e.currentTarget.id)}}/>
               <img src="/18.png" className = "cardbox2" id="2" onClick={(e)=>{setClickedObj(e.currentTarget.id)}}/>
               <img src="/6.png" className = "cardbox3" id="3" onClick={(e)=>{setClickedObj(e.currentTarget.id)}}/>
               <img src="/2.png" className = "cardbox4" id="4" onClick={(e)=>{setClickedObj(e.currentTarget.id)}}/>
               <img src="/13.png" className = "cardbox5" id="5" onClick={(e)=>{setClickedObj(e.currentTarget.id)}}/>
              </div>
           </ul>
          </div>


         

      </div>
        
        
       

    )


}






