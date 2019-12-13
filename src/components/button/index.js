import React, { Fragment } from 'react';
import Section from '../section';
import {Row, Col} from 'antd';
import Buttona from './buttona';
import Buttonb from './buttonb';
import Buttonc from './buttonc';
import Buttond from './buttond';
import Buttone from './buttone';
import Buttonf from './buttonf';
import Buttong from './buttong';

const ButtonIndex = () => {
  return (
    <Fragment>
      <Row gutter={16}>
        <Col span={8}>
          <Section>
              <Buttona />
          </Section>
        </Col>
        <Col span={8}>
          <Section>
            <Buttonb />
          </Section>
        </Col>
        <Col span={8}>
          <Section>
              <Buttonc />
          </Section>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
            <Section>
              <Buttond />
          </Section>
        </Col>
        <Col span={8}>
          <Section>
              <Buttone />
          </Section>
        </Col>
        <Col span={8}>
          <Section>
              <Buttonf />
          </Section>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Section>
                <Buttong />
          </Section>
        </Col>
      </Row>
    </Fragment>
  );
}

export default ButtonIndex;
