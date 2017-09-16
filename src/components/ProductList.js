
import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';
const ProductList = ({ onDelete, products }) => {
	const columns = [{
		title:'产品名称',
		dataIndex:'name',
	},{
		title:'操作',
		render:(text,record)=>{
			return (
				<Popconfirm title="确认删除" onConfirm={()=>onDelete(record.id)}>
					<Button>删除</Button>
				</Popconfirm>
			);
		},
	}];
	return(
		<Table
		  dataSource={products}
		  columns={columns}
		/>
	)
}

ProductList.propTypes = {
	onDelete: PropTypes.func.isRequired,
	products: PropTypes.array.isRequired,
}
export default ProductList;