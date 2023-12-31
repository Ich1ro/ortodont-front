import React from 'react';
import './AddOns.scss';

import { Table, Checkbox } from 'rsuite';
import { addOns } from '../../data';
import Icon from '../../Icon';

const { Column, HeaderCell, Cell } = Table;

const AddOns = () => {
	const [checkedKeys, setCheckedKeys] = React.useState([]);
	let checked = false;
	let indeterminate = false;

	if (checkedKeys.length === addOns.length) {
		checked = true;
	} else if (checkedKeys.length === 0) {
		checked = false;
	} else if (checkedKeys.length > 0 && checkedKeys.length < addOns.length) {
		indeterminate = true;
	}

	const handleCheckAll = (value, checked) => {
		const keys = checked ? addOns.map(item => item.id) : [];
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
					<div className="info-header-right-title">Add-Ons</div>
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
			<Table data={addOns} autoHeight>
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
				<Column flexGrow={1} align="start" verticalAlign="middle" height={50}>
					<HeaderCell
						style={{ backgroundColor: '#26A4ED', color: 'white', fontWeight: 'bold', fontSize: 16 }}>
						Add-Ons
					</HeaderCell>
					<Cell dataKey="name" />
				</Column>
				<Column flexGrow={2} align="center" verticalAlign="middle">
					<HeaderCell
						style={{ backgroundColor: '#26A4ED', color: 'white', fontWeight: 'bold', fontSize: 16 }}>
						Fees
					</HeaderCell>
					<Cell dataKey="fee" />
				</Column>
			</Table>
		</div>
	);
};

export default AddOns;
