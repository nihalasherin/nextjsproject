"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
function page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hasResults, setHasResults] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  const handleSearch = () => {
  const resultsFound = searchTerm === "example";
    if (!resultsFound) {
      setHasResults(false);
    } else {
      setHasResults(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phoneNumber") {
      if (/^\d*$/.test(value) && value.length <= 10) {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone Number must be 10 digits';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      toast.success('Request submitted successfully!');
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
      });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
    <div >
          <div style={{position:"absolute",top:'1px',zIndex:"1",width:"100%",backgroundImage:
            "linear-gradient(rgba(1, 46, 109, 0.0), rgba(1, 46, 109, 0.0))"}}>
 <Navbar expand="lg" style={{ backgroundImage: "linear-gradient(rgba(1, 46, 109, 0.0), rgba(1, 46, 109, 0.0))" }} variant="light" >
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: "white", textAlign: "left", marginLeft: '20px' }}>
          <span style={{
            display: "block",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "bold",
            fontSize: "35px",
            lineHeight: "1.2",
          }}>
            engage.
          </span>
          <span style={{
            display: "block",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "14px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginLeft: '15px'
          }}>
            properties
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto nvbr">
            <Nav.Link href="#"  className='lst' >
              Listings
            </Nav.Link>
            <Nav.Link href="#"  className='lst'>
              Developers
            </Nav.Link>
            <Nav.Link href="#"  className='lst'>
              About Us
            </Nav.Link>
            <Nav.Link href="#"  className='lst'>
              Insights
            </Nav.Link>
            <Nav.Link href="#"  className='lst'>
              FAQs
            </Nav.Link>
            <Nav.Link href="#"  className='lst'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
      </div>

<div
      style={{
        position: 'relative',
        backgroundImage:
          "linear-gradient(rgba(1, 46, 109, 0.6), rgba(1, 46, 109, 0.6)), url('/img1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '900px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        paddingTop:'450px'
      }}
    >
      <div style={{ maxWidth: '90%' }}>
        <h1 style={{ fontSize: '40px', marginBottom: '10px' }}>
          Once you engage with us, you won’t want to engage with anyone else.
        </h1>
        <p style={{ fontSize: '1em', marginBottom: '20px' }}>
          Bliss - Arabian Ranches III, Dubai, UAE
        </p>
        <button
          className="btn btn-light"
          style={{
            fontSize: '1em',
            padding: '10px 20px',
            marginBottom: '30px',
          }}
        >
          Enquire this Property
        </button>
      </div>

      <div className="container mt-4" style={{ width: '100%', maxWidth: '1200px',position:'relative',top:'180px'}}>
        <div className="card p-4 shadow-sm"  style={{textAlign:'left'}}>
          <ul className="nav nav-tabs mb-4">
            <li className="nav-item">
              <a className="nav-link active" href="#" style={{color:'#00204a',fontSize:'20px'}}>
                Buy Off-Plan Property
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Buy a Property
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Properties for Rent
              </a>
            </li>
          </ul>

          <div className="row">
            <div className="col-md-3 mb-3">
              <label>Property Type</label>
              <select className="form-select">
                <option>Penthouse</option>
              </select>
            </div>

            <div className="col-md-3 mb-3">
              <label>Area</label>
              <select className="form-select">
                <option>Dubai</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label>&nbsp;</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Project Name"
                  aria-label="Search Project Name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    borderRadius: '10px',
                    marginRight: '10px',
                  }}
                />
                <button
                  className="btn btn-primary"
                  style={{
                    borderRadius: '10px',
                    backgroundColor: '#022E6D',
                    marginLeft: '10px',
                  }}
                  onClick={handleSearch}
                >
                  Find Property
                </button>
              </div>
              {!hasResults && (
                <p style={{ color: 'red', marginTop: '5px' }}>No result found</p>
              )}
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-3 mb-3">
              <label>Developer</label>
              <select className="form-select">
                <option>All Developers</option>
              </select>
            </div>

            <div className="col-md-3 mb-3">
              <label>Lifestyle Type</label>
              <select className="form-select">
                <option>All Lifestyle Types</option>
              </select>
            </div>

            <div className="col-md-3 mb-3">
              <label>Minimum Price</label>
              <select className="form-select">
                <option>AED 200,000</option>
              </select>
            </div>

            <div className="col-md-3 mb-3">
              <label>Maximum Price</label>
              <select className="form-select">
                <option>AED 500,000</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>


      <div  className='crd'>
      <h3>Off-Plan Properties for Sale in Dubai</h3>
      <p>orem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
      Pellentesque pellentesque sodales purus
      </p>
      <div className="row" style={{ display: 'flex', flexWrap: 'wrap'}}>
    <div className="col-sm-4 col-md-6 col-lg-4" >
  <div className="card-body">
    <div style={{ position: 'relative' }}>
      <Image 
        src="/img.jpeg" 
        alt="Property Image"
        width={500}
        height={300}
        layout="responsive"
        priority
        style={{ borderRadius: '8px', width: '100%' }}
      />
      <div style={{ 
        position: 'absolute', 
        top: '2%', 
        left: '2%', 
        backgroundColor: '#4e9bff', 
        color: '#fff', 
        padding: '0.5vw 1vw', 
        borderRadius: '15px', 
        fontSize: '0.9rem',
        maxWidth: '50%',
        textAlign: 'center'
      }}>
        60/40 Payment Plan
      </div>
      <div style={{ 
        position: 'absolute', 
        bottom: '2%', 
        left: '2%', 
        display: 'flex', 
        gap: '1vw',
        flexWrap: 'wrap'
      }}>
        <span style={{ 
          backgroundColor: '#f0f0f0', 
          padding: '0.5vw 1vw', 
          borderRadius: '15px', 
          fontSize: '0.8rem' 
        }}>TOWNHOUSES</span>
        <span style={{ 
          backgroundColor: '#f0f0f0', 
          padding: '0.5vw 1vw', 
          borderRadius: '15px', 
          fontSize: '0.8rem'
        }}>VILLAS</span>
      </div>
    </div>
    <h5 className="mt-3" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>DAMAC</h5>
    <p className="mb-1" style={{ fontSize: '1rem' }}>Bliss - Arabian Ranches III</p>
    <p style={{ color: '#888', fontSize: '0.9rem' }}>Bliss - Arabian Ranches III Dubai</p>
    <p style={{ fontWeight: 'bold', color: '#0070f3', fontSize: '1rem' }}>From AED 1,840,000</p>
  </div>
</div>


    <div className="col-sm-4 col-md-6 col-lg-4">
  <div className="card-body">
    <div style={{ position: 'relative' }}>
      <Image 
        src="/image3.png"
        alt="Property Image"
        width={500}
        height={300}
        layout="responsive"
        priority
        style={{ borderRadius: '8px', width: '100%' }} 
      />
      
      <div style={{ 
        position: 'absolute', 
        top: '2%', 
        left: '2%', 
        backgroundColor: '#4e9bff', 
        color: '#fff', 
        padding: '0.5vw 1vw', 
        borderRadius: '15px', 
        fontSize: '0.9rem',
        maxWidth: '50%', 
        textAlign: 'center'
      }}>
        60/40 Payment Plan
      </div>
      
      <div style={{ 
        position: 'absolute', 
        bottom: '2%', 
        left: '2%', 
        display: 'flex', 
        gap: '1vw',
        flexWrap: 'wrap' 
      }}>
        <span style={{ 
          backgroundColor: '#f0f0f0', 
          padding: '0.5vw 1vw', 
          borderRadius: '15px', 
          fontSize: '0.8rem' 
        }}>TOWNHOUSES</span>
        <span style={{ 
          backgroundColor: '#f0f0f0', 
          padding: '0.5vw 1vw', 
          borderRadius: '15px', 
          fontSize: '0.8rem'
        }}>VILLAS</span>
      </div>
    </div>
    <h5 className="mt-3" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>EMAAR</h5>
    <p className="mb-1" style={{ fontSize: '1rem' }}>VIDA Residences @ Creek Beach</p>
    <p style={{ color: '#888', fontSize: '0.9rem' }}>Creek Beach, Dubai Creek Harbour Dubai</p>
    <p style={{ fontWeight: 'bold', color: '#0070f3', fontSize: '1rem' }}>From AED 1,718,888</p>
  </div>
</div>


<div className="col-sm-4 col-md-6 col-lg-4">
  <div className="card-body">
    <div style={{ position: 'relative' }}>
      <Image 
        src="/image3.png"
        alt="Property Image"
        width={500}
        height={300}
        layout="responsive"
        priority
        style={{ borderRadius: '8px', width: '100%' }}
      />
      

      <div style={{ 
        position: 'absolute', 
        top: '2%', 
        left: '2%', 
        backgroundColor: '#4e9bff', 
        color: '#fff', 
        padding: '0.5vw 1vw', 
        borderRadius: '15px', 
        fontSize: '0.9rem',
        maxWidth: '50%',
        textAlign: 'center'
      }}>
        60/40 Payment Plan
      </div>
      

      <div style={{ 
        position: 'absolute', 
        bottom: '2%', 
        left: '2%', 
        display: 'flex', 
        gap: '1vw',
        flexWrap: 'wrap'
      }}>
        <span style={{ 
          backgroundColor: '#f0f0f0', 
          padding: '0.5vw 1vw', 
          borderRadius: '15px', 
          fontSize: '0.8rem' 
        }}>TOWNHOUSES</span>
        <span style={{ 
          backgroundColor: '#f0f0f0', 
          padding: '0.5vw 1vw', 
          borderRadius: '15px', 
          fontSize: '0.8rem'
        }}>VILLAS</span>
      </div>
    </div>
    <h5 className="mt-3" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>DAMAC</h5>
    <p className="mb-1" style={{ fontSize: '1rem' }}>Bliss - Arabian Ranches III</p>
    <p style={{ color: '#888', fontSize: '0.9rem' }}>Bliss - Arabian Ranches III Dubai</p>
    <p style={{ fontWeight: 'bold', color: '#0070f3', fontSize: '1rem' }}>From AED 1,840,000</p>
  </div>
</div>



<div className="col-sm-4 col-md-6 col-lg-4">
  <div className="card-body">
    <div style={{ position: 'relative' }}>
      <Image 
        src="/img1.png" 
        alt="Property Image"
        width={500}
        height={300}
        layout="responsive"
        priority
        style={{ borderRadius: '8px', width: '100%' }}
      />
      

      <div style={{ 
        position: 'absolute', 
        top: '2%', 
        left: '2%', 
        backgroundColor: '#4e9bff', 
        color: '#fff', 
        padding: '0.5vw 1vw', 
        borderRadius: '15px', 
        fontSize: '0.9rem',
        maxWidth: '50%',
        textAlign: 'center'
      }}>
        60/40 Payment Plan
      </div>
      

      <div style={{ 
        position: 'absolute', 
        bottom: '2%', 
        left: '2%', 
        display: 'flex', 
        gap: '1vw',
        flexWrap: 'wrap'
      }}>
        <span style={{ 
          backgroundColor: '#f0f0f0', 
          padding: '0.5vw 1vw', 
          borderRadius: '15px', 
          fontSize: '0.8rem' 
        }}>TOWNHOUSES</span>
        <span style={{ 
          backgroundColor: '#f0f0f0', 
          padding: '0.5vw 1vw', 
          borderRadius: '15px', 
          fontSize: '0.8rem'
        }}>VILLAS</span>
      </div>
    </div>
    <h5 className="mt-3" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>DAMAC</h5>
    <p className="mb-1" style={{ fontSize: '1rem' }}>Bliss - Arabian Ranches III</p>
    <p style={{ color: '#888', fontSize: '0.9rem' }}>Bliss - Arabian Ranches III Dubai</p>
    <p style={{ fontWeight: 'bold', color: '#0070f3', fontSize: '1rem' }}>From AED 1,840,000</p>
  </div>
</div>



  
  <div className="col-sm-4 col-md-6 col-lg-4">
  <div className="card-body">
    <div style={{ position: 'relative' }}>
      <Image 
        src="/img1.png" 
        alt="Property Image"
        width={500}
        height={300}
        layout="responsive"
        priority
        style={{ borderRadius: '8px', width: '100%' }}
      />
      <div style={{ 
        position: 'absolute', 
        top: '2%', 
        left: '2%', 
        backgroundColor: '#4e9bff', 
        color: '#fff', 
        padding: '0.5vw 1vw', 
        borderRadius: '15px', 
        fontSize: '0.9rem',
        maxWidth: '50%',
        textAlign: 'center'
      }}>
        60/40 Payment Plan
      </div>
      

      <div style={{ 
        position: 'absolute', 
        bottom: '2%', 
        left: '2%', 
        display: 'flex', 
        gap: '1vw',
        flexWrap: 'wrap'
      }}>
        <span style={{ 
          backgroundColor: '#f0f0f0', 
          padding: '0.5vw 1vw', 
          borderRadius: '15px', 
          fontSize: '0.8rem' 
        }}>TOWNHOUSES</span>
        <span style={{ 
          backgroundColor: '#f0f0f0', 
          padding: '0.5vw 1vw', 
          borderRadius: '15px', 
          fontSize: '0.8rem'
        }}>VILLAS</span>
      </div>
    </div>
    <h5 className="mt-3" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>DAMAC</h5>
    <p className="mb-1" style={{ fontSize: '1rem' }}>Bliss - Arabian Ranches III</p>
    <p style={{ color: '#888', fontSize: '0.9rem' }}>Bliss - Arabian Ranches III Dubai</p>
    <p style={{ fontWeight: 'bold', color: '#0070f3', fontSize: '1rem' }}>From AED 1,840,000</p>
  </div>
</div>



<div className="col-sm-4 col-md-6 col-lg-4">
  <div className="card-body">
    <div style={{ position: 'relative' }}>
      <Image 
        src="/img1.png" 
        alt="Property Image"
        width={500}
        height={300}
        layout="responsive"
        priority
        style={{ borderRadius: '8px', width: '100%' }}
      />
      

      <div style={{ 
        position: 'absolute', 
        top: '2%', 
        left: '2%', 
        backgroundColor: '#4e9bff', 
        color: '#fff', 
        padding: '0.5vw 1vw', 
        borderRadius: '15px', 
        fontSize: '0.9rem',
        maxWidth: '50%',
        textAlign: 'center'
      }}>
        60/40 Payment Plan
      </div>      

      <div style={{ 
        position: 'absolute', 
        bottom: '2%', 
        left: '2%', 
        display: 'flex', 
        gap: '1vw',
        flexWrap: 'wrap'
      }}>
        <span style={{ 
          backgroundColor: '#f0f0f0', 
          padding: '0.5vw 1vw', 
          borderRadius: '15px', 
          fontSize: '0.8rem' 
        }}>TOWNHOUSES</span>
        <span style={{ 
          backgroundColor: '#f0f0f0', 
          padding: '0.5vw 1vw', 
          borderRadius: '15px', 
          fontSize: '0.8rem'
        }}>VILLAS</span>
      </div>
    </div>
    <h5 className="mt-3" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>DAMAC</h5>
    <p className="mb-1" style={{ fontSize: '1rem' }}>Bliss - Arabian Ranches III</p>
    <p style={{ color: '#888', fontSize: '0.9rem' }}>Bliss - Arabian Ranches III Dubai</p>
    <p style={{ fontWeight: 'bold', color: '#0070f3', fontSize: '1rem' }}>From AED 1,840,000</p>
  </div>
</div>
  </div>
</div>



<div style={{ margin: '20px' }}>
  <h4>Explore Properties on Map</h4>
  
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4918.927069363705!2d75.83119323341032!3d11.247724518260886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bbe50ea0b7d%3A0xc4e01eaa6234847e!2sHiLITE%20Business%20Park%2C%20Poovangal%2C%20Pantheeramkavu%2C%20Kerala%20673014!5e0!3m2!1sen!2sin!4v1730732615745!5m2!1sen!2sin"
    width="100%" 
    height="300" 
    style={{ border: 0, borderRadius: '8px' }} 
    allowFullScreen 
    loading="lazy"
  ></iframe>
</div>




<div style={{margin:'20px'}}>
  <h3>Featured Listings</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
  Pellentesque pellentesque sodales purus</p>
  <div>
  <button style={{
    borderRadius: '20px', 
    padding: '10px 20px', 
    margin: '5px', 
    backgroundColor: '#4e9bff', 
    color: '#fff', 
    border: 'none',
    fontWeight: 'bold'
  }}>
    Villa
  </button>  
  <button style={{
    borderRadius: '20px', 
    padding: '10px 20px', 
    margin: '5px', 
    backgroundColor: '#e0e0e0', 
    color: '#000', 
    border: 'none',
    fontWeight: 'bold'
  }}>
    Apartments
  </button>  
  <button style={{
    borderRadius: '20px', 
    padding: '10px 20px', 
    margin: '5px', 
    backgroundColor: '#e0e0e0',
    color: '#000',
    border: 'none',
    fontWeight: 'bold'
  }}>
    Penthouse
  </button>  
  <button style={{
    borderRadius: '20px', 
    padding: '10px 20px', 
    margin: '5px', 
    backgroundColor: '#e0e0e0',
    color: '#000',
    border: 'none',
    fontWeight: 'bold'
  }}>
    Off Plan
  </button>
</div>
<div className="row" style={{ display: 'flex', flexWrap: 'wrap', marginTop:'10x'}}>
   

<div className="col-md-6 col-sm-6 col-lg-3">
  <div className="card-body">
    <div style={{ position: 'relative' }}>
      <Image 
        src="/img4.png"
        alt="Property Image"
        width={500}
        height={300}
        layout="responsive"
        priority
        style={{ borderRadius: '8px' }}
      />
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap' 
      }}>
        <span style={{
          backgroundColor: '#f0f0f0',
          padding: '5px 15px',
          borderRadius: '15px',
          fontSize: '14px', 
          margin: '2px 0'   
        }}>TOWNHOUSES</span>
        <span style={{
          backgroundColor: '#f0f0f0',
          padding: '5px 15px',
          borderRadius: '15px',
          fontSize: '14px', 
          margin: '2px 0'   
        }}>VILLAS</span>
      </div>
    </div>
    <h5 className="mt-3" style={{ fontWeight: 'bold' }}>DAMAC</h5>
    <p className="mb-1" style={{ fontSize: '18px' }}>Bliss - Arabian Ranches III</p>
    <p style={{ color: '#888' }}>Bliss - Arabian Ranches III Dubai</p>
    <p style={{ fontWeight: 'bold', color: '#0070f3' }}>From AED 1,840,000</p>
  </div>
</div>





<div className="col-md-6 col-sm-6 col-lg-3">
  <div className="card-body">
    <div style={{ position: 'relative' }}>
      <Image 
        src="/img4.png" 
        alt="Property Image"
        width={500}
        height={300}
        layout="responsive"
        priority
        style={{ borderRadius: '8px' }}
      />
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap'
      }}>
        <span style={{
          backgroundColor: '#f0f0f0',
          padding: '5px 15px',
          borderRadius: '15px',
          fontSize: '14px', 
          margin: '2px 0'
        }}>TOWNHOUSES</span>
        <span style={{
          backgroundColor: '#f0f0f0',
          padding: '5px 15px',
          borderRadius: '15px',
          fontSize: '14px', 
          margin: '2px 0'
        }}>VILLAS</span>
      </div>
    </div>
    <h5 className="mt-3" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>DAMAC</h5>
    <p className="mb-1" style={{ fontSize: '1rem' }}>Bliss - Arabian Ranches III</p>
    <p style={{ color: '#888', fontSize: '0.9rem' }}>Bliss - Arabian Ranches III Dubai</p>
    <p style={{ fontWeight: 'bold', color: '#0070f3', fontSize: '1.1rem' }}>From AED 1,840,000</p>
  </div>
</div>



<div className="col-md-6 col-sm-6 col-lg-3">
  <div className="card-body">
    <div style={{ position: 'relative' }}>
      <Image 
        src="/image3.png" 
        alt="Property Image"
        width={500}
        height={300}
        layout="responsive"
        priority
        style={{ borderRadius: '8px' }}
      />


      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap' 
      }}>
        <span style={{
          backgroundColor: '#f0f0f0',
          padding: '5px 15px',
          borderRadius: '15px',
          fontSize: '14px', 
          margin: '2px 0'  
        }}>PENTHOUSE</span>
        <span style={{
          backgroundColor: '#f0f0f0',
          padding: '5px 15px',
          borderRadius: '15px',
          fontSize: '14px',
          margin: '2px 0'
        }}>VILLAS</span>
      </div>
    </div>
    <h5 className="mt-3" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>EMAAR</h5>
    <p className="mb-1" style={{ fontSize: '1rem' }}>VIDA Residences @ Creek Beach</p>
    <p style={{ color: '#888', fontSize: '0.9rem' }}>Creek Beach, Dubai Creek Harbour Dubai</p>
    <p style={{ fontWeight: 'bold', color: '#0070f3', fontSize: '1.1rem' }}>From AED 1,718,888</p>
  </div>
</div>



<div className="col-md-6 col-sm-6 col-lg-3">
  <div className="card-body">
    <div style={{ position: 'relative' }}>
      <Image 
        src="/img.jpeg" 
        alt="Property Image"
        width={500}
        height={300}
        layout="responsive"
        priority
        style={{ borderRadius: '8px' }}
      />
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap'
      }}>
        <span style={{
          backgroundColor: '#f0f0f0',
          padding: '5px 15px',
          borderRadius: '15px',
          fontSize: '14px',
          margin: '2px 0' 
        }}>PENTHOUSE</span>
        <span style={{
          backgroundColor: '#f0f0f0',
          padding: '5px 15px',
          borderRadius: '15px',
          fontSize: '14px', 
          margin: '2px 0'
        }}>VILLAS</span>
      </div>
    </div>
    <h5 className="mt-3" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>DAMAC</h5>
    <p className="mb-1" style={{ fontSize: '1rem' }}>Bliss - Arabian Ranches III</p>
    <p style={{ color: '#888', fontSize: '0.9rem' }}>Bliss - Arabian Ranches III Dubai</p>
    <p style={{ fontWeight: 'bold', color: '#0070f3', fontSize: '1.1rem' }}>From AED 1,840,000</p>
  </div>
</div>

  

  <div className="col-md-6 col-sm-6 col-lg-3">
  <div className="card-body">
    <div style={{ position: 'relative' }}>
      <Image 
        src="/image3.png" 
        alt="Property Image"
        width={500}
        height={300}
        layout="responsive"
        priority
        style={{ borderRadius: '8px' }}
      />
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap' 
      }}>
        <span style={{
          backgroundColor: '#f0f0f0',
          padding: '5px 15px',
          borderRadius: '15px',
          fontSize: '14px', 
          margin: '2px 0'   
        }}>PENTHOUSE</span>
        <span style={{
          backgroundColor: '#f0f0f0',
          padding: '5px 15px',
          borderRadius: '15px',
          fontSize: '14px',
          margin: '2px 0'
        }}>VILLAS</span>
      </div>
    </div>
    <h5 className="mt-3" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>DAMAC</h5>
    <p className="mb-1" style={{ fontSize: '1rem' }}>Bliss - Arabian Ranches III</p>
    <p style={{ color: '#888', fontSize: '0.9rem' }}>Bliss - Arabian Ranches III Dubai</p>
    <p style={{ fontWeight: 'bold', color: '#0070f3', fontSize: '1.1rem' }}>From AED 1,840,000</p>
  </div>
</div>

  
  <div className="col-md-6 col-sm-6 col-lg-3">
  <div className="card-body">
    <div style={{ position: 'relative' }}>
      <Image 
        src="/img.jpeg" 
        alt="Property Image"
        width={500}
        height={300}
        layout="responsive"
        priority
        style={{ borderRadius: '8px' }}
      />
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap' 
      }}>
        <span style={{
          backgroundColor: '#f0f0f0',
          padding: '5px 15px',
          borderRadius: '15px',
          fontSize: '14px',
          margin: '2px 0'
        }}>PENTHOUSE</span>
        <span style={{
          backgroundColor: '#f0f0f0',
          padding: '5px 15px',
          borderRadius: '15px',
          fontSize: '14px',
          margin: '2px 0'
        }}>VILLAS</span>
      </div>
    </div>
    <h5 className="mt-3" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>DAMAC</h5>
    <p className="mb-1" style={{ fontSize: '1rem' }}>Bliss - Arabian Ranches III</p>
    <p style={{ color: '#888', fontSize: '0.9rem' }}>Bliss - Arabian Ranches III Dubai</p>
    <p style={{ fontWeight: 'bold', color: '#0070f3', fontSize: '1.1rem' }}>From AED 1,840,000</p>
  </div>
</div>




<div className="col-md-6 col-sm-6 col-lg-3">
  <div className="card-body">
    <div style={{ position: 'relative' }}>
      <Image 
        src="/img.jpeg" 
        alt="Property Image"
        width={500}
        height={300}
        layout="responsive"
        priority
        style={{ borderRadius: '8px' }}
      />
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap' 
      }}>
        <span style={{
          backgroundColor: '#f0f0f0',
          padding: '5px 15px',
          borderRadius: '15px',
          fontSize: '14px',
          margin: '2px 0'
        }}>TOWNHOUSES</span>
        <span style={{
          backgroundColor: '#f0f0f0',
          padding: '5px 15px',
          borderRadius: '15px',
          fontSize: '14px',
          margin: '2px 0'
        }}>VILLAS</span>
      </div>
    </div>
    <h5 className="mt-3" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>DAMAC</h5>
    <p className="mb-1" style={{ fontSize: '1rem' }}>Bliss - Arabian Ranches III</p>
    <p style={{ color: '#888', fontSize: '0.9rem' }}>Bliss - Arabian Ranches III Dubai</p>
    <p style={{ fontWeight: 'bold', color: '#0070f3', fontSize: '1.1rem' }}>From AED 1,840,000</p>
  </div>
</div>


<div className="col-md-6 col-sm-6 col-lg-3">
  <div className="card-body">
    <div style={{ position: 'relative' }}>
      <Image 
        src="/img.jpeg" 
        alt="Property Image"
        width={500}
        height={300}
        layout="responsive"
        priority
        style={{ borderRadius: '8px' }}
      />
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap' 
      }}>
        <span style={{
          backgroundColor: '#f0f0f0',
          padding: '5px 15px',
          borderRadius: '15px',
          fontSize: '14px',
          margin: '2px 0'
        }}>PENTHOUSE</span>
        <span style={{
          backgroundColor: '#f0f0f0',
          padding: '5px 15px',
          borderRadius: '15px',
          fontSize: '14px',
          margin: '2px 0'
        }}>VILLAS</span>
      </div>
    </div>
    <h5 className="mt-3" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>DAMAC</h5>
    <p className="mb-1" style={{ fontSize: '1rem' }}>Bliss - Arabian Ranches III</p>
    <p style={{ color: '#888', fontSize: '0.9rem' }}>Bliss - Arabian Ranches III Dubai</p>
    <p style={{ fontWeight: 'bold', color: '#0070f3', fontSize: '1.1rem' }}>From AED 1,840,000</p>
  </div>
</div>
  </div>
</div>





<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', padding: '20px', backgroundColor: '#00204a', color: '#fff', marginTop: '30px' }}>
  
  <div style={{
    flex: '1 1 40%',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    color: '#000',
    textAlign: 'center',
    margin: '10px',
    minWidth: '300px'
  }}>
    <h3>Our Experts Will Help You Buy</h3>
    <p>Best Units Curated For You</p>
    
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name *"
        value={formData.fullName}
        onChange={handleChange}
        style={{
          width: '100%',
          padding: '15px',
          marginBottom: '15px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px',
          backgroundColor: 'white',
          color:'black'
        }}
      />
      {errors.fullName && <p style={{ color: 'red' ,textAlign:'left'}}>{errors.fullName}</p>}

      <input
        type="number"
        name="phoneNumber"
        placeholder="Phone Number *"
        value={formData.phoneNumber}
        onChange={handleChange}
        style={{
          width: '100%',
          padding: '15px',
          marginBottom: '15px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px',
          backgroundColor: 'white',
          color:'black'
        }}
      />
      {errors.phoneNumber && <p style={{ color: 'red',textAlign:'left' }}>{errors.phoneNumber}</p>}
      <input
        type="email"
        name="email"
        placeholder="Email *"
        value={formData.email}
        onChange={handleChange}
        style={{
          width: '100%',
          padding: '15px',
          marginBottom: '15px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px',
          backgroundColor: 'white',
          color:'black'
        }}
      />
      {errors.email && <p style={{ color: 'red' ,textAlign:'left'}}>{errors.email}</p>}
      <button
        type="submit"
        style={{
          width: '100%',
          padding: '15px',
          backgroundColor: '#00204a',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Request a Free Callback
      </button>
    </form>
    <ToastContainer />
  </div>
  <div style={{
    flex: '1 1 40%',
    padding: '20px',
    margin: '10px',
    color: '#fff',
    textAlign: 'center',
    minWidth: '300px'
  }}>
    <p style={{ fontStyle: 'italic', fontSize: '24px', lineHeight: '1.5' }}>
      "The customer journey has always been and will always be our priority."
    </p>
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', justifyContent: 'center' }}>
      <Image src="/tovino.png" alt="CEO Image" width={170} height={170} style={{ borderRadius: '10px' }} />
      <div style={{ marginLeft: '20px', textAlign: 'left' }}>
        <h4 style={{ fontWeight: 'bold' }}>TOVINO THOMAS</h4>
        <p>CEO, Demo Properties</p>
        <h6>
                <FaLinkedinIn size={20} color="white" style={{marginLeft:'2px'}}/>
                <FaTwitter size={20} color="white" style={{marginLeft:'10px'}}/>    
            </h6>
        <p style={{ marginTop: '10px', fontWeight: 'bold' }}>+971 123456789</p>
        <p>tovino@demoproperties.ae</p>
      </div>
    </div>
  </div>
</div>




<div style={{margin:'30px'}}>
  <h3>Top Insights & News</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
  Pellentesque pellentesque sodales purus.</p>
  <div className="row" style={{ display: 'flex', flexWrap: 'wrap'}}>
      <div className="col-sm-4">      
        <div className="card-body">
          <div style={{ position: 'relative' }}>
            <Image 
              src="/img.jpeg" 
              alt="Property Image"
              width={500}
              height={300}
              layout="responsive"
              priority
              style={{ borderRadius: '8px' }}
            />          
            <div style={{ 
              position: 'absolute', 
              top: '10px', 
              left: '10px', 
              backgroundColor: '#4e9bff', 
              color: '#fff', 
              padding: '5px 10px', 
              borderRadius: '15px' 
            }}>
             Insights
            </div>           
          </div>
          <h5 className="mt-3" style={{ fontWeight: 'bold' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        <p className="mb-1" style={{ fontSize: '18px' }}>20 November 2022</p>
        <p style={{ color: '#888' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque pellentesque sodales purus.</p>
        <p style={{ fontWeight: 'bold', color: '#0070f3' }}>Read More </p>
        </div>
      
    </div>
  <div className="col-sm-4">     
        <div className="card-body">
          <div style={{ position: 'relative' }}>
            <Image 
              src="/image3.png" 
              alt="Property Image"
              width={500}
              height={300}
              layout="responsive"
              priority
              style={{ borderRadius: '8px' }} 
            />
            <div style={{ 
              position: 'absolute', 
              top: '10px', 
              left: '10px', 
              backgroundColor: '#4e9bff', 
              color: '#fff', 
              padding: '5px 10px', 
              borderRadius: '15px' 
            }}>
             Insights
            </div>
          </div>
          <h5 className="mt-3" style={{ fontWeight: 'bold' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        <p className="mb-1" style={{ fontSize: '18px' }}>20 November 2022</p>
        <p style={{ color: '#888' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque pellentesque sodales purus.</p>
        <p style={{ fontWeight: 'bold', color: '#0070f3' }}>Read More </p>
        </div>     
    </div>
    <div className="col-sm-4">      
      <div className="card-body">
        <div style={{ position: 'relative' }}>
          <Image 
            src="/img.jpeg" 
            alt="Property Image"
            width={500}
            height={300}
            layout="responsive"
            priority
            style={{ borderRadius: '8px' }} 
          />

          <div style={{ 
            position: 'absolute', 
            top: '10px', 
            left: '10px', 
            backgroundColor: '#4e9bff', 
            color: '#fff', 
            padding: '5px 10px', 
            borderRadius: '15px' 
          }}>
           Insights
          </div>
         
        </div>
        <h5 className="mt-3" style={{ fontWeight: 'bold' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        <p className="mb-1" style={{ fontSize: '18px' }}>20 November 2022</p>
        <p style={{ color: '#888' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque pellentesque sodales purus.</p>
        <p style={{ fontWeight: 'bold', color: '#0070f3' }}>Read More </p>
      </div>    
  </div> 
  </div>
</div>






<div style={{backgroundColor: '#00204a'}}>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px',  color: '#fff', marginTop: '30px' }}>
  <div className="row row-cols-1 row-cols-md-4 g-4" style={{ width: '100%' }}>
    <div className="col">
      <div className="card-body">
        <ul style={{ listStyleType: 'none', padding: '0px', margin: '0px' }}>
          <h2>DEMO</h2>
          <h4>Let’s Talk</h4>
          <h4>(+971) 1234 56789</h4>
          <h4>Socials</h4>
            <h6>
                <TiSocialFacebook size={25} color="white"/> 
                <FaTwitter size={25} color="white" style={{padding:'3px'}}/>
                <AiOutlineInstagram size={25} color="white" style={{padding:'3px'}}/>
                <FaLinkedinIn size={25} color="white" style={{padding:'3px'}}/>
            </h6>
        </ul>
      </div>
    </div>
    <div className="col">
      <div className="card-body">
        <h5 className="mt-3" style={{ fontWeight: 'bold' }}>Developers</h5>
        <ul style={{ listStyleType: 'none', padding: '0px', margin: '0px' }}>
          <li>Emaar Group</li>
          <li>DAMAC</li>
          <li>Meras</li>
          <li>Shobha City</li>
          <li>Dubai Properties</li>
          <li>Omniyat</li>
        </ul>
      </div>
    </div>
    <div className="col">
      <div className="card-body">
        <h5 className="mt-3" style={{ fontWeight: 'bold' }}>Popular Areas</h5>
        <ul style={{ listStyleType: 'none', padding: '0px', margin: '0px' }}>
          <li>Downtown</li>
          <li>Dubai Hills Estate</li>
          <li>Dubai Creek Harbor</li>
          <li>DAMAC Hills</li>
          <li>MBR City</li>
          <li>JBR</li>
        </ul>
      </div>
    </div>
    {/* <div className="col">
      <div className="card-body">
        <h5 className="mt-3" style={{ fontWeight: 'bold' }}>Popular Areas</h5>
        <ul style={{ listStyleType: 'none', padding: '0px', margin: '0px' }}>
          <li>Downtown</li>
          <li>Dubai Hills Estate</li>
          <li>Dubai Creek Harbor</li>
          <li>DAMAC Hills</li>
          <li>MBR City</li>
          <li>JBR</li>
        </ul>
      </div>
    </div> */}
    <div className="col">
      <div className="card-body">
        <h5 className="mt-3" style={{ fontWeight: 'bold' }}>Properties</h5>
        <ul style={{ listStyleType: 'none', padding: '0px', margin: '0px' }}>
          <li>Apartments</li>
          <li>Villas</li>
          <li>Penthouses</li>
          <li>Townhouses</li>
          <li>Villas</li>
          <li>Omniyat</li>
        </ul>
      </div>
    </div>
  </div>    
</div>
<div style={{  textAlign: 'center', fontSize: '14px', marginTop: '20px' ,padding:'20px',color:'white'}}>
    © 2022 Demo Properties. All Rights Reserved.
  </div>
  </div> 
    </div>
    
</div>

   
  );
}
export default page
