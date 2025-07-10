function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;
    photo.title = profileData.name;

    const name = document.getElementById('profile.name');
    name.textContent = profileData.name;

    const job = document.getElementById('profile.job');
    job.textContent = profileData.job;

    const location = document.getElementById('profile.location');
    location.textContent = profileData.location;

    const phone = document.getElementById('profile.phone');
    phone.href = `tel:${profileData.phone}`;
    phone.textContent = profileData.phone;

    const email = document.getElementById('profile.email');
    email.href = `mailto:${profileData.email}`;
    email.textContent = profileData.email;
}

(async () => {
    const profileData = await fetchProfileData();
    //console.log(profileData);

    updateProfileInfo(profileData);
})();