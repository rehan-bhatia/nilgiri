import React from "react";
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import Profile from "../components/Profile";
import "../components/StuBody.css"

var reps = [
	{
		name: "Jatin Goel",
		position: "BSW",
		image: "https://i.ibb.co/PxyNRfx/Jatin-Goel.png",
		email: "",
	 	fb: "",
	 	insta:"",
	 	phone:"",
	},
	{
		name: "Puru Arora",
		position: "BSW",
		image: "https://i.ibb.co/q0grWvH/Puru.png",
		email: "",
	 	fb: "",
	 	insta:"",
	 	phone:"",
	}, 
	{
		name: "Jatin Ahuja",
		position: "SAC",
		image: "https://i.ibb.co/QD9Rh6S/Jatin-Ahuja.png",
		email: "",
	 	fb: "",
	 	insta:"",
	 	phone:"",
	},
	{
		name: "Ambuj Verma",
	 	position: "Dance Club",
	 	image: "https://i.ibb.co/NjSZX96/Ambuj-Verma.png",
	 	email: "",
	 	fb: "",
	 	insta:"",
	 	phone:"",
	},
	{
		name: "Amokh Varma",
		position: "Music Club",
		image: "https://i.ibb.co/48jW6sV/Amokh-Varma.png",
		email: "",
	 	fb: "",
	 	insta:"",
	 	phone:"",
	},
	{
		name: "Shresth Gupta",
		position: "Quizzing Club",
		image: "https://i.ibb.co/KXc9Xv8/QC.png",
		email: "",
	 	fb: "",
	 	insta:"",
	 	phone:"",
	},
	{
		name: "Prateek Mishra",
		position: "Lit Club",
		image: "https://i.ibb.co/vhXkkD7/Lit.png",
		email: "",
	 	fb: "",
	 	insta:"",
	 	phone:"",
	}, 
	{
		name: "Ritik Sharma",
		position:" Debating Club",
		image: "https://i.ibb.co/jkmkFXT/Deb.png",
		email: "",
	 	fb: "",
	 	insta:"",
	 	phone:"",
	},
	{
		name: "Raghav Modi",
		position:"Drama Club",
		image: "https://i.ibb.co/64hmNdJ/Drama.png",
		email: "",
	 	fb: "",
	 	insta:"",
	 	phone:"",
	},
	{
		name: "Ritik Raj",
		position: "Hindi Samiti",
		image: "https://i.ibb.co/7SnngVV/HS.png",
		email: "",
	 	fb: "",
	 	insta:"",
	 	phone:"",
	},
	{
		name: "Soham Gaikwad",
		position: "FACC",
		image: "https://i.ibb.co/hH98b0b/FACC.png",
		email: "",
	 	fb: "",
	 	insta:"",
	 	phone:"",
	}, 
	{
		name:"Kanishk Jain",
		position:"SPIC MACAY",
		image: "https://i.ibb.co/7vT3Sz8/SM.png",
		email: "",
	 	fb: "",
	 	insta:"",
	 	phone:"",
	},
	{
		name: "Ankit",
		position:"PFC",
		image: "",
		email: "",
	 	fb: "",
	 	insta:"",
	 	phone:"",
	},
	{
		name: "Kalash Gupta",
		position: "ISC",
		image: "https://i.ibb.co/dMy4JnF/ISC.png",
		email: "",
	 	fb: "",
	 	insta:"",
	 	phone:"",
	},];
var secys = [
	{
		name:"Manjeet Singh",
		position:"Cultural Secy",
		image:"https://i.ibb.co/tZggqc1/CS.png",
		email:"",
		fb:"",
		insta:"",
		phone:"",
	},
	{
		name:"Mayank Dubey",
		position:"Sports Secy",
		image:"https://i.ibb.co/n1zdXfL/SS.png",
		email:"",
		fb:"",
		insta:"",
		phone:"",
	},
	{
		name:"Mohit Bhandari",
		position:"Maintenance Secy",
		image:"https://i.ibb.co/B4dqsM7/MS.png",
		email:"",
		fb:"",
		insta:"",
		phone:"",
	},
	{
		name:"Ravi Golechha",
		position:"Library Secy",
		image:"https://i.ibb.co/VtZcC3V/LS.png",
		email:"",
		fb:"",
		insta:"",
		phone:"",
	},];
var sports = [
	{
		name:"Gunjan Mathur",
		position:"Captain, Cricket",
		image:"https://i.ibb.co/FzqwLkg/C-Cricket.png",
		email:"",
		fb:"",
		insta:"",
		phone:"",
	},
	{
		name:"Entla Saiteja",
		position:"Vice Captain, Cricket",
		image:"https://i.ibb.co/TkNXH0M/VC-Cricket.png",
		email:"",
		fb:"",
		insta:"",
		phone:"",
	},
	{
		name:"Harashit Singhal",
		position:"Captain, Football",
		image:"https://i.ibb.co/r7qtydP/C-Football.png",
		email:"",
		fb:"",
		insta:"",
		phone:"",
	},
	{
		name:"Sahil Sood",
		position:"Vice Captain, Football",
		image:"https://i.ibb.co/z2WscWP/VC-Football.png",
		email:"",
		fb:"",
		insta:"",
		phone:"",
	},
	{
		name:"Neeraj Kumar",
		position:"Captain, Athletics",
		image:"https://i.ibb.co/Kw9D0jS/C-Athy.png",
		email:"",
		fb:"",
		insta:"",
		phone:"",
	},
	{
		name:"Nagarjun Nimmalwar",
		position:"Vice Captain, Athletics",
		image:"https://i.ibb.co/rp19zdr/VC-Athy.png",
		email:"",
		fb:"",
		insta:"",
		phone:"",
	},
	{
		name:"Shubham Rustagi",
		position:"Captain, Weightlifting",
		image:"https://i.ibb.co/WzmCVTm/C-Weightlifting.png",
		email:"",
		fb:"",
		insta:"",
		phone:"",
	},
	{
		name:"Naqueeb Ahmad",
		position:"Captain, Volleyball",
		image:"https://i.ibb.co/Q99Hh5g/C-Volley.png",
		email:"",
		fb:"",
		insta:"",
		phone:"",
	},
	{
		name:"Ritik Sharma",
		position:"Captain, Badminton",
		image:"https://i.ibb.co/GM4880F/C-Baddy.png",
		email:"",
		fb:"",
		insta:"",
		phone:"",
	},
	{
		name:"Arun Digra",
		position:"Vice Captain, Badminton",
		image:"https://i.ibb.co/FV3k2KP/VC-Bad.png",
		email:"",
		fb:"",
		insta:"",
		phone:"",
	},
	{
		name:"Pradeep Peter",
		position:"Captain, Basketball",
		image:"https://i.ibb.co/h1pkzcD/C-Bask.png",
		email:"",
		fb:"",
		insta:"",
		phone:"",
	},
	{
		name:"Priyam Singh",
		position:"Vice Captain, Basketball",
		image:"https://i.ibb.co/FWyJHW3/VC-Bask.png",
		email:"",
		fb:"",
		insta:"",
		phone:"",
	},
	{
		name:"Animesh Verma",
		position:"Vice Captain, Hockey",
		image:"https://i.ibb.co/r2CV8by/VC-Hockey.png",
		email:"",
		fb:"",
		insta:"",
		phone:"",
	},
	{
		name:"Krishan Bansal",
		position:"Vice Captain, TT",
		image:"https://i.ibb.co/Syd7s6K/VC-TT.png",
		email:"",
		fb:"",
		insta:"",
		phone:"",
	},
	{
		name:"Himanshu Chaudhary",
		position:"Vice Captain, Squash",
		image:"https://i.ibb.co/hRd96C5/VC-Squash.png",
		email:"",
		fb:"",
		insta:"",
		phone:"",
	},

];

class Page extends React.Component {
	render() {

		if (this.props.input=="2") {
			var profiles = reps.map((user,i)=> {
				console.log(user.name)
				return <Profile url={user.image} name={user.name} position={user.position} email={user.email} fb={user.fb} insta={user.insta}/>
				});	
		} else if (this.props.input=="1") {
			var profiles = secys.map((user,i)=> {
				console.log(user.name)
				return <Profile url={user.image} name={user.name} position={user.position} email={user.email} fb={user.fb} insta={user.insta}/>
				});	
		} else if (this.props.input=="3") {
			var profiles = sports.map((user,i)=> {
				console.log(user.name)
				return <Profile url={user.image} name={user.name} position={user.position} email={user.email} fb={user.fb} insta={user.insta}/>
				});	
		}

		return (
			<div>
				<div style={{"margin-":"auto", "margin-top":"50px"}}>
				  <div class="flexing">
				  	{profiles}
				  </div>
				</div>
			</div>
		);
	}
}	

export default Page;