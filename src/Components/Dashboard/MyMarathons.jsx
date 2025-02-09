import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyMarathons = () => {
  const [marathons, setMarathons] = useState([]);
  const [selectedMarathon, setSelectedMarathon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useContext(AuthContext);

  // Fetch user-specific marathons
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://marathon-server.vercel.app/marathons?email=${user.email}`,{
            withCredentials: true
        })
        .then((response) => setMarathons(response.data))
        .catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to fetch registrations!',
            });
        });
    
    



        // axios.get(`https://marathon-server.vercel.app/marathon-registers?email=${user.email}`, {
        //     withCredentials: true
        // })
        // .then(res => {
        //     setRegistrations(res.data);
        //     setFilteredRegistrations(res.data)
        // })

        // .catch(() => {
        //             Swal.fire({
        //                 icon: 'error',
        //                 title: 'Oops...',
        //                 text: 'Failed to fetch registrations!',
        //             });
        //         });




    }
  }, [user]);

  // Handle Delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://marathon-server.vercel.app/marathons/${id}`)
          .then(() => {
            Swal.fire("Deleted!", "Your marathon has been deleted.", "success");
            setMarathons((prev) =>
              prev.filter((marathon) => marathon._id !== id)
            );
          })
          .catch((error) => {
            Swal.fire("Error!", "Failed to delete the marathon.", "error");
            console.error("Error deleting marathon:", error);
          });
      }
    });
  };

  // Handle Update Modal Open
  const handleUpdate = (marathon) => {
    setSelectedMarathon(marathon);
    setIsModalOpen(true);
  };

  // Handle Update Form Submission
  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    const updatedData = {
      marathonTitle: event.target.marathonTitle.value,
      startRegistrationDate: event.target.startRegistrationDate.value,
      endRegistrationDate: event.target.endRegistrationDate.value,
      marathonStartDate: event.target.marathonStartDate.value,
      location: event.target.location.value,
      runningDistance: event.target.runningDistance.value,
      description: event.target.description.value,
      marathonImage: event.target.marathonImage.value,
    };

    axios
      .put(`https://marathon-server.vercel.app/marathons/${selectedMarathon._id}`, updatedData)
      .then(() => {
        Swal.fire("Updated!", "Your marathon has been updated.", "success");
        setMarathons((prev) =>
          prev.map((marathon) =>
            marathon._id === selectedMarathon._id
              ? { ...marathon, ...updatedData }
              : marathon
          )
        );
        setIsModalOpen(false);
      })
      .catch((error) => {
        Swal.fire("Error!", "Failed to update the marathon.", "error");
        console.error("Error updating marathon:", error);
      });
  };

  // Filter marathons by user email
  const filteredMarathons = marathons.filter((marathon) => marathon.email === user?.email);

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">My Marathons</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Location</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMarathons.map((marathon, index) => (
              <tr key={marathon._id}>
                <td>{index + 1}</td>
                <td className="break-words max-w-xs">{marathon.marathonTitle}</td>
                <td className="break-words max-w-xs">{marathon.location}</td>
                <td className="hidden md:table-cell break-words max-w-xs">
                  {marathon.description}
                </td>
                <td>
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <button
                      className="btn btn-sm btn-warning mb-2 sm:mb-0 sm:mr-2"
                      onClick={() => handleUpdate(marathon)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => handleDelete(marathon._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Marathon</h3>
            <form onSubmit={handleUpdateSubmit}>
              <div className="form-control">
                <label className="label">Title</label>
                <input
                  type="text"
                  name="marathonTitle"
                  defaultValue={selectedMarathon.marathonTitle}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">Start Registration Date</label>
                <input
                  type="datetime-local"
                  name="startRegistrationDate"
                  defaultValue={
                    new Date(selectedMarathon.startRegistrationDate)
                      .toISOString()
                      .slice(0, 16)
                  }
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">End Registration Date</label>
                <input
                  type="datetime-local"
                  name="endRegistrationDate"
                  defaultValue={
                    new Date(selectedMarathon.endRegistrationDate)
                      .toISOString()
                      .slice(0, 16)
                  }
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">Marathon Start Date</label>
                <input
                  type="datetime-local"
                  name="marathonStartDate"
                  defaultValue={
                    new Date(selectedMarathon.marathonStartDate)
                      .toISOString()
                      .slice(0, 16)
                  }
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">Location</label>
                <input
                  type="text"
                  name="location"
                  defaultValue={selectedMarathon.location}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">Running Distance</label>
                <input
                  type="text"
                  name="runningDistance"
                  defaultValue={selectedMarathon.runningDistance}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">Description</label>
                <textarea
                  name="description"
                  defaultValue={selectedMarathon.description}
                  className="textarea textarea-bordered"
                  required
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">Marathon Image URL</label>
                <input
                  type="text"
                  name="marathonImage"
                  defaultValue={selectedMarathon.marathonImage}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="modal-action">
                <button type="submit" className="btn btn-success">
                  Save
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setIsModalOpen(false)}
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

export default MyMarathons;
