import React from 'react';
import './PatientInfo.scss';

import { useParams } from 'react-router-dom';

import { patients } from '../../data';
import Icon from '../../Icon';

const PatientInfo = () => {
	const { id } = useParams();
	const patient = patients.find(patient => patient.id === +id);

	return (
		<div className="patient-info-container">
			<div className="patient-info-header">
				<h2 className="patient-info-header-name">{`${patient.firstName} ${patient.lastName}`}</h2>
				<div className="patient-info-header-icons">
					<div className="patient-info-header-icons-edit">
						<Icon name="edit" className="edit" />
					</div>
					<div className="patient-info-header-icons-delete">
						<Icon name="delete" />
					</div>
				</div>
			</div>
			<div className="patient-info-block">
				<div className="patient-info-block-titles">
					<b>Patient Number:</b>
					<b>OrthoBanc Number:</b>
					<b>Email:</b>
					<b>Location:</b>
				</div>
				<div className="patient-info-block-details">
					<p>{patient.patientNumber}</p>
					<p>{patient.orthoBancNumber}</p>
					<p>{patient.email}</p>
					<p>{patient.location}</p>
				</div>
			</div>
			<div className="patient-info-details">
				<div className="patient-info-details-insurance">
					<div className="patient-info-details-insurance-header">INSURANCE INFORMATION</div>
					<div className="patient-info-details-insurance-info">
						<div className="patient-info-details-insurance-info-titles">
							<b>Used to Date:</b>
							<b>Lifetime Maximum:</b>
							<b>Percentage:</b>
							<b>Deductible:</b>
						</div>
						<div className="patient-info-details-insurance-info-details">
							<p>{`$${patient.usedToDate}`}</p>
							<p>{`$${patient.maxLifetime}`}</p>
							<p>{`${patient.percentage}.00%`}</p>
							<p>{`$${patient.deductible}`}</p>
						</div>
					</div>
				</div>
				<div className="patient-info-details-payment">
					<div className="patient-info-details-payment-header">PAYMENT HISTORY</div>
					<div className="patient-info-details-payment-info">
						<div className="patient-info-details-payment-info-titles">
							<b>Credit from Previous Contract:</b>
							<b>Discount Type:</b>
						</div>
						<div className="patient-info-details-payment-info-details">
							<p>{`$${patient.prevContractCredit}`}</p>
							<p>{patient.discountType}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="patient-info-complex">
				<div className="patient-info-complex-header">
					<b>Complex Phase 1</b>
					<p> — $4,630.00 </p>
				</div>
				<div className="patient-info-complex-elements">
					<div className="patient-info-complex-elements-card">
						<div className="patient-info-complex-elements-card-main">
							<b className="patient-info-complex-elements-card-main-title">Ceramic Braces</b>
							<div className="patient-info-complex-elements-card-main-price">$600.00</div>
						</div>
            <div className="patient-info-complex-elements-card-required">
              Required
            </div>
					</div>
					<div className="patient-info-complex-elements-card">
						<div className="patient-info-complex-elements-card-main">
							<b className="patient-info-complex-elements-card-main-title">Invisalign</b>
							<div className="patient-info-complex-elements-card-main-price">$900.00</div>
						</div>
            <div className="patient-info-complex-elements-card-optional">
              Optional
            </div>
					</div>
					<div className="patient-info-complex-elements-card">
						<div className="patient-info-complex-elements-card-main">
							<b className="patient-info-complex-elements-card-main-title">Upper Ceramic Braces</b>
							<div className="patient-info-complex-elements-card-main-price">$300.00</div>
						</div>
            <div className="patient-info-complex-elements-card-optional">
            Optional
            </div>
					</div>
          <div className="patient-info-complex-elements-container">
            <button className='patient-info-complex-elements-container-button'>
              Open Calculations
            </button>
          </div>
				</div>
			</div>
			<div className="patient-info-bottom">
        <button className="patient-info-bottom-button">Present</button>
      </div>
		</div>
	);
};

export default PatientInfo;
