import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Pagination, Stack } from "@mui/material";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [allUsers, setAllUsers] = useState(0);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 4; // Items per page

  
  const { data: user = {}, refetch } = useQuery({
    queryKey: ["users-page", currentPage, limit],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?page=${currentPage}&limit=${limit}`);
      return res.data; 
    },
  });

  // Update state when user data changes
  useEffect(() => {
    if (user?.parPage) {
      setUsers(user.parPage);
      setAllUsers(user.total);
      setTotalPages(Math.ceil(user.total / limit));
    }
  }, [user, limit]);

  // Handle pagination
  const handlePagination = (e, value) => {
    setCurrentPage(value);
  };

  // Handle "Make Admin" action
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: `${user.name} is an Admin now`,
          icon: "success",
          showClass: {
            popup: "animate_animated animatefadeInUp animate_faster",
          },
          hideClass: {
            popup: "animate_animated animatefadeOutDown animate_faster",
          },
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-2xl lg:text-3xl font-bold text-center lora my-4">
        All users: {allUsers}
      </h2>
      {/* Table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* Table Head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Photo</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <img
                      className="w-10 h-10 rounded-xl"
                      src={item.photoURL}
                      alt="photo"
                    />
                  </td>
                  <td>
                    {item.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(item)}
                        className="btn"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div>
          <Stack spacing={2} className="mt-4 lg:mt-8 ml-4 items-center">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePagination}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;