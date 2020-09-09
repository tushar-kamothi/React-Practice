import React from 'react';
import BlogData from './BlogsData';
import BlogDesign from './BlogDesign';
import Row from 'react-bootstrap/Row'

const BlogsDataComponent = () => {
	
	let blogs = BlogData.map(
			(val)=> <BlogDesign 
						key={val.id}
						name={val.name}
						img={val.image}
						content={val.content}
					/>
		);

	return(
		<>
			<div className="blog-wrap">	
			<Row>	
				{blogs}
			</Row>
			</div>
		</>
	);
}

export default BlogsDataComponent;