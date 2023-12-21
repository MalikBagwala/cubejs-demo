import { Paper, Text } from '@mantine/core';

const Chart = ({ children, title }: { children?: React.ReactNode; title: string }) => {
  return (
    <Paper p={'sm'}>
      <Text
        mb={'sm'}
        size="xl"
        fw={900}
        variant="gradient"
        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
      >
        {title}
      </Text>
      {children}
    </Paper>
  );
};

export default Chart;
