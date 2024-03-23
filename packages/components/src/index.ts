/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-unresolved */
import 'virtual:uno.css'
import './css/index.css'
import { makeInstaller } from './utils/install'
import installs from './installs'

export * from './components'

export default makeInstaller([...installs])
