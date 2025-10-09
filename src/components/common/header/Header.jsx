import Img from '../../../core/image/img'
import HeaderButtons from './headerButtons/HeaderButtons'
import HeaderIcons from './headerIcons/HeaderIcons'

const Header = () => {
  return (
    <div class="flex , w-full , h-auto">
      <Img class="w-<35>"/>
      <HeaderButtons class="w-<35>"/>
      <HeaderIcons class="w-<30>"/>
    </div>
  )
}

export default Header
