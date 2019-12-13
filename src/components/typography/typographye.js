import React from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

const typographye = () => {
  return (
    <div>
        <Paragraph ellipsis>
        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
        a design language for background applications, is refined by Ant UED Team. Ant Design, a
        design language for background applications, is refined by Ant UED Team. Ant Design, a design
        language for background applications, is refined by Ant UED Team. Ant Design, a design
        language for background applications, is refined by Ant UED Team.
      </Paragraph>

      <Paragraph ellipsis={{ rows: 1, expandable: true }}>
        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
        a design language for background applications, is refined by Ant UED Team. Ant Design, a
        design language for background applications, is refined by Ant UED Team. Ant Design, a design
        language for background applications, is refined by Ant UED Team. Ant Design, a design
        language for background applications, is refined by Ant UED Team.
      </Paragraph>
    </div>
  );
}

export default typographye;
