import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
const BlogDesign = (props)=> {
	
	return(
<Col md={3}>
			<Card style={{ width: '18rem' }}>
			  <Card.Img variant="top" src={props.img} />
			  <Card.Body>
			    <Card.Title>{props.name}</Card.Title>
			    <Card.Text>
			      {props.content}
			    </Card.Text>
			    <Button variant="primary">Go somewhere</Button>
			  </Card.Body>
			</Card>
			</Col>
	);
}

export default BlogDesign;