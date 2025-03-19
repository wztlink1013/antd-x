import { Sender } from '@ant-design/x';
import { App, Flex } from 'antd';
import React, { useState } from 'react';

const Demo: React.FC = () => {
  const [value, setValue] = useState<string>('Hello? this is X!');
  const [loading, setLoading] = useState<boolean>(false);

  const { message } = App.useApp();

  // Mock send message
  React.useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        message.success('Send message successfully!');
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [loading]);

  return (
    <Flex vertical gap="middle">
      <Sender.Grid
        loading={loading}
        value={value}
        onChange={(v) => {
          setValue(v);
        }}
        onSubmit={() => {
          setValue('');
          setLoading(true);
          message.info('Send message!');
        }}
        onCancel={() => {
          setLoading(false);
          message.error('Cancel sending!');
        }}
      />
    </Flex>
  );
};

export default () => (
  <App>
    <Demo />
  </App>
);
