import React, { useState } from 'react'

export default function FormDemo2() {
  const defaultFormValues = {name:'',age:'',gender:'', dob: '',interests:[],country:'',bio:''};
  const [formData,setFormData] = useState(defaultFormValues);
  const [touched, setTouched] = useState({});

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const getError = (field) => {
    return !formData[field] && touched[field] ? `${field.charAt(0).toUpperCase() + field.slice(1)} is required`: '';
   };

  const handleChange = (event) =>{

    const{name,value, type ,checked} =event.target;
    if(type ==='checkbox'){
        if(checked){
            setFormData ({...formData,interests:[...formData.interests,value]});
        }
        else{
            setFormData ({
                ...formData,
                interests:[...formData.interests.filter(interest => interest !==value)]
            });

        }
    }
    else{
        setFormData ({...formData,[name]:value});
    }

  }

  const handleSubmit =(event)=>{
    event.preventDefault();
    console.log(formData)
  }

  const handleReset = ()=>{
    setFormData(defaultFormValues);
  }

  const isFormValid = formData.name!=='' && formData.age!=='' && formData.gender!=='';  //// to check if any input field is empty
  
  
  return (
    <>
        <h3 className='text-center' >React Controlled Form</h3>
         <div className='container'>
            <div className='row'>
                <div className='col-sm-6 offset-sm-3'>
                    <div className='border border-3 rounded-3 p-2 m-2'>
                        <form onSubmit={handleSubmit}>
                            <p>
                                
                                <div className="d-flex align-items-center">
                                <label>Name:</label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                
                                {getError('name') && (
                                    <span className="text-danger ms-2 d-flex align-items-center">
                                    <i className="bi bi-exclamation-triangle-fill me-1"></i>
                                    {getError('name')}
                                    </span>
                                )}
                                </div>
                                
                            </p>
                            <p>
                                
                                <div className="d-flex align-items-center mb-3">
                                    <label>Age:</label>
                                    <input
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />

                                    {getError('age') && (
                                        <span className="text-danger ms-2 d-flex align-items-center">
                                        <i className="bi bi-exclamation-triangle-fill me-1"></i>
                                        {getError('age')}
                                        </span>
                                    )}
                                </div>
                            </p>
                            <p>
                                <label>Gender:</label>
                                <input name='gender' type='radio'
                                    value='male' checked={formData.gender === 'male'}
                                    onChange={handleChange} /> Male
                                <input name='gender' type='radio'
                                    value='female' checked={formData.gender === 'female'}
                                    onChange={handleChange} /> female
                            </p>
                            <p>
                                <label>DOB:</label>
                                <input name='dob' type='date'
                                    value={formData.dob} onChange={handleChange} />
                            </p>
                            <p>
                                <label>Interests:</label>
                                <input name='interests' type='checkbox'
                                    value='reading' checked={formData.interests.includes('reading')}
                                    onChange={handleChange} />Reading

                                <input name='interests' type='checkbox'
                                    value='swimimg' checked={formData.interests.includes('swimimg')}
                                    onChange={handleChange} />Swimimg
                            </p>
                            <p>
                                <label>Country:</label>
                                <select name='country' value={formData.country} onChange={handleChange}>
                                    <option value=''>Select a Country</option>
                                    <option value='india'>India</option>
                                    <option value='usa'>USA</option>
                                    <option value='srilanka'>Srilanka</option>
                                    <option value='canada'>Canada</option>
                                    <option value='mexico'>Mexico</option>
                                </select>
                            </p>
                            <p>
                                
                                <div className="d-flex align-items-start mb-3">
                                    <label>Bio:</label>
                                    <textarea
                                        name="bio"
                                        value={formData.bio}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        rows="2"
                                        cols="30"
                                        style={{ width: '60%' }}
                                    />

                                    {getError('bio') && (
                                        <span className="text-danger ms-2 d-flex align-items-center">
                                        <i className="bi bi-exclamation-triangle-fill me-1"></i>
                                        {getError('bio')}
                                        </span>
                                    )}
                                </div>

                            </p>
                            <input type='reset' value='Clear' className='mx-2 btn btn-danger'
                                onClick={handleReset} />
                            <input type='submit' value='Submit' className='btn btn-primary' disabled={!isFormValid} />
                        </form>

                        <pre>
                            {JSON.stringify(formData)}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
