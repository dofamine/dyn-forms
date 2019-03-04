export class BaseControl<T> {
  value: T;
  id: string;
  label: string;
  seqNo: number;
  type: string;

  constructor(options: {
    value?: T,
    id?: string,
    label?: string,
    seqNo?: number,
    type?: string
  } = {}) {
    this.value = options.value;
    this.id = options.id || '';
    this.label = options.label || '';
    this.seqNo = options.seqNo === undefined ? 1 : options.seqNo;
    this.type = options.type || 'text';
  }
}
