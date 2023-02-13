import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { preview } from '../assets'
import { getRandomPrompt } from '../utils'
import { Loader, FormField } from '../components'
import config from '../config'
import { logout } from '../redux/auth/authAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const CreatePost = () => { 
    const navigate = useNavigate();
    const [form, setForm] = useState({
        prompt: '',
        photo: ''
    })
    const { token } = useSelector(data => data);
    const [generatingImg, setGeneratingImg] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const dispatch = useDispatch();

    const generateImage = async () => {
        if(form.prompt){
            try {
                setGeneratingImg(true);
                const response = await axios.post(`${config.API_URL}/api/v1/dalle`, { prompt: form.prompt });
                setForm({
                  ...form,
                  photo: `data:image/jpeg;base64,${response.data.photo}`
                })    
            } catch (err) {
                console.log(err);
                alert(err);
            } finally {
              setGeneratingImg(false);
            }
        }else {
            const notify = () => toast.info('Please enter a prompt!', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            notify();
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if( form.prompt && form.photo ){
            try {
                setLoading(true);

                let response = await axios.post(`${config.API_URL}/api/v1/post`, { ...form }, {
                  headers: {
                    "authorization": `Bearer ${token}`
                  }
                });
                navigate('/');
            } catch (err) {
                console.log(err.response.data.message);
                dispatch(logout());
                
                const notify = () => toast.error(err.response.data.message, {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                notify();
            } finally {
                setLoading(false);
            }
        }else {
            const notify = () => toast.info('Please enter a prompt and generate an image!', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            notify();
        }
        
    }

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name] : e.target.value
        })
    }

    const handleSurpriseMe = (e) => {
        const randomPrompt = getRandomPrompt(form.prompt);
        setForm({
          ...form,
          prompt: randomPrompt
        })
    }

  return (
    <section className="max-w-7xl mx-auto">
      <ToastContainer />
        <div>
            <h1 className="font-extrabold text-[#222328] text-[32px]" >Create</h1>
            <p className="mt-2 text-[#666e75] text-[16px] max-w-[600px]">Create imaginative and visually stunning images through by DALL-E AI and share them with the community</p>
        </div>

        <form className="mt-16 max-w-3xl" onSubmit={ handleSubmit }>
            <div className="flex flex-col gap-5">
                {/* <FormField 
                  LabelName='Your Name'
                  type='text'
                  name='name'
                  placeholder='Aljith KJ'
                  value={form.name}
                  handleChange={ handleChange }
                /> */}
                <FormField 
                  LabelName='Prompt'
                  type='text'
                  name='prompt'
                  placeholder='a painting of a fox in the style of Starry Night'
                  value={form.prompt}
                  handleChange={ handleChange }
                  isSurpriseMe
                  handleSurpriseMe={ handleSurpriseMe }
                />

                <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                  focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center "
                >
                  { form.photo ? (
                    <img src={form.photo} alt={form.prompt} 
                       className="w-full h-full object-contain"
                    />
                  ): (
                    <img src={ preview } alt="preview"  className="w-9/12 h-9/12 object-contain opacity-40"/>
                  )}

                  {generatingImg && (
                    <div className="absolute inset-0 z-0 flex justify-center items-center 
                      bg-black bg-opacity-50 rounded-lg"
                    >
                      <Loader />
                    </div>
                  )}
                </div>
            </div>

            <div className="mt-5 flex gap-5">
                    <button 
                      type="button"
                      onClick={ generateImage }
                      className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto 
                      px-5 py-2.5 text-center"
                    >
                        {generatingImg ? 'Generating' : 'Generate'}
                    </button>
            </div>

            <div className="mt-10">
                  <p className="mt-2 text-[#666e75] text-[14px]">
                    Once you have created the image you want, you can share it with others in the community
                  </p>

                  <button 
                    type="submit"
                    className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto
                    px-5 py-2.5 text-center"
                  >
                    {loading? 'Sharing...': 'Share with the community'}
                  </button>
            </div>
        </form>
    </section>
  )
}

export default CreatePost
