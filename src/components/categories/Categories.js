//rfc
import React from 'react'
import CategoryItem from './categoryItem'

// export default function Categories() {
//   return (
//     <div className='container'> 
//       <div className='row'>
//           <div className='col'>
//             <div className='category'>
              
//               <img src='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2025/BTSOTC/Homepage/Quads/DQC/BTSOTC_25_2457_GW_DQC_OTC_College-Must-haves_byPrice_2a_under25_372x232-_1x_186x116-0.5x._SY116_CB795815274_.jpg'></img>
//               <div>Grocery</div>

//             </div>
//           </div>
//           <div className='col'>
//             <div className='category'>
              
//               <img src='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2025/BTSOTC/Homepage/Quads/DQC/BTSOTC_25_2524_GW_DQC_OTC_College-Essentials_2b_Electronics_1x_186x116._SY116_CB795804180_.jpg'></img>
//               <div>Electronics</div>

//             </div>
//           </div> 
//           <div className='col'>
//             <div className='category'>
              
//               <img src='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2025/BTSOTC/Homepage/Quads/DQC/BTSOTC_25_2574_GW_DQC_BTS_School-Tech_2a_Computers-Tablets_1x_186x116._SY116_CB793774798_.jpg'></img>
//               <div>Appliances</div>

//             </div>
//           </div> 
//           <div className='col'>
//             <div className='category'>
              
//               <img src='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2025/BTSOTC/Homepage/Quads/DQC/BTSOTC_25_2401_GW_DQC_BTS_School-Essentials_1b_Backpacks_1x._SY116_CB793798379_.jpg'></img>
//               <div>bagpacks</div>

//             </div>
//           </div> 
//           <div className='col'>
//             <div className='category'>
              
//               <img src='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2025/BTSOTC/Homepage/Quads/DQC/BTSOTC_25_2459_GW_DQC_OTC_College-Must-haves_byPrice_2c_under75_372x232-_1x_186x116-0.5x._SY116_CB795815274_.jpg'></img>
//               <div>Footwear</div>

//             </div>
//           </div>
          
//           <div className='col'>
//             <div className='category'>
              
//               <img src='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2025/BTSOTC/Homepage/Quads/DQC/BTSOTC_25_2526_GW_DQC_OTC_College-Essentials_2d_Fashion_1x_186x116._SY116_CB795628197_.jpg'></img>
//               <div>Fashion</div>

//             </div>
//           </div> 
//       </div>
//     </div>
//   )
// }

// //rfce   -------- no difference
// // import React from 'react'

// // const Categories = () => {
// //   return (
// //     <div>Categories</div>
// //   )
// // }

// // export default Categories






export default function categories(){
 let allCategories = [
   {label:'Grocery' ,img_url:'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2025/BTSOTC/Homepage/Quads/DQC/BTSOTC_25_2457_GW_DQC_OTC_College-Must-haves_byPrice_2a_under25_372x232-_1x_186x116-0.5x._SY116_CB795815274_.jpg'},
   {label:'Electronics' ,img_url:'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2025/BTSOTC/Homepage/Quads/DQC/BTSOTC_25_2457_GW_DQC_OTC_College-Must-haves_byPrice_2a_under25_372x232-_1x_186x116-0.5x._SY116_CB795815274_.jpg'},
   {label:'Appliances' ,img_url:'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2025/BTSOTC/Homepage/Quads/DQC/BTSOTC_25_2457_GW_DQC_OTC_College-Must-haves_byPrice_2a_under25_372x232-_1x_186x116-0.5x._SY116_CB795815274_.jpg'},
   {label:'bagpacks' ,img_url:'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2025/BTSOTC/Homepage/Quads/DQC/BTSOTC_25_2457_GW_DQC_OTC_College-Must-haves_byPrice_2a_under25_372x232-_1x_186x116-0.5x._SY116_CB795815274_.jpg'},
   {label:'Footwear' ,img_url:'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2025/BTSOTC/Homepage/Quads/DQC/BTSOTC_25_2457_GW_DQC_OTC_College-Must-haves_byPrice_2a_under25_372x232-_1x_186x116-0.5x._SY116_CB795815274_.jpg'},
   {label:'Fashion' ,img_url:'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2025/BTSOTC/Homepage/Quads/DQC/BTSOTC_25_2457_GW_DQC_OTC_College-Must-haves_byPrice_2a_under25_372x232-_1x_186x116-0.5x._SY116_CB795815274_.jpg'}


 ]
 return <>
          <div className='container'>
              <div className='row'>
                  {
                    allCategories.map((categoryObj,index) => {
                      return <CategoryItem key={index} categoryObj={categoryObj}/>
                    })
                  }
              </div>
          </div>
        </> 
}