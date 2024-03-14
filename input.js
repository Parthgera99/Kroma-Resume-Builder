 function collectFormData(event) {

    event.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      profession: document.getElementById('profession').value,
      about: document.getElementById('about').value,
      jobExperience: {
        position: document.getElementById('position').value,
        company: document.getElementById('company').value,
        location: document.getElementById('location').value,
        timePeriod: document.getElementById('timePeriod').value,
        jobDescription: document.getElementById('jobDescription').value
      },
      contact: {
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        website: document.getElementById('website').value
      },
      education: {
        institution: document.getElementById('institution').value,
        degree: document.getElementById('degree').value,
        yearsAttended: document.getElementById('yearsAttended').value
      },
      skills: document.getElementById('skill').value,
      languages: document.getElementById('languages').value,
      hobbies: document.getElementById('hobbies').value,
      references: {
        referenceName: document.getElementById('referenceName').value,
        referenceCompany: document.getElementById('referenceCompany').value,
        referenceEmail: document.getElementById('referenceEmail').value,
        referencePhone: document.getElementById('referencePhone').value
      }
    };

    // Here you would usually send formData to a server or handle it as needed
    console.log(formData); // For demonstration purposes, we'll log it to the console

    // To prevent actual form submission and page reload:

    document.addEventListener('DOMContentLoaded', () => {
        // Attach the event listener to the form's submit event
        document.querySelector('form').addEventListener('submit', collectFormData);
      });
  }

  // This code assumes you have a form element with an onsubmit attribute like so:
  // <form onsubmit="return collectFormData()">
