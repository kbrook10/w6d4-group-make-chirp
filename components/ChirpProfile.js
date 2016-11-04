import React from 'react'

class ChirpProfile extends React.Component {
  constructor(props) {
    super(props)
    this.profileData = this.profileData.bind(this)
    this.state= {
      username:'',
      email:''
    }
  }

  profileData() {
    var data = new FormData()
    data.append('username', this.state.username)
    data.append('email', this.state.email)

    fetch('https://polar-sea-81260.herokuapp.com', {
      method: 'Get',
      body: data
    })
    .then(response => response.json())
    .then(function(response){
        console.log(response)
    })

  }


  render() {
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
