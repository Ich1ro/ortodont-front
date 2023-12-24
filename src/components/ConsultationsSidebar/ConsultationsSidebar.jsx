import React from 'react';
import './ConsultationsSidebar.scss';

import Icon from '../../Icon';
import { NavLink } from 'react-router-dom';

import { patients } from '../../data';
import PatientCard from '../PatientCard/PatientCard';

const ConsultationsSidebar = () => {
	return (
		<div className="cons-sidebar-container">
			<div className="cons-sidebar-header">
				<div className="cons-sidebar-header-search">
					<input type="text" placeholder="Search..." />
					<div className="cons-sidebar-header-search-select">
						<select name="searchBy">
							<option value="name">By Name</option>
							<option value="name">By Email</option>
						</select>
					</div>
				</div>
				<div className="cons-sidebar-header-icons">
					<div className="cons-sidebar-header-icons-wrapper">
						<Icon name="search" styles={{ width: '28', fill: '#26A4ED' }} />
					</div>
					<div className="cons-sidebar-header-icons-wrapper">
						<Icon name="settings" styles={{ width: '24', fill: '#26A4ED' }} />
					</div>
					<div className="cons-sidebar-header-icons-wrapper">
						<Icon name="plus" styles={{ width: '29', fill: '#26A4ED' }} />
					</div>
				</div>
			</div>
			<div className="cons-sidebar-cards">
				{patients.map(patient => (
					<NavLink
					to={`/consultations/${patient.id}`}
					className={({ isActive, isPending }) =>
						isPending ? 'card' : isActive ? 'card-active card' : 'card'
					}>
					{({ isActive, isPending, isTransitioning }) => (
						<PatientCard patient={patient} isActive={isActive}/>
					)}
				</NavLink>
				))}
			</div>
		</div>
	);
};

export default ConsultationsSidebar;
