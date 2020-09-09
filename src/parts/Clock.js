import React,{useState,useEffect} from 'react';
import Badge from 'react-bootstrap/Badge'

const Clock = ()=>{

	const [Mytime,MytimeUpdate] = useState(new Date())

	//const Mytime = new Date();

	useEffect(
		()=>{
			let TimeUpdate = setInterval( () => Updating(),1000);
			return function cleaning(){
				clearInterval(TimeUpdate);
			}			
		}
	);
	function Updating(){
		MytimeUpdate(new Date());
	} 
	return(
		 <Badge pill variant="primary">
    		<h5>{Mytime.toLocaleTimeString()}</h5>
  			</Badge>
		
	);
}

export default Clock;