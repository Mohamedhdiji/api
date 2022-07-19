import React from 'react'
import { Card , Button} from 'react-bootstrap'

const UserCard = ({user}) => {
  return (
    <div>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          {user.email}
          <br />
          city:{user.city}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard