import React, { useState, useEffect, useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify"; // For notifications
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const RegistrationForm = () => {
    const marathon = useLoaderData();
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;

        const email = form.email.value
        const marathonTitle = form.marathonTitle.value
        const startDate = form.startDate.value
        const firstName = form.firstName.value
        const lastName = form.lastName.value
        const contactNumber = form.contactNumber.value
        const additionalInfo = form.additionalInfo.value

        const marathonRegister = {
            marathonRegister_id : marathon._id,
            email,
            marathonTitle,
            startDate,
            firstName,
            lastName,
            contactNumber,
            additionalInfo,
        }

        

        fetch('http://localhost:3000/marathon-registers', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(marathonRegister)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Registration completed",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  navigate('/dashboard/my-apply-list')
            }
        })
        .catch(error => {
            console.log(error)
        })


    }


    const handleBack = () => {
        navigate(-1)
    }
    
  
  return (
    <div className=" py-16 flex justify-center items-center  bg-orange-200 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-7/12 mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">Register for {marathon.title}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              
              className="w-full px-4 py-2 border rounded-md"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Marathon Title</label>
            <input
              type="text"
              name="marathonTitle"
              value={marathon.marathonTitle}
              className="w-full px-4 py-2 border rounded-md"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Start Date</label>
            <input
              type="text"
              name="startDate"
              value={marathon.marathonStartDate}
              className="w-full px-4 py-2 border rounded-md"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">First Name</label>
            <input
              type="text"
              name="firstName"
              
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Last Name</label>
            <input
              type="text"
              name="lastName"
              
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Contact Number</label>
            <input
              type="number"
              name="contactNumber"
              
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Additional Info </label>
            <textarea
              name="additionalInfo"
              className="w-full px-4 py-2 border rounded-md"
              required
            ></textarea>
          </div>

          <div className="flex justify-start gap-10">
            
            <button
              type="submit"
              className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-700"
            >
              Register
            </button>

            <button
              onClick={handleBack}
              className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-700"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
