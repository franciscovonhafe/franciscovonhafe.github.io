// Research topics used for filters and colour markers.
export const topics = {
  digital: 'Digital health',
  markets: 'Markets & incentives',
  evaluation: 'Economic evaluation',
  delivery: 'Healthcare delivery',
  variation: 'Healthcare variation',
  public: 'Health outcomes & public health',
} as const;
export type Topic = keyof typeof topics;
