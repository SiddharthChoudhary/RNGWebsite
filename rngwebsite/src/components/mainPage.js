import React,{Component} from 'react'
import {Carousel} from 'react-bootstrap'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

class MainPage extends Component{

    constructor(){
        super()
        this.research = React.createRef()  
        this.bioMedical = React.createRef()  
        this.qrng = React.createRef()  
        this.photonics = React.createRef()  
        this.sensing = React.createRef()  
        this.iot = React.createRef()  
        this.computing = React.createRef()  
        this.team = React.createRef()  
        this.opportunities = React.createRef()  
        this.aboutus = React.createRef()  
        this.news = React.createRef()  

        this.state={
          // remember to not include / in the end because I am splitting the url based on slashes to display title
          // for the news article on the front page
          newsReleases:[
            {link:"https://phys.org/news/2019-09-team-holy-grail-room-temperature.html",
             title:"Team closes in on 'holy grail' of room temperature quantum computing chips"},
            {link:'https://www.stevens.edu/news/stevens-just-switched-nations-first-campus-hybrid-quantum-communications-network',
             title:"Stevens Just Switched on the Nation's First Campus Hybrid Quantum-Communications Network"},
            {link:'https://thestute.com/2018/03/23/taking-the-tech-out-of-the-lab-stevens-unveils-quantum-communications-network',
             title:'Stevens unveils quantum communications network'},
            {link:'https://www.eurekalert.org/pub_releases/2018-09/siot-sqr092518.php',
             title:"Stevens' quantum research and education piques US interest"},
            {link:'https://www.stevens.edu/news/stevens-creates-truly-random-numbers-using-quantum-physics',
             title:'Stevens Creates Truly Random Numbers, Using Quantum Physics'},
            {link:'https://www.stevens.edu/news/stevens-prototype-quantum-lock-may-foreshadow-next-super-secure-applications',
             title:"Stevens' Prototype 'Quantum Lock' May Foreshadow the Next Super-Secure Applications"}
          ]
        }
    }
    newsReleases=()=>{
      let div=[];
      //this index is responsible for displaying the name of the news in main dashboard page
      for(let i in this.state.newsReleases){
          let lastIndexInNewsUrl=this.state.newsReleases[i].link.split("/").length
          div.push(
            <li class="list-group-item">
              <a href={this.state.newsReleases[i].link}>{this.state.newsReleases[i].title}</a>
            </li>
            )
        }
      return div
    }
    scrollToMyRef = (myref) => window.scrollTo(0, myref.current.offsetTop)   

    render(){
        return(
    <section>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top background-color-transparent" id="mainNav">
      <a class="navbar-brand js-scroll-trigger" href="/">
        <img class="mx-auto max-width-height-300" src={"img/logo.png"}></img>
      </a>
    <div class="container">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle js-scroll-trigger nav-items" id="navbarDropdown"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={()=>this.scrollToMyRef(this.research)}>Research Projects</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/#biomedic" onClick={()=>this.scrollToMyRef(this.bioMedical)}>BioMedical Imaging</a>
              <a class="dropdown-item" href="/#qrng">Quantum Random Numbers</a>
              <a class="dropdown-item" href="/#photonics" >Integrated Quantum Photonics</a>
              <a class="dropdown-item" href="/#remotesensing" onClick={()=>this.scrollToMyRef(this.sensing)} >Quantum Remote Sensing</a>
              <a class="dropdown-item" href="/#iot" onClick={()=>this.scrollToMyRef(this.iot)} >Quantum Computing and IOT</a>
              <a class="dropdown-item" href="/#optical" onClick={()=>this.scrollToMyRef(this.computing)} >Quantum Optical Computing</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" onClick={()=>this.scrollToMyRef(this.team)}>Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" onClick={()=>this.scrollToMyRef(this.news)}>News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" onClick={()=>this.scrollToMyRef(this.opportunities)}>Opportunities</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" onClick={()=>this.scrollToMyRef(this.aboutus)}>About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      <header class="masthead">
            <div class="container d-flex h-100 align-items-center">
              <div class="mx-auto text-center">
                <h2 className="heading">Laboratory for Quantum Enhanced Systems and Technology</h2>
                <p></p>
                {/* <a href="#research" class="btn btn-primary js-scroll-trigger">Get Started</a> */}
              </div>
            </div>
          </header>
      <section ref={this.research} id="research" class="d-flex h-100 research-section text-center" /* style={{marginTop: '5px'}} */>
                  <Carousel id="research" indicators={true} pauseOnHover={true}>
                        <Carousel.Item id="bioMedic">
                        <img src="img/res/biomedic2.png" class="max-min-width-img-60" alt=""/>
                          <Carousel.Caption ref={this.bioMedical}>
                            <h1 class="font-size-80-px">QUANTUM BIOMEDIC IMAGING</h1>
                            <Link class="font-size-only-xx-large" to="/biomedic">Read More</Link>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item id="qrng" ref={this.qrng}>
                        <img src="img/res/qrng.png" class="max-min-width-img-60" alt=""/>
                          <Carousel.Caption >
                            <h3 class="font-size-80-px">QUANTUM RANDOM NUMBERS</h3>
                            <Link class="font-size-only-xx-large" to="/qrng">Read More</Link>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src="img/res/photonic3.jpg" class="max-min-width-img-60" alt=""/>
                          <Carousel.Caption ref={this.photonics}>
                            <h3 class="font-size-80-px">INTEGRATED QUANTUM PHOTONICS</h3>
                            <Link  class="font-size-only-xx-large" to="/photonics">Read More</Link>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src="img/res/remote_sensing_3.jpg" class="max-min-width-img-60" alt=""/>
                          <Carousel.Caption ref={this.sensing}>
                            <h3 class="font-size-80-px">QUANTUM REMOTE SENSING</h3>
                            <Link class="font-size-only-xx-large"  to="/remotesensing">Read More</Link>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src="img/res/iot_3.png" class="max-min-width-img-60" alt=""/>
                          <Carousel.Caption ref={this.iot}>
                            <h3 class="font-size-80-px">QUANTUM COMPUTING AND IOT</h3>
                            <Link class="font-size-only-xx-large"  to="/iot">Read More</Link>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src="img/res/Online.png" class="max-min-width-img-60" alt=""/>
                          <Carousel.Caption ref={this.computing} >
                            <h3 class="font-size-80-px">QUANTUM OPTICAL COMPUTING</h3>
                            <Link  class="font-size-only-xx-large" to="/optical">Read More</Link>
                          </Carousel.Caption>
                        </Carousel.Item>
                  </Carousel>
            </section>
      <section ref={this.team} id="team" class="team-section team-section-top">
        <div class="container">
        <div class="row align-items-center no-gutters mb-4 mb-lg-5">
          <div class="col-xl-8 col-lg-7">
            <img class="animated wow fadeInLeft slower img-fluid mb-3 mb-lg-0" src="img/team.jpg" alt=""/>
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="animated wow fadeInRight slower featured-text text-center text-lg-left text-color-white">
              <h4>Team</h4>
              <p class="mb-0">Get the team members deatils over here</p> <Link to="/team">
          Visit Team Members
        </Link>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section ref={this.news} id="news" class="signup-section">
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
      <section  ref={this.aboutus} class="opportunities-section bg-black">
        <div class="container">
        <div id="about" class="row text-center justify-content-center">
        <h2 class="text-center text-white-50">About Us</h2>
        <p class="text-white-50 container">QuEST lab studies and develops robust quantum systems and technology
          of practical advantages and values. Our proud team consists of 30+ students and scholars with expertise
           in physics, optics, electronics, and computer science, as well as industrial experiences. 
           Through strong synergy, we undertake a vastly interdisciplinary approach 
           to biomedic imaging, big data analytics, integrated nanophotonics, 
           remote sensing, networking, and optical computing, all havesting or inspired by mighty quantum physics.
            </p>
        </div>
      <div  ref={this.opportunities} id ="opportunities" class="row margin-top-100">
      <div class="col-md-4 mb-3 mb-md-0">
        <div class="card py-4 h-100">
          <div class="card-body text-center">
            <h4 class="text-uppercase m-0">Undergraduate/graduate Research Assistant</h4>
            <hr class="my-4"/>
            <div class="small text-black-50"></div>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-3 mb-md-0">
        <div class="card py-4 h-100">
          <div class="card-body text-center">
            <h4 class="text-uppercase m-0">PhD positions</h4>
            <hr class="my-4"/>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-3 mb-md-0">
        <div class="card py-4 h-100">
          <div class="card-body text-center">
            <h4 class="text-uppercase m-0">Postdoctoral Fellows</h4>
            <hr class="my-4"/>
          </div>
        </div>
      </div>
      </div>
      <div class="text-center margin-top">
          <h4 class="color-white">Apply Now by sending an email to yhuang5@stevens.edu</h4>
      </div>
      <div class="social d-flex justify-content-center">
      {/* <a href="#" class="mx-2">
        <i class="fab fa-twitter"></i>
      </a> */}
      {/* <a href="#" class="mx-2">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#" class="mx-2">
        <i class="fab fa-github"></i>
      </a> */}
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