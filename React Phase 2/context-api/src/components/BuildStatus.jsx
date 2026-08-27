import { useContext } from 'react'
import { ConfiguratorContext } from '../context/ConfiguratorContext'

function BuildStatus() {
  const { parts } = useContext(ConfiguratorContext);

  return (
    <div className="w-80 h-fit p-5 bg-white border border-gray-200">
      <h2 className="text-lg mb-4">
        Build Status
      </h2>

      <div className="flex flex-col gap-2">
        {parts.map(item => (
          <div
            key={item.id}
            className="px-3 py-2 bg-gray-50 border border-gray-200 text-sm text-gray-700"
          >
            {item.category}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuildStatus;