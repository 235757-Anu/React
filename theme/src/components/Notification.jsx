import React from 'react'

const Notification = ({ status }) => {
  return (
    <div className="alert alert-success" role="alert">
      <h4 className="alert-heading">User created</h4>
      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
      <hr />
      <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>
  )
}

export default Notification
