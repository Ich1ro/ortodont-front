import React from 'react';
import './Info.scss';

import Sidebar from '../Sidebar/Sidebar';

import { Outlet } from 'react-router-dom';

const Info = () => { 
	return (
		<>
			<Sidebar />
			<Outlet />
		</>
	);
};

export default Info;
