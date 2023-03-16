import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {imageUrl, name, role} = userDetails

  return (
    <li className="list-item-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="name">{name}</h1>
        <p className="role">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
