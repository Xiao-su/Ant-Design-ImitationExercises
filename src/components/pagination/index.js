import React, {Fragment} from 'react';
import Section from '../section';
import {Row, Col} from 'antd';
import Paginationa from "./paginationa";
import Paginationb from "./paginationb";
import Paginationc from "./paginationc";
import Paginationd from "./paginationd";

const paginationIndex = () => {
  return (
    <Fragment>
      <Row gutter={16}>
        <Col span={8}>
          <Section>
              <Paginationa />
          </Section>
        </Col>
        <Col span={8}>
          <Section>
            <Paginationb />
          </Section>
        </Col>
        <Col span={8}>
          <Section>
            <Paginationc />
          </Section>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Section>
              <Paginationd />
          </Section>
        </Col>
      </Row>
    </Fragment>
  );
}

export default paginationIndex;
