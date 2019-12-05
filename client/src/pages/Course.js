import React, {useState, useEffect, createContext} from 'react';
import Navbar from '../components/Navbar';

const Course = () => {
  const courseContext = createContext()
  const [myCourses, setMyCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {

  })

  return (
    <div>
      <Navbar landing={false}/>
    </div>
  );
};

export default Course;