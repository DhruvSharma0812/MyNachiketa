import React, { useState } from 'react'

const Profile = () => {
    const [username, setUsername] = useState("");
  const [profileData, setProfileData] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`https://lichess.org/api/user/${username}`);
      setProfileData(response.data);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <input
        type="text"
        placeholder="Enter Lichess username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchProfile}>Fetch Profile</button>
      {profileData && (
        <div>
          <h3>{profileData.username}</h3>
          <p>Title: {profileData.title || "N/A"}</p>
          <p>Blitz Rating: {profileData.perfs.blitz?.rating || "N/A"}</p>
          <p>Games Played: {profileData.count.all}</p>
        </div>
      )}
    </div>
  )
}

export default Profile
