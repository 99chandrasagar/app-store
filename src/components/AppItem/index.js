// Write your code here
import './index.css'

const AppItem = props => {
  const {appName, imageUrl} = props
  return (
    <li className="app-item1">
      <img src={imageUrl} alt="{image}" className="app-image1" />
      <p className="app-name-para1">{appName}</p>
    </li>
  )
}

export default AppItem
