import { useParams } from 'react-router-dom';
import jobsData from '../../data/jobsData';

function Job() {

  const { id } = useParams();

  const data = jobsData.find((item) => item.id === Number(id))

  return (
    <div>
      {data.title}
      {data.company}
      {data.location}
      {data.type}
      {data.experience}
    </div>
  )
}

export default Job
