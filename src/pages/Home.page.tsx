import { Box, Paper, SimpleGrid, Text } from '@mantine/core';
import { CUSTOM_CHARTS, DASHBOARD_ITEMS } from '@/data/dashboard-items';
import ChartRenderer from '@/components/ChartRenderer';
import Chart from '@/components/Chart';

export function HomePage() {
  return (
    <Box mih={'100vh'} bg="gray.2" p={'md'}>
      <Paper w={'100%'} p={'sm'} mb={'md'}>
        <Text fw={'bold'} truncate="end">
          Below are the charts from existing tutorials
        </Text>
      </Paper>
      <SimpleGrid cols={2}>
        {DASHBOARD_ITEMS.map((item) => {
          return (
            <Chart title={item.name} key={item.id}>
              <ChartRenderer vizState={item.vizState} />
            </Chart>
          );
        })}
      </SimpleGrid>
      <Paper w={'100%'} p={'sm'} my={'md'}>
        <Text fw={'bold'} truncate="end">
          Below are the charts from existing tutorials
        </Text>
      </Paper>
      <SimpleGrid cols={1}>
        {CUSTOM_CHARTS.map((item) => {
          return (
            <Chart title={item.name} key={item.id}>
              <ChartRenderer vizState={item.vizState} />
            </Chart>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
