"use client"; // This is a client component 
import db from '../firebase';
import { useState } from 'react';
//import 'firebase/firestore';
import { getFirestore, collection, addDoc} from 'firebase/firestore';


const nftForm = () => {

  const [data, setData] = useState({
    name: '',
    email: '',
    nft: '',
    loan: '',
    duration:''
  });

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'nft'), data);
      console.log('Document written with ID: ', docRef.id);
      setData({
        name: '',
        email: '',
        nft: '',
        loan: '',
        duration:''
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
    
  }

  
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Fill out the form
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                A loan advisor will get in touch with you via email.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="number"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                       NFT Value
                      </label>
                      <input
                        type="text"
                        name="nft"
                        value={data.nft}
                        onChange={handleChange}
                        placeholder="Enter currency symbol & amount"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="text"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Loan Amount
                      </label>
                      <input
                        type="number"
                        name="loan"
                        value={data.loan}
                        onChange={handleChange}
                        placeholder="Enter currency symbol & amount"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                  <div className="mb-8">
                      <label
                        htmlFor="text"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Loan Duration
                      </label>
                      <input
                        type="text"
                        name="duration"
                        value={data.duration}
                        onChange={handleChange}
                        placeholder="Enter currency symbol & amount"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button type="submit" className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Submit                 </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default nftForm;