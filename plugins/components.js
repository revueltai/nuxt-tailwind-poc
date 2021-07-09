import Vue from 'vue'

import CBadge from '~/components/core/CBadge.vue'
import CButton from '~/components/core/CButton.vue'
import CImage from '~/components/core/CImage.vue'
import CIcon from '~/components/core/CIcon.vue'
import CSection from '~/components/core/CSection.vue'
import CColumn from '~/components/core/CColumn.vue'
import CMarkdown from '~/components/core/CMarkdown.vue'
import CHeading from '~/components/core/CHeading.vue'
import CCard from '~/components/core/CCard.vue'
import CGrid from '~/components/core/CGrid.vue'

if (!Vue.$componentsRegistered) {
  const components = {
    'c-section': CSection,
    'c-grid': CGrid,
    'c-column': CColumn,
    'c-markdown': CMarkdown,
    'c-heading': CHeading,
    'c-image': CImage,
    'c-badge': CBadge,
    'c-button': CButton,
    'c-icon': CIcon,
    'c-card': CCard
  }

  Vue.mixin({ components })
  Vue.$componentsRegistered = true
}
