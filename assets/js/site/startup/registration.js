import ReactOnRails from 'react-on-rails'
import SiteApp from './SiteApp'
import configureStore from '../store/SiteStore'

const recipesStore = configureStore

ReactOnRails.registerStore({ recipesStore })
ReactOnRails.register({ SiteApp })
