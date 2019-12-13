import React, {Fragment} from 'react';
import Section from '../section';
import {Row, Col} from 'antd';
import Icona from './icona';
import Iconb from './iconb';
import Iconc from './iconc';
import Icond from './icond';

const Iconindex = () => {
  return (
    <Fragment>
      <Row gutter={16}>
        <Col span={8}>
          <Section>
              <Icona />
          </Section>
        </Col>
        <Col span={8}>
          <Section>
              <Iconb />
          </Section>
        </Col>
        <Col span={8}>
          <Section>
              <Iconc />
          </Section>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Section>
              <Icond />
          </Section>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Iconindex;
