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
        this.state={
            teamMembers:[
                {name: 'Yong M Sua',
                email: 'ysua@stevens.edu',
                show:false
                },
                {name:'Bharathwaj Muthuswamy',
                 email:'bmuthusw@stevens.edu',
                 show:false
                },
                {
                    name:'Arwa A Algethami',
                    email:'aalgetha@stevens.edu',
                    show:false
                },
                {
                    name:'Chao Tang', email:'ctang9@stevens.edu',show:false
                },
                {
                name:'Daniel Tafone',email:'dtafone@stevens.edu',show:false
                },
                {
                    name:'He Zhang',
                    email:'hzhang33@stevens.edu',
                    show:false
                },
                {name:'Heng Fan',
                email:'hfan5@stevens.edu',
                show:false
                },
                {name:'Irwin Huang',
                 email:'ihuang1@stevens.edu',
                 show:false
                },
                {name:'Jeevanandha Ramanathan',
                email:'jramana1@stevens.edu',
                show:false
                },
                {name:'Jiayang Chen',
                email:'jchen59@stevens.edu',
                show:false
                },
                {name:'Jichao Fan',
                email:'jfan11@stevens.edu',
                show:false
                },
                {name:'Jiuyi Zhang',
                email:'jzhang92@stevens.edu',
                show:false
                },
                {name:'Lac Nguyen',
                email:'lnguyen1@stevens.edu',
                show:false
                },
                {name:'Lili Li',
                email:'lli67@stevens.edu',
                show:false
                },
                {name:'Malvika Garikapati',
                email:'mg@stevens.edu',
                show:false
                },
                {name:'Mingwei Jin',
                email:'mjin1@stevens.edu',
                show:false
                },
                {name:'Patrick Rehain',
                email:'prehain@stevens.edu',
                show:false
                },
                {name:'Prajnesh Kumar',
                email:'pkumar8@stevens.edu',
                show:false
                },
                {name:'Santosh Kumar',
                email:'skumar5@stevens.edu',
                show:false
                },
                {name:'Sarah McBride',
                email:'smcbride@stevens.edu',
                show:false
                },
                {name:'Shenyu Zhu',
                email:'szhu24@stevens.edu',
                show:false
                },
                {name:'Soorya Ashokan',
                email:'sashokan@stevens.edu',
                show:false
                },
                {name:'Stephanie Maruca',
                email:'onnelly <smaruca@stevens.edu',
                show:false
                },
                {name:'Zhan Li',
                email:'zli88@stevens.edu',
                show:false
                },
                {name:'Zhaohui Ma',
                email:'zma12@stevens.edu',
                show:false
                },
                {name:'Zipei Zheng',
                email:'zzheng22@stevens.ed',
                show:false
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
             <Modal.Body>{this.state.teamMembers[i].email}</Modal.Body>
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
            console.log(this.state.teamMembers[i].name)
            div.push(
                <div class="col-sm-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="img/kakashi.jpeg" alt="picture" />
                        <div class="margin-top-bottom-40">
                        <Button onClick={()=>this.showModal(this.state.teamMembers[i].name)}><h6>{this.state.teamMembers[i].name}</h6></Button>
                        </div>
                    </div>
                    </div>
            )
        }
        return div
    }
    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);
    render(){
    let body;
        body = (
            <section>
                {this.teamModals()}
                <link href="css/grayscale.css" rel="stylesheet"/>
                <div class="signup-section">
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
