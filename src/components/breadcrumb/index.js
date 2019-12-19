import React, { Fragment } from 'react';
import Section from '../section';
import {Row, Col} from 'antd';
import Breadcrumba from './breadcrumba';
import Breadcrumbb from './breadcrumbb';
import Breadcrumbc from './breadcrumbc';

const BreadcrumbIndex = () => {
  return (
    <Fragment>
      <Row gutter={16}>
          <Col span={8}>
            <Section>
                <Breadcrumba />
            </Section>
          </Col>
          <Col span={8}>
            <Section>
                <Breadcrumbb />
            </Section>
          </Col>
          <Col span={8}>
            <Section>
                <Breadcrumbc />
            </Section>
          </Col>
      </Row>
    </Fragment>
  );
}

export default BreadcrumbIndex;
