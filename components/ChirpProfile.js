import React from 'react'

class ChirpProfile extends React.Component {
  constructor(props) {
   super(props)
   this.state = {
     file: ''
   }
 }
 componentDidMount(){
   fetch('https://polar-sea-81260.herokuapp.com/user/?api_token=' + sessionStorage.getItem('chirply'))
   .then(response => response.json())
   .then((response) => { this.setState ({file: 'https://polar-sea-81260.herokuapp.com' + response.user.file})
 })
}

//avatar_id



  render() {
//     var users = this.state.users.map((user, i) => {
//             if (user.avatar === null) {
//                 user.avatar = 'http://robohash.org/' + i
//             } else {
//                 user.avatar = ('https://immense-harbor-69502.herokuapp.com' + user.avatar)
//             }
// })
    return <div className="col-sm-3">
      <div className="panel panel-default">
        <div className="panel-body">

          <img src="img/logo.png" alt="profile pic" />
          <div className="row">
            <div className="col-sm-12 text-center">
              <h5>{response.username}</h5>
              <p>{response.email}</p>
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 text-left text-muted">
              Following
            </div>
            <div className="col-xs-6 text-right text-muted">
              Followers
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default ChirpProfile
