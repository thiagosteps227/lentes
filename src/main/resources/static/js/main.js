body {
	height: 100%;
	width: 100%;
	font-family: 'Sarpanch', sans-serif;
	color:white;
	background-image: url("/images/LogoAmarelo.PNG");
	background-repeat: no-repeat;
	background-position: top;
	background: rgb(13,26,44);
}

#logo {
	height: 30%;
	width: 100%;
	display:flex;
	margin: auto;
}

#logo img{
	height: 150px;
	width: 150px;
}

#logo img:hover{
	opacity: 0.8;
}

#logo a{
	display:flex;
}

.btn {
	color: rgb(13,26,44);
	margin-left: 10px;
}

header{
	background-color: rgb(13,26,44);
  	
}

header h1{
	color: white;
	margin-right: auto;
	margin-top: auto;
	margin-bottom: auto;
}

section {
	height: 80%;
	width: 100%;
}

.nav {
	margin-bottom: 20px;
	border-bottom: 1px solid rgb(248, 220, 175);
}

i {
	color: white;
	margin: 5px;
}

i:hover{
	color: rgb(248, 220, 175);
}

#formGoogleSearch{
	flex-direction: row;
	display: flex;
	margin-bottom: 5px;
	justify-content: center;
	height: 10%;
}

#googleInput{
	width:50%;
	height: 51px;
}

ul {
	flex-direction: row;
	justify-content: center;
	
}

li { 
	padding-right:15px;
	font-size:150%;
}

a {
	text-decoration: none;
	color:white;
	font-size: 20px;
}

a:hover{
	text-decoration: none;
	color: rgb(248, 220, 175);
}
	
input{
  border:2px solid rgb(248, 220, 175);
  min-height:15px;
}

.container {
	margin-top: 15px;
}
.container img{
	height: 300px;
	width: 300px;
	display: flex;
	margin:1px;
}

.dados {
    bottom: 5px;
    right: 0;
    color:rgb(13,26,44);
    margin-right: 2px;
}

/* Style the Image Used to Trigger the Modal */
.my-2 {
  cursor: pointer;
  transition: 0.3s;
}

.my-2:hover {
	opacity: 0.7;
}

/* Style the Image Used to Trigger the Modal */
.my-2 {
  cursor: pointer;
  transition: 0.3s;
}

.my-2:hover {opacity: 0.7;}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 0px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.7); /* Black w/ opacity */
}

/* Modal Content (Image) */
.modal-content {
  margin: auto;
  display: block;
  width: 35%;
  max-width: 100%;
}

/* Caption of Modal Image (Image Text) - Same Width as the Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation - Zoom in the Modal */
.modal-content, #caption {
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {transform:scale(0)}
  to {transform:scale(1)}
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 25px;
  /*font-weight: bold;*/
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}

footer{
	height:10%;
	width: 100%;
	padding: 15px;
	margin-top: 20px;
	border-top: 1px solid rgb(248, 220, 175);
	text-align: center;
	color:white;
}
