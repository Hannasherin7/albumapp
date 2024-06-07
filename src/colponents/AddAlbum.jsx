import React from 'react'
import { NavBar } from './NavBar'

export const AddAlbum = () => {
  return (
    <div>
        <h1><center>ALBUM</center></h1>
        <NavBar></NavBar>
        <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">user id</label>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">user name</label>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">album title</label>
                        <input type="text" className="form-control"></input>
                    </div>
                    
                    
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">album catogory</label>
                        <select name="" id="" className="form-control">
                        <option value="A+">--select--</option>
                            <option value="A+">rock</option>
                            <option value="A-">love</option>
                            <option value="B+">nature</option>
                            <option value="AB-">violence</option>
                
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">album id</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">password</label>
                        <input type="password" name="" id="" class="form-control"></input>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">email id </label>
                        <input type="text" className="form-control"></input>
                    </div>
                    
                    

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                       <br /><br /> <button className="btn btn-success">submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
