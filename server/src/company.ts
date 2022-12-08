export interface CreateCompanyParams {
  name: string;
  physical_address: string;
  max_loan_percent: number;
  number_of_employees: number;
  loan_period: string;
  approves_loan: boolean;
  status: number;
  profit_share_percent: number;
}
