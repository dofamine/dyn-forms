export interface Option {
  key?: string | number;
  value: string | number;
}

export interface FormFieldJSON {
  type: string;
  id: string;
  seqNo: number;
  groupName: string;
  value?: string;
  title?: string;
  options?: Option[];
}

export interface FormModel {
  [key: string]: FormFieldJSON[];
}
