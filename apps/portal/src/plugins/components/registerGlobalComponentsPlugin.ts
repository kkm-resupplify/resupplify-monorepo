// Atoms
import AButton from '@sharedAtoms/button/AButton.vue'
import ACard from '@sharedAtoms/card/ACard.vue'
import ALink from '@sharedAtoms/link/ALink.vue'
import ALine from '@sharedAtoms/line/ALine.vue'
import AHeader from '@sharedAtoms/header/AHeader.vue'
import AIcon from '@sharedAtoms/icon/AIcon.vue'
import AGeneralNotification from '@sharedAtoms/notification/AGeneralNotification.vue'
import AInputErrorList from '@sharedAtoms/input/AInputErrorList.vue'
import ASelect from '@sharedAtoms/select/ASelect.vue'

const atoms = [
  AButton,
  ACard,
  ALink,
  ALine,
  AHeader,
  AIcon,
  AGeneralNotification,
  AInputErrorList,
  ASelect
]

// Molecules
import MCardList from '@sharedMolecules/cards/MCardList.vue'
import MTextField from '@sharedMolecules/input/MTextField.vue'
import MTextArea from '@sharedMolecules/input/MTextArea.vue'
import MStepper from '@sharedMolecules/stepper/MStepper.vue'
import MStepperStepContent from '@sharedMolecules/stepper/items/MStepperStepContent.vue'
import MDropdown from '@sharedMolecules/dropdown/MDropdown.vue'

const molecules = [MCardList, MTextField, MTextArea, MStepper, MStepperStepContent, MDropdown]

// Organisms
import OForm from '@sharedOrganisms/form/OForm.vue'

const organisms = [OForm]

// Vee-validate
import { Field, Form, ErrorMessage } from 'vee-validate'

const veeValidateComponents = [Field, Form, ErrorMessage]

// Plugin declaration
export default {
  install: (app: any) => {
    installComponents(app, atoms)
    installComponents(app, molecules)
    installComponents(app, organisms)
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
