import axios from "axios";
import React, { useState } from "react";

function LinkForm({ setLink, setVisible }) {
  const [value, setValue] = useState("");

  return (
    <div className="link_form">
      <div class="logo">
        <img src={require("../assets/images/linked.png")} alt="" />
      </div>
      <div className="logo__title">Link generator</div>
      <div className="line"></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setVisible(false);
          try {
            axios
              .post(
                "/api/v1/abbreviate",
                { link: value },
                {
                  headers: {
                    // Overwrite Axios's automatically set Content-Type
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((response) => {
                console.log(response.data);
                setLink(response.data.abbreviated);
                setVisible(true);
              });
          } catch (e) {
            console.log(e.message);
          }
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Создайте короткую ссылку, чтобы скопировать ее на сайт, в соцсети и
            мессенджеры.
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Например, https://getbootstrap.com/docs/5.1/forms/overview/"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Получить короткую ссылку
        </button>
      </form>
    </div>
  );
}

export default LinkForm;
