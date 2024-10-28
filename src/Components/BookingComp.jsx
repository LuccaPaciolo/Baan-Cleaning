import React, {useRef, useState} from 'react'
import '../Styles/bookingComp.css'
import AllSevice from '../Data/allService.js'
import HomeCleaning from '../Data/HomeCleaning.js'
import AdditionAreas from '../Data/AdditionalAreas.js'
import Carpets from '../Data/Carpets.js'
import Appliances from '../Data/Appliances.js'
import HouseKeeper from '../Data/Housekeeper.js'
import PressureWashing from '../Data/PressureWashing.js'
import Asterisk from '../Images/asterisk.svg'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import Check from '../Images/check.svg'
import emailjs from 'emailjs-com';
import ScrollToTop from '../Components/ScrollToTop.jsx'




function BookingComp() {   
const [formInput, setFormInput]= useState({
    firstName : '',
    lastName : '',
    middleName : '',
    email: '',
    date: '',
    location: '',
    note: '',
})

const fetchFormInput = (e)=> {
    setFormInput ({
        ...formInput,
        [e.target.name] : e.target.value
    }       
    )}


const [phone, setPhone] = useState('');



    
//Creating Tabs for differnt booking process//

const [tab, setTab] = useState(1)
const tabToggle = (index)=> {
    setTab(index)
}

const [currentTab, setCurrentTab] = useState(tab)
const getPrevTab = ()=> {
      setTab(prev=> (prev-1))
  }


    //for the option selected // 

const [services, setServices] = useState('')
const [isPicked, setIsPicked] = useState(null)
    const pickControl =(index, item)=> {
        setIsPicked(index);
        setServices ({
            ...services,
           option: item          
        
        })
    }
    const serviceControl = (e)=> {
        setServices ({
            ...services,
            [e.target.name] : e.target.value
        })
    }
  

    const [selectedContent, setSelectedContent] = useState('')
    const [activeSpan, setActiveSpan] = useState(null)
    const spanContents = ['9:00 am - 11:00 am','9:30 am - 11:30 am', '10:00 am - 12:00 pm','10:30 am - 12:30 pm','11:00 am - 1:00 pm','11:30 am - 1:30 pm', '12:00 pm - 2:00 pm', '12:30 pm - 2:30 pm','1:00 pm - 3:00 pm','1:30 pm - 3:30 pm','2:00 pm - 4:00 pm','3:00 pm - 5:00 pm']

    const handleClick = (content, index) =>{
        setSelectedContent(content);
        setActiveSpan(index)
    }


  
    //final summary state holder // 

    const [summaryContent, setSummmaryContent] = useState('')
    const summaryContentRef = useRef(null);

    const updateSummaryContent = ()=> {
        if(summaryContentRef.current) {
            setSummmaryContent(summaryContentRef.current.innerText)         
            
        }

        handleNext()
       
    }

    const sendEmail = (e) => {
        e.preventDefault(); // Prevent page refresh
    
        // Create template parameters
        const templateParams = {
        category:services.category,
        option:services.option?.option,
        desc:services.option?.desc,
        date:formInput.date,
        time: selectedContent,
        name:formInput.firstName + ' ' + formInput.middleName + ' ' + formInput.lastName,
        email:formInput.email,
        tel: phone,
        location: formInput.location,
        note: formInput.note

        };

  
       
        // Send email using EmailJS
        emailjs.send('service_dawuidj', 'template_jgfr424', templateParams, 'TTtfpzh6j3LtVhgxF')
          .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
            alert('Quote sent successfully!');
          }, (err) => {
            console.error('Failed to send email. Error:', err);
            alert('Failed to send email');
          });
         
    };

    const userSelection =  {     
            category:services.category,
            option:services.option?.option,
            desc:services.option?.desc,
            date:formInput.date,
            time: selectedContent,
            name:formInput.firstName + ' ' + formInput.middleName + ' ' + formInput.lastName,
            email:formInput.email,
            tel: phone,
            location: formInput.location,
            note: formInput.note
    }

    const errorMassages = {
        category: 'Please pick category and option',
        date: 'Please select date',
        time: 'Please select time slot',
        email: 'This field is required',
        name: 'This field is required',
        tel: 'This field is required',
        location: 'This field is required',

    }
    
    const [errors, setErrors] = useState({
        category: '',
        date: '',
        time: '',
        general: '',
    })
  
    console.log(errors.name)
    const handleNext = ()=> {
        if(tab === 1 && (!userSelection.category|| !userSelection.option)){
          setErrors(prev => ({
            ...prev, 
            category: [errorMassages.category]
          }))                     
           return;
        }else if (tab === 2 && (!userSelection.date || !userSelection.time || !userSelection.name ||!userSelection.email || !userSelection.tel || !userSelection.location)){
            setErrors(prev => ({
                ...prev, 
                date: [errorMassages.date],
                time: [errorMassages.time],
                name: [errorMassages.name],
                email: [errorMassages.email],
                tel: [errorMassages.tel],
                location:[errorMassages.location]
            }))
            return;
        }
        
        setTab(prev=>(prev+1));
    }

      return (
    <div className='booking-comp'>
        <div  className="tab-section-container">
            
            <div className="tab-blocks">
                <button className={tab === 1 ? 'tab active-tab':'tab'} onClick={()=>tabToggle(1)}>01</button>
                <button className={tab === 2 ? 'tab active-tab':'tab'} onClick={()=>tabToggle(2)}>02</button>
                <button className={tab === 3 ? 'tab active-tab':'tab'} onClick={()=>tabToggle(3)}>03</button>
         
            </div>


            <div  style={{ height: '200px', overflowY: 'auto' }} className="tab-contents">
                <div className={tab === 1 ? 'content active-content':'content'}>
                    <form action="">
            <h4>Select Category</h4>
            <h6>{errors.category}</h6>
            <select onChange={serviceControl} name="category">
                
                <option value="select-option">select-option</option>
                <option value="All">ALL</option>
                <option value="Home Cleaning">Home Cleaning</option>
                <option value="Additional Areas">Additional Areas</option>
                <option value="Carpets & Upholstery Cleaning">Carpets & Upholstery Cleaning</option>
                <option value="Appliances Cleaning">Appliances Cleaning</option>
                <option value="Housekeeper">Housekeeper</option>
                <option value="Pressure Washing">Pressure Washing</option>
            </select>
            
        </form>
        <div className="service-list">
            {services.category === 'All' ? <div className="all-list">
                {AllSevice.map((item, index)=> (
                    
                    <div key={item.id} onClick={()=> pickControl(index, item)} className={index === isPicked ? 'list  active-list':'list'}> 
                        <div className="image">
                            <img src={item.image} alt="cleaning-icon" />
                        </div>
                        <div className="option">
                            <h4>{item.option}</h4>
                        </div>
                        <div className="desc">
                            <p>{item.desc}</p>
                        </div>
                    </div>
                    
                ))}
            </div>:''}
            {services.category === 'Home Cleaning' ?<div className="home-cleaning-list">
                {HomeCleaning.map((item, index)=> (
                    <div key={item.id} onClick={()=> pickControl(index, item)} className={index === isPicked ? 'list  active-list':'list'}> 
                        <div className="image">
                            <img src={item.image} alt="cleaning-icon" />
                        </div>
                        <div className="option">
                            <h4>{item.option}</h4>
                        </div>
                        <div className="desc">
                            <p>{item.desc}</p>
                        </div>
                    </div>
                    
                ))}
            </div>: ''}

            {services.category === 'Additional Areas' ?<div className="additional-areas">
                {AdditionAreas.map((item, index)=> (
                    <div key={item.id} onClick={()=> pickControl(index, item)} className={index === isPicked ? 'list  active-list':'list'}> 
                        <div className="image">
                            <img src={item.image} alt="cleaning-icon" />
                        </div>
                        <div className="option">
                            <h4>{item.option}</h4>
                        </div>
                        <div className="desc">
                            <p>{item.desc}</p>
                        </div>
                    </div>
                    
                ))}
            </div>: ''}
            {services.category === 'Carpets & Upholstery Cleaning' ? <div className="carpets">
                {Carpets.map((item, index)=> (
                    <div key={item.id} onClick={()=> pickControl(index, item)} className={index === isPicked ? 'list  active-list':'list'}> 
                        <div className="image">
                            <img src={item.image} alt="cleaning-icon" />
                        </div>
                        <div className="option">
                            <h4>{item.option}</h4>
                        </div>
                        <div className="desc">
                            <p>{item.desc}</p>
                        </div>
                    </div>
                    
                ))}
            </div>: ''}

            {services.category === 'Appliances Cleaning' ?<div className="appliances">
                {Appliances.map((item, index)=> (
                    <div key={item.id} onClick={()=> pickControl(index, item)} className={index === isPicked ? 'list  active-list':'list'}> 
                        <div className="image">
                            <img src={item.image} alt="cleaning-icon" />
                        </div>
                        <div className="option">
                            <h4>{item.option}</h4>
                        </div>
                        <div className="desc">
                            <p>{item.desc}</p>
                        </div>
                    </div>
                    
                ))}
            </div>: ''}

            {services.category === 'Housekeeper' ?<div className="house-keeper">
                {HouseKeeper.map((item, index)=> (
                    <div key={item.id} onClick={()=> pickControl(index, item)} className={index === isPicked ? 'list  active-list':'list'}> 
                        <div className="image">
                            <img src={item.image} alt="cleaning-icon" />
                        </div>
                        <div className="option">
                            <h4>{item.option}</h4>
                        </div>
                        <div className="desc">
                            <p>{item.desc}</p>
                        </div>
                    </div>
                    
                ))}
            </div>: ''}
            {services.category === 'Pressure Washing' ?<div className="pressure-washing">
                {PressureWashing.map((item, index)=> (
                    <div key={item.id} onClick={()=> pickControl(index, item)} className={index === isPicked ? 'list  active-list':'list'}> 
                        <div className="image">
                            <img src={item.image} alt="cleaning-icon" />
                        </div>
                        <div className="option">
                            <h4>{item.option}</h4>
                        </div>
                        <div className="desc">
                            <p>{item.desc}</p>
                        </div>
                    </div>
                    
                ))}
            </div>: ''}
            
        </div>
            
                </div>
                <div className={tab === 2 ? 'content active-content':'content'}>
                    <h3>Select the date you prefer</h3>
                    <div className="date">                   
                        <h6>{errors.date}</h6>
                        <input onChange={fetchFormInput} 
                        type="date" name='date' required/>
                        
                    </div>
                    <div className="time">
                        <h2>Time Slot</h2>
                        <h6>{errors.time}</h6>
                        <div className="morning">
                        {spanContents.map((content, index)=> (
                                <span key={index} onClick={()=>handleClick(content, index)} className={activeSpan === index ? 'check active-check': 'check'}>
                                <h4>{content}</h4>
                               {activeSpan ===  index? <img src={Check} alt="check-icon" />: ''}
                            </span>
                        ))
                        }
                        </div>
                       
                       
                    </div>

                    <div className="client-details">
                    <ScrollToTop/>
                        <h3> Basic Information</h3>
                        <form onSubmit={fetchFormInput}>
                        <div className="first-name">
                            <h5>First Name</h5>
                            <img src={Asterisk} alt="" />
                            
                        </div>
                        <input onChange={fetchFormInput} name='firstName' type="text"  placeholder='enter firstname' required/><h6>{errors.name}</h6>
                        
                       
                        <div className="last-name">
                            <h5>Last Name</h5>
                            <img src={Asterisk} alt="" />
                         </div>
                         <input onChange={fetchFormInput} name='lastName'type="text"  placeholder='enter last name' required/>
                         <h6>{errors.name}</h6>
                        
                        <div className="middle-name">
                        <h5>Middle Name</h5>
                                        
                        </div>   
                        <input onChange={fetchFormInput} name='middleName'type="text"  placeholder='enter middle name' />               
                        <div className="email">
                        <h5>Email</h5>
                        <img src={Asterisk} alt="" />                    
                        </div>
                        <input onChange={fetchFormInput} name='email'type="text"  placeholder='Enter email address' required/>
                        <h6>{errors.email}</h6>
                        <div className="tel">
                        <h5>Phone Number</h5>
                        <img src={Asterisk} alt="" />                    
                        </div>
                       
                        <PhoneInput
                            country={'Lebanon'}                
                            value={phone}
                            onChange={setPhone}
                            enableSearch={true}
                            placeholder='enter phone number'  required               
                        />  <h6>{errors.name}</h6>
                     
                        <div className="location">
                        <h5>Location</h5>
                        <img src={Asterisk} alt="" />                    
                        </div>  <h6>{errors.location}</h6>
                        <input onChange={fetchFormInput} name='location'type="text"  placeholder='Enter your address' required/>
                        <div className="Note">
                        <h5>Note</h5>               
                         <textarea onChange={fetchFormInput}  name="note" placeholder='Addtional note(s)'  ></textarea>
                        </div>                          

                        </form>                       
                        
                    </div>
                   
                </div>
                <div className={tab === 3 ? 'content active-content':'content'}>
                    <h3>Here is a summary of your order</h3>
                    
                    <div ref={summaryContentRef} className="summary-section">
                        
                        <div className="summary-category">                            
                            <p>Catetory:</p>
                            <h4>{services.category}</h4>
                        <div/>
                        <div className="summary-option">
                            <p>Option:</p>
                            <h4>{services.option?.option}</h4>
                            <h4>{services.option?.desc}</h4>                      
                        </div>
                        <div className='period'>
                          <p>Selected Date:</p>
                          <h4>{formInput.date}</h4>
                          <p>Selected Time:</p>
                          <h4>{selectedContent}</h4>
                          <p></p>
                          
                          <div className="client-basic-details">
                            <p>First Name:</p>
                            <h4>{formInput.firstName}</h4>
                            <p>Middle Name:</p>
                            <h4>{formInput.middleName}</h4>
                            <p>Last Name:</p>
                            <h4>{formInput.lastName}</h4>
                            <p>Email:</p>
                            <h4>{formInput.email}</h4>
                            <p>Phone Number:</p>
                            <h4>{phone}</h4>
                            <p>Location:</p>
                            <h4>{formInput.location}</h4>
                            <p>Note:</p>
                            <h4>{formInput.note}</h4>
                          </div>
                            
                        </div>   

                           

                    </div>

                    </div>
                    
           
                </div>



               
            </div>
        </div>
        
        
        <div className="submit-buttons">
            {tab === 2 || tab === 3 ? <button onClick={getPrevTab} className='back-btn'>Back</button>: ''}   
            {tab === 1 || tab === 2 ? <button onClick={()=>updateSummaryContent()} className='next-btn'> Next</button>:'' }                                 
            {tab === 3 ? <button onClick={sendEmail} className='get-quote-btn'> Get Quote</button>:'' }                 
                      
        </div>  

       
  
 

 
    </div>
  )
}

export default BookingComp