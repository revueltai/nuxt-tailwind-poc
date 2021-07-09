import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart, faPaperPlane, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

// Solid Icons imports
library.add(faHeart)
library.add(faPaperPlane)
library.add(faNewspaper)

// Brand Icons imports
library.add(faLinkedin)
library.add(faFacebookSquare)
library.add(faInstagram)

if (!Vue.$iconsRegistered) {
  const components = {
    'font-awesome-icon': FontAwesomeIcon
  }

  Vue.mixin({ components })
  Vue.$iconsRegistered = true
}
