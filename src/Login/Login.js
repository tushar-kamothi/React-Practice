import React,{useState} from 'react';
import Clock from '../parts/Clock';
import BlogDataComponent from '../parts/BlogsDataComponent';
import SliderHeader from '../parts/SliderHeader';
import FetchPosts from '../FetchPost/FetchPosts';
import SearchPost from '../FetchPost/SearchPost';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Login = () => {
	const [auth,UseAuth] = useState(false);
	const [show,ShowPosts] = useState(false);
	// function LogoutFun(){
	// 	UseAuth(false)
	// }
	// function LoginFun(){
	// 	UseAuth(true)
	// }
	return(
		<>
			<header className="App-header">
		        <h3>Hello React</h3> 
		        {
					auth ? 
					<Button variant="danger" onClick={()=>UseAuth(false)}>Logout</Button>
					 :
					 <Button variant="primary" onClick={()=>UseAuth(true)}>Login</Button>
					 
				} 
	        </header>
				
			<div className="body-content">
			<Container>
				{
					auth &&
					<>
						<div className="body-header">
							<h2>Body content</h2>
							<Clock />
						</div>
						<div className="slider-section">
							<SliderHeader/>
						</div>
						<BlogDataComponent />

						<div className="fetch-post-list">
							{
								show ? <Button variant="danger" onClick={()=>ShowPosts(false)}> Hide Post List </Button> :
								 <Button variant="primary" onClick={()=>ShowPosts(true)}> Show Post List </Button> 
							} 
							{
								show &&								
								<FetchPosts />
							}
							
						</div>
						<div className="SearchPost">
							<SearchPost />
						</div>

					</>
				}

			</Container>
			</div>	

			{
					auth &&
					<>
					<footer className="footer-side">
					<Container>
					  <Row md={3}>
					    <Col><h3>Footer Side</h3></Col>
					    <Col xs={6}>2 of 3</Col>
					    <Col>3 of 3</Col>
					  </Row>
					</Container>
						
							
						</footer>
					</>
				}
					
			
		</>
	);
}

export default Login;