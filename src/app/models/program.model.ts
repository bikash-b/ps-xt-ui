export interface Program{
  mission_name: string;
  flight_number: number;
  mission_id: number[];
  launch_year: number;
  launch_success: boolean;
  links: Links;
  land_success: boolean;
}

export interface Links{
  mission_patch: string;
}
