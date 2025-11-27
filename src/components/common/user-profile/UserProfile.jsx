// import { useQuery } from '@tanstack/react-query';
// import React from 'react'
// import { UserData } from '../../../core/services/api/get-data';

// const UserProfile = () => {
//     const { data: getProfile } = useQuery({
//         queryKey: ["PROFILE"],
//         queryFn: UserData,
//         refetchOnWindowFocus: false,
//         refetchOnmount: false,
//         refetchOnReconnect: false,
//         refetchOnMount:false,
//         refetchInterval:false,
//         refetchIntervalInBackground:false,
//         retry: false,
//       });
//     localStorage.setItem("userData" , getProfile)
// }

// export default UserProfile