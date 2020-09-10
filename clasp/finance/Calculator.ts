class Calculator {
  public total_cost_of_records_to_remove: number;
  public percent_of_removed_to_total: number;
  constructor(records_to_remove: Array<FinanceRecord>, total_bill: number) {
    this.total_cost_of_records_to_remove = ((records: Array<FinanceRecord>) =>
      records
        .map((record: FinanceRecord) => record.cost)
        .reduce((x, y) => x + y, 0))(records_to_remove);
    this.percent_of_removed_to_total = ((
      total_cost_of_records_to_remove: number,
      total_bill: number
    ) => total_cost_of_records_to_remove / total_bill)(
      this.total_cost_of_records_to_remove,
      total_bill
    );
  }
}
