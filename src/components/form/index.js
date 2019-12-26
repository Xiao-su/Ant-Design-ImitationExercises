import React, {Fragment} from 'react';
import Section from '../section';
import {Row, Col} from 'antd';
import Forma from './forma';
import Formb from './formb';
import Formc from './formc';
import Formd from './formd';
import Forme from './forme';
import Formf from './formf';
import Formg from './formg';
import Formh from './formh';

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
      <Row gutter={16}>
        <Col span={24}>
          <Section>
              <Formd />
          </Section>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Section>
              <Forme />
          </Section>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Section>
              <Formf />
          </Section>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Section>
              <Formg />
          </Section>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Section>
              <Formh />
          </Section>
        </Col>
      </Row>
    </Fragment>
  );
}

export default formIndex;
