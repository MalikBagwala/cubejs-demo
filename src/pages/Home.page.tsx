import { SimpleGrid } from '@mantine/core';
import { DASHBOARD_ITEMS } from '@/data/dashboard-items';
import ChartRenderer from '@/components/ChartRenderer';

export function HomePage() {
  return (
    <SimpleGrid cols={2}>
      {DASHBOARD_ITEMS.map((item) => {
        return <ChartRenderer vizState={item.vizState} />;
      })}
    </SimpleGrid>
  );
}
