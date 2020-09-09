import React,{useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import axios from 'axios';

const SearchPost = () => {
	const [post,Mypost] = useState({})
	const [postId,MypostId] = useState()
	const [setId,SetNewID] = useState()

	useEffect(
		() => {
			axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then(
				(res)=>{
					Mypost(res.data)
				}
			)
			.catch(
				(errres)=>{
					console.log(errres)
				}
			)
		},[postId]
	);	
	const SubmitData = (even) => {
		//console.log(even.target);
		// MypostId(e.target.value)
		// SetNewID(e.target.value)
		MypostId(setId);
		even.preventDefault();
	}
	return(
			<>
				{/*
					postId ? '' : <p>Type Id No. from 1 to 100 </p> 					
				*/}
				
				{/*
					<form onSubmit={SubmitData}>
										<input 
											type="text" 
											value={setId} 
											onChange={
												(e)=>SetNewID(e.target.value)
											} 
										/>
										<input type="submit" />
									</form>						
				*/}	
				<Form onSubmit={SubmitData}>
				  <Form.Group controlId="formBasicEmail">
				    <Form.Label>Type Id No. from 1 to 100</Form.Label>
				    <Form.Control type="text" value={setId} 
						onChange={
							(e)=>SetNewID(e.target.value)
						} 
					/>
				  </Form.Group>
				  
				  <Button variant="primary" type="submit">
				    Submit
				  </Button>
				</Form>		
				{
					postId && 
					<>
					<Card style={{ width: '18rem' }}>					  
					  <Card.Body>
					    <Card.Title>{post.title}</Card.Title>
					    <Card.Text>
					     {post.body}
					    </Card.Text>					    
					  </Card.Body>
					</Card>
					
					</>
				}
			</>
	);
}

export default SearchPost;