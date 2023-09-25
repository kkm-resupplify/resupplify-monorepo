// Atoms
import AButton from '@sharedAtoms/button/AButton.vue'
import ACard from '@sharedAtoms/card/ACard.vue'
import ALink from '@sharedAtoms/link/ALink.vue'
import ALine from '@sharedAtoms/line/ALine.vue'
import AHeader from '@sharedAtoms/header/AHeader.vue'
import AIcon from '@sharedAtoms/icon/AIcon.vue'
import AGeneralNotification from '@sharedAtoms/notification/AGeneralNotification.vue'

const atoms = [AButton, ACard, ALink, ALine, AHeader, AIcon, AGeneralNotification]

// Molecules
import MCardList from '@sharedMolecules/cards/MCardList.vue'

const molecules = [MCardList]

// Plugin declaration
export default {
  install: (app: any) => {
    installComponents(app, atoms)
    installComponents(app, molecules)
  }
}

const installComponents = (app: any, componentList: any) => {
  for (const newComponent of componentList) {
    app.component(newComponent.__name, newComponent)
  }
}
