import React, {Fragment} from 'react';
import Section from '../section';
import {Row, Col} from 'antd';
import DatePickera from './datePickera';
import DatePickerb from './datePickerb';
import DatePickerc from './datePickerc';
import DatePickerd from './datePickerd';
import DatePickere from './datePickere';

const datePickerIndex = () => {
  return (
    <Fragment>
      <Row gutter={16}>
        <Col span={8}>
          <Section>
              <DatePickera />
          </Section>
        </Col>
        <Col span={8}>
          <Section>
              <DatePickerb />
          </Section>
        </Col>
        <Col span={8}>
          <Section>
              <DatePickerc />
          </Section>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Section>
              <DatePickerd />
          </Section>
        </Col>
        <Col span={8}>
          <Section>
              <DatePickere />
          </Section>
        </Col>
      </Row>
    </Fragment>
  );
}

export default datePickerIndex;
