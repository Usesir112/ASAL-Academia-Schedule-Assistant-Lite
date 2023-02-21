import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Brands
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

// Regular
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(far)

// Solid
import { fas } from "@fortawesome/free-solid-svg-icons"
library.add(fas)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
