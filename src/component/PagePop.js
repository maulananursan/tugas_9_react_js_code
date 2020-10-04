import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class PagePop extends Component{
	constructor(props){
		super(props)
		this.state = {
			versi : true			
		}
		this.ubahState = this.ubahState.bind(this);
	}

	ubahState(e){
		e.preventDefault()
		this.setState((state, props) =>({
			versi : !state.versi
		}));
	}

	render(){
		return(
			<div>
            	<Button variant="primary" type="button" onClick={this.ubahState}>Versi Website</Button>
            	<>
					{this.state.versi ? (
					<div><p></p></div>
					) : (
					<div>
                		<p>Akses Sport V1.0</p>
					</div>
					)}
				</>
			</div>
		)
	}
}

export default PagePop;