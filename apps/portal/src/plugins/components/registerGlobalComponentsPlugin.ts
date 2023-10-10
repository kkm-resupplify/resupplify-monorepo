// Atoms
import AButton from '@sharedAtoms/button/AButton.vue'
import ACard from '@sharedAtoms/card/ACard.vue'
import ALink from '@sharedAtoms/link/ALink.vue'
import ALine from '@sharedAtoms/line/ALine.vue'
import AHeader from '@sharedAtoms/header/AHeader.vue'
import AIcon from '@sharedAtoms/icon/AIcon.vue'
import AGeneralNotification from '@sharedAtoms/notification/AGeneralNotification.vue'
import AInputErrorList from '@sharedAtoms/input/AInputErrorList.vue'

const atoms = [AButton, ACard, ALink, ALine, AHeader, AIcon, AGeneralNotification, AInputErrorList]

// Molecules
import MCardList from '@sharedMolecules/cards/MCardList.vue'
import MTextField from '@sharedMolecules/input/MTextField.vue'
import MStepper from '@sharedMolecules/stepper/MStepper.vue'
import MStepperStepContent from '@sharedMolecules/stepper/items/MStepperStepContent.vue'
import MSelect from '@sharedMolecules/select/MSelect.vue'

const molecules = [MCardList, MTextField, MStepper, MStepperStepContent, MSelect]

// Vee-validate
import { Field, Form, ErrorMessage } from 'vee-validate'

const veeValidateComponents = [Field, Form, ErrorMessage]

// Plugin declaration
export default {
  install: (app: any) => {
    installComponents(app, atoms)
    installComponents(app, molecules)
    installVeeValidateComponents(app, veeValidateComponents)
  }
}

const installComponents = (app: any, componentList: any) => {
  for (const newComponent of componentList) {
    app.component(newComponent.__name ?? newComponent.name, newComponent)
  }
}

const installVeeValidateComponents = (app: any, componentList: any) => {
  for (const newComponent of componentList) {
    app.component(`V${newComponent.name}`, newComponent)
  }
}
