import React from "react";

function ShortLink({link}) {



  return (
    <div className="shortLink card">
      <div className="card-body">
        <div className="card__title">Ваша ссылка:</div>
        <input
          className="form-control"
          type="text"
          value={link}
          aria-label="readonly input example"
          readOnly
        />
      </div>
    </div>
  );
}

export default ShortLink;
