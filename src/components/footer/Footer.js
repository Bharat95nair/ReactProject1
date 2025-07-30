import React,{Component} from 'react'

// export default function Footer() {
//   return (
//     <footer className="bg-dark text-light mt-5 pt-5 border-top border-secondary">
//       <div className="container">
//         <div className="row text-start">
//           <div className="col-md-2 mb-3">
//             <h6 className="fw-bold">About</h6>
//             <ul className="list-unstyled">
//               <li><a href="/about" className="text-decoration-none text-light">About Us</a></li>
//               <li><a href="/careers" className="text-decoration-none text-light">Careers</a></li>
//               <li><a href="/contact" className="text-decoration-none text-light">Contact Us</a></li>
//               <li><a href="/sitemap" className="text-decoration-none text-light">Sitemap</a></li>
//             </ul>
//           </div>
//           <div className="col-md-2 mb-3">
//             <h6 className="fw-bold">Help</h6>
//             <ul className="list-unstyled">
//               <li><a href="/support" className="text-decoration-none text-light">Support</a></li>
//               <li><a href="/returns" className="text-decoration-none text-light">Returns</a></li>
//               <li><a href="/faq" className="text-decoration-none text-light">FAQs</a></li>
//             </ul>
//           </div>
//           <div className="col-md-2 mb-3">
//             <h6 className="fw-bold">Policy</h6>
//             <ul className="list-unstyled">
//               <li><a href="/terms" className="text-decoration-none text-light">Terms</a></li>
//               <li><a href="/privacy" className="text-decoration-none text-light">Privacy</a></li>
//               <li><a href="/security" className="text-decoration-none text-light">Security</a></li>
//             </ul>
//           </div>
//           <div className="col-md-3 mb-3">
//             <h6 className="fw-bold">Mail Us</h6>
//             <address className="small">
//               Flipkart Internet Pvt. Ltd.<br />
//               Tech Village, Outer Ring Rd,<br />
//               Bengaluru, Karnataka 560103
//             </address>
//           </div>
//           <div className="col-md-3 mb-3">
//             <h6 className="fw-bold">Registered Office</h6>
//             <address className="small">
//               Flipkart Internet Pvt. Ltd.<br />
//               Outer Ring Road, Devarabeesanahalli Village,<br />
//               Bengaluru 560103<br />
//               CIN: U51109KA2012PTC066107<br />
//               Phone: <a href="tel:18002089898" className="text-light">1800 208 9898</a>
//             </address>
//           </div>
//         </div>

//         <div className="row mb-4">
//           <div className="col text-center">
//             <div className="d-flex justify-content-center gap-4 fs-4">
//               <a href="https://facebook.com" className="text-light" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
//               <a href="https://twitter.com" className="text-light" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
//               <a href="https://instagram.com" className="text-light" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
//               <a href="https://youtube.com" className="text-light" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
//               <a href="https://linkedin.com" className="text-light" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
//             </div>
//           </div>
//         </div>

//         <div className="text-center py-3 border-top border-secondary small">
//           © 2025 Flipkart.com
//         </div>
//       </div>
//     </footer>
//   )
// }


export default class footer extends Component{
  render(){
    return(
      <footer className="bg-dark text-light mt-5 pt-5 border-top border-secondary">
      <div className="container">
         <div className="row text-start">
          <div className="col-md-2 mb-3">
             <h6 className="fw-bold">About</h6>
             <ul className="list-unstyled">
               <li><a href="/about" className="text-decoration-none text-light">About Us</a></li>
               <li><a href="/careers" className="text-decoration-none text-light">Careers</a></li>
              <li><a href="/contact" className="text-decoration-none text-light">Contact Us</a></li>
             <li><a href="/sitemap" className="text-decoration-none text-light">Sitemap</a></li>
            </ul>
          </div>
          <div className="col-md-2 mb-3">
            <h6 className="fw-bold">Help</h6>
            <ul className="list-unstyled">
              <li><a href="/support" className="text-decoration-none text-light">Support</a></li>
              <li><a href="/returns" className="text-decoration-none text-light">Returns</a></li>
              <li><a href="/faq" className="text-decoration-none text-light">FAQs</a></li>
            </ul>
          </div>
          <div className="col-md-2 mb-3">
            <h6 className="fw-bold">Policy</h6>
            <ul className="list-unstyled">
              <li><a href="/terms" className="text-decoration-none text-light">Terms</a></li>
               <li><a href="/privacy" className="text-decoration-none text-light">Privacy</a></li>
               <li><a href="/security" className="text-decoration-none text-light">Security</a></li>
             </ul>
           </div>
           <div className="col-md-3 mb-3">
             <h6 className="fw-bold">Mail Us</h6>
             <address className="small">
               Flipkart Internet Pvt. Ltd.<br />
               Tech Village, Outer Ring Rd,<br />
              Bengaluru, Karnataka 560103
             </address>
           </div>
           <div className="col-md-3 mb-3">
             <h6 className="fw-bold">Registered Office</h6>
             <address className="small">
               Flipkart Internet Pvt. Ltd.<br />
               Outer Ring Road, Devarabeesanahalli Village,<br />
               Bengaluru 560103<br />
               CIN: U51109KA2012PTC066107<br />
               Phone: <a href="tel:18002089898" className="text-light">1800 208 9898</a>
             </address>
           </div>
         </div>

         <div className="row mb-4">
           <div className="col text-center">
             <div className="d-flex justify-content-center gap-4 fs-4">
               <a href="https://facebook.com" className="text-light" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
               <a href="https://twitter.com" className="text-light" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
               <a href="https://instagram.com" className="text-light" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
               <a href="https://youtube.com" className="text-light" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
               <a href="https://linkedin.com" className="text-light" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
             </div>
           </div>
         </div>

         <div className="text-center py-3 border-top border-secondary small">
           © 2025 Flipkart.com
         </div>
       </div>
     </footer>
    )
  }

}