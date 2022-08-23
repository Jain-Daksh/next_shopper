import React from 'react'

function Navbar() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light mx-auto">
        <div class="container">
          <a class="navbar-brand" href="#">Shopper</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="true">
                        <span> Home</span>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Default</a></li>
                        <li><a class="dropdown-item" href="#">Classic</a></li>
                        <li><a class="dropdown-item" href="#">Fashion</a></li>
                        <li><a class="dropdown-item" href="#">Boxed</a></li>
                        <li><a class="dropdown-item" href="#">Simple</a></li>
                        <li><a class="dropdown-item" href="#">Asymmetric</a></li>
                        <li><a class="dropdown-item" href="#">Sidenav</a></li>
                        <li><a class="dropdown-item" href="#">Landing</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link" href="#" id="navbarDropdown" role="button"
                      data-bs-toggle="dropdown" aria-expanded="true">
                      <span> Catalog</span>
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="#">Default</a></li>
                      <li><a class="dropdown-item" href="#">Classic</a></li>
                      <li><a class="dropdown-item" href="#">Fashion</a></li>
                      <li><a class="dropdown-item" href="#">Boxed</a></li>
                      <li><a class="dropdown-item" href="#">Simple</a></li>
                      <li><a class="dropdown-item" href="#">Asymmetric</a></li>
                      <li><a class="dropdown-item" href="#">Sidenav</a></li>
                      <li><a class="dropdown-item" href="#">Landing</a></li>
                  </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="#" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="true">
                    <span> Shop</span>
                </a>
                <ul class="dropdown-menu justify-content-start" aria-labelledby="navbarDropdown">
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                      <h6>shop1</h6>

                      </div>
                      <div class="col">
                      <h6>shop2</h6>
                      </div>
                      </div>
                      <div class="row">
                      <div class="col">
                      <h6>shop3</h6>
                      </div>
                      <div class="col">
                      <h6>shop4</h6>
                      </div>
                      </div>
                      <div class="row">
                      <div class="col">
                      <h6>shop5</h6>
                      </div>
                      <div class="col">
                      <h6>shop6</h6>
                      </div>
                      </div>
                    
                  </div>
                </ul>
            </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Pages</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Docs</a>
              </li>
            </ul>
            <button type="button" class="btn btn-dark">Buy Now for $49</button>
        </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar