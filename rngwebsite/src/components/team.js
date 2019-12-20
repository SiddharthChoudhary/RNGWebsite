import React,{Component} from 'react';
import {Button,Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
// import Modal from './modal'


/* 
below here since we have too many team memebers so we will have to create the respective variables and which would be 
very unreasonable to not to do it within for loop. Thus I have created a team member page which basically loops through 
the persons which are stored in the state. State's team members handles all the respective data which will be needed.
Three steps for displaying the modal is to pass this.state.teammembers[i].name to <Button> tag and to other two necessary
functions, teamIcons and teamModals
*/
class Team extends Component{
    constructor(){
        super()
        this.research = React.createRef()  
        this.team = React.createRef()  
        this.opportunities = React.createRef()  
        this.aboutus = React.createRef()  
        this.news = React.createRef()  
        this.state={
            teamMembers:[
                {
                    name:'Arwa A Algethami',
                    email:'aalgetha@stevens.edu',
                    image:"airybeam.png",
                    show:false
                },
                {name:'Bharathwaj Muthuswamy',
                 email:'bmuthusw@stevens.edu',
                 description:'Dr. Bharathwaj "Bharath" Muthuswamy is currently training to be a Quantum Engineer, that is, study Quantum Mechanics with a focus on engineering Quantum behaviour, by working towards his second PhD in physics.\n\n',
                 description2:'Dr. Muthuswamy has BS (2002), MS (2005) and PhD (2009) degrees in Electrical Engineering and Computer Sciences from the University of California, Berkeley.  His areas of interest are nonlinear dynamical (quantum) systems and embedded systems. More specifically, he works on quantum mechanics and reconfigurable architectures.\n',
                 description3:'His Erdos number is 4: Muthuswamy, B->Chua, L.O->Boyd, S. P.->Diaconis, P. W.->Erdos, P.  His mathematical geneology goes all the way back to Carl Friedrich Gauss (and even further)! Once you get to M. E. V. Valkenburg, follow the geneology of Laurence Albert Manning.',
                 image:"Bharath.jpeg",
                 show:false
                },
                
                {
                    name:'Chao Tang', 
                    email:'ctang9@stevens.edu',
                    show:false,
                    image:"chao.png"
                },
                {
                name:'Daniel Tafone',
                email:'dtafone@stevens.edu',
                show:false,
                description:'',
                image:"Daniel.jpg"
                },
                {
                    name:'He Zhang',
                    email:'hzhang33@stevens.edu',
                    description:'He Zhang is a Ph.D. candidate. Her major research area is quantum/classical nonlinear optics and quantum imaging.',
                    show:false,
                    image:"He_jang.jpg"
                },
                {name:'Heng Fan',
                email:'hfan5@stevens.edu',
                show:false,
                description:'Heng got BS and MS from Huazhong University of Science and Technology in 2013 and 2016. He is working nano-photoincs now.',
                image:"heng_fan.jpg"
                },
                {name:'Irwin Huang',
                 email:'ihuang1@stevens.edu',
                 show:false,
                 image:"Irwin_Huang.png"
                },
                {name:'Jeevanandha Ramanathan',
                email:'jramana1@stevens.edu',
                show:false,
                image:"Jeeva.jpeg"
                },
                {name:'Jiayang Chen',
                email:'jchen59@stevens.edu',
                show:false,
                description:"Ph.D. candidate specialized in integrated photonic devices, nonlinear optics and quantum optics, with 7 years of hands-on experience in device design, nanofabrication, device characterization, optical system"+
                +"measurements and single-photon measurements.",
                image:"Jiayeng_Chen.png"
                },
                {name:'Jichao Fan',
                email:'jfan11@stevens.edu',
                show:false,
                image:"airybeam.png"
                },
                {name:'Jiuyi Zhang',
                email:'jzhang92@stevens.edu',
                show:false,
                image:"Jiuyi.jpeg"
                },
                {name:'Lac Nguyen',
                email:'lnguyen1@stevens.edu',
                show:false,
                image:"Lac.jpg"
                },
                {name:'Lili Li',
                email:'lli67@stevens.edu',
                show:false,
                description:'Lili Li is now prepare and try to be an engineer in quantum field. This is her first year for pursue her PhD degree. Lili Li has BS and MS degrees. She interests in nonlinear systems and quantum devices.',
                image:"Lili_Li.jpg"
                },
                {name:'Malvika Garikapati',
                email:'mg@stevens.edu',
                show:false,
                image:"Malvika_G.jpg"
                },
                {name:'Mingwei Jin',
                email:'mjin1@stevens.edu',
                show:false,
                image:"Mingwei.JPG"
                },
                {name:'Patrick Rehain',
                email:'prehain@stevens.edu',
                show:false,
                image:"patrick.jpeg"
                },
                {name:'Prajnesh Kumar',
                email:'pkumar8@stevens.edu',
                show:false,
                image:"airybeam.png"
                },
                {name:'Santosh Kumar',
                email:'skumar5@stevens.edu',
                show:false,
                description:"https://scholar.google.com/citations?user=u9FsMgIAAAAJ&hl=en"+ " \nhttps://skgangwarjnu.wixsite.com/website",
                image:"Santosh.jpg"
                },
                {name:'Sarah McBride',
                email:'smcbride@stevens.edu',
                show:false,
                image:"airybeam.png"
                },
                {name:'Shenyu Zhu',
                email:'szhu24@stevens.edu',
                show:false,
                description:'Research area: LiDAR based on up-conversion. '+
                'Digital image processing.'+
                'Shenyu Zhu has B.S(2014) and M.S.(2017) at School of Instrumentation Science and Optoelectronic Engineering, Beijing University of Aeronautics and Astronautics.',
                image:"shenJu.jpg"
                },
                {name:"Siddharth Choudhary",
                email:'schoud2@stevens.edu',
                show:false,
                image:"Sid.jpg"},

                {name:'Soorya Ashokan',
                email:'sashokan@stevens.edu',
                show:false,
                description:"Soorya Nivedha Ashokan, currently doing her Master's in Electrical Engineering. Her area of interest is VLSI and embedded systems. She loves travelling and her hobbies are cooking and painting. ",
                image:"soorya.jpg"
                },
                {name:'Stephanie Maruca',
                email:'onnelly <smaruca@stevens.edu',
                show:false,
                description:"My name is Stephanie Maruca. I joined Quest Lab in the Fall of 2014 as a PhD student majoring in Physics. I am part of the Quantum Imaging and Biomedics Team. I work on beam shaping and 3d imaging projects with applications in communications and biomedical imaging.",
                image:"Stephanie_Maruca.png"
                },
                {name: 'Yong M Sua',
                email: 'ysua@stevens.edu',
                description:'Dr. Yong Meng Sua obtained his Bachelor degree in Physics (2008) and Master degree in Applied Physics (2009), both from University of Malaya, Malaysia. He graduated with a Doctoral degree in Engineering Physics from Michigan Technological University in 2014.',
                description2:'He joined QuEST since 2015 and his research interests covering a broad-range from blue-sky research to practical applications oriented development.',
                description3:'He also keen to nurture the next generation of quantum workforce and developing quantum technology for commercialization.',
                image:"Yong_Sua.jpg",
                show:false
                },
                {name:'Zhan Li',
                email:'zli88@stevens.edu',
                show:false,
                image:"zhanli.png"
                },
                {name:'Zhaohui Ma',
                email:'zma12@stevens.edu',
                show:false,
                description:'Currently, I am training into nonlinear optics and nanophotonic.',
                image:"Zhaohui.jpg"
                },
                {name:'Zipei Zheng',
                email:'zzheng22@stevens.ed',
                show:false,
                description:'I am the new P.h.d student on training. I get my BS degree in Physics from the University of Colorado Boulder in 2019.',
                description2:'My biggest interest in physics is light, I think it is the most mysterious thing in our universe. I love everything related to light and really want to learn more about it. But for now, I am trying to focus on quantum physics and quantum technology in order to follow the pace of modern scientists. In my spare time at home, I prefer reading, cooking and listening to music. J-pop is my favorite music genre. I also enjoy the off-road trip and fishing. ',
                image:"zipei_zheng.jpg"
                }
            ]
        }
    }
    hideModal=(name)=>{
        for(let i in this.state.teamMembers){
            if(this.state.teamMembers[i].name===name)
                this.state.teamMembers[i].show=false
        }
        this.setState({
            ...this.state,
            ...this.teamMembers
        })
    }
    showModal=(name)=>{
        for(let i in this.state.teamMembers){
            if(this.state.teamMembers[i].name===name)
                this.state.teamMembers[i].show=true
        }
        this.setState({
            ...this.state,
            ...this.teamMembers
        })
    }
    teamModals=()=>{
        let div = []
        for(let i in this.state.teamMembers){
            div.push(
            <Modal show={this.state.teamMembers[i].show} onHide={()=>this.hideModal(this.state.teamMembers[i].name)}>
             <Modal.Header closeButton>
             <Modal.Title>{this.state.teamMembers[i].name}</Modal.Title>
             </Modal.Header>
             <Modal.Body>
                <p>{this.state.teamMembers[i].description?this.state.teamMembers[i].description:""}</p>
                <p>{this.state.teamMembers[i].description2?this.state.teamMembers[i].description2:""}</p>
                <p>{this.state.teamMembers[i].description3?this.state.teamMembers[i].description3:""}</p>
                 <p>Reach at: {this.state.teamMembers[i].email}</p>
                 </Modal.Body>
             <Modal.Footer>
             </Modal.Footer>
            </Modal> 
            )
        }
        return div;
    }
    teamIcons=()=>{
        let div=[]
        for(let i in this.state.teamMembers){
            div.push(
                <div class="col-sm-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle max-width-height-200" src={"img/res/"+this.state.teamMembers[i].image} alt="picture" />
                        <div class="margin-top-bottom-40">
                        <Button onClick={()=>this.showModal(this.state.teamMembers[i].name)}><h6>{this.state.teamMembers[i].name}</h6></Button>
                        </div>
                    </div>
                    </div>
            )
        }
        return div
    }
    scrollToMyRef = (myref) => window.scrollTo(0, myref.current.offsetTop)   

    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);
    render(){
    let body;
        body = (
            <section id="team">
                {this.teamModals()}
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
                            <a class="nav-link dropdown-toggle js-scroll-trigger nav-items font-color-black" id="navbarDropdown"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Research Projects</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/#biomedic">BioMedical Imaging</a>
                            <a class="dropdown-item" href="/#qrng">Quantum Random Numbers</a>
                            <a class="dropdown-item" href="/#photonics" >Integrated Quantum Photonics</a>
                            <a class="dropdown-item" href="/#remotesensing" >Quantum Remote Sensing</a>
                            <a class="dropdown-item" href="/#iot" >Quantum Computing and IOT</a>
                            <a class="dropdown-item" href="/#optical" >Quantum Optical Computing</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger font-color-black" href="/#team">Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger font-color-black" href="/#/news">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger font-color-black" href="/#/opportunities">Opportunities</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger font-color-black" href="/#/about">About</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
     
                
                <div class="team-section">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                        <h2 class="section-heading color-white text-uppercase margin-top-100">Meet Our Amazing Team</h2>
                        </div>
                    </div>
                <div class="container">
                    <div class="row">
                        {this.teamIcons()}
                    </div>
                </div>
                </div>
                <footer class="bg-black small text-center text-white-50">
                    <div class="container">
                    Copyright &copy; Quest Stevens EDU 2019
                    </div>
                </footer>
            </section>
        )
    return body;
}
}

export default Team;
