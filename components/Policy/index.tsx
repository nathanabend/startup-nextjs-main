"use client"; // This is a client component 
import db from '../firebase';
import React, { useState } from "react";



const Policy = () => {
  
  
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
              Data Protection Policy
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
              1. Introduction:
              <br></br>

                This Data Protection Policy outlines the practices and measures implemented by [Your Website Name] to protect the privacy and personal information of its users. We are committed to ensuring the security of user data and complying with relevant data protection laws, including but not limited to the General Data Protection Regulation (GDPR) and any applicable local data protection regulations. This policy aims to assure our users that their information will not be passed on to any third party without explicit consent.
                <br></br>
                2. Data Collection and Usage:
                <br></br>

                a. Personal Information:

                We collect only the minimum necessary personal information required to provide our services to users and improve their experience on the website.
                Users may voluntarily provide certain personal information (e.g., name, email address, contact information) during account creation, subscription sign-up, or when using specific services (e.g., contact forms).
                We may use this personal information to communicate with users, respond to inquiries, provide requested services, and send relevant updates and promotional materials with user consent.
                b. Non-Personal Information:
                <br></br>
                Additionally, we collect non-personal information such as IP addresses, browser types, device information, and anonymous usage statistics. This data is used to analyze trends, administer the website, track user movements, and improve overall user experience.
                <br></br>
                3. Data Storage and Security:
                <br></br>
                a. Data Storage:

                All user data is securely stored on our servers and databases. Access to user data is limited to authorized personnel only and is protected by strong authentication mechanisms.
                Data backups are regularly performed to ensure the continuity of our services and the protection of user information.
                b. Data Security:

                We employ industry-standard security measures to safeguard user data against unauthorized access, alteration, disclosure, or destruction.
                Secure Socket Layer (SSL) encryption is used to protect sensitive data transmission, such as during user login and payment processes.
                We regularly conduct security assessments and audits to identify and address potential vulnerabilities.
                <br></br>
                4. Third-Party Services:
                <br></br>

                a. Third-Party Processors:

                Under no circumstances do we share users data with third-party.
                We carefully select and assess these third-party processors to ensure they meet data protection standards and comply with relevant laws.
                These third-party processors are bound by agreements that prevent them from using user data for any purpose other than providing the requested services.
                <br></br>
                5. Consent and Opt-Out:
                <br></br>

                a. Consent:

                By using our website and services, users consent to the collection, processing, and storage of their personal information as outlined in this policy.
                Users have the right to withdraw their consent at any time. However, this may affect the availability and functionality of certain services.
                b. Opt-Out:

                Users can opt-out of receiving promotional materials or non-essential communications at any time by following the unsubscribe instructions provided in such communications.
                <br></br>
                6. User Rights:
                <br></br>

                a. Access and Rectification:

                Users have the right to access and update their personal information. If you wish to review or modify your information, please contact us using the provided contact details.
                b. Data Deletion:
                
                Users have the right to request the deletion of their personal information from our records, subject to legal obligations and legitimate interests.
                <br></br>
                7. Changes to the Policy:
                <br></br>
                
                a. Policy Updates:

                This Data Protection Policy may be updated from time to time to reflect changes in our data handling practices or legal requirements.
                We will notify users of any significant changes and seek their consent if required by applicable laws.
                <br></br>
                8. Contact Information:
                <br></br>

                If you have any questions, concerns, or requests related to this Data Protection Policy or the use of your personal information, please contact us at [Your Contact Email/Address].

                By using our website, you signify your acceptance of this Data Protection Policy. We encourage users to review this policy regularly to stay informed about how we protect their privacy and personal information.
              </p>

            
              
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policy;
