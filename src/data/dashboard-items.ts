export const DASHBOARD_ITEMS = [
  {
    id: 0,
    name: 'Orders last 14 days',
    vizState: {
      query: {
        measures: ['orders.count'],
        timeDimensions: [
          {
            dimension: 'orders.created_at',
            granularity: 'day',
            // dateRange: "last 14 days",
          },
        ],
        filters: [],
      },
      chartType: 'line',
    },
  },
  {
    id: 1,
    name: 'Orders Status by Customers City',
    vizState: {
      query: {
        measures: ['orders.count'],
        dimensions: ['users.city', 'orders.status'],
        timeDimensions: [
          {
            dimension: 'orders.created_at',
            // dateRange: "last year",
          },
        ],
      },
      chartType: 'bar',
      pivotConfig: {
        x: ['users.city'],
        y: ['orders.status', 'measures'],
      },
    },
  },
  {
    id: 3,
    name: 'Orders by Product Categories Over Time',
    vizState: {
      query: {
        measures: ['orders.count'],
        timeDimensions: [
          {
            dimension: 'orders.created_at',
            granularity: 'month',
            // dateRange: "last year",
          },
        ],
        dimensions: ['product_categories.name'],
      },
      chartType: 'area',
    },
  },
  {
    id: 3,
    name: 'Orders by Price Range',
    vizState: {
      query: {
        measures: ['orders.count'],
        filters: [
          {
            dimension: 'orders.price',
            operator: 'set',
          },
        ],
        dimensions: ['orders.priceRange'],
      },
      chartType: 'pie',
    },
  },
];

export const CUSTOM_CHARTS = [
  {
    id: 4,
    name: 'Orders by gender across product categories',
    vizState: {
      query: {
        measures: ['orders.count'],
        timeDimensions: [
          {
            dimension: 'orders.created_at',
          },
        ],
        order: {
          'orders.count': 'desc',
        },
        dimensions: ['users.gender', 'product_categories.name'],
      },
      chartType: 'bar',
      pivotConfig: {
        x: ['product_categories.name'],
        y: ['users.gender'],
        fillMissingDates: true,
        joinDateRange: false,
      },
    },
  },
];
