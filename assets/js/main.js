function updateProfile(profileData) {
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

function updateSkillsProfessionals(profileData) {
    const skillsProfessionals = document.getElementById('profile.skills.professionals');

    skillsProfessionals.innerHTML = profileData.skills.professionals.map(skill => 
        `<li>
            <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">
        </li>`
    ).join('');
}

function updateSkillsPersonal(profileData) {
    const skillsPersonal = document.getElementById('profile.skills.personal');

    skillsPersonal.innerHTML = profileData.skills.personal.map(skill => `<li>${skill}</li>`).join('');
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages');

    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio');

    portfolio.innerHTML = profileData.portfolio.map(portfolio => 
        `<li>
            <h3 class="title ${portfolio.github ? 'github' : ''}">${portfolio.name}</h3>
            <a href="${portfolio.url}" target="_blank">
                <span>${portfolio.url}</span>
            </a>
        </li>`
    ).join('');
}

function updateEducation(profileData) {
    const education = document.getElementById('profile.education');

    education.innerHTML = profileData.education.map(education => 
        `<li>
            <h3 class="title">${education.name}</h3>
            <p class="period">${education.period}</p>
            <p>Atividades e grupos: ${education.activities}</p>
        </li>`
    ).join('');
}

function updateExperiences(profileData) {
    const experiences = document.getElementById('profile.experience');

    experiences.innerHTML = profileData.experience.map(experience => 
        `<li>
            <h3 class="title">${experience.name}</h3>
            <p class="period">${experience.period}</p>
            <p>${experience.description}</p>
        </li>`
    ).join('');
}

(async () => {
    const profileData = await fetchProfileData();
    //console.log(profileData);

    updateProfile(profileData);
    updateSkillsProfessionals(profileData);
    updateSkillsPersonal(profileData);
    updateLanguages(profileData);
    updateEducation(profileData);
    updatePortfolio(profileData);
    updateExperiences(profileData);
})();