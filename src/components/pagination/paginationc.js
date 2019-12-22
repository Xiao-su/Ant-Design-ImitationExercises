import React from "react";
import { Pagination } from 'antd';

const onShowSizeChange = function(current, pageSize){
    console.log(current, pageSize);
}

const paginationc = () => {
    return ( 
        <div>
            <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={3}
            total={500}
            />
            <br />
            <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={3}
            total={500}
            disabled
            />
        </div>
     );
}
 
export default paginationc;