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
import ATitle from '@sharedAtoms/title/ATitle.vue'
import AImageInput from '@sharedAtoms/input/AImageInput.vue'
import ADropdown from '@sharedAtoms/dropdown/ADropdown.vue'
import AImage from '@sharedAtoms/image/AImage.vue'
import AExpansionPanel from '@sharedAtoms/expansionPanel/AExpansionPanel.vue'
import AStatusIndicator from '@sharedAtoms/indicator/AStatusIndicator.vue'
import AList from '@sharedAtoms/list/AList.vue'
import AListItemWrapper from '@sharedAtoms/list/AListItemWrapper.vue'
import AListItemTitleSection from '@sharedAtoms/list/AListItemTitleSection.vue'
import AListNoResults from '@sharedAtoms/list/AListNoResults.vue'
import APanel from '@sharedAtoms/panel/APanel.vue'
import APanelSection from '@sharedAtoms/panel/APanelSection.vue'
import ACurrency from '@sharedAtoms/currency/ACurrency.vue'

const atoms = [
  AButton,
  ACard,
  ALink,
  ALine,
  AHeader,
  AIcon,
  AGeneralNotification,
  AInputErrorList,
  ASelect,
  ATitle,
  AImageInput,
  ADropdown,
  AImage,
  AExpansionPanel,
  AStatusIndicator,
  AList,
  AListItemWrapper,
  AListItemTitleSection,
  AListNoResults,
  APanel,
  APanelSection,
  ACurrency
]

// Molecules
import MCardList from '@sharedMolecules/cards/MCardList.vue'
import MTextField from '@sharedMolecules/input/MTextField.vue'
import MTextArea from '@sharedMolecules/input/MTextArea.vue'
import MFileInput from '@sharedMolecules/input/MFileInput.vue'
import MStepper from '@sharedMolecules/stepper/MStepper.vue'
import MStepperStepContent from '@sharedMolecules/stepper/items/MStepperStepContent.vue'
import MSelect from '@sharedMolecules/select/MSelect.vue'
import MIcon from '@sharedMolecules/icon/MIcon.vue'
import MSimpleTabs from '@sharedMolecules/tab/MSimpleTabs.vue'
import MNavigationTabs from '@sharedMolecules/tab/MNavigationTabs.vue'
import MNavigationTabsItem from '@sharedMolecules/tab/MNavigationTabsItem.vue'
import MTile from '@sharedMolecules/tile/MTile.vue'
import MTileList from '@sharedMolecules/tile/MTileList.vue'
import MDialog from '@sharedMolecules/dialog/MDialog.vue'
import MAlert from '@sharedMolecules/alert/MAlert.vue'

const molecules = [
  MCardList,
  MTextField,
  MTextArea,
  MFileInput,
  MStepper,
  MStepperStepContent,
  MSelect,
  MIcon,
  MSimpleTabs,
  MNavigationTabs,
  MNavigationTabsItem,
  MTile,
  MTileList,
  MDialog,
  MAlert
]

// Organisms
import OForm from '@sharedOrganisms/form/OForm.vue'
import OSearchBar from '@sharedOrganisms/searchbar/OSearchBar.vue'
import OConfirmDialog from '@sharedOrganisms/confirmdialog/OConfirmDialog.vue'
import OPagination from '@sharedOrganisms/pagination/OPagination.vue'

const organisms = [OForm, OSearchBar, OConfirmDialog, OPagination]

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
