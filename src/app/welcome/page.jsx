import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import Container from '../components/Container'

function page() {
  return (
    <Container>
      <Navbar />
        <div className="flex-grow">

            <div className='container mx-auto shadow-xl my-10 p-10 rounded-xl'>
                <div className='flex justify-between'>
                    <div>
                        <h3 className='text-3xl'>Profile</h3>
                        <p>Welcome, John Doe</p>
                    </div>
                    <div>
                        <Link className='bg-green-500 text-white border py-2 px-3 rounded-md text-lg my-2' href="/create">
                            Create Post
                        </Link>
                    </div>
                </div>

                {/* User Posts Data */}
                <div>
                    <div className='shadow-xl my-10 p-10 rounded-xl'>
                        <h4 className='text-2xl'>Post Title</h4>
                        <Image 
                            className='my-3 rounded-md' 
                            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww" 
                            width={300} 
                            height={0} 
                        />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat eius adipisci praesentium quia assumenda nam aperiam dicta eaque, sapiente omnis odio quasi exercitationem at doloremque tempore totam ea autem necessitatibus, facere deserunt, ab distinctio magnam possimus rem! Voluptatibus, ipsum sunt.
                        </p>
                        <div className='mt-5'>
                            <Link className='bg-gray-500 text-white border py-2 px-3 rounded-md text-lg my-2' href="/edit">Edit</Link>
                            <Link className='bg-red-500 text-white border py-2 px-3 rounded-md text-lg my-2' href="/delete">Delete</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      <Footer />
    </Container>
  )
}

export default page

