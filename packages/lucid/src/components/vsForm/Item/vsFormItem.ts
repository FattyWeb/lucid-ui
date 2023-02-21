import {Vue} from "vue-class-component";
import {h as createVNode} from "vue";
import VsForm from "../Base/vsForm";
import FormComponent from "../../../mixins/Form";
import {Prop} from "vue-property-decorator";

export default class VsFormItem extends Vue {

  @Prop()
  prop: string

  formComponent: FormComponent

  depend(formComponent){
    this.formComponent = formComponent
  }

  getModelValue(){
    return (this.formComponent as any).modelValue;
  }

  mounted(){
    (this.$parent as VsForm).setItem(this);
  }

  validateError(message){
    this.formComponent.setFormMessage('Danger', message);
    this.formComponent.setFormState('danger');
  }

  validatePass(){
    this.formComponent.clearFormMessage()
    this.formComponent.setFormState('success');
  }

  render() {
    return createVNode('div', {}, this.$slots.default && this.$slots.default())
  }
}
