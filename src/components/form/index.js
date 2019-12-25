import React, {Fragment} from 'react';
import Section from '../section';
import {Row, Col} from 'antd';
import Forma from './forma';
import Formb from './formb';
import Formc from './formc';

const formIndex = () => {
  return (
    <Fragment>
      <Row gutter={16}>
        <Col span={24}>
          <Section>
              <Forma />
          </Section>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Section>
              <Formb />
          </Section>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Section>
              <Formc />
          </Section>
        </Col>
      </Row>
    </Fragment>
  );
}

export default formIndex;
