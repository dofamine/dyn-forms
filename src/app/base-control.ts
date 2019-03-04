export class BaseControl<T> {
  type: string;
  value: T;
  id: string;
  label: string;
  seqNo: number;
  name: string;
  groupName: string;

  constructor(options: {
    value?: T,
    id?: string,
    label?: string,
    seqNo?: number,
  } = {}) {
    this.value = options.value;
    this.id = options.id || '';
    this.label = options.label || '';
    this.seqNo = options.seqNo === undefined ? 1 : options.seqNo;
  }
}
