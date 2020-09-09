import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';

const FetchPosts = () => {
	const [posts,Myposts] = useState([]);
	useEffect(
		()=>{
			axios.get('https://jsonplaceholder.typicode.com/posts')
			  .then(function (response) {
			    // handle success
			    console.log(response.data);
			    Myposts(response.data)
			  })
			  .catch(function (error) {
			    // handle error
			    console.log(error);
			  })
		},[]
	);
	return(
		<>
			<h3>FetchPosts</h3>
			<Table striped bordered hover>
			  <thead>
			    <tr>
			      <th>#</th>
			      <th>Title</th>
			      <th>User Id</th>
			    </tr>
			  </thead>
			  <tbody>
			   {
					posts.map(
						(val)=>
							<tr key={val.id}>
						      <td>{val.id}</td>
						      <td>{val.title}</td>
						      <td>{val.userId}</td>
						    </tr>
					)
				}
			  </tbody>
			</Table>
		</>
	);	
}

export default FetchPosts;