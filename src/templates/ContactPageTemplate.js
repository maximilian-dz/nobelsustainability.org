import React from 'react'
import Layout from '../components/layout'
import LeafletMap from '../components/map'

const ContactPageTemplate = ({ title, officeOne, officeTwo, emails }) => {
  return (
    <Layout>
      <h1 className="text-center padding-top-50px padding-bottom-50px">
        {title}
      </h1>
      <section className="bg-sand">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-lg-2 offset-lg-2">
              <h3 className="padding-bottom-20px padding-bottom-md-none">
                Offices
              </h3>
            </div>
            <div className="col-md-4">
              <h4>{officeOne.name}</h4>
              <p>
                {officeOne.street}
                <span className="d-block">
                  {officeOne.zip} {officeOne.city}, {officeOne.country}
                </span>
              </p>
              {typeof window !== 'undefined' && (
                <LeafletMap
                  position={[47.3642217, 8.5336899]}
                  zoom={15}
                  markerText={'Hello, this is a marker'}
                />
              )}
            </div>
            <div className="col-md-4">
              <h4>{officeTwo.name}</h4>
              <p>
                {officeTwo.street}
                <span className="d-block">
                  {officeTwo.zip} {officeTwo.city}, {officeTwo.country}
                </span>
              </p>
              {typeof window !== 'undefined' && (
                <LeafletMap
                  position={[59.332729, 18.085139]}
                  zoom={15}
                  markerText={'Hello, this is a marker'}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row padding-top-40px">
            <div className="col-md-3 col-lg-2 offset-lg-2">
              <h3 className="padding-bottom-20px padding-bottom-md-none">
                Email
              </h3>
            </div>
            {emails &&
              emails.map((user, index) => {
                return (
                  <div key={index} className="col-md-4">
                    <h4>{user.name}</h4>
                    <p>
                      <a href={`mailto:${user.email}`}>{user.email}</a>
                    </p>
                  </div>
                )
              })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPageTemplate
