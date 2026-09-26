import Header from './Header.jsx'
import ProfileCard from './ProfileCard.jsx'
import data from './data/data.js'

function App() {
  return (
    <div className='bg-gray-100 min-h-screen pb-16'>
      <Header />
      <main className='mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 justify-items-center'>      
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
      </main>
    </div>
  )
}

export default App
