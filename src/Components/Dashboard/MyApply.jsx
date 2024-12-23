import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyApply = () => {
    const { user } = useContext(AuthContext);
    const [registrations, setRegistrations] = useState([]);
    const [selectedRegistration, setSelectedRegistration] = useState(null);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/marathon-registers?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => setRegistrations(data))
                .catch(() => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Failed to fetch registrations!',
                    });
                });
        }
    }, [user?.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This action cannot be undone!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/marathon-registers/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', 'Your registration has been deleted.', 'success');
                            setRegistrations((prev) => prev.filter((reg) => reg._id !== id));
                        }
                    })
                    .catch(() => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Failed!',
                            text: 'Failed to delete registration!',
                        });
                    });
            }
        });
    };

    const handleUpdate = (event) => {
        event.preventDefault();

        const form = event.target;
        const updatedData = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            contactNumber: form.contactNumber.value,
            additionalInfo: form.additionalInfo.value,
        };

        fetch(`http://localhost:3000/marathon-registers/${selectedRegistration._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire('Updated!', 'Your registration has been updated.', 'success');
                    setRegistrations((prev) =>
                        prev.map((reg) =>
                            reg._id === selectedRegistration._id
                                ? { ...reg, ...updatedData }
                                : reg
                        )
                    );
                    setSelectedRegistration(null); // Close modal
                }
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Failed!',
                    text: 'Failed to update registration!',
                });
            });
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold text-center mb-4">
                My Applied Marathons ({registrations.length})
            </h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Marathon Title</th>
                            <th>Start Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registrations.map((registration, index) => (
                            <tr key={registration._id}>
                                <td>{index + 1}</td>
                                <td>{registration.marathonTitle}</td>
                                <td>{registration.startDate}</td>
                                <td>
                                    <div className="flex  gap-2">
                                        <button
                                            className="btn text-white btn-sm bg-orange-600"
                                            onClick={() => setSelectedRegistration(registration)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="btn text-white btn-sm bg-red-600"
                                            onClick={() => handleDelete(registration._id)}
                                        >
                                            Delete
                                        </button>
                                        <Link
                                        to={`/marathons/${registration.marathonRegister_id}`}
                                            className="btn text-white btn-sm  bg-orange-600"
                                            
                                        >
                                            See Details
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedRegistration && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-4">Update Registration</h3>
                        <form onSubmit={handleUpdate}>
                            <div className="mb-4">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    defaultValue={selectedRegistration.firstName}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    defaultValue={selectedRegistration.lastName}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="label">
                                    <span className="label-text">Contact Number</span>
                                </label>
                                <input
                                    type="text"
                                    name="contactNumber"
                                    defaultValue={selectedRegistration.contactNumber}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="label">
                                    <span className="label-text">Additional Info</span>
                                </label>
                                <textarea
                                    name="additionalInfo"
                                    defaultValue={selectedRegistration.additionalInfo}
                                    className="textarea textarea-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="modal-action">
                                <button type="submit" className="btn btn-success">
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-error"
                                    onClick={() => setSelectedRegistration(null)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyApply;
