export interface Filter{
  launch_year?: number;
  launch_success?: boolean;
  land_success?: boolean;
  limit: number;
}

export interface FilterOption{
  type: string;
  name: string;
  items: FilterValue[];
}

export interface FilterValue{
  key: string;
  value: string;
  type?: string;
}
