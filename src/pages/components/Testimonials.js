const testimonials = [
  {
    name: "Aarav & Meera",
    feedback:
      "Focus Flix beautifully captured every emotion on our wedding day. We couldn’t have asked for a more passionate and professional team.",
  },
  {
    name: "Rahul & Ananya",
    feedback:
      "The pre-wedding shoot felt like a dream. The entire crew made us feel at ease and delivered magical results. Timeless memories!",
  },
  {
    name: "Priya Sharma",
    feedback:
      "From our maternity shoot to our baby’s first birthday — they’ve been with us every step of the way. Their work is truly soulful.",
  },
]

const Testimonials = () => {
  return (
    <div className="w-full px-6 py-16 bg-[#0d0d0d] text-white">
      <div className="max-w-5xl mx-auto text-center">
      <div className='w-full justify-center text-center items-center flex flex-col mt-10'>
        <p className='text-lg text-white'>
          What Our{' '}
          <span className='text-amber-400 font-bold my-class'>Clients</span>{' '}
          Talks About Us
        </p>
        <div className='w-[20%] my-5 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent'></div>
      </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md shadow-lg p-6 flex flex-col items-center hover:shadow-amber-300/30 transition duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xl font-bold mb-4 shadow-md">
                {testimonial.name.split(" ")[0][0]}
              </div>
              <p className="text-sm italic text-gray-200 mb-4">
                “{testimonial.feedback}”
              </p>
              <h4 className="text-base font-semibold text-white">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
