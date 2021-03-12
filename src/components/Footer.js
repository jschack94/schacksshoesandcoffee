import React from 'react'
import './footer.css';


 const Footer = () => {

    return (
        <footer class="footer-distributed">

			<div class="footer-left">

				<h3>Schack's<span>Shoes</span></h3>

				<p class="footer-links">
					<a> Home< /a>
					
					<a> About </a>
				
					<a> Products </a>
				
					<a> FAQ </a>
					
					<a> Blog </a>
					
					
				</p>

				<p class="footer-company-name">Schack's Shoes © 2020</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>1400 N Lake Shore Drive</span> Venice, California</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+1.262.894.0630</p>
				</div>


			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
                    Sample application that I built to get a better understanding of Headless Commerce with Shopify
				</p>

				

			</div>

		</footer>
        
     )
 }

 export default Footer