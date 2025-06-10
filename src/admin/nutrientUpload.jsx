import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
function NutrientsForm() {
  const [formData, setFormData] = useState({
    itemName: '',
    description: '',
    carbohydrates: '',
    proteins: '',
    fats: '',
    fiber: '',
    water: '',
    vitaminA: '',
    vitaminB1: '',
    vitaminB2: '',
    vitaminB3: '',
    vitaminB5: '',
    vitaminB6: '',
    vitaminB7: '',
    vitaminB9: '',
    vitaminB12: '',
    vitaminC: '',
    vitaminD: '',
    vitaminE: '',
    vitaminK: '',
    minerals: '',
    micronutrients: '',
    image:'',
    sideEffects:''
  });

  const handleChange = (e) => {
    // console.log(e)
    const { name, value,files} = e.target;
    // console.log(files[0])
    if(name==='image'){
      if(files && files[0])
      console.log(name)
       
      setFormData(prev => ({
      ...prev,
      [name]:files[0]
    }));
    console.log(formData.image)
    }
    else{
      setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    }
    
  };


  const handleSubmit = (e) => {
  e.preventDefault();

  const payload = new FormData();

  for (let key in formData) {
    if (key === 'image' && formData.image) {
      payload.append('image', formData.image, formData.image.name);
    } else {
      payload.append(key, formData[key]);
    }
  }
 

  axios.post('http://localhost:3333/admin/nutrients-upload/', payload)
    .then((res) => {
      console.log('Upload success:', res.data);
    })
    .catch((err) => {
      console.error('Upload error:', err);
    });
};


  return (
    <div className='container mt-4 mb-5'>
      <h3 className='mb-4 text-center'>Nutrient Information Form</h3>
      <form onSubmit={handleSubmit} encType='multipart/form-data' method='POST'>

        
        <div className='mb-3'>
          <label className='form-label'>Item Name</label>
          <input
            type='text'
            name='itemName'
            className='form-control'
            placeholder='Enter item name'
            value={formData.itemName}
            onChange={handleChange}
            required
          />
        </div>

         
        <div className='mb-3'>
          <label className='form-label'>Description</label>
          <textarea
            name='description'
            className='form-control'
            placeholder='Enter item description'
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        
        <div className='mb-3'>
          <label className='form-label'>Carbohydrates</label>
          <input
            type='text'
            name='carbohydrates'
            className='form-control'
            placeholder='Enter carbohydrates content'
            value={formData.carbohydrates}
            onChange={handleChange}
          />
        </div>

        
        <div className='mb-3'>
          <label className='form-label'>Proteins</label>
          <input
            type='text'
            name='proteins'
            className='form-control'
            placeholder='Enter proteins content'
            value={formData.proteins}
            onChange={handleChange}
          />
        </div>

        
        <div className='mb-3'>
          <label className='form-label'>Fats</label>
          <input
            type='text'
            name='fats'
            className='form-control'
            placeholder='Enter fats content'
            value={formData.fats}
            onChange={handleChange}
          />
        </div>

        
        <div className='mb-3'>
          <label className='form-label'>Fiber</label>
          <input
            type='text'
            name='fiber'
            className='form-control'
            placeholder='Enter fiber content'
            value={formData.fiber}
            onChange={handleChange}
          />
        </div>

        
        <div className='mb-3'>
          <label className='form-label'>Water</label>
          <input
            type='text'
            name='water'
            className='form-control'
            placeholder='Enter water content'
            value={formData.water}
            onChange={handleChange}
          />
        </div>
 
         <hr></hr>

        {[
          ['vitaminA', 'Vitamin A'],
          ['vitaminB1', 'Vitamin B1 (Thiamine)'],
          ['vitaminB2', 'Vitamin B2 (Riboflavin)'],
          ['vitaminB3', 'Vitamin B3 (Niacin)'],
          ['vitaminB5', 'Vitamin B5 (Pantothenic Acid)'],
          ['vitaminB6', 'Vitamin B6 (Pyridoxine)'],
          ['vitaminB7', 'Vitamin B7 (Biotin)'],
          ['vitaminB9', 'Vitamin B9 (Folate)'],
          ['vitaminB12', 'Vitamin B12 (Cobalamin)'],
          ['vitaminC', 'Vitamin C (Ascorbic Acid)'],
          ['vitaminD', 'Vitamin D'],
          ['vitaminE', 'Vitamin E'],
          ['vitaminK', 'Vitamin K'],
        ].map(([name, label]) => (
          <div className='mb-3' key={name}>
            <label className='form-label'>{label}</label>
            <input
              type='text'
              name={name}
              className='form-control'
              placeholder={`Enter amount of ${label}`}
              value={formData[name]}
              onChange={handleChange}
            />
          </div>
        ))}

        <hr></hr>
        <div className='mb-3'>
          <label className='form-label'>Minerals</label>
          <input
            type='text'
            name='minerals'
            className='form-control'
            placeholder='Enter minerals content'
            value={formData.minerals}
            onChange={handleChange}
          />
        </div>

        
        <div className='mb-3'>
          <label className='form-label'>Micronutrients</label>
          <input
            type='text'
            name='micronutrients'
            className='form-control'
            placeholder='Enter micronutrients content'
            value={formData.micronutrients}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Side Effects</label>
          <input
            type='text'
            name='sideEffects'
            className='form-control'
            placeholder='Enter Side Effects content'
            value={formData.sideEffects}
            onChange={handleChange}
          />
        </div>
        
        <div className='mb-3'>
          <label className='form-label'>Upload Image</label>
          <input
            type='file'
            className='form-control'
             name='image'
            onChange={handleChange}
          />
        </div>
        {/* {formData.image && (
          <div className='mb-3 '>
            <label className='form-label'>Image Preview</label>
            <br />
            <img
              src={formData.image}
              alt='Preview'
              style={{ maxWidth: '100px', maxHeight: '100px', borderRadius: '8px' }}
            />
          </div>
        )} */}
        <button type='submit' className='btn btn-primary w-100'>Submit</button>
      </form>
    </div>
  );
}

export default NutrientsForm;
