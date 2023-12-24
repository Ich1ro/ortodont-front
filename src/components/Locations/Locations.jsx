import React from 'react';
import './Locations.scss';

import { Table, Checkbox } from 'rsuite';
import { locations } from '../../data';
import Icon from '../../Icon';

const { Column, HeaderCell, Cell } = Table;

const Locations = () => {
	const [checkedKeys, setCheckedKeys] = React.useState([]);
	let checked = false;
	let indeterminate = false;

	if (checkedKeys.length === locations.length) {
		checked = true;
	} else if (checkedKeys.length === 0) {
		checked = false;
	} else if (checkedKeys.length > 0 && checkedKeys.length < locations.length) {
		indeterminate = true;
	}

	const handleCheckAll = (value, checked) => {
		const keys = checked ? locations.map(item => item.id) : [];
		setCheckedKeys(keys);
	};
	const handleCheck = (value, checked) => {
		const keys = checked ? [...checkedKeys, value] : checkedKeys.filter(item => item !== value);
		setCheckedKeys(keys);
	};

	const CheckCell = ({ rowData, onChange, checkedKeys, dataKey, ...props }) => (
		<Cell {...props} style={{ padding: 0 }}>
			<div>
				<Checkbox
					value={rowData[dataKey]}
					inline
					verticalAlign="middle"
					onChange={onChange}
					checked={checkedKeys.some(item => item === rowData[dataKey])}
				/>
			</div>
		</Cell>
	);

	return (
		<div className="info-container">
			<div className="info-header">
				<div className="info-header-right">
					<div className="info-header-right-title">Locations</div>
					<div className="info-header-right-search">
						<input type="text" placeholder="Search by Name..." />
						<div className="info-header-right-search-icon">
							<Icon name="search" styles={{ width: 18 }} />
						</div>
					</div>
				</div>
				<div className="info-header-left">
					<div className="info-header-left-edit">
						<Icon name="edit" />
					</div>
					<div className="info-header-left-delete">
						<Icon name="delete" />
					</div>
				</div>
			</div>
			<Table data={locations} autoHeight>
				<Column width={50} align="center">
					<HeaderCell
						style={{ backgroundColor: '#26A4ED', color: 'white', fontWeight: 'bold', fontSize: 16 }}>
						<div>
							<Checkbox
								inline
								checked={checked}
								verticalAlign="middle"
								indeterminate={indeterminate}
								onChange={handleCheckAll}
							/>
						</div>
					</HeaderCell>
					<CheckCell dataKey="id" checkedKeys={checkedKeys} onChange={handleCheck} />
				</Column>
				<Column flexGrow={2} align="start" verticalAlign="middle" height={50}>
					<HeaderCell
						style={{ backgroundColor: '#26A4ED', color: 'white', fontWeight: 'bold', fontSize: 16 }}>
						Name
					</HeaderCell>
					<Cell dataKey="name" />
				</Column>
				<Column flexGrow={2} align="center" verticalAlign="middle">
					<HeaderCell
						style={{ backgroundColor: '#26A4ED', color: 'white', fontWeight: 'bold', fontSize: 16 }}>
						Address
					</HeaderCell>
					<Cell dataKey="address" />
				</Column>
				<Column flexGrow={2} align="center" verticalAlign="middle">
					<HeaderCell
						style={{ backgroundColor: '#26A4ED', color: 'white', fontWeight: 'bold', fontSize: 16 }}>
						Phone number
					</HeaderCell>
					<Cell dataKey="phone" />
				</Column>
				<Column flexGrow={2} align="center" verticalAlign="middle">
					<HeaderCell
						style={{ backgroundColor: '#26A4ED', color: 'white', fontWeight: 'bold', fontSize: 16 }}>
						PID Number
					</HeaderCell>
					<Cell dataKey="pid" />
				</Column>
			</Table>
		</div>
	);
};

export default Locations;
