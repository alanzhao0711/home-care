import React from 'react'

export default function AboutUs() {
  return (
    <div className='about-us'>
    <section id="nav-bar">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="/#"
            ><img src="/images/logo.png" alt=""
          /></a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
            <i class="fa-solid fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about-us">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/home-care">Home Care</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/resources">Resources</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/careers">Careers</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>

    {/* <!---------------about us home page -----------> */}

    <section id="about-us-home">
      <div class="float-container">
        <div class="float-child">
          <h1 class="start-title">About Our In-Home Care Agency</h1>
          <p>
            Caring for a family member can be challenging. We know. We've been
            there. At Evergreen Home Care, we strive to deliver just the right
            home care assistance for your loved one to be safe and healthy and
            to be a partner you can turn to for support.
          </p>
        </div>
        <div class="float-child">
          <img src="/images/about-us-home.jpg" alt="" />
        </div>
      </div>
      <svg
        id="wave"
        style={{transform: "rotate(0deg)", transition: "0.3s"}}
        viewBox="0 0 1440 130"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop
              stop-color="rgba(42.276, 69.262, 89.079, 1)"
              offset="0%"
            ></stop>
            <stop
              stop-color="rgba(44.119, 81.89, 102.74, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          style={{transform: "translate(0, 0px)", opacity: "1"}}
          fill="url(/#sw-gradient-0)"
          d="M0,26L40,36.8C80,48,160,69,240,75.8C320,82,400,74,480,67.2C560,61,640,56,720,45.5C800,35,880,17,960,10.8C1040,4,1120,9,1200,8.7C1280,9,1360,4,1440,13C1520,22,1600,43,1680,54.2C1760,65,1840,65,1920,73.7C2000,82,2080,100,2160,95.3C2240,91,2320,65,2400,54.2C2480,43,2560,48,2640,56.3C2720,65,2800,78,2880,84.5C2960,91,3040,91,3120,84.5C3200,78,3280,65,3360,56.3C3440,48,3520,43,3600,41.2C3680,39,3760,39,3840,52C3920,65,4000,91,4080,93.2C4160,95,4240,74,4320,67.2C4400,61,4480,69,4560,69.3C4640,69,4720,61,4800,67.2C4880,74,4960,95,5040,95.3C5120,95,5200,74,5280,56.3C5360,39,5440,26,5520,21.7C5600,17,5680,22,5720,23.8L5760,26L5760,130L5720,130C5680,130,5600,130,5520,130C5440,130,5360,130,5280,130C5200,130,5120,130,5040,130C4960,130,4880,130,4800,130C4720,130,4640,130,4560,130C4480,130,4400,130,4320,130C4240,130,4160,130,4080,130C4000,130,3920,130,3840,130C3760,130,3680,130,3600,130C3520,130,3440,130,3360,130C3280,130,3200,130,3120,130C3040,130,2960,130,2880,130C2800,130,2720,130,2640,130C2560,130,2480,130,2400,130C2320,130,2240,130,2160,130C2080,130,2000,130,1920,130C1840,130,1760,130,1680,130C1600,130,1520,130,1440,130C1360,130,1280,130,1200,130C1120,130,1040,130,960,130C880,130,800,130,720,130C640,130,560,130,480,130C400,130,320,130,240,130C160,130,80,130,40,130L0,130Z"
        ></path>
      </svg>
    </section>

    {/* <!---------------high standard -----------> */}

    <section class="higher-standard">
      <div class="container text-center">
        <div class="row">
          <div class="col-md-6">
            <img src="/images/about-us-higher-standard.jpg" alt="" />
          </div>
          <div class="col-md-6">
            <h2>About Our Higher Standard</h2>
            <p>
              At Evergreen Home Care, we believe that caring is more than just a
              job– it’s a way of life. That’s why our caregivers mean so much
              more to the people, families, and organizations they serve.. We
              are proud to provide the full range of home care services to meet
              your loved one’s unique needs. From companionship and personal
              care, to infusion therapy, medication management and senior care.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* <!---------------high standard -----------> */}

    <section class="award">
      <div class="container">
        <div class="row">
          <div id="award-banner" class="col-md-4">
            <h3>Getting Started With Home Care</h3>
            <p>
              We have the experience and the expertise to help you find the
              right care.
            </p>
            <a href="/#">Learn More</a>
          </div>
          <div id="award-banner" class="col-md-4">
            <h3>Our History & Mission</h3>
            <p>
              We started Evergreen Home Care after having our own challenging
              experience with home care.
            </p>
            <a href="/#">Learn More</a>
          </div>
          <div id="award-banner" class="col-md-4">
            <h3>Our Care Team</h3>
            <p>
              Only Evergreen Home Care uses industry-leading screening, training
              and oversight practices.
            </p>
            <a href="/#">Learn More</a>
          </div>
        </div>
        <div class="row">
          <div id="award-banner" class="col-md-4">
            <h3>Blog</h3>
            <p>
              Featuring stories and tips to help families navigate their home
              care journey.
            </p>
            <a href="/#">Learn More</a>
          </div>
          <div id="award-banner" class="col-md-4">
            <h3>Client Reviews</h3>
            <p>
              Client stories about how BrightStar Care made a difference in
              their lives.
            </p>
            <a href="/#">Learn More</a>
          </div>
          <div id="award-banner" class="col-md-4">
            <h3>Medical Staffing Solutions</h3>
            <p>
              BrightStar Care is your go-to healthcare staffing partner,
              whatever the need. Call us.
            </p>
            <a href="/#">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    {/* <!-----------------bottom-page------------------------------> */}

    <section id="bottom-page">
        <div class="container">
          <div class="row">
            <div id="bottom-link" class="col-md-4">
              <h6>Home Care</h6>
              <p><a href="/#">Personal Care</a></p>
              <p><a href="/#">Respite Care</a></p>
              <p><a href="/#">Transitional Care</a></p>
              <p><a href="/#">Child Care</a></p>
              <p><a href="/#">Types of Care</a></p>
            </div>
            <div id="bottom-link" class="col-md-4">
              <h6>Resources</h6>
              <p><a href="/#">FAQ</a></p>
              <p><a href="/#">Medical Resources</a></p>
            </div>
  
            <div id="bottom-link" class="col-md-4">
              <h6>About Evergreen</h6>
              <p><a href="/about-us">About Us</a></p>
              <p><a href="/careers">Careers</a></p>
              <p><a href="/#">Contact Us</a></p>
              <p><a href="/#">Office Location</a></p>
            </div>
          </div>
        </div>
      </section>
  
      {/* <!-----------------all right reserved------------------------------> */}
  
      <section id="right">
        <div class="text-center">
          <p>&copy; 2022 Evergreen Home Care. All rights reserved.</p>
        </div>
      </section>
    </div>
  )
};
