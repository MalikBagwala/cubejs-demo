cube(`orders`, {
  sql_table: `public.orders`,

  data_source: `default`,

  joins: {
    users: {
      sql: `${CUBE}.user_id = ${users}.id`,
      relationship: `many_to_one`,
    },

    products: {
      sql: `${CUBE}.product_id = ${products}.id`,
      relationship: `many_to_one`,
    },
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true,
    },

    status: {
      sql: `status`,
      type: `string`,
    },

    created_at: {
      sql: `created_at`,
      type: `time`,
    },

    completed_at: {
      sql: `completed_at`,
      type: `time`,
    },

    price: {
      sql: `${line_items.price}`,
      subQuery: true,
      type: `number`,
      format: `currency`,
    },

    priceRange: {
      type: `string`,
      case: {
        when: [
          { sql: `${price} < 101`, label: `$0 - $100` },
          { sql: `${price} < 201`, label: `$100 - $200` },
        ],
        else: {
          label: `$200+`,
        },
      },
    },
  },

  measures: {
    count: {
      type: `count`,
    },

    number: {
      sql: `number`,
      type: `sum`,
    },
  },

  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
});
