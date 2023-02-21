import {Vue} from "vue-class-component";

export default class FormComponent extends Vue  {
  formSuccess: string = null;

  formDanger: string = null;

  formWarn: string = null;

  formState: string = null;

  setFormState(formState){
    this.formState = formState;
  }

  setFormMessage(formState, message){
    this['form' + formState] = message;
  }

  clearFormState(){
    this.formState = null;
  }

  clearFormMessage(){
    this.formWarn = null;
    this.formDanger = null;
    this.formSuccess = null
  }

  mounted(){
    if((this.$parent as any).depend) {
      (this.$parent as any).depend(this)
    }
  }
}
