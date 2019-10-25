import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

class MainPage extends Component{

    constructor(){
        super()
    }

    render(){
        return(
    <section>
      <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
      <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"/>

      <link href="css/grayscale.min.css" rel="stylesheet"/>


      <script src="vendor/jquery/jquery.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

      <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

      <script src="js/grayscale.min.js"></script>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">Quantum Generation</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#projects">Download Files</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#signup">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      <header class="masthead">
            <div class="container d-flex h-100 align-items-center">
              <div class="mx-auto text-center">
                <h1 class="mx-auto my-0 text-uppercase">QUANTUM</h1>
                <h2 class="text-white-50 mx-auto mt-2 mb-5">Download a huge stream of quantumly generated random binary stream.</h2>
                <a href="#about" class="btn btn-primary js-scroll-trigger">Get Started</a>
              </div>
            </div>
          </header>
            <section id="about" class="about-section text-center">
                <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                    <h2 class="text-white mb-4">Download the File</h2>
                    <p class="text-white-50">Download the quantumly generated binary stream files to align it with your research. We are generating these quantum numbers randomly straight through 
                        <a href="https://www.stevens.edu/research-entrepreneurship/research-centers-labs/center-quantum-science-and-engineering"> our lab experiments</a>. Download the file with your stevens Id and we will store it for 2 days here for you.</p>
                    </div>
                </div>
                <img src="img/ipad.png" class="img-fluid" alt=""/>
                </div>
            </section>
            <section id="projects" class="projects-section bg-light">
    <div class="container">
      <div class="row align-items-center no-gutters mb-4 mb-lg-5">
        <div class="col-xl-8 col-lg-7">
          <img class="img-fluid mb-3 mb-lg-0" src="img/bg-masthead.jpg" alt=""/>
        </div>
        <div class="col-xl-4 col-lg-5">
          <div class="featured-text text-center text-lg-left">
            <h4>UNIFORM DISTRIBUTION</h4>
            <p class="text-black-50 mb-0">Generating the random numbers by uniformly distributed quantum process which ends up into a binary stream of file. Go ahead and download it</p>
          </div>
          <div>
          <Link to="/uniform">
            Go to the Link
          </Link>
          </div>
        </div>
      </div>
      <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
        <div class="col-lg-6">
          <img class="img-fluid" src="img/demo-image-01.jpg" alt=""/>
        </div>
        <div class="col-lg-6">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <h4 class="text-white">NORMAL DISTRIBUTION</h4>
                <p class="mb-0 text-white-50">Generating the random numbers by normally distributed quantum process</p>
                <hr class="d-none d-lg-block mb-0 ml-0"/>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="row justify-content-center no-gutters">
            <div class="col-lg-6">
            <img class="img-fluid" src="img/demo-image-02.jpg" alt=""/>
            </div>
            <div class="col-lg-6 order-lg-first">
            <div class="bg-black text-center h-100 project">
                <div class="d-flex h-100">
                <div class="project-text w-100 my-auto text-center text-lg-right">
                    <h4 class="text-white">QRNG Correlated</h4>
                    <p class="mb-0 text-white-50">Another example of a project with its respective description!</p>
                    <hr class="d-none d-lg-block mb-0 mr-0"/>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>

    <section id="signup" class="signup-section">
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto text-center">

          <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
          <h2 class="text-white mb-5">Subscribe to receive updates!</h2>

          <form class="form-inline d-flex">
            <input type="email" class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" placeholder="Enter email address..."/>
            <button type="submit" class="btn btn-primary mx-auto">Subscribe</button>
          </form>

        </div>
      </div>
    </div>
  </section>

  <section class="contact-section bg-black">
    <div class="container">

      <div class="row">

        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100">
            <div class="card-body text-center">
              <i class="fas fa-map-marked-alt text-primary mb-2"></i>
              <h4 class="text-uppercase m-0">Address</h4>
              <hr class="my-4"/>
              <div class="small text-black-50">4923 Market Street, Orlando FL</div>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100">
            <div class="card-body text-center">
              <i class="fas fa-envelope text-primary mb-2"></i>
              <h4 class="text-uppercase m-0">Email</h4>
              <hr class="my-4"/>
              <div class="small text-black-50">
                <a href="#">hello@yourdomain.com</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100">
            <div class="card-body text-center">
              <i class="fas fa-mobile-alt text-primary mb-2"></i>
              <h4 class="text-uppercase m-0">Phone</h4>
              <hr class="my-4"/>
              <div class="small text-black-50">+1 (555) 902-8832</div>
            </div>
          </div>
        </div>
      </div>

      <div class="social d-flex justify-content-center">
        <a href="#" class="mx-2">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="mx-2">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="mx-2">
          <i class="fab fa-github"></i>
        </a>
      </div>

    </div>
  </section>
  <footer class="bg-black small text-center text-white-50">
    <div class="container">
      Copyright &copy; Your Website 2019
    </div>
  </footer>
  </section>
        )
    }
}
export default MainPage;