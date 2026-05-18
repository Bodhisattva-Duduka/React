import Header from './Header.jsx'
import ProfileCard from './ProfileCard.jsx'
import data from './data/data.js'

function App() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header />
      <div className='mt-6 flex justify-center'>
        <div className='w-4/5 flex gap-6'>      
          {data.map((item, index) => (
            <ProfileCard
              key={index}
              picture={item.picture}
              name={item.name}
              role={item.role}
              description={item.description}
              techstack={item.techstack}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
