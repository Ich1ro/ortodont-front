import React from 'react';
import './Consultations.scss';

import { Outlet } from 'react-router-dom';
import { ConsultationsSidebar } from '../../components';

const Consultations = () => {
	return (
		<>
			<ConsultationsSidebar />
			<Outlet />
		</>
	);
};

export default Consultations;
