export enum tags {
  elInput = 'el-input',
  elSelect = 'el-select',
}

export class FiledConfig {
  label: string;
  labelWidth: number;
  showLabel: boolean;
  changeTag: boolean;
  tag: tags;
  tagIcon: string;
  required: boolean;
  layout: string;
  span: number;
  document: string;
  regList: [];
  formId: number;
  renderKey: number;
  constructor() {
    this.label = '';
    this.labelWidth = null;
    this.showLabel = true;
    this.changeTag = true;
    this.tag = tags.elInput;
    this.tagIcon = 'input';
    this.required = false;
    this.layout = 'colFormItem';
    this.span = 24;
    this.document = '';
    this.regList = [];
    this.formId = 1001;
    this.renderKey = Date.now().valueOf();
  }
}
