export interface CreateBranchParams {
  name: string;
  physical_address: string;
  number_of_employees: number;
  status: number;
  company_id: number;
}

export interface Branch {
  name: string;
  physical_address: string;
  number_of_employees: number;
  status: number;
  company_id: number;
  created_at: Date;
}
