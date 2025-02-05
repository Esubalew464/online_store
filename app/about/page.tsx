import Image from 'next/image'

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            About ShopifyClone
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover our story and commitment to providing quality products.
          </p>
        </div>

        <div className="mt-16 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <p className="text-gray-700">
              At ShopifyClone, our mission is to provide high-quality products at competitive prices while ensuring an exceptional shopping experience for our customers. We believe in the power of e-commerce to connect people with the products they love, and we strive to make that connection as seamless and enjoyable as possible.
            </p>
        
      <Image src="/Capture1.PNG" alt="Capture1" width={200} height={200} />
    
          </div>
        </div>

        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900">Our Team</h2>
          </div>
          <div className="border-t border-gray-200">
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: 'Jane Doe', role: 'CEO', image: '/placeholder.svg?height=200&width=200' },
                  { name: 'John Smith', role: 'CTO', image: '/placeholder.svg?height=200&width=200' },
                  { name: 'Alice Johnson', role: 'Head of Customer Service', image: '/placeholder.svg?height=200&width=200' },
                ].map((member) => (
                  <div key={member.name} className="text-center">
                    <div className="space-y-4">
                      <Image
                        className="mx-auto h-40 w-40 rounded-full"
                        src={member.image}
                        alt={member.name}
                        width={160}
                        height={160}
                      />
                      <div className="space-y-2">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{member.name}</h3>
                          <p className="text-indigo-600">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900">Our Values</h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Customer Satisfaction: We put our customers first in everything we do.</li>
              <li>Quality: We source and offer only the best products to ensure customer satisfaction.</li>
              <li>Integrity: We believe in honest and transparent business practices.</li>
              <li>Innovation: We continuously strive to improve our platform and services.</li>
              <li>Sustainability: We are committed to environmentally friendly practices in our operations.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

