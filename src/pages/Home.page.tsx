import { Box, Paper, SimpleGrid } from '@mantine/core';
import { DASHBOARD_ITEMS } from '@/data/dashboard-items';
import ChartRenderer from '@/components/ChartRenderer';

export function HomePage() {
  return (
    <Box h={'100vh'} bg="gray.2" p={'md'}>
      <SimpleGrid cols={2}>
        {DASHBOARD_ITEMS.map((item) => {
          return (
            <Paper>
              <ChartRenderer vizState={item.vizState} />
            </Paper>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
