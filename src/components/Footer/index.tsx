import {DefaultFooter} from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear}`}
      links={[
        {
          key: '鱼智能 BI',
          title: '鱼智能 BI',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
