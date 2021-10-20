import React from 'react'

const LinkedIn = () => {
    return (
      <>
        <div
          className="linkedIn content-right badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="medium"
          data-theme="light"
          data-type="HORIZONTAL"
          data-vanity="adinahenderson"
          data-version="v1"
        >
          <script
            src="https://platform.linkedin.com/badges/js/profile.js"
            async
            defer
            type="text/javascript"
          ></script>
          <a
            className="badge-base__link LI-simple-link"
            href="https://www.linkedin.com/in/adinahenderson?trk=profile-badge"
          >
          </a>
        </div>
      </>
    );
}

export default LinkedIn
