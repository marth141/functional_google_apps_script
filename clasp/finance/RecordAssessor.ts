class RecordsAssessor {
  public records_to_remove: Array<FinanceRecord>;
  constructor(records: Array<FinanceRecord>) {
    this.records_to_remove = ((records: Array<FinanceRecord>) =>
      records
        .map((record: FinanceRecord) => {
          switch (record.to_keep) {
            case false:
              return record;
            default:
              break;
          }
        })
        .filter((record: FinanceRecord) => record !== undefined))(records);
  }
}
