// Atoms
import AButton from '@sharedAtoms/button/AButton.vue'
import ACard from '@sharedAtoms/card/ACard.vue'
import ALink from '@sharedAtoms/link/ALink.vue'
import ALine from '@sharedAtoms/line/ALine.vue'
import AHeader from '@sharedAtoms/header/AHeader.vue'
import AIcon from '@sharedAtoms/icon/AIcon.vue'
import AGeneralNotification from '@sharedAtoms/notification/AGeneralNotification.vue'
import ATextField from '@sharedAtoms/input/ATextField.vue'

const atoms = [AButton, ACard, ALink, ALine, AHeader, AIcon, AGeneralNotification, ATextField]

// Molecules
import MCardList from '@sharedMolecules/cards/MCardList.vue'

const molecules = [MCardList]

// Vee-validate
import { Field, Form, ErrorMessage } from 'vee-validate'

const veeValidateComponents = [Field, Form, ErrorMessage]
// Plugin declaration
export default {
  install: (app: any) => {
    installComponents(app, atoms)
    installComponents(app, molecules)
    installComponents(app, veeValidateComponents)
  }
}

const installComponents = (app: any, componentList: any) => {
  for (const newComponent of componentList) {
    app.component(newComponent.__name, newComponent)
  }
}
