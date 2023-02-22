import { ApiProperty } from '@nestjs/swagger';

export enum tags {
  elInput = 'el-input',
  elSelect = 'el-select',
}

export class FiledConfig {
  @ApiProperty({ description: '标题', default: '' })
  label: string;
  @ApiProperty({ description: '标签宽度', default: null })
  labelWidth: number;
  @ApiProperty({ description: '显示标签', default: true })
  showLabel: boolean;
  @ApiProperty({ description: '显示标签', default: true })
  changeTag: boolean;
  @ApiProperty({ description: '组件类型', default: tags.elInput })
  tag: tags;
  @ApiProperty({ description: '组件类型', default: 'input' })
  tagIcon: string;
  @ApiProperty({ description: '是否必填', default: false })
  required: boolean;
  @ApiProperty({ description: '布局', default: 'colFormItem' })
  layout: string;
  @ApiProperty({ description: '表单栅格', default: 24 })
  span: number;
  @ApiProperty({
    description: '文档地址',
    default: 'https://element.eleme.cn/#/zh-CN/component/input',
  })
  document: string;
  @ApiProperty({ description: '正则列表', default: [] })
  regList: [];
  @ApiProperty({ description: 'formId', default: 1001 })
  formId: number;
  @ApiProperty({ description: 'renderKey', default: Date.now().valueOf() })
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
