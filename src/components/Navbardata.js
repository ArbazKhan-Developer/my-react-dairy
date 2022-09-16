import React from "react";
import { useState } from "react";

export function Navbar() {
  const [search, setSearch] = useState("");

  const searchTitle = async () => {
    console.log(search);
    if (search !== "") {
      const response = await fetch(
        `http://localhost:8000/?title=${search}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            notes_key: "25037802e1ab943fc38bbc9614e8b647",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      // console.log(response);
      if (response.status === 200) {
        setSearch("");
        console.log(`data fetched`);
        let data = await response.text();
        console.log(data);
        var jsonStr = data.replace(/(\w+:)|(\w+ :)/g, function (s) {
          return '"' + s.substring(0, s.length - 1) + '":';
        });

        var obj = JSON.parse(jsonStr);
        console.log(obj.data);
        Getdata(obj.data, search);
      } else {
      }
    } else {
      alert(`Title is empty ! \nKindly provide a valid Title`);
    }
  };

  const searchHandle = (event) => {
    setSearch(event.target.value);
  };
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
        <a className="navbar-brand " href="#">
          <i className="fa fa-heart" /> MY DAIRY{" "}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <a className="nav-link" href="#"><i className="fa fa-home"></i>  HOME <span className="sr-only">(current)</span></a>
          </li> */}
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search Title"
              aria-label="Search"
              id="searchbtn"
              value={search}
              onChange={searchHandle}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              id="srch"
              onClick={searchTitle}
            >
              Search
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}



export const Getdata = (data, title) => {
  let html = "";
  const deleteTitle = ()=>{
    console.log(`delete request received`);
  }
  console.log("inside get data");
  console.log(data);
  let notelem = document.getElementById("notesCard");
  if (data.length > 0) {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      console.log(element);
      html += `
        <div class="note-card col-lg-4 my-3">
            <div class="card crd-2">
                <div class="card-body">
                  <div class="apnd">
                    <h5 class="card-title tbl"> ${element.Title}</h5>
                  </div>
                    <p class="card-text">${element.Notes}</p>
                    <button class="btn btn-primary btn-2" id="${index}" onClick={deleteTitle} >delete note</button>
                </div>
            </div>
        </div>
        `;
      notelem.innerHTML = html;
      
    }
  } else if (data.length === 0) {
    console.log("inside zero data");
    alert(`data is not available mathing Title ${title}`);
    html = `<div className="note-card col-lg-4 my-3">
    <div class="card crd-2 nodata">
        <div class="card-body">
            <p class="card-text">${`data is not available matching Title ${title}`}</p>
        </div>
    </div>
</div>`;
    notelem.innerHTML = html;
  }


  return (
    <div className="row container-fluid my-3 " id="notesCard"></div>
  );
};



