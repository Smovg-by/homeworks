
import { dark } from "@material-ui/core/styles/createPalette"
import { useSelector } from "react-redux"
import { AppStoreType } from "../../h10/bll/store"
import HW12 from "../../h12/HW12"
import { HW13 } from "../../h13/HW13"

function JuniorPlus() {

  let theme = useSelector<AppStoreType>(state => state.switchTheme.currentTheme)

  return (
    <div>
      <span>*** JuniorPlus page ***</span>
      {/* @ts-ignore */}
      <HW12 theme={theme} />
      <HW13 />
    </div>
  )
}

export default JuniorPlus

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз
