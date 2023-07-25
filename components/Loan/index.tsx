"use client"; // This is a client component 
import db from '../firebase';
import React, { useState } from "react";

//import 'firebase/firestore';
import { getFirestore, collection, addDoc} from 'firebase/firestore';


const Loan = () => {
  

  const [data, setData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    address: ''
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
      const docRef = await addDoc(collection(db, 'loan'), data);
      console.log('Document written with ID: ', docRef.id);
      setData({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        address: ''
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
    
    window.location.href = '/verification';
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
                An advisor will get in touch with you via email.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="fname"
                        value={data.fname}
                        onChange={handleChange}
                        placeholder="Enter first name"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor=""
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lname"
                        value={data.lname}
                        onChange={handleChange}
                        placeholder="Enter last name"
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
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        placeholder="Enter email"
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
                        Phone
                      </label>
                      <input
                        type="number"
                        name="phone"
                        value={data.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
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
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Address
                      </label>
                      <textarea
                        name="address"
                        value={data.address}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Enter adress"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                
                    <button type="submit" className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Submit                
                    </button>
                     
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
