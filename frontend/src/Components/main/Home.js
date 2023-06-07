import React from 'react';
import app_config from '../../config';
import './Homestyle.css';
// import IntroImg1 from '../Assets/pic333.jpg';
// import Image222 from '../Assets/pic333'

import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Footer from '../Footer';


import { Pagination, Navigation } from "swiper"


const {themecolor1} = app_config;

const Home = () => {
  return (
    
    <div><>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='myslide' style={{ backgroundImage: 'url("https://venngage-wordpress.s3.amazonaws.com/uploads/2021/11/section-3-poster-smaller.png")' }}>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='myslide' style={{ backgroundImage: 'url("https://images.pexels.com/photos/310435/pexels-photo-310435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='myslide' style={{ backgroundImage: 'url("https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}>
          </div>
        </SwiperSlide>
      </Swiper>

      <main style={{backgroundColor: themecolor1}}>

        {/* Marketing messaging and featurettes
    ================================================== */}
        {/* Wrap the rest of the page in another container to center all the content. */}
        <div className="container marketing mt-0">
          {/* Three columns of text below the carousel */}
          <div className="row">
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width={140}
                height={140}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                <image
                 href="https://cdn.pixabay.com/photo/2020/06/09/18/11/box-write-in-it-5279529_1280.jpg"  
                 width={140}                     
                 height={140}                   
                 x={0}                           // Set the x-coordinate
                 y={0}                           // Set the y-coordinate
                 />
              </svg>
              <h2 className="fw-normal ">Work</h2>
              <p>
              	Our project Front crew will provide a platform where design any design you want
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width={140}
                height={140}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                <image
                 href="https://cdn.pixabay.com/photo/2022/05/20/10/07/window-7209118_640.jpg"  
                 width={140}                     
                 height={140}                   
                 x={0}                           // Set the x-coordinate
                 y={0}                           // Set the y-coordinate
                 />
              </svg>
              <h2 className="fw-normal">Feather</h2>
              <p>
              The main feature of our project that automate design making from data provided
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width={140}
                height={140}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                <image
                 href="https://img.freepik.com/free-photo/social-media-concept-with-emojis-icons_23-2149834255.jpg?w=740&t=st=1685859347~exp=1685859947~hmac=326d4fd6eb57050d682fc74cac416de424a0952b3cd81f41bd0cf8ce9bc2bb3a"  
                 width={140}                     
                 height={140}                   
                 x={0}                           // Set the x-coordinate
                 y={0}                           // Set the y-coordinate
                 />
              </svg>
              <h2 className="fw-normal">Uses</h2>
              <p>
              We can use as company collages and repetative content has design like;-
               Placement  of reference 
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>
            {/* /.col-lg-4 */}
          </div>
          {/* /.row */}
          {/* START THE FEATURETTES */}
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                What is FRONT CREW.{" "}
                <span className="text-body-secondary">It’ll blow your mind.</span>
              </h2>
              <p className="lead">
              ou can design as many poster ,post,banner,etc you want form to these design tools but there is no automation in those platfrom that means you cannot give a list of instruction for doing tasks repetitively

Our project front crew will provide a platform where design any design you want
Our tool has been designed to be used by organizations like company and collages to design repetitive such as :
Placement of reference , make poster for social media,make poster for collages or school events
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width={500}
                height={500}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
                <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                  500x500
                </text>
                <image
                 href="https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150272533.jpg?size=626&ext=jpg&ga=GA1.2.1709204083.1685859348&semt=ais"  
                 width={500}                     
                 height={500}                   
                 x={0}                           // Set the x-coordinate
                 y={0}                           // Set the y-coordinate
                 />
              </svg>
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                Oh yeah!! create poster automatically{" "}
                
              </h2>
              <p className="lead">
              Our project provide facilities of creating bulk poster in less time and aslo provide facilites for customizing template as per the requirement 
              Front crew is not for sophisticated person layman also handle the front crew easily
              Front crew is a valuble tool for individuals and business who want to  create professional-looking designs without needing extensive graphic design skill
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width={500}
                height={500}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
                <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                  500x500
                </text>
                <image
                 href="https://images.pexels.com/photos/7015073/pexels-photo-7015073.jpeg?auto=compress&cs=tinysrgb&w=600"  
                 width={450}                     
                 height={500}                   
                 x={0}                           // Set the x-coordinate
                 y={0}                           // Set the y-coordinate
                 />
              </svg>
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                And lastly, this one.{" "}
                <span className="text-body-secondary">Advantage</span>
              </h2>
              <p className="lead">
              This platform is designed to be intuitive and user-friendly, with drag-and-drop functionality
              Easy-to-use and comprehensive design platform
              This  platform provide user the option to design posters in bulk.

              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width={500}
                height={500}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
                <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                  500x500
                </text>
                <image
                 href="https://static-cse.canva.com/blob/1066714/1131w-7NCxbPkt3Y4.jpg"  
                 width={450}                     
                 height={500}                   
                 x={0}                           // Set the x-coordinate
                 y={0}                           // Set the y-coordinate
                 />
              </svg>
            </div>
          </div>
          <hr className="featurette-divider" />
          {/* /END THE FEATURETTES */}
        </div>
        {/* /.container */}
        {/* FOOTER */}
        <footer className="container">
          <p className="float-end">
            <a href="#">Back to top</a>
          </p>
          <p>
            © 2017–2023 Company, Inc. · <a href="#">Privacy</a> ·{" "}
            <a href="#">Terms</a>
          </p>
        </footer>
      </main>
    </>
    </div>
    
  )
}

export default Home