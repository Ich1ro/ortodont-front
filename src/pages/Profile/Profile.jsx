import React from 'react';
import './Profile.scss';

import { useNavigate } from 'react-router-dom';
import { users } from '../../data';
import Icon from '../../Icon';

const Profile = () => {
  const navigate = useNavigate()
	const user = users.find(user => user.id === 8);

  const logout = () => {
    localStorage.setItem('user', false)
    navigate('/login/admin')
  }

	return (
		<div className="profile-container">
			<div className="profile-main">
				<div className="profile-main-avatar">LK</div>
				<div className="profile-main-info">
					<h2 className="profile-main-info-title">My Profile</h2>
					<div className="profile-main-info-name">{user.name}</div>
				</div>
			</div>
			<div className="profile-confirmation">
				<div className="profile-confirmation-header">
					<b className="profile-confirmation-header-details">Reset email or password</b>
				</div>
				<div className="profile-confirmation-details">
					<div className="profile-confirmation-details-title">Email *</div>
					<input
						className="profile-confirmation-details-input"
						type="email"
						value={user.email}
						placeholder="Email"></input>
					<div className="profile-confirmation-details-button">
						<button className="profile-confirmation-details-button-content">Send Confirmation Code</button>
					</div>
				</div>
			</div>
			<div className="profile-logout" onClick={logout}>
        <div className="profile-logout-icon"><Icon name='logout' /></div>
        <div className="profile-logout-text">Logout</div>
        <div className="profile-logout-empty"></div>
      </div>
		</div>
	);
};

export default Profile;
