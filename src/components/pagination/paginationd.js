import React from "react";

import { Pagination } from 'antd';

function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}

const paginationd = () => {
    return ( 
        <div>
            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
            <br />
            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
        </div>
     );
}
 
export default paginationd;