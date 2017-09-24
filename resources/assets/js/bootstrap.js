import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import lodash from 'lodash';
import axios from 'axios';

UIkit.use(Icons);

window._ = lodash;
window.axios = axios;

window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
