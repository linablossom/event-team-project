import './sass/main.scss';

import uiService from './js/uiService';
import initFilters from './js/filters';

import cardsEvents from './tpl/card_events.hbs';
// import createModalMarkup from './tpl/card-modal.hbs';
import './js/modal.js';

initFilters();
uiService.initialLoading();
