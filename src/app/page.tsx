import Image from "next/image";
import '../css/page.css';

export default function Home() {
  return (
    <main>
      <section>
        <nav className="nav">
          <div>
            <h1><b>pana<br/><span>cloud</span></b></h1>
            </div>
          <div>
            <ul>
              <li>
                <a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </section>


      {/*1st section*/}
      <section>
        <div className="header">
          <div className="header-content">
          <h1>WE ARE EXPERTS</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing
             elit. Nulla, sapiente eum! Odio asperiores ab labore,
              cupiditate non fugit officiis quae architecto!
               Inventore accusantium voluptate repudiandae,
                quod eveniet animi et laboriosam.</p>
              
                <button>Read More</button>
                </div>
                <div className="header-img">
                <Image src="/img-2.png" alt="laptop" width={1000} height={100}/>
                </div>
                
        </div>
      </section>

      
      {/*2nd section*/}
      <section>
        <div className="advantages">
          <h1>OUR ADVANTAGES</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing
             elit. Nulla, sapiente eum! Odio asperiores ab labore,
              cupiditate non fugit officiis quae architecto!
               Inventore accusantium voluptate repudiandae,
                quod eveniet animi et laboriosam.</p>
          
          <div className="advantages-img">
            <div className="img">
            <Image src="/icon-1.png" alt="" width={100} height={50}/>
            <h2><b>INNOVATION</b>
            <br/><span>
            Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. </span></h2>
            </div>

            <div className="img">
            <Image src="/icon-2.png" alt="" width={100} height={50}/>
            <h2><b>INNOVATION</b>
            <br/><span>
            Lorem, ipsum dolor sit amet consectetur adipisicing
            elit.</span></h2>
            </div>

            <div className="img">
            <Image src="/icon-3.png" alt="" width={100} height={50}/>
            <h2><b>INNOVATION</b>
            <br/><span>
            Lorem, ipsum dolor sit amet consectetur adipisicing
            elit.</span></h2>
            </div>

            <div className="img">
            <Image src="/icon-4.png" alt="" width={100} height={50}/>
            <h2><b>INNOVATION</b>
            <br/><span>
            Lorem, ipsum dolor sit amet consectetur adipisicing
            elit.</span></h2>
          
            </div>

            <div className="img">
            <Image src="/icon-5.png" alt="" width={100} height={50}/>
            <h2><b>INNOVATION</b>
            <br/><span>
            Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. </span></h2>
            </div>
          </div>
                
        </div>
      </section>

      
      {/*3rd section*/}
      <section>
        <div className="about">
          <h1>ABOUT<span> US</span></h1>
          <div className="about-content">
            <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing
             elit. Nulla, sapiente eum! Odio asperiores ab labore,
              cupiditate non fugit officiis quae architecto!
               Inventore accusantium voluptate repudiandae,
                quod eveniet animi et laboriosam.
              <br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing
             elit. Nulla, sapiente eum! Odio asperiores ab labore,
              cupiditate non fugit officiis quae architecto!
               Inventore accusantium voluptate repudiandae,
                quod eveniet animi et laboriosam.
                <br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing
             elit. Nulla, sapiente eum! Odio asperiores ab labore,
              cupiditate non fugit officiis quae architecto!
               Inventore accusantium voluptate repudiandae,
                quod eveniet animi et laboriosam.
                </p>
                <button>Read More</button>
                </div>
                <div className="about-img">
                  <Image src="/img-2.png" alt="laptop" width={1200} height={600}/>
                </div>
                </div>
        </div>
      </section>
      
      {/*4th section */}
      <section>
        <div className="services-content">
          <h2><b>OUR <span>SERVICES</span></b></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Labore voluptatibus alias dicta itaque tenetur, fugit quas
             asperiores ut consectetur harum. Cupiditate voluptatem 
             libero sint provident veritatis quisquam rem nostrum. 
             Error?</p>
        </div>

        <div className="services-tags">
          <div className="tag">
            <h3>WEB DESIGN</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Labore voluptatibus alias dicta itaque tenetur,</p>
            <button>Read More</button>
          </div>

          <div className="tag">
            <h3>WEB DESIGN</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Labore voluptatibus alias dicta itaque tenetur,</p>
            <button>Read More</button>
          </div>

          <div className="tag">
            <h3>WEB DESIGN</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Labore voluptatibus alias dicta itaque tenetur,</p>
            <button>Read More</button>
          </div>

          <div className="tag">
            <h3>WEB DESIGN</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Labore voluptatibus alias dicta itaque tenetur,</p>
            <button>Read More</button>
          </div>
        </div>
      </section>
    
      {/*5th section */}
      <section>
      <div className="portfolio-content">
          <h2><b>OUR <span>PORTFOLIO</span></b></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Labore voluptatibus alias dicta itaque tenetur, fugit quas
             asperiores ut consectetur harum. Cupiditate voluptatem 
             libero sint provident veritatis quisquam rem nostrum. 
             Error?</p>
        </div>

              <div className="portfolio-img">
                  <Image src="/img-3.jpg" alt="laptop" width={300} height={200}/>
                  <Image src="/img-4.jpg" alt="laptop" width={300} height={200}/>
                  <Image src="/img-5.jpg" alt="laptop" width={300} height={200}/>
                  <Image src="/img-6.jpg" alt="laptop" width={300} height={200}/>
                </div>

                <div className="portfolio-img-2">
                  <Image src="/img-3.jpg" alt="laptop" width={300} height={200}/>
                  <Image src="/img-4.jpg" alt="laptop" width={300} height={200}/>
                  <Image src="/img-5.jpg" alt="laptop" width={300} height={200}/>
                  <Image src="/img-6.jpg" alt="laptop" width={300} height={200}/>
                </div>
                       
      </section>

        {/*6th section */}
        <section>
              <div className="process-content">
          <h2><b>OUR <span>PROCESS</span></b></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Labore voluptatibus alias dicta itaque tenetur, fugit quas
             asperiores ut consectetur harum. Cupiditate voluptatem 
             libero sint provident veritatis quisquam rem nostrum. 
             Error?</p>
        </div>

              <div className="process-img">
              <div className="img">
            <Image src="/icon-6.png" alt="" width={80} height={50}/>
            <h2><b>INNOVATION</b>
            <br/><span>
            Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. </span></h2>
            </div>

            <div className="img">
            <Image src="/icon-5.png" alt="" width={80} height={50}/>
            <h2><b>INNOVATION</b>
            <br/><span>
            Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. </span></h2>
            </div>

            <div className="img">
            <Image src="/icon-7.png" alt="" width={80} height={50}/>
            <h2><b>INNOVATION</b>
            <br/><span>
            Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. </span></h2>
            </div>

            <div className="img">
            <Image src="/icon-8.png" alt="" width={80} height={50}/>
            <h2><b>INNOVATION</b>
            <br/><span>
            Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. </span></h2>
            </div>

            <div className="img">
            <Image src="/icon-9.png" alt="" width={80} height={50}/>
            <h2><b>INNOVATION</b>
            <br/><span>
            Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. </span></h2>
            </div>

            <div className="img">
            <Image src="/icon-10.png" alt="" width={80} height={50}/>
            <h2><b>INNOVATION</b>
            <br/><span>
            Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. </span></h2>
            </div>
                  
                </div>
            </section>
     
           {/*7th section */}
        <section>
              <div className="people-content">
          <h2><b>PEOPLE <span>ABOUT US</span></b></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Labore voluptatibus alias dicta itaque tenetur, fugit quas
             asperiores ut consectetur harum. Cupiditate voluptatem 
             libero sint provident veritatis quisquam rem nostrum. 
             Error?</p>
        </div>

              <div className="people-img">
              <div className="img">
            <Image src="/icon-4.png" alt="" width={80} height={50}/>
            <h2><b>INNOVATION</b>
            <br/><span>
            Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. </span></h2>
            </div>

            <div className="img">
            <Image src="/icon-4.png" alt="" width={80} height={50}/>
            <h2><b>INNOVATION</b>
            <br/><span>
            Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. </span></h2>
            </div>
            </div>

            <div className="people-img">
              <div className="img">
            <Image src="/icon-4.png" alt="" width={80} height={50}/>
            <h2><b>INNOVATION</b>
            <br/><span>
            Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. </span></h2>
            </div>

            <div className="img">
            <Image src="/icon-4.png" alt="" width={80} height={50}/>
            <h2><b>INNOVATION</b>
            <br/><span>
            Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. </span></h2>
            </div>
            
          </div>
          </section>

              {/*8th section */}
              <section>
              <div className="skills-content">
          <h2><b>OUR <span>SKILLS</span></b></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Labore voluptatibus alias dicta itaque tenetur, fugit quas
             asperiores ut consectetur harum. Cupiditate voluptatem 
             libero sint provident veritatis quisquam rem nostrum. 
             Error?</p>
        </div>

              <div className="skills-img">
              <div className="img">
            <Image src="/icon-11.png" alt="" width={100} height={50}/>
            <h2><b>DEVELOPMENT</b></h2>
            </div>

            <div className="img">
            <Image src="/icon-12.png" alt="" width={100} height={50}/>
            <h2><b>SEO & ADS</b></h2>
            </div>

            <div className="img">
            <Image src="/icon-13.png" alt="" width={100} height={50}/>
            <h2><b>BRANDING</b></h2>
            </div>

            <div className="img">
            <Image src="/icon-14.png" alt="" width={100} height={50}/>
            <h2><b>WEB DESIGNING</b></h2>
            </div>
        </div>
        </section>


        {/*9th section */}
        <section>
              <div className="project-content">
          <h2><b>START YOUR NEW PROJECT</b></h2>
         
          <button>YOUR NAME</button>
          <button>YOUR EMAIL</button>
          <button>YOUR PHONE</button>
        
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Labore voluptatibus alias dicta itaque tenetur, fugit quas
             asperiores ut consectetur harum. Cupiditate voluptatem 
             libero sint provident veritatis quisquam rem nostrum. 
             Error?</p>

</div>
</section>

            {/*10th section */}
            <section>
              <div className="contact-content">
          <h2><b>START YOUR NEW PROJECT</b></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Labore voluptatibus alias dicta itaque tenetur, fugit quas
             asperiores ut consectetur harum. Cupiditate voluptatem 
             libero sint provident veritatis quisquam rem nostrum. 
             Error?</p>

             <Image src="/img-10.png" alt="map" width={1000} height={100}/>
        </div>
        </section>

              {/*11th section */}
              <section>
              <div className="footer">
          
          <div className="footer-content">
            
            <div className="content">
           <h2><b>pana<span>cloud</span></b>
            <br/></h2>
            <p>Lorem ipsum dolor, sit amet <br/>
            consectetur adipisicing elit. Nihil <br/>
            voluptatibus quia iure voluptatem <br/>
            necessitatibus incidunt? Deleniti earum <br/>
            dolore ipsam.</p>
            <p>@Panacloud 2019</p>
            </div>

            <div className="content">
           <h2><b>SERVICES</b></h2>
            <p>LOREM iPSUM</p>
            <p>LOREM iPSUM</p>
            <p>LOREM iPSUM</p>
            <p>LOREM iPSUM</p>
            
            </div>

            
            <div className="content">
           <h2><b>SERVICES</b></h2>
            <p>LOREM iPSUM</p>
            <p>LOREM iPSUM</p>
            <p>LOREM iPSUM</p>
            <p>LOREM iPSUM</p>
            
            </div>
            
            <div className="content">
           <h2><b>SERVICES</b></h2>
            <p>LOREM iPSUM</p>
            <p>LOREM iPSUM</p>
            <p>LOREM iPSUM</p>
            <p>LOREM iPSUM</p>
            
            </div>     
                 </div>
                
        </div>


                </section>
    </main>
  );
}
