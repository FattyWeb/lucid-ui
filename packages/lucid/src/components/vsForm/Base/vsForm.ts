import {Vue} from "vue-class-component";
import {h as createVNode} from "vue";
import VsFormItem from "../Item/vsFormItem";
import {Prop} from "vue-property-decorator";
import Schema from 'async-validator';
import {ValidateFieldsError, Values} from "async-validator/dist-types/interface";

export default class VsForm extends Vue {
  @Prop()
  rules

  formItems: { [key in string]: VsFormItem } = {}

  setItem(item) {
    this.formItems[item.prop] = item
  }

  validate(handleErrors) {

    const validator: Schema = new Schema(this.rules);
    const fields = {}

    // 搜集所有需要校验的表单域
    for (let formItemsKey in this.formItems) {
      fields[formItemsKey] = this.formItems[formItemsKey].getModelValue()
    }

    validator.validate(fields, (errors, fields: ValidateFieldsError | Values) => {
      if (errors) {
        for (let formItemsKey in this.formItems) {
          if (fields[formItemsKey]) {
            this.formItems[formItemsKey].validateError(fields[formItemsKey][0].message)
          } else {
            this.formItems[formItemsKey].validatePass()
          }
        }
        return handleErrors(false, errors, fields);
      }

      for (let formItemsKey in this.formItems) {
        this.formItems[formItemsKey].validatePass()
      }
      return handleErrors(true);
    });
  }

  mounted() {
  }

  render() {
    return createVNode('form',
      {},
      this.$slots.default && this.$slots.default());
  }
}
