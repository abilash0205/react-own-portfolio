import React from 'react'

const About = () => {
  return (
    <section name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>

            <p className='text-xl mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dignissimos voluptates debitis nemo maxime, aperiam, suscipit dolores laboriosam, obcaecati doloremque pariatur rerum non. Nulla sint omnis distinctio libero eius molestias.</p>

            <br />

            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus amet optio nam expedita facere, officia illo ut quo hic earum enim qui dignissimos delectus quidem, accusamus magni perferendis fuga ipsam!
            </p>
        </div>
    </section>
  )
}

export default About