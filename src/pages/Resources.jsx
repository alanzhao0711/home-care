import React from 'react'

export default function Resources() {
  return (
    <div className='resources'>
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
    <section id="home-care-home">
      <div class="float-container">
        <div class="float-child">
          <h1 class="start-title">In-Home Care & Caregiving Resources</h1>
          <p>
            Checklists, guides, and information on a variety of health and
            caregiving topics to help you care for your loved one.
          </p>
        </div>
        <div class="float-child">
          <img src="/images/resources-home-page.jpg" alt="" />
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
            <stop stop-color="rgba(42, 69, 89, 1)" offset="0%"></stop>
            <stop stop-color="rgba(44, 82, 102, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{transform: "translate(0, 0px)", opacity: "1"}}
          fill="url(/#sw-gradient-0)"
          d="M0,91L20,91C40,91,80,91,120,88.8C160,87,200,82,240,78C280,74,320,69,360,67.2C400,65,440,65,480,58.5C520,52,560,39,600,30.3C640,22,680,17,720,23.8C760,30,800,48,840,52C880,56,920,48,960,43.3C1000,39,1040,39,1080,47.7C1120,56,1160,74,1200,84.5C1240,95,1280,100,1320,84.5C1360,69,1400,35,1440,32.5C1480,30,1520,61,1560,65C1600,69,1640,48,1680,45.5C1720,43,1760,61,1800,65C1840,69,1880,61,1920,67.2C1960,74,2000,95,2040,106.2C2080,117,2120,117,2160,99.7C2200,82,2240,48,2280,30.3C2320,13,2360,13,2400,15.2C2440,17,2480,22,2520,21.7C2560,22,2600,17,2640,15.2C2680,13,2720,13,2760,13C2800,13,2840,13,2860,13L2880,13L2880,130L2860,130C2840,130,2800,130,2760,130C2720,130,2680,130,2640,130C2600,130,2560,130,2520,130C2480,130,2440,130,2400,130C2360,130,2320,130,2280,130C2240,130,2200,130,2160,130C2120,130,2080,130,2040,130C2000,130,1960,130,1920,130C1880,130,1840,130,1800,130C1760,130,1720,130,1680,130C1640,130,1600,130,1560,130C1520,130,1480,130,1440,130C1400,130,1360,130,1320,130C1280,130,1240,130,1200,130C1160,130,1120,130,1080,130C1040,130,1000,130,960,130C920,130,880,130,840,130C800,130,760,130,720,130C680,130,640,130,600,130C560,130,520,130,480,130C440,130,400,130,360,130C320,130,280,130,240,130C200,130,160,130,120,130C80,130,40,130,20,130L0,130Z"
        ></path>
      </svg>
    </section>

    {/* <!---------------high standard -----------> */}

    <section class="caregiving">
      <div class="container text-center">
        <div class="row">
          <div class="col-md-6">
            <img src="/images/home-care-high-standard.jpg" alt="" />
          </div>
          <div class="col-md-6">
            <h2>Caregiving Resources</h2>
            <p>
              At Evergreen Home Care, we strive day in and day out to serve as a
              helpful resource to those seeking trusted, professional care for
              their loved ones. To empower and inform families and care partners
              with the information they need to provide the right counsel and
              care to their loved ones, we are happy to offer free educational
              material and family caregiver resources, featuring:
            </p>
            <p id="p-list">
              A home care planning guide that contains a care needs assessment,
              tips for having a conversation with your loved ones about the care
              they may need, and questions for interviewing and selecting the
              right home care agency.
            </p>
            <p id="p-list">
              Education material around specific conditions or care types, like
              Alzheimer's and dementia, medication management, hospice, and
              more.
            </p>
            <p id="p-list">
              Care FAQs that contains guidance based on questions families ask
              us every day
            </p>
            <p id="p-list">
              A glossary of specific medical diagnoses to help you learn basic
              information about certain conditions
            </p>
            <p>
              Of course, we're here to help you in any way we can, so if you
              can't find answers to your questions, call us to speak with one of
              our care professionals.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* <!---------------resources-----------> */}

    <section class="resources-cator">
      <div id="resources-box" class="container text-center">
        <div class="row">
          <div class="col-md-3">
            <a href="/home-care"><p>Care FAQs</p></a>
          </div>
          <div class="col-md-3">
            <a href="/home-care"><p>Health & Wellness</p></a>
          </div>
          <div class="col-md-3">
            <a href="/home-care"><p>Caregiving</p></a>
          </div>
          <div class="col-md-3">
            <a href="/home-care"><p>Fall Prevention</p></a>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <a href="/home-care"><p>Home Care</p></a>
          </div>
          <div class="col-md-3">
            <a href="/home-care"><p>Nursing</p></a>
          </div>
          <div class="col-md-3">
            <a href="/home-care"><p>Senior Care</p></a>
          </div>
          <div class="col-md-3">
            <a href="/home-care"><p>Medical Diagnosis</p></a>
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
}
