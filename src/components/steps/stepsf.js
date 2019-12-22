import React from "react";
import { Steps } from 'antd';

const { Step } = Steps;

const stepsf = () => {
    return ( 
        <Steps current={0} status="error">
            <Step title="Finished" description="This is a description" />
            <Step title="In Process" description="This is a description" />
            <Step title="Waiting" description="This is a description" />
        </Steps>
     );
}
 
export default stepsf;