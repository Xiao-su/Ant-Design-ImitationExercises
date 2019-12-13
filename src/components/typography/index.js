import React, {Fragment} from 'react';
import Section from '../section';
import {Row, Col} from 'antd';
import Typographya from './typographya';
import Typographyb from './typographyb';
import Typographyc from './typographyc';
import Typographyd from './typographyd';
import Typographye from './typographye';

const Iconindex = () => {
  return (
    <Fragment>
      <Row gutter={16}>
        <Col span={8}>
          <Section>
              <Typographya />
          </Section>
        </Col>
        <Col span={8}>
          <Section>
              <Typographyb />
          </Section>
        </Col>
        <Col span={8}>
          <Section>
              <Typographyc />
          </Section>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Section>
              <Typographyd />
          </Section>
        </Col>
        <Col span={8}>
          <Section>
              <Typographye />
          </Section>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Iconindex;
