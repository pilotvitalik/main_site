import React from 'react';
import FiletoServer from './FileToServer/FileToServer';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';

const listComponents = {
	file_to_server: FiletoServer,
}

function Node(){
	const dispatch = useDispatch();
	let {projects} = useParams();
	let {url} = useRouteMatch();

	dispatch({type: 'main/nodeProjects', payload: ''});

	const listProjects = useSelector(state => state.main.nodeProject);
	console.log(listProjects);

	const list = listProjects.map(item =>
		<Route 
			key={item.id}
			path={item.url}
			component={listComponents[item.component]}/>
	);

	return(
		<div>
			<Switch>
				{list}
			</Switch>
		</div>
	);
}

export default Node;