import React,{Component} from 'react'
import {Carousel} from 'react-bootstrap'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

class MainPage extends Component{

    constructor(){
        super()
        this.state={
          // remember to not include / in the end because I am splitting the url based on slashes to display title
          // for the news article on the front page
          newsReleases:[
            'https://www.stevens.edu/news/stevens-just-switched-nations-first-campus-hybrid-quantum-communications-network',
            'https://thestute.com/2018/03/23/taking-the-tech-out-of-the-lab-stevens-unveils-quantum-communications-network',
            'https://www.eurekalert.org/pub_releases/2018-09/siot-sqr092518.php',
            'https://www.stevens.edu/news/stevens-creates-truly-random-numbers-using-quantum-physics',
            'https://www.stevens.edu/news/stevens-prototype-quantum-lock-may-foreshadow-next-super-secure-applications',
          ]
        }
    }
    newsReleases=()=>{
      let div=[];
      //this index is responsible for displaying the name of the news in main dashboard page
      for(let i in this.state.newsReleases){
          let lastIndexInNewsUrl=this.state.newsReleases[i].split("/").length
          div.push(
            <li class="list-group-item">
              <a href={this.state.newsReleases[i]}>{this.state.newsReleases[i].split("/")[lastIndexInNewsUrl-1]}</a>
            </li>
            )
        }
      return div
    }
    render(){
        return(
    <section>
      <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
      <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"/>

      <link href="css/grayscale.css" rel="stylesheet"/>

      
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
            <a class="nav-link js-scroll-trigger" href="#research">Research Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#team">Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#news">News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#opportunities">Opportunities</a>
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
                <a href="#research" class="btn btn-primary js-scroll-trigger">Get Started</a>
              </div>
            </div>
          </header>
      <section id="research" class="d-flex h-100 research-section text-center" /* style={{marginTop: '5px'}} */>
                  <Carousel>
                        <Carousel.Item>
                        <img src="img/ipad.png" class="img-fluid" alt=""/>
                          <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src="img/ipad.png" class="img-fluid" alt=""/>
                          <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src="img/ipad.png" class="img-fluid" alt=""/>
                          <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src="img/ipad.png" class="img-fluid" alt=""/>
                          <Carousel.Caption>
                            <h3>Fourth slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src="img/ipad.png" class="img-fluid" alt=""/>
                          <Carousel.Caption>
                            <h3>Fifth Slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src="img/ipad.png" class="img-fluid" alt=""/>
                          <Carousel.Caption>
                            <h3>Sixth slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                  </Carousel>
            </section>
      <section id="team" class="team-section bg-light">
        <div class="container">
        <div class="row align-items-center no-gutters mb-4 mb-lg-5">
          <div class="col-xl-8 col-lg-7">
            <img class="img-fluid mb-3 mb-lg-0" src="img/bg-masthead.jpg" alt=""/>
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="featured-text text-center text-lg-left">
              <h4>Team</h4>
              <p class="text-black-50 mb-0">Get the team members deatils over here</p> <Link to="/team">
          Go to the Link
        </Link>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section id="news" class="signup-section">
        <div class="container">
          <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto text-center">
              <h2 class="text-white mb-5">News</h2>
              <ul class="list-group">
                {this.newsReleases()}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section id ="opportunities" class="opportunities-section bg-black">
        <div class="container">
      <div class="row">
      <div class="col-md-4 mb-3 mb-md-0">
        <div class="card py-4 h-100">
          <div class="card-body text-center">
            <h4 class="text-uppercase m-0">Research Assistant</h4>
            <hr class="my-4"/>
            <div class="small text-black-50"></div>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-3 mb-md-0">
        <div class="card py-4 h-100">
          <div class="card-body text-center">
            <h4 class="text-uppercase m-0">Graduate PHD assistant</h4>
            <hr class="my-4"/>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-3 mb-md-0">
        <div class="card py-4 h-100">
          <div class="card-body text-center">
            <h4 class="text-uppercase m-0">Research Assistant (C.S)</h4>
            <hr class="my-4"/>
          </div>
        </div>
      </div>
      </div>
      <div class="text-center margin-top">
          <h4 class="color-white">Apply Now by sending an email at yhuang5@stevens.edu</h4>
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
          Copyright &copy; Quest Stevens EDU 2019
        </div>
      </footer>
      </section>
      
        )
    }
}
export default MainPage;