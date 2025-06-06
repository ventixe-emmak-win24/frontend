import React from 'react'

const Packages = ({ packages }) => {

  return (
    <div className="packages-container">
        <h2>Packages</h2>
        
      <div className="packages-list">

        { !packages || packages.length === 0 ? (
          <p>No packages available.</p> 
        ) : 

         packages.map(item => (
            <div key={item.id} className="package-item">
                <div className="package-details">
                    <h3 className="package-title">{item.title}</h3>
                    
                    <div className="package-title-price-small">
                      <h3 className="package-title-small">{item.title}</h3>
                      <p className="package-price-small">{item.currency}{item.price.toFixed(2)} </p>
                    </div>
                    <div className="package-seating"> 
                        <p className="package-seating-arrangement"><i className="fa-regular fa-circle-check"></i> {item.seatingArrangement}</p>
                        <p className="package-placement"><i className="fa-regular fa-circle-check"></i> {item.placement}</p>
                    </div>
                </div>
                <div className="package-price-container">
                    <p className="package-price">{item.currency}{item.price.toFixed(2)} </p>
                </div>
            </div>
        ))
      }
</div>

</div>
  )
}

export default Packages