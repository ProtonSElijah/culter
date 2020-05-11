import React from 'react';
import '../ComponentsStyle/CardView.scss';

const PersonInformationView = ({person}) => {
  const getAge = (birthday) => {
    const birthdayDate = new Date(birthday);
    const ageDifMs = Date.now() - birthdayDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  let age = '';
  if (person.birthday) {
    age = getAge(person.birthday);
  }
  return (

    <div className="Swipe-content-down-container">

      <div className="Swipe-content-down-center user">
        <p>{person.first_name}{age? `, ${age}` : ''}</p>
        <p>Общих событий: <b>{person.count_common_events}</b></p>
      </div>

    </div>
  );
};

export default PersonInformationView;
