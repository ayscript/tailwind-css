export default function NewsCard() {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden bg-white shadow-md border border-green-200 p-4 transition-all mx-auto my-4">
      <span className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
        Politics
      </span>

      <img
        src="/trump.jpg"
        alt="featured"
        className="w-full h-48 object-cover rounded-xl"
      />

      <h2 className="text-lg font-bold text-gray-900 mt-4 leading-snug">
        Donald Trump Is Planning To Spend His December Holiday In Nigeria With
        His Soldiers
      </h2>

      {/* Excerpt */}
      <p className="text-sm text-gray-600 mt-2 line-clamp-3">
        U.S. President Donald Trump has reportedly arranged to spend his December holiday in Nigeria alongside a selected team of his security personnel. The unexpected trip has stirred curiosity, with many Nigerians wondering what inspired the visit and what diplomatic or personal motives might be behind it. Officials on both sides are yet to confirm the full agenda of the planned stay.
      </p>

      <div className="flex items-center justify-between text-xs text-gray-500 mt-4">
        <span>
          By <span className="font-medium text-green-700">Ayo News</span>
        </span>
        <span>Nov 10, 2025 • 4 min read</span>
      </div>

      <a
        href="#"
        className="inline-block mt-4 text-green-700 font-semibold hover:underline"
      >
        Read more →
      </a>
    </div>
  );
}
