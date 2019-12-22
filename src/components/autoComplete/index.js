import React, {Fragment} from 'react';
import Section from '../section';
import {Row, Col} from 'antd';
import AutoCompletea from './autoCompletea'
import AutoCompleteb from './autoCompleteb'
import AutoCompletec from './autoCompletec'
import AutoCompleted from './autoCompleted'
import AutoCompletee from './autoCompletee'


const autoCompleteIndex = () => {
  return (
    <Fragment>
      <Row gutter={16}>
        <Col span={8}>
          <Section>
              <AutoCompletea />
          </Section>
        </Col>
        <Col span={8}>
          <Section>
            <AutoCompleteb />
          </Section>
        </Col>
        <Col span={8}>
          <Section>
            <AutoCompletec />
          </Section>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Section>
              <AutoCompleted />
          </Section>
        </Col>
        <Col span={8}>
          <Section>
            <AutoCompletee />
          </Section>
        </Col>
      </Row>
      </Fragment>
  );
}

export default autoCompleteIndex;
