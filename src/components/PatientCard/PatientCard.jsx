import React from 'react';
import './PatientCard.scss'

import Icon from '../../Icon';

const PatientCard = ({ patient, isActive }) => {
	console.log(patient.lastActionDate);

	const date = patient.lastActionDate;
	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	const day = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();

	const formattedMonth = monthNames[monthIndex];

	const formattedDate = day + ' ' + formattedMonth + ' ' + year;

	return (
		<>
			<div className="patient-card-info">
				<div className="patient-card-avatar" style={{ backgroundColor: `#${patient.avatarBackground}` }}></div>
				<div className="patient-card-details">
					<h5>{patient.firstName + ' ' + patient.lastName}</h5>
					<p className="patient-card-number">{patient.patientNumber}</p>
					<p className="patient-card-status-title">Status</p>
					<b className="patient-card-status">{patient.status}</b>
				</div>
				<Icon name={`${isActive ? 'arrow-right' : 'arrow-left'}`} />
			</div>
			<p className='patient-card-date'>{formattedDate}</p>
		</>
	);
};

export default PatientCard;
