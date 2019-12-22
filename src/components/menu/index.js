import React, {Fragment} from 'react';
import Section from '../section';
import {Row, Col} from 'antd';

import Menua from './menua';
import Menub from './menub';
import Menuc from './menuc';
import Menud from './menud';
import Menue from './menue';
import Menuf from './menuf';

const menuIndex = () => {
    return ( 
    <Fragment>
        <Row gutter={16}>
            <Col span={24}>
                <Section>
                    <Menua />
                </Section>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col span={8}>
                <Section>
                    <Menub />
                </Section>
            </Col>
            <Col span={8}>
                <Section>
                    <Menuc />
                </Section>
            </Col>
            <Col span={8}>
                <Section>
                    <Menue />
                </Section>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col span={8}>
                <Section>
                    <Menud />
                </Section>
            </Col>
            <Col span={8}>
                <Section>
                    <Menuf />
                </Section>
            </Col>
        </Row>
    </Fragment>
     );
}
 
export default menuIndex;