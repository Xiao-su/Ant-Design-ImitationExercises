import React, {Fragment} from 'react';
import Section from '../section';
import {Row, Col} from 'antd';
import Stepsa from './stepsa';
import Stepsb from './stepsb';
import Stepsc from './stepsc';
import Stepsd from './stepsd';
import Stepse from './stepse';
import Stepsf from './stepsf';
import Stepsg from './stepsg';
import Stepsh from './stepsh';


const stepsIndex = () => {
  return (
    <Fragment>
      <Row gutter={16}>
        <Col span={24}>
          <Section>
              <Stepsa />
          </Section>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Section>
            <Stepsb />
          </Section>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Section>
            <Stepsc />
          </Section>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Section>
            <Stepsd />
          </Section>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Section>
            <Stepse />
          </Section>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Section>
            <Stepsf />
          </Section>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Section>
            <Stepsg />
          </Section>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Section>
            <Stepsh />
          </Section>
        </Col>
      </Row>
    </Fragment>
  );
}

export default stepsIndex;
