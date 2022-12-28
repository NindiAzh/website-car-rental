import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './DetailMobil.css'
import axios from 'axios';


const DetailMobil = () => {

  const {id} = useParams()
  const [detail, setDetail] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const url = 'https://bootcamp-rent-cars.herokuapp.com'
    const config = {
      headers: {
        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc'
      }
    }
    axios.get(`${url}/admin/car/{id}`, config)
    .then(res => {
      const DetailMobil = res.data.detail
      console.log(DetailMobil)
      setDetail(DetailMobil)
      setLoading(false)
    })
    .catch(err => {
      console.log(err)
    })
}, [])

const Loading = () => {
  return(
    <>
      Loading....
    </>
  )
}

const ShowDetail = () => {
  return(
    <>
      <div className="col-md-6">
        <img src={detail.image} alt="img" height="400px" width="400px"/>
      </div>
    </>
  )
}
  return (
    <>
  <div className="">
    <div className="container">
      <div className="row">
        {loading ? <Loading/> : <ShowDetail/> }
      </div>
    </div>
  </div>
    </>
  )
}

export default DetailMobil