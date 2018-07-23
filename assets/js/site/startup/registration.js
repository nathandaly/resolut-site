import ReactOnRails from 'react-on-rails'
import SiteApp from './SiteApp'
import configureStore from '../store/SiteStore'

const siteStore = configureStore

ReactOnRails.registerStore({ siteStore })
ReactOnRails.register({ SiteApp })
